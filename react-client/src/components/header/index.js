import React from 'react';
import logo from '../../assets/gmrwhite.svg';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'

const Header = ({ searchTerm, setSearchTerm, setSearchInit, setPage, searchInit, loading }) => {
    const handleSearchInput = (e) => {
        let value = e.currentTarget.value;
        setSearchTerm(prevSearchTerm => {
            if (!searchInit) setSearchInit(true);
            if (value === '' && prevSearchTerm !== '') setPage(1);
            return value;
        })
    }
    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar className={`${classes.wrapper}`}>
                <Link to="/"><img src={logo} className={`${classes.logo}`} alt="brand" /></Link>
                <div className={`${classes.search_wrapper}`}>
                    <SearchIcon color="disabled" />
                    <InputBase placeholder="search" />
                </div>
                {/* <div className="searchBarWrapper">
                        <input
                            value={searchTerm}
                            onChange={handleSearchInput}
                            type="text"
                            className="searchBar"
                            placeholder="SEARCH"
                        />
                        {searchInit?<img className="searchLoadingIcon" src={loadingGif} alt="searching gif" />:null}
                    </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;