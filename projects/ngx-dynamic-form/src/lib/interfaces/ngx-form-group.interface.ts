export interface iNgxFormGroup {
    formControlName: string;
    fieldType: 'input' | 'dropdown' | 'multiselect' | 'autocomplete' | 'textarea' | 'date' | 'dateRange';
    inputType?: 'text' | 'number' | 'password';
    label: string;
    placeholder: string;
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
}


interface iFormValidation {
    pattern: RegExp | string;
    patternName: string;
    message: string;
}
