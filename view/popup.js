var matchUrl = 'youtube.com/watch';
var rows = $('#rows');
var masterTabList = null;

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
    masterTabList = matchedTabs;
    return matchedTabs;
}

function getTabName(tabs) {
    $.map(tabs, function(tab, index){
        $(('<tr class=\'YoutubeTab\'><td><h5>')+(tab.title)+('</h5></td><td><button tabIndex =\'' + index + '\' class=\'PlayPause\'><img src=\'../asset/play.png\'/></button></td></tr>')).appendTo('.mediaControl');
    });
}

$(document).on('click', '.PlayPause', function(event){
    var me = this;
});

//TODO Bind event to tab rearrangement so that we can update our tab indices properly