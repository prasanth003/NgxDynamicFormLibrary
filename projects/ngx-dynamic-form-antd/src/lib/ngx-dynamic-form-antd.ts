import { Component, EventEmitter, Input, OnChanges, Output, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { iNgxFormGroup, FileToUpload, iFormOptions, NgxDynamicForm, FormEngineService } from 'ngx-dynamic-form';
import { differenceInCalendarDays } from 'date-fns';
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
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  styleUrl: './ngx-dynamic-form-antd.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDynamicFormAntd implements OnChanges, OnDestroy {

  @Input()  public form!: NgxDynamicForm;

  @Output() public response: EventEmitter<any> = new EventEmitter();
  @Output() fieldChange: EventEmitter<any> = new EventEmitter();
  @Output() inputChangeEvent: EventEmitter<{ values: any, formGroup: NgxDynamicForm }> = new EventEmitter();
  @Output() onFileDelete: EventEmitter<FileToUpload> = new EventEmitter();

  public formGroup: FormGroup = new FormGroup({});


  // public previousValues: iFormOptions[] = [];

  public time: Date | null = null;

  public disabledDate: any;

  constructor (
    private engine: FormEngineService
  ) {}

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
    // this.formDetails.formGroup[index].value = event.target.value;
    // this.fieldChange.emit({
    //   key: name,
    //   value: event.target.value
    // });
  }

  public onSelectionChange(event: any, key: string): void {
    this.fieldChange.emit({
      key: key,
      value: event
    });
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
    // this.dynamicFormGroup?.get(field)?.patchValue(event);
    // this.fieldChange.emit({
    //   key: field,
    //   value: event
    // })
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
    // const form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    // form.classList.add('was-validated');

    // const fileFields = this.formDetails?.formGroup?.filter(group => group?.fieldType === 'file') || [];

    // if (fileFields.length > 0) {
    //   fileFields.forEach((field: iNgxFormGroup) => {
    //     // if (field?.fileToUpload && field?.fileToUpload.length > 0) {
    //     //   this.dynamicFormGroup.get(field?.formControlName)?.setValue(field?.fileToUpload);
    //     // }
    //   });
    // }

    // this.response.emit({
    //   form: this.dynamicFormGroup,
    //   valid: this.dynamicFormGroup.valid,
    //   values: this.dynamicFormGroup.getRawValue(),
    //   formValue: this.dynamicFormGroup.value
    // });
  }

  public ngOnDestroy(): void {
    // this.dynamicFormGroup.reset();
    // this.disabledDate = null;
  }

}
