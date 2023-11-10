import axios from "axios";
import {API_KEY, YOUTUBE_URL} from "../Constants/Constants.jsx";

const getUrlId = (urlYoutube) => {
    const parts = urlYoutube.split('/')
    const segment = parts.find(part => part.includes('watch' || part.includes('embed')))

    if(segment) {
        const idSegment = segment.split('=')[1]

        if(idSegment) {
            return idSegment
        }
    }
    return null
}
const getUrlAxios = async (urlYoutube) => {
    const videoId = getUrlId(urlYoutube)

    if(!videoId) {
        Swal.fire({
            text: `Hey! Please enter a valid youtube url!`,
            icon: 'error'
        })
        return {videoTitle: null, mostRecentComment: null, comments: [], urlAudio: null}
    }

    try {
        const videoDetailsUrl = `${YOUTUBE_URL}videos?part=snippet&${API_KEY}&id=${videoId}`
        const videoDetailsResponse = await axios.get(videoDetailsUrl)
        const videoTitle = videoDetailsResponse.data.items[0]?.snippet?.title

        const commentsUrl = `${YOUTUBE_URL}commentThreads?${API_KEY}&videoId=${videoId}&part=snippet&maxResults=20&order=time`
        const commentsResponse = await axios.get(commentsUrl);
        const mostRecentComment = commentsResponse.data.items[0]?.snippet.topLevelComment.snippet.textDisplay;
        const comments = commentsResponse.data.items.map((item) => item.snippet.topLevelComment.snippet.textDisplay);

        const videoViewsUrl = `${YOUTUBE_URL}videos?part=statistics&${API_KEY}&id=${videoId}`;
        const videoViewsResponse = await axios.get(videoViewsUrl)
        const videoViews = videoViewsResponse.data.items[0]?.statistics?.viewCount;

        // Create authorization to use this parte (fileDetails)
        /*const audioDetails = ''
        const urlAudio = ''*/

        return {videoTitle, mostRecentComment, comments, videoViews/*, urlAudio*/}
    }
    catch(error) {
        console.error('Error getting video details or comments: ', error)
        return null
    }
}

const getVisitCounter = async () => {
    try{
        const response = await axios.get('http://localhost:3001/visit-counter')
        return response.data
    }
    catch(error) {
        if (axios.isAxiosError(error)) {
            console.error('getVisitCounter:', error.toJSON());
        } else {
            console.error('getVisitCounter:', error);
        }
        return 0
    }
}

const getLatestVideoTitle = async () => {
    try {
        const response = await axios.get('http://localhost:3001/last-title');
        return response.data.latestVideoTitle
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('getLastVideoTitle:', error.toJSON());
        } else {
            console.error('getLastVideoTitle:', error);
        }
        return null;
    }
};

const sendLatestVideoTitle = async (videoTitle) => {
    try {
        await axios.post('http://localhost:3001/last-title', {
            videoTitle: videoTitle,
        });
    } catch (error) {
        console.error('Error sending latest video title:', error);
    }
};


export {
    getUrlAxios, getVisitCounter, getLatestVideoTitle, sendLatestVideoTitle
}