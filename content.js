let startTime = Date.now();
let currentSite = window.location.hostname;

window.addEventListener("beforeunload", () => {
  let timeSpent = Date.now() - startTime;
  chrome.storage.local.get(["usage"], (data) => {
    const usage = data.usage || {};
    usage[currentSite] = (usage[currentSite] || 0) + timeSpent;
    chrome.storage.local.set({ usage });
  });
});
