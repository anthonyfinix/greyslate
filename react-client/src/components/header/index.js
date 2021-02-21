import React from 'react';
import logo from '../../assets/gmrwhite.svg';
import './header.css';
import loadingGif from '../../assets/loading.gif';
import {Link} from 'react-router-dom';

const Header = ({ searchTerm, setSearchTerm, setSearchInit, setPage, searchInit,loading }) => {
    const handleSearchInput = (e) => {
        let value = e.currentTarget.value;
        setSearchTerm(prevSearchTerm => {
            if (!searchInit) setSearchInit(true);
            if (value === '' && prevSearchTerm !== '') setPage(1);
            return value;
        })
    }
    return (
        <div className="headerMainWrapper">
            <div className="headerWrapper">
                <Link to="/"><img src={logo} className="logo" alt="brand" /></Link>
                <div className="searchBarWrapper">
                    <input
                        value={searchTerm}
                        onChange={handleSearchInput}
                        type="text"
                        className="searchBar"
                        placeholder="SEARCH"
                    />
                    {searchInit?<img className="searchLoadingIcon" src={loadingGif} alt="searching gif" />:null}
                </div>

            </div>
        </div>
    )
}

export default Header;