export interface IField {
    initial?: any;
    value: any;
    label: string;
    key: string;
    validators: IValidator[];
}

export interface IValidator {
    validate: (val: any) => boolean;
    getMessage: (label: string) => string;
}
