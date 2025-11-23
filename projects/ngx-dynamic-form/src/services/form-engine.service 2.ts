import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NgxFormControl } from '../public-api';
import { namedValidator } from '../helpers/name-validator';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { humanFileSize } from '../helpers/filesizeconverter';
import { validateFile } from '../helpers/fileValidator';

@Injectable({ providedIn: 'root' })
export class FormEngineService {

    private customValidators: Record<string, ValidatorFn> = {};

    /**
     * To register custom validator
     * @param name 
     * @param validator 
    */
    public registerValidator(name: string, validator: ValidatorFn): void {
        this.customValidators[name] = validator;
    }


    /**
     * Build a FormGroup from an array of NgxFormControl
     * @param formControls 
     * @returns 
    */
    public buildFormGroup(formControls: NgxFormControl[]): FormGroup {

        const group: { [key: string]: FormControl } = {};

        formControls.forEach(field => {
            group[field.formControlName] = new FormControl(
                { value: field.value ?? '', disabled: !!field.disabled },
                this.getValidators(field)
            );
        });

        return new FormGroup(group);

    }

    /**
     * Check if a form control has a specific error
     * @param formGroup 
     * @param controlName 
     * @param errorName 
     * @returns boolean
    */
    public hasError(formGroup: FormGroup, controlName: string, errorName: string): boolean {
        return formGroup.controls[controlName]?.hasError(errorName.toLowerCase());
    }

    /**
     * Check if a form control is touched
     * @param formGroup 
     * @param controlName 
     * @returns 
    */
    public isTouched = (formGroup: FormGroup, controlName: string): boolean => {
        const ctrl = formGroup.get(controlName);
        return !!(ctrl && (ctrl.dirty || ctrl.touched));
    }

    /**
     *  Get validators for a form field 
     * @param field 
     * @returns 
    */
    private getValidators(field: NgxFormControl): ValidatorFn[] {

        const validators: ValidatorFn[] = [];

        if (field.required) validators.push(Validators.required);

        if (field.validations && Array.isArray(field.validations)) {

            for (const rule of field.validations) {
                switch (rule.type) {

                    case 'pattern':
                        if (rule.pattern) {
                            validators.push(
                                this.regexValidator(
                                    new RegExp(rule.pattern),
                                    { [rule.name]: rule.message ?? 'Invalid pattern' }
                                )
                            );
                        }
                        break;

                    case 'minLength':
                        if (rule.value) validators.push(namedValidator(rule.name, Validators.minLength(rule.value)));
                        break;

                    case 'maxLength':
                        if (rule.value) validators.push(namedValidator(rule.name, Validators.maxLength(rule.value)));
                        break;

                    case 'min':
                        if (rule.value) validators.push(namedValidator(rule.name, Validators.min(rule.value)));
                        break;

                    case 'max':
                        if (rule.value) validators.push(namedValidator(rule.name, Validators.max(rule.value)));
                        break;

                    case 'custom':
                        const custom = this.customValidators[rule.name];
                        if (custom) validators.push(custom);
                        break;
                }
            }

        }

        return validators;
    }

    /**
     * Regex validator
     * @param regex 
     * @param error 
     * @returns ValidatorFn
    */
    private regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) return null;
            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }

    public handleFileSelection(event: any, formField: NgxFormControl, filesToUpload: any[]): any[] {
        const fileList: FileList = event.target.files;
        const observable = from(fileList).pipe(
            map((file: File) => {
                if (!validateFile(file.name, formField.fileTypeValidation?.allowedType?.join(','))) {
                    throw new Error('Invalid file type');
                }
                return file;
            })
        );

        observable.subscribe({
            next: (file) => {
                const maxSize = formField.fileTypeValidation?.maxFileSize;
                if (maxSize && file.size > maxSize) {
                    console.warn('File too large');
                    return;
                }
                this.addFile(filesToUpload, file, formField.multipleFile);
            },
            error: (err) => console.error(err)
        });

        return filesToUpload;
    }

    private addFile(filesToUpload: any[], file: File, multiple?: boolean): void {
        const fileData = {
            file,
            fileName: file.name,
            fileSize: humanFileSize(file.size),
            fileType: file.type
        };

        if (multiple) filesToUpload.push(fileData);
        else filesToUpload.splice(0, filesToUpload.length, fileData);
    }

}