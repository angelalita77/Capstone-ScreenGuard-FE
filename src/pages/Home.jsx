import { useState } from 'react';
import DisplayVideo from '../components/DisplayVideo';

export default function Home() {

    const apiKey = "AIzaSyC8KDmieXuPxX9po92QRi3fvAzITE2KMMM"; // replace with your own API key
    let nextPageToken = null;
    const maxAttempts = 3;
    let attempts = 0;

    const [formData, setFormData] = useState("")
    const [videoData, setVideoData] = useState(null);

    async function fetchVideos(e) {
        e.preventDefault();

        let query = formData;

        const url = new URL("https://youtube.googleapis.com/youtube/v3/search");
        url.search = new URLSearchParams({
            part: "snippet",
            maxResults: 2,
            q: query,
            type: "video",
            videoDefinition: "any",
            videoDuration: "any",
            order: "relevance",
            videoEmbeddable: "true",
            key: apiKey,
            ...(nextPageToken && { pageToken: nextPageToken }),
        });

        // console.log(url);

        try {
            // fetch data from the Google API
            const res = await fetch(url);
            //convert data to json
            const data = await res.json();

            // search thru data fetches for kind id type videos
            const videos = data.items.filter((item) => item.id.kind === "youtube#video");
            console.log(videos); // <-- check to see if videoId was found in snippet

            setVideoData(videos);


            // If the videoId is not found
            // call the fetchVideos() function again until found or
            // until it reach the max attempts
            if (videos.length === 0 && data.nextPageToken && attempts < maxAttempts) {
                attempts++;
                nextPageToken = data.nextPageToken;
                //   resultsDiv.textContent = `Still looking... (page ${attempts + 1})`;
                return fetchVideos(e);
            }

            // resultsDiv.textContent =`Video(s) found in ${attempts} attempts`;
            // return displayVideos(videos);
            // if no videos was found
        } catch (err) {
            console.error("Error fetching videos:", err);
            // resultsDiv.textContent = "Error fetching videos 😢";
        }
    }

    function handleChange(e) {
        setFormData(e.target.value)
    }



    return (
        <div>
            {/* <!-- Search Bar with Button --> */}
            <form id="search-section" onSubmit={fetchVideos}>
                <input onChange={handleChange} type="text" id="search-input" placeholder="Search for videos ..." />
                <input type="submit" id="search-btn" value="Search" />
            </form>

            {/* <!-- Search result info will be displayed under search bar --> */}
            <div id="video-results">
            </div>

            {/* <!-- Videos Recieved Container --> */}
            <div id="video-container">
                {/* Conditional rendering - only map if videoData exists */}
                {videoData && videoData.map((video, index) => (
                    <DisplayVideo key={index}{...video}/>
                ))}
            </div>

        </div>
    )

}