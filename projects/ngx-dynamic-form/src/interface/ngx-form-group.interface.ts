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

export type ValidationType = 'required' | 'pattern' | 'min' | 'max' | 'minLength' | 'maxLength' | 'custom';

export interface NgxFormControl {
    formControlName: string;
    label: string;
    fieldType: NgxFormFieldType;
    inputType?: NgxInputType;
    placeholder?: string;
    value?: any;
    disabled?: boolean;
    required?: boolean;
    validations?: NgxFormValidation[];
    options?: NgxFormOptions[];
    maxLengthOption?: NgxMaxLengthOption;
    column?: number;
    hint?: string;
    prefix?: string;
    suffix?: string;
    customClass?: string;
}

export interface NgxFormOptions {
    key: string;
    value: number | string | unknown;
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

export interface iNgxFormGroup {
    formControlName: string;
    fieldType: 'input' | 'select' | 'multiselect' | 'autocomplete' | 'textarea' | 'date' | 'dateRange' | 'checkbox' | 'radioButton' | 'file';
    inputType?: 'text' | 'number' | 'password';
    // appearance?: MatFormFieldAppearance; 
    label: string;
    placeholder?: string;
    value?: string | any;
    disabled: boolean;
    required: boolean;
    requiredErrorMessage?: string;
    validation: iFormValidation;
    customClass?: string;
    column: number;
    hint?: string;
    prefix?: string;
    suffix?: string;
    maxLength?: number;
    displayMaxLength?: boolean;
    options?: iFormOptions[];
    checkBox?: iCheckboxs;
    radioButtons?: iCheckboxs;
    autoComplete?: boolean;
    fileTypeValidation?: iFileValidation;
    multipleFile?: boolean;
    inputSize?: 'small' | 'medium' | 'large';
    minDate?: Date;
    minRange?: number;
    maxRange?: number;
    maxTagCount?: number;
    radioStyle?: 'modern' | 'default';
    disabledDate?: Date;
}


export interface iFormValidation {
    pattern: RegExp | string;
    patternName: string;
    message: string;
}

export interface iFormOptions {
    displayValue: string;
    value: string;
    image?: string;
    disabled?: boolean;
    selected?: boolean;
}

export interface iCheckboxs {
    style: 'inline' | 'stacked';
    options: iCheckboxOptions[];
}

export interface iCheckboxOptions {
    checkboxValue: string;
    disabled: boolean;
    selected?: boolean;
}

export interface FileToUpload {
    fileName: string;
    fileSize: string;
    fileType: string;
    file: any;
}

export interface iFileValidation {
    allowedType: string;
    maxFileSize?: number;
    errorMessage?: string;
}