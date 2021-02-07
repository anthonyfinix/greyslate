import React from 'react';
import logo from '../../assets/gmrwhite.svg';
import './header.css';
import loadingGif from '../../assets/loading.gif';
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
                <img src={logo} className="logo" alt="logo" />
                <div className="searchBarWrapper">
                    <input
                        value={searchTerm}
                        onChange={handleSearchInput}
                        type="text"
                        className="searchBar"
                        placeholder="SEARCH"
                    />
                    {searchInit?<img className="searchLoadingIcon" src={loadingGif} />:null}
                </div>

            </div>
        </div>
    )
}

export default Header;