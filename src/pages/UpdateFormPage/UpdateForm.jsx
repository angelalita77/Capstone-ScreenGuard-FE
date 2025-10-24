import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const apiStr = "http://localhost:3000/api/videos/"

function UpdateForm() {
    const [videoData, setVideoData] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchVideoData() {
            try {

                let res = await axios.get(apiStr + _id);
                let data = res.data;

                // Using the state setter function to update state.
                setVideoData(data);
                console.log(data);
                //Set the initial title in the input field
                setNewTitle(data.title);
                console.log(data.title);
                
            } catch (err) {
                console.error(err.message);
            }
        }
        fetchVideoData();
        // Dependency array is empty, so it only runs once after the initial render.
    }, [_id]);


    // Handle Update
    async function handleUpdate(e) {
        e.preventDefault();
        try {
            await axios.put(apiStr + _id, { title: newTitle} );
            alert("Video title  updated successfully!");

            //Navigate back to Dashboard
            navigate('/');
        } catch (err) {
            console.error(err.message);
            alert("Failed to update video title");
        }
    }


    // Show loading state
    if (!videoData) {
        return <dive><h2>Loading ... </h2></dive>
    }

    return (
        <div>
            <h1> Update Form</h1>
            <p>Current Title: {videoData.title} </p>
            <form onSubmit={handleUpdate}>
                <label>New Title: </label>
                <input
                    type="text"
                    name='title'
                    placeholder='Title of Video'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateForm