import { input } from "@angular/core";

export type NgxFormFieldType =
  | 'input'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'date'
  | 'dateRange'
  | 'autocomplete';

export type NgxInputType = 'text' | 'number' | 'password';

export type ValidationType = 
    | 'required' 
    | 'pattern' 
    | 'min' 
    | 'max' 
    | 'minLength' 
    | 'maxLength' 
    | 'custom';

export interface NgxFormControl {
    formControlName: string;
    label: string;
    fieldType: NgxFormFieldType;
    column: number;
    inputType?: NgxInputType;
    placeholder?: string;
    value?: any;
    disabled?: boolean;
    required?: boolean;
    validations?: NgxFormValidation[];
    options?: NgxFormOptions[];
    maxLengthOption?: NgxMaxLengthOption;
    hint?: string;
    prefix?: string;
    suffix?: string;
    customClass?: string;
}

export interface NgxFormOptions {
    key: string;
    value: number | string | any;
    disabled?: boolean;
    selected?: boolean;
}

export interface NgxMaxLengthOption {
    show?: boolean;
    length: number;
}

export interface NgxFormValidation {
    type: ValidationType;
    pattern?: RegExp | string;
    value?: number;
    name: ValidationType | string;
    message: string;
}