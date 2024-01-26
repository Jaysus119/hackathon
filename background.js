chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });
  
  chrome.action.onClicked.addListener(async (tab) => {
      const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
      const nextState = prevState === 'ON' ? 'OFF' : 'ON';
      await chrome.action.setBadgeText({
          tabId: tab.id,
          text: nextState,
        });

    chrome.scripting.executeScript({
        files: ["script.js"],
        target: { tabId: tab.id },
    });

        
    if (nextState === "ON") {
            // Insert the CSS file when the user turns the extension on
      await chrome.scripting.executeScript({
        files: ["onscript.js"],
        target: { tabId: tab.id },
      });
    } 
    else if (nextState === "OFF") {
      // Remove the CSS file when the user turns the extension off
      await chrome.scripting.executeScript({
        files: ["offscript.js"],
        target: { tabId: tab.id },
      });
    }
});
 
