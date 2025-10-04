# Next, please

A Chrome extension that automatically plays the next YouTube Short when the current one ends.

## Features

- 🎬 Auto-play next YouTube Short when current video ends
- 🎛️ Simple toggle to enable/disable auto-scroll
- 🔧 Works seamlessly in the background
- 💾 Remembers your preferences

## Installation

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/Ruberoid/next-please.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the `next-please` directory

5. Navigate to any YouTube Shorts page (e.g., `https://www.youtube.com/shorts/[video_id]`)

6. **If not working immediately, press `Ctrl + R`** on the Shorts page to reload

## Usage

1. Click the extension icon in your Chrome toolbar
2. Toggle the switch to enable/disable auto-scroll
3. Enjoy hands-free YouTube Shorts viewing!

## How It Works

The extension uses the native HTML5 video `ended` event to detect when a Short finishes playing, then automatically clicks the "next" button to load the next Short.

## Development

### Project Structure

```
next-please/
├── manifest.json       # Extension manifest
├── content.js          # Content script (main logic)
├── popup.html          # Extension popup UI
├── popup.js            # Popup logic
├── popup.css           # Popup styles
└── next-please-logo.png # Extension icon
```

### Debug Mode

When running as an unpacked extension (developer mode), the extension logs debug information to the browser console. Check the console on any YouTube Shorts page to see:
- Video detection status
- Event listener setup
- Auto-scroll state changes
- Navigation actions

## Troubleshooting

**Extension not working?**
- Press `Ctrl + R` on the YouTube Shorts page to reload
- Make sure the extension is enabled in `chrome://extensions/`
- Check that you're on a valid Shorts URL: `https://www.youtube.com/shorts/*`

**Video keeps looping?**
- Make sure auto-scroll is enabled in the extension popup
- Check browser console for debug logs (in developer mode)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Author

**ruberoid**

- GitHub: [@Ruberoid](https://github.com/Ruberoid)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
