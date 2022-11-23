import { iNgxForm } from "projects/ngx-dynamic-form/src/lib/interfaces/ngx-form.interface";
import { Observable, Subject } from "rxjs";

export interface iExample {
    name: string;
    description: string;
    form: iNgxForm;
}