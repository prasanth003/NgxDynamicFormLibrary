import { regexConverter } from "./regexConverter";

export function validateFile(fileName: string, type?: string): boolean {
    const validator: RegExp = regexConverter(type ? type : '');
    return validator.exec(fileName) ? true : false;
}