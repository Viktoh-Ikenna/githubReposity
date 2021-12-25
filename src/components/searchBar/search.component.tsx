import React from 'react';
import styles from './search.module.css';

interface SearchProps {
    placeholder?: string;
    stylesP?: any;
}
const Search = ({ placeholder, stylesP = '' }: SearchProps) => {
    return (
        <div className={`${styles.searchWrapper} ${stylesP}`}>
            <input
                type="text"
                name="search"
                className={`${styles.searchBar}`}
                placeholder={`${placeholder}`}
                autoComplete="off"
            />
            {/* <div className={`${styles.slash}`}>{'/'}</div> */}
        </div>
    );
};

export default Search;
