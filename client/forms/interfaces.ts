export enum FieldTypes {
    INPUT = 'INPUT',
    AVATAR = 'AVATAR',
    DROPDOWN = 'DROPDOWN',
}

export interface IField {
    initial?: any;
    label: string;
    key: string;
    validators: IValidator[];
    type?: FieldTypes;
    imageUrls?: string[];
}

export interface IValidator {
    validate: (val: any) => boolean;
    getMessage: () => string;
}
