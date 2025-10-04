(function() {
    // Check if extension is in development mode (unpacked extension)
    const IS_DEV_MODE = !('update_url' in chrome.runtime.getManifest());

    // Logging only in development mode
    const log = (...args) => {
        if (IS_DEV_MODE) {
            console.log("[Next, please]", ...args);
        }
    };

    let autoScrollEnabled = true;

    // Load setting from chrome.storage
    chrome.storage.sync.get(['autoScrollEnabled'], (result) => {
        autoScrollEnabled = result.autoScrollEnabled !== false; // Enabled by default
        log(`Auto-scroll is ${autoScrollEnabled ? 'enabled' : 'disabled'}`);
    });

    // Listen for setting changes
    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'sync' && changes.autoScrollEnabled) {
            autoScrollEnabled = changes.autoScrollEnabled.newValue;
            log(`Auto-scroll setting changed to ${autoScrollEnabled ? 'enabled' : 'disabled'}`);
        }
    });

    function getVideo() {
        const videos = document.querySelectorAll("video[src]");

        if (videos.length === 1) {
            const video = videos[0];
            if (video instanceof HTMLVideoElement) {
                return video;
            }
        } else if (videos.length === 0) {
            log("No video found. Retrying in 1s...");
            setTimeout(initAutoNext, 1000);
            return null;
        } else {
            log(`Warning: Found ${videos.length} video elements with src attribute. Using first one.`);
            return videos[0];
        }
    }

    function initVideo(video) {
        video.autoplay = false;
        video.loop = false;
    }

    function goNext() {
        if (!autoScrollEnabled) {
            log("Auto-scroll is disabled. Skipping...");
            return;
        }

        const navDownBtn = document.querySelector("#navigation-button-down button");

        if (navDownBtn) {
            log("Shorts down button found. Clicking...");
            navDownBtn.click();
        } else {
            log("Shorts down button not found. No action taken.");
        }
    }

    function initAutoNext() {
        const video = getVideo();

        if (!video) {
            return;
        }

        log("Video found. Setting up event listeners...");

        // Initialize video settings
        initVideo(video);

        // Handle video end event
        video.addEventListener("ended", () => {
            log("Video ended. Going to next...");
            goNext();
        });

        // Reinitialize settings when video changes
        video.addEventListener("progress", () => {
            initVideo(video);
        });

        log("Event listeners attached.");
    }

    initAutoNext();
})();

