export enum FieldTypes {
    INPUT = 'INPUT',
    AVATAR = 'AVATAR',
    DROPDOWN = 'DROPDOWN',
    TOGGLE = 'TOGGLE',
}

export interface IField {
    getFinalValue?: (value: any) => any;
    initial?: any;
    label: string;
    key: string;
    validators: IValidator[];
    type?: FieldTypes;
    imageUrls?: string[];
    lowerCase?: boolean;
    options?: Array<{ value: any; label: string }>;
}

export interface IValidator {
    validate: (val: any) => boolean;
    getMessage: () => string;
}
