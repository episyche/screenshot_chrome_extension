console.log("&&&&&&&&&&&&&&&&&&&&&&")


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.tabs.captureVisibleTab(async (screenshotUrl) => {
        if (screenshotUrl) {
            console.log("&&&&&&&&&&&&&&&&&&&&&&", chrome)
            chrome.downloads.download({
                url: screenshotUrl, // URL.createObjectURL converts the Blob to a downloadable URL
                filename: "screenshot.png",
                saveAs: true, // Prompt the user to choose a download location
            });
            // saveAs(blobdata, 'image.png')
            createTab = await chrome.tabs.create({
                url: chrome.runtime.getURL('notes.html'),
                pinned: true,
                active: true,
            });
        }
    })
    sendResponse({ farewell: "Screenshot Taken" });
})

function base64ToBlob(base64) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: "image/png" });
}

// function base64ToBlob(base64, contentType) {
//     contentType = contentType || 'image/png';
//     const byteCharacters = atob(base64);
//     const byteArrays = [];

//     for (let offset = 0; offset < byteCharacters.length; offset += 512) {
//         const slice = byteCharacters.slice(offset, offset + 512);

//         const byteNumbers = new Array(slice.length);
//         for (let i = 0; i < slice.length; i++) {
//             byteNumbers[i] = slice.charCodeAt(i);
//         }

//         const byteArray = new Uint8Array(byteNumbers);
//         byteArrays.push(byteArray);
//     }

//     return new Blob(byteArrays, { type: contentType });
// }