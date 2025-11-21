import { input } from "@angular/core";
import { FormGroup } from "@angular/forms";

export type NgxFormFieldType =
    | 'input'
    | 'select'
    | 'textarea'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'date'
    | 'dateRange'
    | 'autocomplete'
    | 'color'
    | 'range'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'tel'
    | 'url'
    | 'email'
    | 'search'
    | 'switch'
    | 'slider'
    | 'editor'
    | 'custom';

export type NgxInputType =
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
    | 'range'
    | 'hidden';

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
    customTemplate?: any; // TemplateRef<any>
    multipleFile?: boolean;
    fileTypeValidation?: {
        allowedType?: string[];
        maxFileSize?: number;
    };
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

export interface DynamicFormChangeEvent<T = any> {
    raw: FormGroup;
    json: T;
    status: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';
}