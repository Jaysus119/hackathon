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
                    "Keep trying! There's a pile of Mattbucks waiting for you.", 
                    "Read the documentation."];

    const codesmithStaff = ['Matt Severyn',
                            'Rachel Kucharaski',
                            'Charlie Charboneau',
                            'Robert Hoover',
                            'Renee Toscan',
                            'Lucas Contreras',
                            'Jay Kura',
                            'Chandler'];

    function generateReply(inputArr) {
        const index = Math.floor(Math.random() * replies.length);
        const output = inputArr[index];
        return output;
    };

    function displayReply() {
        const reply = generateReply(replies);
        // const replyElement = document.createElement('p');
        // body.appendChild(replyElement);
        const ticketHandler = generateReply(codesmithStaff)
        const textToType = `${ticketHandler} is typing...`;
  
        const typingText = document.getElementById('typing-text');

        function typeText(index) {
            typingText.textContent = textToType.slice(0, index);
            if (index <= textToType.length) {
                // Start typing animation
                typingText.style ='animation: blink 1s infinite';
                setTimeout(() => typeText(index + 1), 70);
            } else {
                // Typing animation finished, remove text and styling
                setTimeout(() => typingText.removeAttribute('style'), 5000);
                setTimeout(() => typingText.innerText = '', 5000);
                setTimeout(() => typingText.innerText = reply, 5000);
            }
        }

        typeText(0);
};

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        displayReply();
    });

});