'use client'
/* eslint-disable @next/next/no-img-element */
import countries from '@/utils/data.json';
import { getCountry } from '@/services/countries';
import Error from 'next/error';
import Navbar from '@/components/Navbar';
import Link from '@/components/Link';

export default function Country({ params }: { params: { slug: string } }) {
    const countryCode = params.slug.toLowerCase();
    const country = getCountry(countryCode);

    if(!country){
        return (<>
        <Error statusCode={404} title='Page not found' withDarkMode/>
        </>)
    }
    
    return( 
        <>
            <Navbar/>
            <div className='max-w-7xl mx-auto py-8 px-4 md:px-16 xl:px-0 w-24'>
                <Link key="home-link" href='/' title='Back' icon='left-arrow'/>
            </div>
            <main className='max-w-7xl mx-auto py-8 px-4 md:px-16 xl:px-0  grid lg:grid-cols-2 gap-16'>
                <div className='shadow-lg lg:h-96'>
                    <img className='h-full w-full object-cover' src={country?.flags.svg} alt="" />
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-3xl font-extrabold mt-10'>{country?.name}</h1>
                    <div className='grid lg:grid-cols-2'>
                        <div className='flex flex-col gap-2'>
                            <p><span className='font-bold'>Native Name: </span>{country?.nativeName}</p>
                            <p suppressHydrationWarning><span className='font-bold'>Population: </span>{country?.population.toLocaleString()}</p>
                            <p><span className='font-bold'>Region: </span>{country?.region}</p>
                            <p><span className='font-bold'>Sub Region: </span>{country?.subregion}</p>
                            <p><span className='font-bold'>Capital: </span>{country?.capital}</p>   
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p><span className='font-bold'>Top Level Domain: </span>{country?.topLevelDomain}</p>
                            <p><span className='font-bold'>Currencies: </span>{
                                country?.currencies?.map( (currency, index) => {
                                    if(index > 0){
                                        return `, ${currency.name}`
                                    }
                                    return currency.name
                                }
                                )}</p>
                            <p><span className='font-bold'>Languages: </span>{
                                country?.languages?.map( (language, index) => {
                                    if(index > 0){
                                        return `, ${language.name}`
                                    }
                                    return language.name
                                }
                                )}</p>      
                        </div>
                        
                          
                    </div>
                    <div className='flex gap-4 flex-col md:flex-row'>
                        <h2 className='font-bold'>Border Countries:</h2>
                        <ul className='flex flex-wrap gap-4'>
                            {
                                country?.borders?.map( border => {
                                    const borderCountry = getCountry(border);
                                return <Link key={`border-${border}`} href={`./${border}`} title={borderCountry?.name? borderCountry.name : border} />
                            })
                            }
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}