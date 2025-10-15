import { iNgxFormGroup, NgxFormControl } from "./ngx-form-group.interface";
import { iNgxFormStyle, NgxFormStyle } from "./ngx-form-style.interface";

export interface iNgxForm {
    formGroup: iNgxFormGroup[];
    style: iNgxFormStyle;
}

export interface NgxDynamicForm {
    formGroup: NgxFormControl[];
    style: NgxFormStyle;
}