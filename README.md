# 🛡️ ScreenGuard - FRONT END   ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/angelalita77/Capstone-ScreenGuard-FE?plastic&color=667eea&logo=github)


A parent-controlled YouTube video curation platform...
## 📋 Project Overview
The ScreenGuard frontend is a React-based single-page application (SPA) that enables parents to search YouTube videos, curate approved content, and manage a safe video library for children. Due to time constraints, the current implementation focuses on core video management functionality without full authentication.

## ✨ Features
- YouTube Video Search - Search and preview YouTube videos using the YouTube Data API
- Approval System - Add videos to your approved library with a single click
- Dashboard Management - View, update, and delete videos from your approved collection
- Kid-Friendly Interface - Clean, simple approved videos page for children to browse
- Video Editing - Customize video titles to make them more appropriate or descriptive
- Direct YouTube Links - Watch approved videos directly on YouTube with one click

## Link to my Back-End Repo
### [ScreenGuard Back-End](https://github.com/angelalita77/Capstone-ScreenGuard-BE)<br/><br/>

### Home Page
You can search for videos on Youtube and add them to the Approved (videos) page.<br>
 <img src="public/screenshots/screenguard screenshot.jpg" style="width:350px; border-radius:10px;" alt="My Image">

### Dashboard Page
This will list the videos that have been added to the Approved page. This is intended for the parent to be able to delete or edit the title of the videos
that have been placed in the approved page.
<img src="public/screenshots/dashboard screenshot.jpg" style="width:350px; border-radius:10px;" alt="My Image">

### Approved Page
In the approved page list the videos that can be viewed. 
If you click on the thumbnail of the video, it will take you to the Youtube page where the video can be played.
<img src="public/screenshots/approved screenshot.jpg" style="width:350px; border-radius:10px;" alt="My Image">

## Technology Stack
- Framework: React 18 with Vite
- Routing: React Router v6
- HTTP Client: Axios
- Styling: CSS (modular component-based)
- External API: YouTube Data API v3

## ⚙️ Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn
- YouTube Data API key
- Backend API server running on http://localhost:3000

## 🛠️ Tech Stack

**Frontend:**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Backend:**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

**APIs:**

![YouTube](https://img.shields.io/badge/YouTube_API-FF0000?style=for-the-badge&logo=youtube&logoColor=white)



## Installation

Clone the repository

`git clone <your-repo-url>`
`cd screenguard_fe`

### Install dependencies

`npm install`

### Configure API Key

Open src/pages/HomePage/Home.jsx
Replace the apiKey value with your own YouTube Data API key:

Ensure backend server is running

The application expects a backend API at http://localhost:3000/api/videos/
Make sure your backend server is configured and running
Start the development server

`npm run dev`

Open your browser and navigate to the local development URL (typically http://localhost:5173)

## HTTP Methods Used:
`GET: Fetch all videos` (Dashboard, Approved) <br>
`POST: Add new video into Approved Page` (DisplayVideo)  <br>
`PUT: Update video title` (UpdateForm) <br>
`DELETE: Remove video` (Dashboard) <br>

## `API Endpoints
The frontend connects to the following backend endpoints:

`GET /api/videos/` - Fetch all approved videos
`POST /api/videos/` - Add a new video to the approved list
`PUT /api/videos/:id` - Update video information
`DELETE /api/videos/:id` - Remove a video from the approved list

## 📁 Project Structure
<img src="public/screenshots/project structure.jpg" style="width:300px; border-radius:10px;" alt="My Image">



## Contributing
## This is a Perscholas Capstone
Version 1.0, 08/14/23

## Introduction
This document will remind you of the requirements of the course Capstone Project (CP), and give you final tasks to work towards for its completion.
Capstone Objective
Create a full-stack web application using MongoDB, Express, React, and Node (MERN).

#### License
All Rights Reserved

#### Author
Created with ❤️ for parents who want safer YouTube experiences for their children.

## 🙏 Acknowledgments
Perscholas Instructor: https://github.com/comeaudc <br>
Perscholas Assitant Instructor: https://github.com/NConstance <br>
YouTube Data API for video search functionality <br>
React community for excellent documentation and tools <br>



## References
### [YouTube API Reference](https://developers.google.com/youtube/v3/docs/?apix=true)
[How To Make A Search Bar Using HTML And CSS In 10 Just Minutes](https://www.youtube.com/watch?v=9hnJsNIBq1g)
