import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector} from 'react-redux'

import { getCountries } from '../../features/countries/countriesSlice';
import  CountryModal from '../Main/CountryModal'

import styles from '../../styles/List.module.css'

const CountryList = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.list);
    const searchQuery = useSelector((state) => state.search)
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (country) => {
        setSelectedCountry(country);
        setIsModalOpen(true);
    };

    const closeModal = () => {
    setSelectedCountry(null);
    setIsModalOpen(false);
    };


    let currentIndex = 0;
    
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const filteredCountries = countries.filter((country) => 
        country.Country.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    return (
        <div>
            <table>
        <thead className={styles.wrapper}>
            <tr className={styles.title}>
                <th>№</th>
                <th>Country</th>
                <th>Total Confirmed</th>
            </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country) => (
             <tr onClick={() => openModal(country)}>
             <td>{++currentIndex}</td>
             <td>{country.Country}</td>
             <td>{country.TotalConfirmed}</td>
         </tr>
          ))}    
        </tbody>
    </table>
        {isModalOpen && (
            <CountryModal country={selectedCountry} onClose={closeModal} isModalOpen={isModalOpen}/>
        )}
        </div>
    );
};

export default CountryList;