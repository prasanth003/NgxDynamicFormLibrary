import { NgxDynamicForm } from "@ngx-dynamic-form/ngx-dynamic-form";

export interface iExample {
    name: string;
    description: string;
    form: NgxDynamicForm;
    formType: 'bootstrap' | 'material' | 'antd';
}