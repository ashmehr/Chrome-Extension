var matchUrl = 'youtube.com/watch';
var rows = $('#rows');

chrome.tabs.query({windowType:'normal'}, function(tabs) {
    var youtubeTabs = countYoutube(tabs);
    getTabName(youtubeTabs);
});

function countYoutube(tabs) {
    var matches = 0;
    var matchedTabs = [];
    for (i=0; i < tabs.length; i++) {
        var pageUrl = tabs[i].url;
        if (pageUrl.includes(matchUrl)) {
            matches++;
            matchedTabs.push(tabs[i]);
        }
    }
    $(('<h5> youtube tabs: ')+(matches)+('</h5>')).appendTo('body');
    return matchedTabs;
}

function getTabName(tabs) {
    for (i = 0; i < tabs.length; i++) {
        $(('<h5>')+(tabs[i].title)+('</h5>')).appendTo('body');
    }
}
