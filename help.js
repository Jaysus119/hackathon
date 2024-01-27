// chrome.action.onClicked.addListener(async (tab) => {
//     console.log('clicked');
//       const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//       const nextState = prevState === 'ON' ? 'OFF' : 'ON';
//       await chrome.action.setBadgeText({
//           tabId: tab.id,
//           text: nextState,
//         });

//     chrome.scripting.executeScript({
//         files: ["script.js"],
//         target: { tabId: tab.id },
//     });

        
//     if (nextState === "ON") {
//             // Insert the CSS file when the user turns the extension on
//       await chrome.scripting.executeScript({
//         files: ["onscript.js"],
//         target: { tabId: tab.id },
//       });
//     } 
//     else if (nextState === "OFF") {
//       // Remove the CSS file when the user turns the extension off
//       await chrome.scripting.executeScript({
//         files: ["offscript.js"],
//         target: { tabId: tab.id },
//       });
//     }
// });

document.addEventListener('DOMContentLoaded', (e) => {

    const body = document.querySelector('body');

    const replies = ["Snuggle with the struggle.", 
                    "Trust the process.", 
                    "Don't let the imposter monster get you.", 
                    "👀👀👀👀👀👀", 
                    "Keep trying! There's a pile of Mattbucks waiting for.", 
                    "Read the documentation."];

    function generateReply() {
        const index = Math.floor(Math.random() * replies.length);
        const reply = replies[index];
        return reply;
    };

    function displayReply() {
        const reply = generateReply();
        const replyElement = document.createElement('p');
        replyElement.innerText = reply;
        body.appendChild(replyElement);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        displayReply();
    });

});