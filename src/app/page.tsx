import Navbar from '../components/Navbar';
import CountriesList from '@/components/CountriesList';
import { getCountries } from '@/services/countries';
import { useEffect, useState } from 'react';

export default function Home() {
  
  return (
  <>
    <Navbar/>
    <CountriesList/>
  </>
  );
}
