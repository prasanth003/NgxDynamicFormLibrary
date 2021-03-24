import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SampleForm } from 'src/app/sample.form';
import { iNgxFormGroup } from './interfaces/ngx-form-group.interface';
import { iNgxForm } from './interfaces/ngx-form.interface';
declare var $: any;

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './ngx-dynamic-form.component.html',
  styleUrls: ['./ngx-dynamic-form.component.scss']
})
export class NgxDynamicFormComponent implements AfterViewInit {

  @Input() form$: Observable<iNgxForm> = new Observable();
  public dynamicFormGroup: FormGroup = new FormGroup({});
  public formDetails: iNgxForm = SampleForm;

  constructor() { }

  public ngAfterViewInit(): void {
    this.form$.subscribe((form: iNgxForm) => { 
      form.formGroup ? this.initForm(form.formGroup) : console.log('Please provide valid form group');
      this.formDetails = form;
    });
  
  }

   // initalising the form with basic validator
   private initForm(formGroup: iNgxFormGroup[]) {
    
    const group: any = {};
    
    formGroup.forEach(
      (form: iNgxFormGroup) => {
          group[form.formControlName] = 
            new FormControl(
              { value: form.value ? form.value: '', disabled: form.disabled }, 
              [ 
                form.required ? Validators.required : Validators.nullValidator,
                this.regexValidator(new RegExp(form.validation.pattern), { [form.validation.patternName] : form.validation.message })
              ]
            );
    });

    this.dynamicFormGroup = new FormGroup(group);
  }

  private regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null: error;
    };
  }

  // throw a error whether form field is valid or invalid
  public hasError = (controlName: string, errorName: string) => {
    return this.dynamicFormGroup.controls[controlName].hasError(errorName);
  }

  public onInputChange(event: any, name: string, index: number): void {
    this.formDetails.formGroup[index].value = event.target.value;
  }

  public submit(): void {
    console.log('works');
    let form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    console.log('form', form);
    form.classList.add('was-validated');
  }

}
