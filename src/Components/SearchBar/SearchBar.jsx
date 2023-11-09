import React, {useState} from 'react';
import Button from '../Button/Button.jsx';
import SearchResult from "../SearchResult/SearchResult.jsx";
import Comments from "../Comments/Comments.jsx";
import {getUrlAxios, sendLatestVideoTitle} from "../../Functions/Functions.jsx";
import VideoTitleDisplay from "../VideoTitleDisplay/VideoTitleDisplay.jsx";
import './SearchBar.scss'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showTitleResult, setShowTitleResult] = useState('')
    const [showCommentResult, setShowCommentResult] = useState('')

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        //Find in server
        const titleResult = await getUrlAxios(searchValue)

        if (titleResult && titleResult.videoTitle) {
            await sendLatestVideoTitle(titleResult.videoTitle);
        }

        setShowTitleResult(searchValue)
        setSearchValue('')


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
                        placeholder='Enter a URL'
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                    <Button
                        className = 'button'
                        id='searchBar__button'
                        type='submit'
                        text = 'Search'
                    />
                </div>
            </div>
            <VideoTitleDisplay/>
            {showTitleResult && <SearchResult value={showTitleResult}/>}
            {showTitleResult && <Comments value={showCommentResult}/>}
        </form>
    );
}
export default SearchBar;
