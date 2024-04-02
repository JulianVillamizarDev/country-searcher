import countries from '@/utils/data.json';

export const getCountries = () => {
    return countries;
}

export const getCountry = (countryCode: string) => {
    return countries.find(country => country.alpha3Code.toLocaleLowerCase() === countryCode.toLocaleLowerCase());
}