import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
import SearchResult from "../SearchResult/SearchResult.jsx";
import {getUrlAxios} from "../../Functions/Functions.jsx";
import './SearchBar.scss'
import Comments from "../Comments/Comments.jsx";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showTitleResult, setShowTitleResult] = useState('')
    const [showCommentResult, setShowCommentResult] = useState('')

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        const urlYoutube = searchValue
        setShowTitleResult(searchValue)
        setSearchValue('')
        const titleResult = await getUrlAxios(urlYoutube)
        setShowTitleResult(titleResult.videoTitle)
        setShowCommentResult(titleResult.mostRecentComment)
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <div className = 'searchBar'>
                <div className = 'searchBar__container'>
                    <input
                        type='text'
                        className = 'searchBar__input'
                        placeholder='Ingresar URL'
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                    <Button
                        className = 'button'
                        id='searchBar__button'
                        type='submit'
                        text = 'Buscar'
                    />
                </div>
            </div>
            {showTitleResult && <SearchResult value={showTitleResult}/>}
            <Comments value={showCommentResult}/>
        </form>
    );
}
export default SearchBar;
