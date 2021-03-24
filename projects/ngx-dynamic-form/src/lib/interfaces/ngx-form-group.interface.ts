export interface iNgxFormGroup {
    formControlName: string;
    fieldType: 'input' | 'select' | 'multiselect' | 'autocomplete' | 'textarea' | 'date' | 'dateRange';
    inputType?: 'text' | 'number' | 'password';
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
}


interface iFormValidation {
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