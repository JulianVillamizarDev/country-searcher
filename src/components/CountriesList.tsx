import Card from "./Card"
import countries from "../utils/data.json";
import { useState } from "react";

export default function CountriesList() {

    return (
        <div className="max-w-7xl mx-auto px-8 xl:px-0 grid items-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
        {
          countries.map( country => (
            <Card 
              key={"country-"+country.numericCode}
              name={country.name}
              flag={country.flags.svg} 
              population={country.population}
              region={country.region}
              capital={country.capital}
              code={country.alpha3Code}
            />
          ))
        }
        </div>
    )
}