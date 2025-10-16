import { NgxFormControl } from "./ngx-form-group.interface";
import { NgxFormStyle } from "./ngx-form-style.interface";

export interface NgxDynamicForm {
    formGroup: NgxFormControl[];
    style: NgxFormStyle;
}