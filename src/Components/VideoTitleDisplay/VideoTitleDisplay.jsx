import React, { useState, useEffect } from 'react';
import {getLatestVideoTitle} from '../../Functions/Functions.jsx'
import './VideoTitleDisplay.scss'

const VideoTitleDisplay = () => {
    const [latestVideoTitle, setLatestVideoTitle] = useState('');

    useEffect(() => {
        const fetchLatestVideoTitle = async () => {
            try{
                const title = await getLatestVideoTitle()
                setLatestVideoTitle(title)
            }
            catch(error) {
                console.error('Error fetching latest video title:', error)
            }
        };
        fetchLatestVideoTitle();
    }, []);

    return (
        <div className='latestVideoTitle'>
            {latestVideoTitle && <p>Latest Video Title: {latestVideoTitle}</p>}
        </div>
    );
};
export default VideoTitleDisplay;
