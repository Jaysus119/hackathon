body.prepend(rubberDuck);

rubberDuck.addEventListener('click', (e) => {
    chrome.action.setPopup({ popup: "" });
})

// rubberDuck.addEventListener('click', (e) => {
//     chrome.action.setPopup({ popup: "" });
// })
