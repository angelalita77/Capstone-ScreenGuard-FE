import { useState } from "react"
import axios from "axios"

const apiStr = "http://localhost:3000/api/videos/"

export default function DisplayVideo({ snippet, id }) {
  const [videoInfo, setVideoInfo] = useState({
    videoId: id.videoId,
    title: snippet.title,
    description: snippet.description,
    thumbnail: snippet.thumbnails.default.url,
    channel: snippet.channelTitle
  })


  // Add Handle
  async function handleAdd() {
    try {

      const response = await axios.post(apiStr, videoInfo)
      console.log('Video added successfully', response.data)

    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='videoCard'>
      <h2>{videoInfo.title}</h2>
      <img src={videoInfo.thumbnail} />
      <br />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

