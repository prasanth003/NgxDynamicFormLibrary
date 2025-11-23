import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ChangeDetectionStrategy, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormChangeEvent, FormEngineService, NgxDynamicForm, ScriptLoaderService } from '@ngx-dynamic-form/ngx-dynamic-form';

declare const $: any;

@Component({
  selector: 'ngx-dynamic-form-bootstrap',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './ngx-dynamic-form-bootstrap.html',
  styleUrl: './ngx-dynamic-form-bootstrap.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDynamicFormBootstrap implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('multiSelect') public selectRef!: ElementRef;

  @Input() public form!: NgxDynamicForm;

  @Output() public customSubmit: EventEmitter<any> = new EventEmitter();
  @Output() public formChange: EventEmitter<DynamicFormChangeEvent> = new EventEmitter();
  @Output() public valueChange: EventEmitter<any> = new EventEmitter();

  public formGroup: FormGroup = new FormGroup({});
  public filesToUpload: any[] = [];

  // verify
  // public formDetails!: NgxDynamicForm;

  constructor(
    private scriptLoader: ScriptLoaderService,
    private engine: FormEngineService
  ) { }

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
        this.formGroup = this.engine.buildFormGroup(this.form.formGroup);
      } else {
        console.warn('Please provide valid form group');
      }
    }
  }

  // throw a error whether form field is valid or invalid
  public hasError = (controlName: string, errorName: string) => {
    return this.engine.hasError(this.formGroup, controlName, errorName);
  }

  public isTouched = (controlName: string): boolean => {
    return this.engine.isTouched(this.formGroup, controlName);
  }

  public onInputChange(event: any, name: string, index: number): void {
    this.valueChange.emit({
      name,
      value: event.target.value,
      index
    });
    this.formChange.emit({
      raw: this.formGroup,
      json: this.formGroup.value,
      status: this.formGroup.status
    });
  }

  public onSelectionChange(event: any): void {
    this.valueChange.emit(event);
    this.formChange.emit({
      raw: this.formGroup,
      json: this.formGroup.value,
      status: this.formGroup.status
    });
  }


  // on file select or change
  public onFileChange(event: any, index: number, field: any): void {
    this.filesToUpload = this.engine.handleFileSelection(event, field, this.filesToUpload);
    this.formChange.emit({
      raw: this.formGroup,
      json: this.formGroup.value,
      status: this.formGroup.status
    });
  }

  // on file delete 
  public deleteFile(index: number): void {
    this.filesToUpload.splice(index, 1);
  }

  public submit(): void {
    let form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    form.classList.add('was-validated');
    if (this.formGroup.valid) {
      this.customSubmit.emit(this.formGroup.value);
    }
  }

  public ngOnDestroy(): void {
    this.formGroup.reset();
  }

}
