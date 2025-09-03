import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { from, map, Observable } from 'rxjs';
import { iNgxForm, SampleForm, iNgxFormGroup, validateFile, humanFileSize, ScriptLoaderService } from 'ngx-dynamic-form';

declare const $: any;

@Component({
  selector: 'ngx-dynamic-form-bootstrap',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './ngx-dynamic-form-bootstrap.html',
  styleUrl: './ngx-dynamic-form-bootstrap.scss'
})
export class NgxDynamicFormBootstrap implements AfterViewInit, OnChanges {

  @ViewChild('multiSelect') public selectRef!: ElementRef;

  @Input() public form!: iNgxForm;
  public dynamicFormGroup: FormGroup = new FormGroup({});
  public filesToUpload: any[] = [];

  // verify
  public formDetails!: iNgxForm;

  constructor(private scriptLoader: ScriptLoaderService) { }

  public async ngAfterViewInit(): Promise<void> {

    await this.scriptLoader.loadScripts([
      'https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js',
      'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
      'https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js',
    ]);


    // Fix Popper__namespace
    (window as any).Popper__namespace = (window as any).Popper;

    setTimeout(() => {

      if (this.selectRef && this.selectRef.nativeElement) {
        $(this.selectRef.nativeElement).selectpicker({
          liveSearch: true,
          actionsBox: true,
          selectedTextFormat: 'count > 3',
        });

      }

    }, 10);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'] && this.form) {
      if (this.form.formGroup) {
        this.initForm(this.form.formGroup);
        this.formDetails = this.form;
      } else {
        console.warn('Please provide valid form group');
      }
    }
  }

  private initForm(formGroup: iNgxFormGroup[]) {
    if (!formGroup || !Array.isArray(formGroup)) {
      console.error('Invalid formGroup:', formGroup);
      return;
    }

    const group: { [key: string]: FormControl } = {};

    formGroup.forEach(form => {
      group[form.formControlName] = new FormControl(
        { value: form.value ?? '', disabled: !!form.disabled },
        this.getValidators(form)
      );
    });

    this.dynamicFormGroup = new FormGroup(group);
  }

  private getValidators(form: iNgxFormGroup) {
    const validators: ValidatorFn[] = [];

    if (form.required) validators.push(Validators.required);

    if (form.validation?.pattern) {
      validators.push(this.regexValidator(new RegExp(form.validation.pattern), { [form.validation.patternName]: form.validation.message }));
    }

    return validators;
  }

  // throw a error whether form field is valid or invalid
  public hasError = (controlName: string, errorName: string) => {
    return this.dynamicFormGroup.controls[controlName].hasError(errorName);
  }

  public onInputChange(event: any, name: string, index: number): void {
    if (this.formDetails) this.formDetails.formGroup[index].value = event.target.value;
  }

  public onSelectionChange(event: any): void {
    console.log('selected values', event.value);
  }

  private regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  // on file select or change
  public onFileChange(event: any, index: number): void {
    const files: FileList = event.target.files;

    const file = from(files).pipe(
      map((file: File) => {
        if (validateFile(file.name, this.formDetails.formGroup[index].fileTypeValidation?.allowedType)) return file;
        throw new Error('Not a valid file');
      })
    );

    file.subscribe({
      next: (fileDetails: File) => {
        const maxSize: number | undefined = this.formDetails.formGroup[index].fileTypeValidation?.maxFileSize;
        if (maxSize) {
          maxSize > fileDetails.size ? this.addFile(fileDetails, this.formDetails.formGroup[index].multipleFile) : console.log('large file size');
        } else {
          this.addFile(fileDetails, this.formDetails.formGroup[index].multipleFile);
        }
      },
      error: (err: any) => {
        console.log('error', err);
      }
    });
  }

  // adding the file to the bucket
  private addFile(file: File, multiple?: boolean) {
    if (multiple) {
      this.filesToUpload.push({
        file: file,
        fileName: file.name,
        fileSize: humanFileSize(file.size),
        fileType: file.type
      });
    } else {
      this.filesToUpload = [];
      this.filesToUpload.push({
        file: file,
        fileName: file.name,
        fileSize: humanFileSize(file.size),
        fileType: file.type
      });
    }
  }

  // on file delete 
  public deleteFile(index: number): void {
    this.filesToUpload.splice(index, 1);
  }

  public submit(): void {
    let form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    console.log('form', form, this.dynamicFormGroup.value);
    form.classList.add('was-validated');
  }

  private loadScript(): Promise<boolean> {
    const url: string[] = ['https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js'];
    return new Promise((resolve) => {
      url.forEach((libSoruce: string) => {
        let node = document.createElement('script');
        node.src = libSoruce;
        node.type = 'text/javascript';
        node.async = true;
        document.getElementsByTagName('head')[0].appendChild(node);
        url.shift();

        if (url && url.length === 0) return resolve(true);

      });
    });
  }

}
