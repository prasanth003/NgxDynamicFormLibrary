import { iExample } from "./example.interface";

import { NgxDynamicForm } from "ngx-dynamic-form";

const SampleForm: NgxDynamicForm = {
    style: {
        button: {
            name: 'Submit',
            customClass: 'btn btn-primary'
        }
    },
    formGroup: [
        {
            formControlName: 'name',
            label: 'Name',
            fieldType: 'input',
            inputType: 'text',
            placeholder: 'Enter your name',
            column: 6,
            required: true,
            validations: [
                {
                    name: 'required',
                    type: 'required',
                    message: 'Name is required'
                }
            ]
        },
        {
            formControlName: 'email',
            label: 'Email',
            fieldType: 'input',
            inputType: 'email',
            placeholder: 'Enter your email',
            column: 6,
            required: true,
            validations: [
                {
                    name: 'required',
                    type: 'required',
                    message: 'Email is required'
                },
                {
                    name: 'email',
                    type: 'pattern',
                    pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
                    message: 'Invalid email'
                }
            ]
        },
        {
            formControlName: 'password',
            label: 'Password',
            fieldType: 'input',
            inputType: 'password',
            placeholder: 'Enter password',
            column: 6,
            required: true,
            validations: [
                {
                    name: 'required',
                    type: 'required',
                    message: 'Password is required'
                }
            ]
        },
        {
            formControlName: 'age',
            label: 'Age',
            fieldType: 'input',
            inputType: 'number',
            placeholder: 'Enter age',
            column: 6
        },
        {
            formControlName: 'phone',
            label: 'Phone',
            fieldType: 'tel',
            placeholder: 'Enter phone number',
            column: 6
        },
        {
            formControlName: 'website',
            label: 'Website',
            fieldType: 'url',
            placeholder: 'Enter website URL',
            column: 6
        },
        {
            formControlName: 'search',
            label: 'Search',
            fieldType: 'search',
            placeholder: 'Search...',
            column: 6
        },
        {
            formControlName: 'country',
            label: 'Country',
            fieldType: 'select',
            placeholder: 'Select country',
            column: 6,
            options: [
                { key: 'USA', value: 'usa' },
                { key: 'India', value: 'india' },
                { key: 'UK', value: 'uk' }
            ]
        },
        {
            formControlName: 'city',
            label: 'City',
            fieldType: 'autocomplete',
            placeholder: 'Search city',
            column: 6,
            options: [
                { key: 'New York', value: 'ny' },
                { key: 'London', value: 'london' },
                { key: 'Tokyo', value: 'tokyo' },
                { key: 'Paris', value: 'paris' }
            ]
        },
        {
            formControlName: 'birthdate',
            label: 'Birth Date',
            fieldType: 'date',
            column: 6
        },
        {
            formControlName: 'appointmentTime',
            label: 'Appointment Time',
            fieldType: 'time',
            column: 6
        },
        {
            formControlName: 'meeting',
            label: 'Meeting',
            fieldType: 'datetime-local',
            column: 6
        },
        {
            formControlName: 'vacation',
            label: 'Vacation Period',
            fieldType: 'dateRange',
            column: 6
        },
        {
            formControlName: 'startMonth',
            label: 'Start Month',
            fieldType: 'month',
            column: 6
        },
        {
            formControlName: 'weekNum',
            label: 'Week',
            fieldType: 'week',
            column: 6
        },
        {
            formControlName: 'gender',
            label: 'Gender',
            fieldType: 'radio',
            column: 6,
            options: [
                { key: 'Male', value: 'male' },
                { key: 'Female', value: 'female' },
                { key: 'Other', value: 'other' }
            ]
        },
        {
            formControlName: 'terms',
            label: 'Accept Terms',
            fieldType: 'checkbox',
            column: 6
        },
        {
            formControlName: 'notifications',
            label: 'Enable Notifications',
            fieldType: 'switch',
            column: 6
        },
        {
            formControlName: 'volume',
            label: 'Volume',
            fieldType: 'slider',
            column: 6
        },
        {
            formControlName: 'rangeVal',
            label: 'Range',
            fieldType: 'range',
            column: 6
        },
        {
            formControlName: 'favoriteColor',
            label: 'Favorite Color',
            fieldType: 'color',
            column: 6
        },
        {
            formControlName: 'profilePic',
            label: 'Profile Picture',
            fieldType: 'file',
            column: 6
        },
        {
            formControlName: 'bio',
            label: 'Bio',
            fieldType: 'textarea',
            placeholder: 'Tell us about yourself',
            column: 12
        },
        {
            formControlName: 'content',
            label: 'Content',
            fieldType: 'editor',
            column: 12
        }
    ]
};

export const examples: iExample[] = [
    {
        name: 'Bootstrap Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas hic ratione quod ipsum, repellat fugiat maiores aut animi perferendis architecto! Illo deleniti nemo pariatur nobis, id rem mollitia dignissimos?',
        form: SampleForm,
        formType: 'bootstrap'
    },
    {
        name: 'Material Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas hic ratione quod ipsum, repellat fugiat maiores aut animi perferendis architecto! Illo deleniti nemo pariatur nobis, id rem mollitia dignissimos?',
        form: SampleForm,
        formType: 'material'
    },
    {
        name: 'Ant Design Form (NG-ZORRO)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas hic ratione quod ipsum, repellat fugiat maiores aut animi perferendis architecto! Illo deleniti nemo pariatur nobis, id rem mollitia dignissimos?',
        form: SampleForm,
        formType: 'antd'
    }
]