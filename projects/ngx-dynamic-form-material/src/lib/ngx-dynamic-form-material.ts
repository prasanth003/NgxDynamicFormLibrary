import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormChangeEvent, FormEngineService, NgxDynamicForm } from '@ngx-dynamic-form/ngx-dynamic-form';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatAutocompleteModule
  ],
  templateUrl: './ngx-dynamic-form-material.html',
  styleUrl: './ngx-dynamic-form-material.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDynamicFormMaterial implements OnChanges, OnDestroy {

  @Input() public form!: NgxDynamicForm;
  @Output() public formChange: EventEmitter<DynamicFormChangeEvent> = new EventEmitter();

  public formGroup: FormGroup = new FormGroup({});

  constructor(
    private engine: FormEngineService
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {

    if (changes['form'] && this.form) {
      if (this.form.formGroup) {
        this.formGroup = this.engine.buildFormGroup(this.form.formGroup);
        this.formGroup.valueChanges.subscribe((val: any) => {
          this.formChange.emit({
            raw: this.formGroup,
            json: val,
            status: this.formGroup.status
          });
        });
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
