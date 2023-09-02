import styles from '../../styles/Header.module.css'

import logo from '../../images/logo.png';
import search from '../../images/search-icon.svg'

import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../features/search/searchSlice';

const Header = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.search)

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
      };


    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
        <form className={styles.form}>
            <div className={styles.input}>
                <input type="search"
                        name="search"
                        placeholder='Search...'
                        autoComplete="off" 
                        value={searchQuery}
                        onChange={handleSearchChange}      
                        />
            </div>
            <div className={styles.icon}>
                    <img src={search} alt="icon" />
                </div>
        </form>
        </div>
    );
};

export default Header;