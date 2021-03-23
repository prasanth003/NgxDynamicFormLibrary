import { iNgxForm } from "projects/ngx-dynamic-form/src/lib/interfaces/ngx-form.interface";

export const SampleForm: iNgxForm = {
    formGroup: [
        {
            disabled: false,
            fieldType: 'input',
            formControlName: 'name',
            label: 'First Name',
            placeholder: 'Enter your first name.',
            required: true,
            validation: {message: '', pattern: '', patternName: ''},
            column: 6,
            maxLength: 15,
            displayMaxLength: true
        },
        {
            disabled: false,
            fieldType: 'input',
            formControlName: 'name',
            label: 'Last Name',
            placeholder: 'Enter your last name.',
            required: false,
            validation: {message: '', pattern: '', patternName: ''},
            column: 6
        },
        {
            disabled: false,
            fieldType: 'input',
            formControlName: 'email',
            inputType: 'text',
            label: 'Email ID',
            placeholder: 'Enter your email id',
            required: true,
            validation: {message: 'Email Id is not valid.', pattern: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$', patternName: 'email'},
            column: 6,
            hint: 'Outlook email is not acceptable.'
        }
    ],
    style: {
        formStyle: 'bootstrap',
        buttonStyle: {
            buttonName: 'Save',
            class: 'btn-primary'
        }
    }
}