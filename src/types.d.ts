export interface CardProps {
    name: string;
    capital: string | undefined;
    region: string;
    population: number;
    flag: string;
    code: string;
}

export interface SearchInputProps {
    keyValue: string;
    onChange: () => {};
    label: string;
    name: string;
    placeholder: string;
    icon: string;
}