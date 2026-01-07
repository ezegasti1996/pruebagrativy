import React, { useEffect } from 'react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

const BackgroundMusic: React.FC = () => {
    const playerRef = React.useRef<any>(null);

    useEffect(() => {
        // 1. Load the YouTube IFrame Player API code asynchronously.
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        // 2. Initialize player when API is ready
        const initPlayer = () => {
            window.YT.ready(() => {
                new window.YT.Player('background-music-player', {
                    height: '0',
                    width: '0',
                    videoId: 'J_cVLX6DjWg', // Bad Bunny - Un Coco
                    playerVars: {
                        'playsinline': 1,
                        'autoplay': 1,
                        'controls': 0,
                        'disablekb': 1,
                        'fs': 0,
                        'loop': 1,
                        'playlist': 'J_cVLX6DjWg'
                    },
                    events: {
                        'onReady': onPlayerReady
                    }
                });
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }

        // 3. User Interaction Fallback
        // Browsers block unmuted audio. We start attempting to mute/unmute on first click.
        const handleInteraction = () => {
            const player = playerRef.current;
            if (player && typeof player.playVideo === 'function') {
                player.unMute();
                player.setVolume(20);
                player.playVideo();
                // Remove listeners after successful interaction
                document.removeEventListener('click', handleInteraction);
                document.removeEventListener('touchstart', handleInteraction);
                document.removeEventListener('keydown', handleInteraction);
            }
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);
        document.addEventListener('keydown', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    const onPlayerReady = (event: any) => {
        playerRef.current = event.target;
        // Start playback muted to satisfy browser autoplay policy
        event.target.mute();
        event.target.playVideo();
    };

    return (
        <div className="fixed bottom-0 right-0 z-0 opacity-0 pointer-events-none">
            <div id="background-music-player"></div>
        </div>
    );
};

export default BackgroundMusic;
