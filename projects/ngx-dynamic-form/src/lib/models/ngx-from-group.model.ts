import { iNgxFormStyle } from "../interfaces/ngx-form-style.interface";
import { iNgxForm } from "../interfaces/ngx-form.interface";

export class NgxFormGroup {
    
    public formGroup: iNgxForm[];
    public formStyle: iNgxFormStyle;
    
    constructor(formGroup: iNgxForm[], style: iNgxFormStyle) {
        this.formGroup = formGroup;
        this.formStyle = style;
    }
}