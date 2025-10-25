# ScreenGuard - FRONT END

## Project Overview
The ScreenGuard frontend is a React-based single-page application (SPA) that enables parents to search YouTube videos, curate approved content, and manage a safe video library for children. Due to time constraints, the current implementation focuses on core video management functionality without full authentication.

## Features
- YouTube Video Search - Search and preview YouTube videos using the YouTube Data API
- Approval System - Add videos to your approved library with a single click
- Dashboard Management - View, update, and delete videos from your approved collection
- Kid-Friendly Interface - Clean, simple approved videos page for children to browse
- Video Editing - Customize video titles to make them more appropriate or descriptive
- Direct YouTube Links - Watch approved videos directly on YouTube with one click

## Link to my Back-End Repo
### [ScreenGuard Back-End](https://github.com/angelalita77/Capstone-ScreenGuard-BE)<br/><br/>

## Screenshot
![Home Page](public/screenguard%20screenshot.jpg)

## Technology Stack
- Framework: React 18 with Vite
- Routing: React Router v6
- HTTP Client: Axios
- Styling: CSS (modular component-based)
- External API: YouTube Data API v3

## HTTP Methods Used:
`GET: Fetch all videos` (Dashboard, Approved) <br>
`GET: Fetch single video` (UpdateForm) <br>
`POST: Add new video into Approved Page` (DisplayVideo)  <br>
`PUT: Update video title` (UpdateForm) <br>
`DELETE: Remove video` (Dashboard) <br>

## Capstone Completion
Version 1.0, 08/14/23
Click here to open in a separate window.

## Introduction
This document will remind you of the requirements of the course Capstone Project (CP), and give you final tasks to work towards for its completion.
Capstone Objective
Create a full-stack web application using MongoDB, Express, React, and Node (MERN).

## References
### [YouTube API Reference](https://developers.google.com/youtube/v3/docs/?apix=true)
