import { useEffect, useState } from "react"
import axios from "axios";


const apiStr = "http://localhost:3000/api/videos/"

export default function Approved(){
// Renamed the state setter to 'setVideoData' for better clarity, 
// though the original name 'getVideoData' was the state setter.
const [videoData, setVideoData] = useState(null); 

    useEffect(() => {
    // 💡 CORRECTED: Renamed the async function to 'fetchVideoData' 
    // to avoid collision with the state setter.
    async function fetchVideoData() { 
    try {

      let res = await axios.get(apiStr);

      let data = res.data;
      
      
      // 💡 CORRECTED: Using the state setter function to update state.
      setVideoData(data); 
     console.log(res.data);

    } catch (err) {
      console.error(err.message);
    }
  }
  // 💡 Calling the newly named function
  fetchVideoData(); 
  // Dependency array is empty, so it only runs once after the initial render.
  }, []); 
   

    return (
    <section className="approved-videos">
            <h1>Approved Videos</h1>

            {/* Conditional Rendering: Check if data is still loading or empty */}
            {!videoData ? (
                <p>Loading videos...</p>
            ) : videoData.length === 0 ? (
                <p>No approved videos found.</p>
            ) : (
                // If data exists, map over the array to display content
                <div className="video-list">
                    {videoData.map((video, index) => (
                        <div key={index} className="video-card">
                            {/* Assuming your video object has 'title' and 'url' properties */}
                            <h2>{video.title}</h2> 
                            <p>URL: <a href={video.url} target="_blank" rel="noopener noreferrer">{video.url}</a></p>
                            <img src={video.thumbnail[0]} alt="video" />
                            {/* Add more video properties here as needed */}
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}