export default function Home(){
    return (
           <div>
        {/* <!-- Search Bar with Button --> */}
        <div id="search-section">
            <input type="text" id="search-input" placeholder="Search for videos ..." />
            <button id="search-btn">Search</button>
        </div>

        {/* <!-- Search result info will be displayed under search bar --> */}
        <div id="video-results">
        </div>

        {/* <!-- Videos Recieved Container --> */}
        <div id="player-container">
            <div>
                {/* <!-- Videos within iframe tags here --> */}
            </div>
        </div>

    </div>
    )

}