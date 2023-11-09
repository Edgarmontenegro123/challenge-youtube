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
    const videoDetailsUrl = `${YOUTUBE_URL}videos?part=snippet&${API_KEY}&id=${videoId}`

    if(videoId) {
        try {
            const videoDetailsResponse = await axios.get(videoDetailsUrl)
            const videoTitle = videoDetailsResponse.data.items[0]?.snippet?.title

            const commentsUrl = `${YOUTUBE_URL}commentThreads?${API_KEY}&videoId=${videoId}&part=snippet&maxResults=1&order=time`
            const commentsResponse = await axios.get(commentsUrl);
            const mostRecentComment = commentsResponse.data.items[0]?.snippet.topLevelComment.snippet.textDisplay;

            return {videoTitle, mostRecentComment}
        }
        catch(error) {
            console.error('Error getting video details or comments: ', error)
            return null
        }
    }
    else {
        Swal.fire({
            text: `Hey! Please enter a valid youtube url!`,
            icon: 'error'
        })
        return null
    }
}

export {
    getUrlAxios
}