const toggle = document.getElementById('autoScrollToggle');
const status = document.getElementById('status');

chrome.storage.sync.get(['autoScrollEnabled'], (result) => {
    toggle.checked = result.autoScrollEnabled !== false;
});

toggle.addEventListener('change', () => {
    const enabled = toggle.checked;

    chrome.storage.sync.set({ autoScrollEnabled: enabled }, () => {
        status.textContent = enabled ? 'auto scroll enabled' : 'auto scroll disabled';
        status.className = enabled ? 'status success' : 'status disabled';

        setTimeout(() => {
            status.textContent = '';
            status.className = 'status';
        }, 2000);
    });
});
