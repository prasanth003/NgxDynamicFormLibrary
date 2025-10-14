import { Component, EventEmitter, Input, OnChanges, Output, OnDestroy, SimpleChanges } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { iNgxForm, iNgxFormGroup, validateFile, humanFileSize, FileToUpload, iFormOptions } from 'ngx-dynamic-form';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns';
import { from, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'ngx-dynamic-form-antd',
  imports: [
    NzButtonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzMentionModule,
    NzRadioModule,
    NzSelectModule,
    NzSwitchModule,
    NzTimePickerModule,
    NzUploadModule,
    NzGridModule
  ],
  templateUrl: './ngx-dynamic-form-antd.html',
  styleUrl: './ngx-dynamic-form-antd.scss'
})
export class NgxDynamicFormAntd implements OnChanges, OnDestroy {

  @Input()  public form!: iNgxForm;
  @Output() public response: EventEmitter<any> = new EventEmitter();
  @Output() fieldChange: EventEmitter<any> = new EventEmitter();
  @Output() inputChangeEvent: EventEmitter<{ values: any, formGroup: iNgxFormGroup }> = new EventEmitter();
  @Output() onFileDelete: EventEmitter<FileToUpload> = new EventEmitter();

  public dynamicFormGroup: FormGroup = new FormGroup({});
  
  public formDetails!: iNgxForm;

  public previousValues: iFormOptions[] = [];

  public time: Date | null = null;

  public disabledDate: any;

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

  // initalising the form with basic validator
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

      // if (form.disableDate && form.fieldType === 'date') {
      //       this.setMinDate(form.disableDate);
      //     }
    });

    this.dynamicFormGroup = new FormGroup(group);

    this.dynamicFormGroup.valueChanges.subscribe((changes: any) => {
      // this.inputChangeEvent.emit({
      //   values: changes,
      //   formGroup: this.dynamicFormGroup
      // });
    });

  }

  private getValidators(form: iNgxFormGroup) {
    const validators: ValidatorFn[] = [];

    if (form.required) validators.push(Validators.required);

    if (form.validation?.pattern) {
      validators.push(this.regexValidator(new RegExp(form.validation.pattern), { [form.validation.patternName]: form.validation.message }));
    }

    return validators;
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

  // throw a error whether form field is valid or invalid
  public hasError = (controlName: string, errorName: string) => {
    return this.dynamicFormGroup.controls[controlName].hasError(errorName);
  }

  private setMinDate(date: Date): void {
    this.disabledDate = (current: Date): boolean => differenceInCalendarDays(current, date) < 0;
  }

  public onCheckBoxChanges(event: any, key: string) {
    this.fieldChange.emit({
      key: key,
      value: event
    });
  }

  public onDatePickerChange(event: any, key: string) {
    this.fieldChange.emit({
      key: key,
      value: event
    });
  }

  public onInputChange(event: any, name: string, index: number): void {
    this.formDetails.formGroup[index].value = event.target.value;
    this.fieldChange.emit({
      key: name,
      value: event.target.value
    });
  }

  public onSelectionChange(event: any, key: string): void {
    this.fieldChange.emit({
      key: key,
      value: event
    });
  }

  // on file select or change
  public onFileChange(event: any, index: number): void {
    const files: FileList = event.target.files;

    const file = from(files).pipe(
      map((file: File) => {
        if (validateFile(file.name, this.formDetails.formGroup[index].fileTypeValidation?.allowedType)) return file;
        // this.utilService.showToaster('error', 'Please upload valid file');
        throw new Error('Not a valid file');
      })
    );

    file.subscribe({
      next: (fileDetails: File) => {

        if (fileDetails) {
          const maxSize: number | undefined = this.formDetails.formGroup[index].fileTypeValidation?.maxFileSize;
          if (maxSize) {
            maxSize > fileDetails.size ? this.addFile(fileDetails, index, event, this.formDetails.formGroup[index]) : console.warn('error', 'Please upload less than ' + humanFileSize(maxSize) + ' file size.');
          } else {
            this.addFile(fileDetails, index, event, this.formDetails.formGroup[index]);
          }
        } else {
          // this.utilService.showToaster('error', 'Please upload valid file.');
        }
      },
      error: (err: any) => {
        console.log('error', err);
      }
    });
  }

  // adding the file to the bucket
  private addFile(file: File, index: number, event: any, field?: iNgxFormGroup): void {

    // fileToBase64(event.target.files[0]).then((res: any) => {
    //   if (res) {

    //     if (!field?.fileToUpload || typeof field?.fileToUpload === 'undefined') {
    //       field.fileToUpload = [];
    //     }

    //     if (field?.multipleFile) field.fileToUpload = field?.fileToUpload ? field?.fileToUpload : [];
    //     else field.fileToUpload = [];

    //     field.fileToUpload.push({
    //       key: this.formDetails.formGroup[index].formControlName,
    //       file: event.target.files[0],
    //       fileName: file.name,
    //       fileSize: humanFileSize(file.size),
    //       fileType: file.type,
    //       base64: res
    //     });

    //     this.formDetails.formGroup[index].value = field.fileToUpload;
    //   }
    // });

  }

  // on file delete
  public deleteFile(index: number, field: iNgxFormGroup): void {
    // this.onFileDelete.emit(field?.fileToUpload?.[index]);
    // field?.fileToUpload?.splice(index, 1);
    // this.formDetails.formGroup[index].value = field?.fileToUpload;
  }

  public onRadioChange(event: any, key: string): void {
    this.fieldChange.emit({
      key: key,
      value: event
    });
  }

  public onSwitchChange(event: any, key: string): void {
    this.fieldChange.emit({
      key: key,
      value: event
    })
  }

  public onTimePickerChange(event: Date, field: string): void {
    this.dynamicFormGroup?.get(field)?.patchValue(event);
    this.fieldChange.emit({
      key: field,
      value: event
    })
  }

  /**
   * When the checkbox of the hint changes
   * @param event checkbox event
   * @param field Field of the checkbox
  */
  public onHintCheckBoxChange(event: any, field: string): void {
    this.fieldChange.emit({
      key: field,
      value: event
    });
  }


  public submit(): void {
    const form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    form.classList.add('was-validated');

    const fileFields = this.formDetails?.formGroup?.filter(group => group?.fieldType === 'file') || [];

    if (fileFields.length > 0) {
      fileFields.forEach((field: iNgxFormGroup) => {
        // if (field?.fileToUpload && field?.fileToUpload.length > 0) {
        //   this.dynamicFormGroup.get(field?.formControlName)?.setValue(field?.fileToUpload);
        // }
      });
    }

    this.response.emit({
      form: this.dynamicFormGroup,
      valid: this.dynamicFormGroup.valid,
      values: this.dynamicFormGroup.getRawValue(),
      formValue: this.dynamicFormGroup.value
    });
  }

  public ngOnDestroy(): void {
    this.dynamicFormGroup.reset();
    this.disabledDate = null;
  }

}
