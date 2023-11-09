/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoTitleDisplay.scss'

const VideoTitleDisplay = () => {
    const [latestVideoTitle, setLatestVideoTitle] = useState('');

    useEffect(() => {
        const fetchLatestVideoTitle = async () => {
            try {
                const response = await axios.get('http://localhost:3001/latest-video');
                setLatestVideoTitle(response.data.latestVideoTitle);
            } catch (error) {
                console.error('Error fetching latest video title:', error);
            }
        };
        fetchLatestVideoTitle();
    }, []);

    return (
        <div>
            <h2>Latest Video Title: {latestVideoTitle}</h2>
        </div>
    );
};
export default VideoTitleDisplay;
*/
