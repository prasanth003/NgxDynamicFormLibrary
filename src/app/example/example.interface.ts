import { iNgxForm } from "ngx-dynamic-form";

export interface iExample {
    name: string;
    description: string;
    form: iNgxForm;
    formType: 'bootstrap' | 'material' | 'ant-design';
}