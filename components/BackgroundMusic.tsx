import React, { useEffect } from 'react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

const BackgroundMusic: React.FC = () => {
    useEffect(() => {
        // 1. Load the YouTube IFrame Player API code asynchronously.
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // 2. Create an <iframe> (and YouTube player) after the API code downloads.
        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('background-music-player', {
                height: '0',
                width: '0',
                videoId: 'J_cVLX6DjWg', // Bad Bunny - Un Coco
                playerVars: {
                    'playsinline': 1,
                    'autoplay': 1,
                    'loop': 1,
                    'playlist': 'J_cVLX6DjWg',
                    'controls': 0,
                    'disablekb': 1
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
        };

        return () => {
            // Cleanup if needed
            window.onYouTubeIframeAPIReady = () => { };
        };
    }, []);

    // 3. The API will call this function when the video player is ready.
    const onPlayerReady = (event: any) => {
        event.target.setVolume(20); // Set volume to 20% ("muy suavemente")
        event.target.playVideo();
    };

    return (
        <div className="fixed bottom-0 right-0 z-0 opacity-0 pointer-events-none">
            <div id="background-music-player"></div>
        </div>
    );
};

export default BackgroundMusic;
