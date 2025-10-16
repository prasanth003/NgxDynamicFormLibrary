import { Component, EventEmitter, Input, OnChanges, Output, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgxDynamicForm, FormEngineService, NgxFormControl, NgxFormOptions } from 'ngx-dynamic-form';
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
import { NzCheckboxModule, NzCheckboxOption } from 'ng-zorro-antd/checkbox';

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
    NzGridModule,
    NzCheckboxModule
  ],
  templateUrl: './ngx-dynamic-form-antd.html',
  styleUrl: './ngx-dynamic-form-antd.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDynamicFormAntd implements OnChanges, OnDestroy {

  @Input()  public form!: NgxDynamicForm;

  public formGroup: FormGroup = new FormGroup({});

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

  public getErrorState(field: NgxFormControl): boolean {

    for (const validation of field.validations || []) {
      if (this.isTouched(field.formControlName) && this.hasError(field.formControlName, validation.name)) {
        return true;
      }
    }

    return false;

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.engine.hasError(this.formGroup, controlName, errorName);
  }

  public isTouched = (controlName: string): boolean => {
    return this.engine.isTouched(this.formGroup, controlName);
  }

  public getCheckboxOptions(options: NgxFormOptions[] = []): NzCheckboxOption[] {
    return options?.map(option => ({
      label: option.key,
      value: option.value,
      disabled: option.disabled
    })) ?? [];
  }

  public submit(): void {
  
  }

  public ngOnDestroy(): void {
    this.formGroup.reset();
  }

}
