import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiStr = "http://localhost:3000/api/videos/"

function UpdateForm() {
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
    <div>
        <h1> Update Form</h1>
        <form>
            <label>Title: </label>
            <input type="text" name='name' placeholder='Title of Video' />
            <button>Update</button>
        </form>
    </div>
  )
}

export default UpdateForm