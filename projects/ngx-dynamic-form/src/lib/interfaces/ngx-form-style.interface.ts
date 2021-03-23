export interface iNgxFormStyle {
    formStyle: 'material' | 'bootstrap';
    bootstrapStyles?: iBootstrapFormStyle;
    materialStyles?: iMaterialFormStyle;
    buttonStyle: iButtonStyle;
}

interface iBootstrapFormStyle {
    customClass?: string;
    fieldSize?: 'small' | 'medium' | 'large';
}

interface iMaterialFormStyle {
    fieldColor?: 'primary' | 'basic' | 'warn' | 'accent';
    appearance?: 'legacy' | 'outline' | 'fill' | 'standard'; 
}

interface iButtonStyle {
    buttonName: string;
    class?: string;
}