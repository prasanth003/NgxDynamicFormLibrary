# 🚀 Ngx Dynamic Form Library

The **Ngx Dynamic Form Library** provides a flexible, configuration-driven way to generate **Reactive Forms dynamically** in Angular.  
It supports multiple UI libraries — **Bootstrap**, **Ant Design (NG-ZORRO)**, and **Angular Material** — all using a single JSON configuration.

---

## 📦 Packages

| Library | Description |
|----------|-------------|
| `@prasanthsekar003/ngx-dynamic-form-bootstrap` | Dynamic form rendered using Bootstrap styles |
| `@prasanthsekar003/ngx-dynamic-form-antd` | Dynamic form rendered using NG-ZORRO (Ant Design) components |
| `@prasanthsekar003/ngx-dynamic-form-material` | Dynamic form rendered using Angular Material components |

All libraries share the same **core schema** and are theme-compatible.

---

## ⚙️ Installation

```bash
npm install @prasanthsekar003/ngx-dynamic-form-bootstrap
# or
npm install @prasanthsekar003/ngx-dynamic-form-antd
# or
npm install @prasanthsekar003/ngx-dynamic-form-material
```

---

## 🧱 Architecture Overview

The library follows a **modular, scalable, and theme-agnostic** architecture.

- **Core Engine** → Creates Angular `FormGroup` dynamically based on configuration.  
- **UI Adapters** → Theme-specific implementations (`bootstrap`, `antd`, `material`).  
- **Reactive Validation** → Supports Angular’s built-in validators and custom logic.  
- **Dynamic Layout** → Uses column-based grid layouts for responsive rendering.  
- **Unified Schema** → JSON schema drives both structure and validations.

---

## 🧩 Interface Definitions

### **NgxFormControl**

```ts
export interface NgxFormControl {
    formControlName: string;
    label: string;
    fieldType: NgxFormFieldType;
    column: number;
    inputType?: NgxInputType;
    placeholder?: string;
    value?: any;
    disabled?: boolean;
    required?: boolean;
    validations?: NgxFormValidation[];
    options?: NgxFormOptions[];
    maxLengthOption?: NgxMaxLengthOption;
    hint?: string;
    prefix?: string;
    suffix?: string;
    customClass?: string;
}
```

---

### **NgxFormFieldType**

```ts
export type NgxFormFieldType =
  | 'input'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'date'
  | 'dateRange'
  | 'autocomplete';
```

---

### **NgxInputType**

```ts
export type NgxInputType = 'text' | 'number' | 'password';
```

---

### **ValidationType & NgxFormValidation**

```ts
export type ValidationType =
  | 'required'
  | 'pattern'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'custom';

export interface NgxFormValidation {
  type: ValidationType;
  pattern?: RegExp | string;
  value?: number;
  name: string;
  message: string;
}
```

---

### **NgxFormOptions**

```ts
export interface NgxFormOptions {
  key: string;
  value: number | string | any;
  disabled?: boolean;
  selected?: boolean;
}
```

---

### **NgxMaxLengthOption**

```ts
export interface NgxMaxLengthOption {
  show?: boolean;
  length: number;
}
```

---

## 🧠 Example Form Configuration

```json
{
  "formGroup": [
    {
      "formControlName": "firstName",
      "label": "First Name",
      "fieldType": "input",
      "required": true,
      "column": 12,
      "placeholder": "Enter your first name",
      "value": "",
      "disabled": false,
      "validations": [
        {
          "name": "required",
          "type": "required",
          "message": "First name is required"
        },
        {
          "name": "string",
          "type": "pattern",
          "pattern": "^[a-zA-Z]+$",
          "message": "First name can only contain letters"
        },
        {
          "name": "minLength",
          "type": "minLength",
          "value": 2,
          "message": "First name must be at least 2 characters long"
        },
        {
          "name": "maxLength",
          "type": "maxLength",
          "value": 10,
          "message": "First name cannot be more than 10 characters long"
        }
      ]
    }
  ],
  "style": {
    "button": {
      "name": "Submit",
      "customClass": "btn-primary"
    }
  }
}
```

---

## 🧩 Template Usage

```html
<ngx-dynamic-form-bootstrap [form]="form"></ngx-dynamic-form-bootstrap>
<ngx-dynamic-form-antd [form]="form"></ngx-dynamic-form-antd>
<ngx-dynamic-form-material [form]="form"></ngx-dynamic-form-material>
```

---

## 🎨 Theme Rendering Notes

| Theme | UI Framework | Notes |
|--------|---------------|-------|
| **Bootstrap** | Uses Bootstrap 5 form classes | Grid-based responsive layout |
| **Ant Design** | Uses NG-ZORRO components | Requires Nz modules |
| **Material** | Uses Angular Material v20+ | Requires global Material theme SCSS |

---

## 🧪 Validation Handling

- Supports Angular built-in validators (`required`, `pattern`, `min`, `max`, etc.)  
- Allows custom validators via `"type": "custom"`  
- Dynamic validation messages based on control state  
- Supports async and conditional validators

---

## 📚 Example Integration

```ts
import { Component } from '@angular/core';
import formData from './form.json';

@Component({
  selector: 'app-root',
  template: `<ngx-dynamic-form-material [form]="form"></ngx-dynamic-form-material>`
})
export class AppComponent {
  form = formData;
}
```

---

## 💡 Handling Different Field Types

| Field Type | Description |
|-------------|-------------|
| `input` | Text input field |
| `select` | Dropdown list |
| `radio` | Radio button group |
| `checkbox` | Checkbox or multi-select |
| `date` | Date picker |
| `autocomplete` | Autocomplete text input |

> ⚠️ `mat-radio-group` or `nz-radio-group` should **not be wrapped** inside `<mat-form-field>`.

---

## 🧾 License

**MIT License** © [Prasanth Sekar](https://prasanthsekar.info)
