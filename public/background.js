let activeDomain = '';
let activeStart = Date.now();
let domainTimes = {};

function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

function updateTime() {
  const timeSpent = Math.floor((Date.now() - activeStart) / 1000);
  if (activeDomain) {
    domainTimes[activeDomain] = (domainTimes[activeDomain] || 0) + timeSpent;
    chrome.storage.local.set({ today_domains: domainTimes });
  }
  activeStart = Date.now();
}

chrome.tabs.onActivated.addListener(async (info) => {
  updateTime();
  const tab = await chrome.tabs.get(info.tabId);
  activeDomain = getDomain(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    updateTime();
    activeDomain = getDomain(tab.url);
  }
});

chrome.windows.onFocusChanged.addListener(() => {
  updateTime();
});
