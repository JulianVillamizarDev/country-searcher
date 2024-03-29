import Image from "next/image"
import { CardProps } from "@/types";

export default function Card({name, capital, region, population, flag, code}: CardProps) {

    return (
        <a href={"/country/"+code} key={name} className="grid grid-rows-2 w-full h-full rounded-md shadow-lg bg-primary-50 dark:bg-secondary-50 rounded-shadow-sm hover:scale-95 duration-75">
            <div className="shadow-sm overflow-hidden rounded-t-md">
                <img className="overflow-hidden object-cover h-full w-full" src={flag} alt={name+"flag"} />
            </div>
            <div className="py-2 px-4 flex flex-col justify-center">
                <h1 className="text-secondary-200 dark:text-primary-50 text-lg font-extrabold mb-4">{name}</h1>
                <p className="text-secondary-200 dark:text-primary-50 text-base font-light"><span className="font-bold">Population: </span>{population}</p>
                <p className="text-secondary-200 dark:text-primary-50 text-base font-light"><span className="font-bold">Region: </span>{region}</p>
                <p className="text-secondary-200 dark:text-primary-50 text-base font-light"><span className="font-bold">Capital: </span>{capital}</p>
            </div>
        </a>
    )
}