# Ngx Dynamic Form Library

The **Ngx Dynamic Form Library** provides a flexible and configuration-driven way to generate reactive forms dynamically in Angular.  
It supports multiple UI libraries — **Bootstrap**, **Ant Design (NG-ZORRO)**, and **Angular Material** — through a unified JSON schema.

---

## 📦 Packages

| Library | Description |
|----------|-------------|
| `@prasanthsekar003/ngx-dynamic-form-bootstrap` | Bootstrap-styled dynamic form |
| `@prasanthsekar003/ngx-dynamic-form-antd` | Ant Design dynamic form (NG-ZORRO) |
| `@prasanthsekar003/ngx-dynamic-form-material` | Angular Material dynamic form |

Each library consumes the same **form configuration object** and renders the UI according to the selected theme.

---

## ⚙️ Installation

```bash
npm install @prasanthsekar003/ngx-dynamic-form-bootstrap
# or
npm install @prasanthsekar003/ngx-dynamic-form-antd
# or
npm install @prasanthsekar003/ngx-dynamic-form-material
```

## 📖 Usage

### 1. Import the Module

Import the specific module for your UI library in your `app.component.ts` or feature module.

```typescript
import { NgxDynamicFormBootstrap } from '@prasanthsekar003/ngx-dynamic-form-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxDynamicFormBootstrap],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    // ...
}
```

### 2. Define the Form Configuration

Create a `NgxDynamicForm` object to define your form structure.

```typescript
import { NgxDynamicForm } from 'ngx-dynamic-form';

public formConfig: NgxDynamicForm = {
    style: {
        button: {
            name: 'Submit',
            customClass: 'btn-primary'
        }
    },
    formGroup: [
        {
            formControlName: 'firstName',
            label: 'First Name',
            fieldType: 'input',
            inputType: 'text',
            column: 6,
            required: true,
            placeholder: 'Enter your first name',
            validations: [
                {
                    type: 'required',
                    name: 'required',
                    message: 'First Name is required'
                }
            ]
        },
        {
            formControlName: 'email',
            label: 'Email',
            fieldType: 'input',
            inputType: 'email',
            column: 6,
            required: true,
            validations: [
                {
                    type: 'pattern',
                    name: 'pattern',
                    pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
                    message: 'Invalid email format'
                }
            ]
        },
        {
            formControlName: 'bio',
            label: 'Bio',
            fieldType: 'textarea',
            column: 12,
            placeholder: 'Tell us about yourself'
        },
        {
            formControlName: 'role',
            label: 'Role',
            fieldType: 'select',
            column: 6,
            options: [
                { key: 'Admin', value: 'admin' },
                { key: 'User', value: 'user' }
            ]
        },
        {
            formControlName: 'terms',
            label: 'I agree to terms',
            fieldType: 'checkbox',
            column: 12,
            options: [
                { key: 'Yes', value: true }
            ]
        }
    ]
};
```

### 3. Use the Component in Template

```html
<ngx-dynamic-form-bootstrap 
    [form]="formConfig"
    (customSubmit)="onSubmit($event)"
    (formChange)="onFormChange($event)"
    (valueChange)="onValueChange($event)">
</ngx-dynamic-form-bootstrap>
```

### 4. Handle Events

```typescript
public onSubmit(formData: any): void {
    console.log('Form Submitted:', formData);
}

public onFormChange(formData: any): void {
    console.log('Form Changed:', formData);
}

public onValueChange(event: any): void {
    console.log('Value Changed:', event);
}
```

---

## 🌟 Supported Field Types

| Field Type | Description |
|------------|-------------|
| `input` | Standard input (text, number, email, password, etc.) |
| `textarea` | Text area for multi-line input |
| `select` | Dropdown selection |
| `checkbox` | Checkbox input |
| `radio` | Radio button group |
| `file` | File upload input |
| `date` | Date picker |
| `time` | Time picker |
| `datetime-local` | Date and time picker |
| `color` | Color picker |
| `range` | Range slider |
| `switch` | Toggle switch |
| `custom` | Custom template support |

### Custom Template Example

You can render custom content using `TemplateRef`.

```typescript
@ViewChild('customTemplate') customTemplate!: TemplateRef<any>;

ngAfterViewInit() {
    this.formConfig.formGroup.push({
        formControlName: 'customField',
        label: 'Custom Field',
        fieldType: 'custom',
        column: 12,
        customTemplate: this.customTemplate
    });
}
```

```html
<ng-template #customTemplate let-control>
    <div class="custom-box">
        <p>This is a custom field!</p>
        <input [formControl]="control" placeholder="Custom Input">
    </div>
</ng-template>
```

---

## ✅ Validation Support

Built-in validators:
- `required`
- `minLength`
- `maxLength`
- `min`
- `max`
- `pattern`
- `custom` (Custom validator functions)

---

## 📄 License

MIT