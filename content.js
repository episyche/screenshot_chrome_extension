

document.addEventListener('click', function (e) {
    if (chrome.runtime) {
        chrome.runtime.sendMessage({ action: 'click', }, function (response) {
            console.log(response)
        })

    }

}, false)