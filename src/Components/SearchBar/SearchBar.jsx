import React, {useState} from 'react';
import Button from '../Button/Button.jsx';
import SearchResult from "../SearchResult/SearchResult.jsx";
import Comment from "../Comments/Comment.jsx";
import {getUrlAxios, sendLatestVideoTitle} from "../../Functions/Functions.jsx";
import VideoTitleDisplay from "../VideoTitleDisplay/VideoTitleDisplay.jsx";
import ShowAllCommentsButton from "../ShowAllCommentsButton/ShowAllCommentsButton.jsx";
import AllComments from "../Comments/AllComments.jsx";
import MediaPlayer from "../MediaPlayer/Mediaplayer.jsx";
import './SearchBar.scss'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showTitleResult, setShowTitleResult] = useState('')
    const [showCommentResult, setShowCommentResult] = useState('')
    const [allComments, setAllComments] = useState([])
    const [showAllComments, setShowAllComments] = useState(false);
    const [videoViews, setVideoViews] = useState(null)
    // const [audioUrl, setAudioUrl] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setShowAllComments(false)
        //Find in server
        const titleResult = await getUrlAxios(searchValue)

        if (titleResult && titleResult.videoTitle) {
            await sendLatestVideoTitle(titleResult.videoTitle);
        }
        setSearchValue('')
        setShowTitleResult(titleResult.videoTitle)
        setShowCommentResult(titleResult.mostRecentComment)
        setAllComments(titleResult.comments);
        setVideoViews(titleResult.videoViews)
        // setAudioUrl(titleResult.audioUrl);

        /*return () => {
            const audio = new Audio(titleResult.audioUrl);
            audio.currentTime = 30;
            audio.play();
            setTimeout(() => {
                audio.pause();
            }, 15000);
        };*/
    };

    const handleShowAllComments = () => {
        setShowAllComments(true);
    }

    return (
        <>
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
                {showTitleResult && <Comment value={showCommentResult} showAll={showAllComments}/>}
            </form>
            {showTitleResult && <ShowAllCommentsButton text='More Comments!' onClick={handleShowAllComments}/>}
            {showAllComments && <AllComments allComments={allComments} videoViews={videoViews} />}
            {showAllComments && <MediaPlayer/>}
        </>
    );
}
export default SearchBar;