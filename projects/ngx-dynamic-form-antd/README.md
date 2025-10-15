# 🧩 @prasanthsekar003/ngx-dynamic-form

> **Dynamic Form Engine for Angular** — Build fully configurable, themeable, and schema-driven forms from JSON without writing repetitive template code.

---

## 🚀 Why Use ngx-dynamic-form?

Traditional Angular forms require developers to manually create input fields, validation, and layouts.  
**ngx-dynamic-form** automates this by allowing you to define entire forms in JSON — including validations, file uploads, and conditional rendering — while maintaining consistent UI and theming across your app.

With a **plugin-based architecture**, you can plug in your favorite UI library:

- 🎨 **Material** — Angular Material-based components  
- 🧱 **Bootstrap** — Bootstrap 5-based components  
- 💠 **Ant Design (NG-ZORRO)** — Enterprise-grade UI components

---

## 🏗️ Package Structure

| Package | Description |
|----------|--------------|
| `@prasanthsekar003/ngx-dynamic-form` | **Core Engine** — Form builder logic, models, validation, file handling |
| `@prasanthsekar003/ngx-dynamic-form-material` | Material Design theme |
| `@prasanthsekar003/ngx-dynamic-form-bootstrap` | Bootstrap 5 theme |
| `@prasanthsekar003/ngx-dynamic-form-antd` | NG-ZORRO (Ant Design) theme |

---

## 📦 Installation

Install the **core package** first:

```bash
npm install @prasanthsekar003/ngx-dynamic-form
```

Then choose **one** UI theme package based on your project:

```bash
# Material Design
npm install @prasanthsekar003/ngx-dynamic-form-material

# OR Bootstrap
npm install @prasanthsekar003/ngx-dynamic-form-bootstrap

# OR Ant Design (NG-ZORRO)
npm install @prasanthsekar003/ngx-dynamic-form-antd
```

> 📝 **Note:** You only need **one** theme package per project.  
> The rest are optional to avoid unnecessary dependencies.

---

## ⚙️ Theme Registration

After installing your preferred theme, **register it once** in your `app.config.ts` or `app.module.ts`.

### Example (Material Theme)
```ts
import { provideDynamicFormTheme } from '@prasanthsekar003/ngx-dynamic-form';
import { DynamicFormMaterialModule } from '@prasanthsekar003/ngx-dynamic-form-material';

export const appConfig: ApplicationConfig = {
  providers: [
    provideDynamicFormTheme({
      theme: 'material',
      module: DynamicFormMaterialModule
    })
  ]
};
```

### Example (Bootstrap Theme)
```ts
import { provideDynamicFormTheme } from '@prasanthsekar003/ngx-dynamic-form';
import { NgxDynamicFormBootstrap } from '@prasanthsekar003/ngx-dynamic-form-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideDynamicFormTheme({
      theme: 'bootstrap',
      module: NgxDynamicFormBootstrap
    })
  ]
};
```

### Example (Ant Design Theme)
```ts
import { provideDynamicFormTheme } from '@prasanthsekar003/ngx-dynamic-form';
import { DynamicFormAntdModule } from '@prasanthsekar003/ngx-dynamic-form-antd';

export const appConfig: ApplicationConfig = {
  providers: [
    provideDynamicFormTheme({
      theme: 'antd',
      module: DynamicFormAntdModule
    })
  ]
};
```

---

## 🧱 Basic Usage

### Define a JSON Form Schema
```ts
formConfig: iNgxForm = {
  formGroup: [
    {
      label: 'Full Name',
      type: 'text',
      formControlName: 'fullName',
      required: true,
      validation: { pattern: '^[a-zA-Z ]+$', message: 'Only alphabets allowed' }
    },
    {
      label: 'Email Address',
      type: 'email',
      formControlName: 'email',
      required: true
    },
    {
      label: 'Profile Picture',
      type: 'file',
      formControlName: 'profilePic',
      fileTypeValidation: { allowedType: ['jpg', 'png'], maxFileSize: 2048000 }
    }
  ]
};
```

### Add Dynamic Form Component
```html
<ngx-dynamic-form [form]="formConfig"></ngx-dynamic-form>
```

The component automatically:
- Generates form fields
- Applies validation rules
- Handles file uploads
- Emits form state and value changes

---

## 🧩 Features

✅ **Schema-driven:** Build forms directly from JSON  
✅ **Multi-theme support:** Switch between Material, Bootstrap, and Ant Design  
✅ **Reactive Forms:** Fully integrates with Angular’s `FormGroup` and validators  
✅ **Custom Validators:** Add pattern, length, or custom functions  
✅ **File Upload Support:** Handles file type and size validation  
✅ **Reusable Modules:** Perfect for enterprise dashboards and Micro-Frontend apps  
✅ **Lightweight & Modular:** Only installs the selected theme dependency  

---

## 🧠 Architecture Overview

```text
@prasanthsekar003/ngx-dynamic-form
│
├── core/
│   ├── form-engine.ts
│   ├── validators/
│   ├── models/
│   └── services/
│
└── themes/
    ├── material/
    ├── bootstrap/
    └── antd/
```

Each theme implements the same form interface, enabling interchangeable UI rendering while sharing core logic.

---

## ⚡ Roadmap

- [ ] Add Tailwind CSS theme support  
- [ ] Form preview builder for designers  
- [ ] Drag-and-drop form designer  
- [ ] JSON-to-Form visual editor  

---

## 🧑‍💻 Author

**Prasanth Sekar**  
Senior Frontend Developer — Berlin, Germany  
[LinkedIn](https://www.linkedin.com/in/prasanth-sekar-572446126/) • [GitHub](https://github.com/prasanth003)

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.
