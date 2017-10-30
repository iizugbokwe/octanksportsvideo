var SelectedVideo = "";

// Get the VODList
var requestURL = 'https://yyy61qdrdh.execute-api.us-east-1.amazonaws.com/api/GetVODList';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

SetVideo = function(SelectedSource) {
  //Set the VideoPlayer source file
  var video = document.getElementById('VideoPlayer');
  var source = document.createElement('source');

  source.setAttribute('src', "https://s3.amazonaws.com/octanksportsvideo-output/" + SelectedSource + "/web-720p.mp4");

  video.appendChild(source);
  video.play();
}

//Once request returns, print the VOD List
request.onload = function() {
  var VideoList = request.response;
  SelectedVideo = VideoList[0].FileName.split('.')[0];
  // document.getElementById("VideoList").innerHTML = JSON.stringify(VideoList);
  SetVideo(SelectedVideo);



  // Print out video list
  for (i = 0; i < VideoList.length; i++)
  {
  	var listitem = document.createElement("LI");  // Create a <li> node
  	var VidName = document.createTextNode(VideoList[i].FileName.split('.')[0]); // Create a text node
  	listitem.appendChild(VidName);
    //Create a play button
    var span = document.createElement('span');
    // span.innerHTML = '<button id="but' + i +'" onclick="SetVideo("' + VideoList[i].FileName.split('.')[0] +'")">Play</button>';
    // var btn = document.createElement("BUTTON");
    // var btn_txt = document.createTextNode("Play");
    // btn.appendChild(btn_txt);
    // btn.addEventListener('click', SetVideo("bridge"));
    //Add the button to the list.
    listitem.appendChild(span);
  	document.getElementById("VideoList").appendChild(listitem); ///append Item
  }






  // // Print out video list
  // for (i = 0; i < VideoList.length; i++)
  // {
  // 	var row = document.createElement("TR");  // Create a <li> node
  //   var name = document.createElement("TD");
  //   name.innerHTML = VideoList[i].FileName.split('.')[0]
  // 	row.appendChild(name);
  //   //Create a play button
  //   var play = document.createElement("TD");
  //   play.innerHTML = '<button id="but' + i +'" onclick="SetVideo("' + VideoList[i].FileName.split('.')[0] +'")">Play</button>';
  //   row.appendChild(play);


  //   // Get Votes for Video
  //   var requestURL = 'https://nfvog8i07b.execute-api.us-east-1.amazonaws.com/api/GetVoteTotals/' + VideoList[i].VideoID;
  //   var request = new XMLHttpRequest();
  //   request.open('GET', requestURL);
  //   request.responseType = 'json';
  //   request.send();
  //   request.onload = function() {
  //     var Voteresponse = request.response;}
  //   // Create Vote Field
  //   var votes = document.createElement("TD");
  //   votes.innerHTML = "YES; " + Voteresponse.votes.YES;
  // 	document.getElementById("VideoList2").appendChild(row); ///append Item
  // }
}
