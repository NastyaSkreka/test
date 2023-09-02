import React from 'react';

import styles from '../../styles/modal.module.css'
import heartbeat from '../../images/heartbeat.svg'
import deaths from '../../images/deaths.svg'
import medical from '../../images/medical.svg'

const CountryModal = ( {isModalOpen, country,onClose} ) => {
    if (!country) return;
    console.log(country)
    
    return (
        <div class={styles.overlay} style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div class={styles.container}>
            <div class={styles.content}>
                <span class={styles.close} onClick={onClose}>&times;</span>
                 <div class={styles.title}>{country.Country}</div>
                 <div class={styles.items}>
                    <div class={styles.item}>
                        <div class={styles.icon}>
                            <img src={heartbeat} alt="heartbeat" />
                        </div>
                        <div class={styles.total}>
                            <div class={styles.text}>
                             Total Confirmed
                            </div>
                            <div class={styles.count}>
                             {country.TotalConfirmed}
                        </div>
                        </div>
                    </div>
                    <div class={styles.item}>
                        <div class={styles.icon}>
                            <img src={deaths} alt="deaths" />
                        </div>
                        <div class={styles.total}>
                            <div class={styles.text}>
                            Total Deaths
                            </div>
                            <div class={styles.count}>
                             {country.TotalDeaths}
                        </div>
                        </div>
                    </div>
                    <div class={styles.item}>
                        <div class={styles.icon}>
                            <img src={medical} alt="medical" />
                        </div>
                        <div class={styles.total}>
                            <div class={styles.text}>
                            Total Recovered
                            </div>
                            <div class={styles.count}>
                            {country.TotalRecovered}
                        </div>
                        </div>
                    </div>
                 </div>
                 <button className={styles.button} onClick={onClose}>OK</button>
                  
            </div>
        </div>
    </div>
        );
};

export default CountryModal;