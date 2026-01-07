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
        const player = event.target;
        player.setVolume(20);

        // Try to auto-play
        player.playVideo();

        // If browser blocks autoplay with sound, we need a fallback:
        // Listen for any user interaction on the page to trigger play
        const unlockAudio = () => {
            if (player && typeof player.playVideo === 'function') {
                player.playVideo();
                player.unMute();
            }
            // Remove listeners once done
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
        };

        document.addEventListener('click', unlockAudio);
        document.addEventListener('touchstart', unlockAudio);
        document.addEventListener('keydown', unlockAudio);
    };

    return (
        <div className="fixed bottom-0 right-0 z-0 opacity-0 pointer-events-none">
            <div id="background-music-player"></div>
        </div>
    );
};

export default BackgroundMusic;
