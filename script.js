const rubberDuckURL = chrome.runtime.getURL("images/rubberDuck-720.png")

const rubberDuck = document.createElement('img');
rubberDuck.src = rubberDuckURL;
rubberDuck.style.position = "absolute";
rubberDuck.style.zindex = "2147483647"

const body = document.querySelector('body');