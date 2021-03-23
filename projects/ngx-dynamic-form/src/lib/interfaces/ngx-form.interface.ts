import { iNgxFormGroup } from "./ngx-form-group.interface";
import { iNgxFormStyle } from "./ngx-form-style.interface";

export interface iNgxForm {
    formGroup: iNgxFormGroup[];
    style: iNgxFormStyle;
}