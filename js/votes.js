//Get the vote totals for the currently playing video

var CurrentlyPlayingVideo = document.getElementById('VideoPlayer').source;
var VoteDisplay = document.getElementById('VoteDisplay');

VoteDisplay.innerHTML = CurrentlyPlayingVideo;


// Get the Vote Totals from API
var requestURL = 'https://nfvog8i07b.execute-api.us-east-1.amazonaws.com/api/GetVoteTotals/' + VideoList[i].1509305748286-aksqtc;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
