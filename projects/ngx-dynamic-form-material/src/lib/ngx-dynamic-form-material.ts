import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEngineService, NgxDynamicForm, NgxFormControl } from 'ngx-dynamic-form';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngx-dynamic-form-material',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './ngx-dynamic-form-material.html',
  styleUrl: './ngx-dynamic-form-material.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDynamicFormMaterial implements OnChanges, OnDestroy {

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

  public hasError = (controlName: string, errorName: string) => {
    return this.engine.hasError(this.formGroup, controlName, errorName);
  }

  public isTouched = (controlName: string): boolean => {
    return this.engine.isTouched(this.formGroup, controlName);
  }

  public submit(): void {

  }

  public ngOnDestroy(): void {
    this.formGroup.reset();
  }

}
