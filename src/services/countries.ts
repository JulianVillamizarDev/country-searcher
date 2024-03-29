export const getCountries = async () => {
    const url = process.env.URL;
    const res = await fetch(`${url}/api`, {method: 'GET'});
    const data = await res.json().catch( err => "Couldn't get data");
    return data;
}