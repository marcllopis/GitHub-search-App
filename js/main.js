
// ask for people and print it on screen

$( "#github-user" ).on('click', function() {

  $("#github-info").empty();

  var username = prompt("give me a github user name: ");
  var requestURL = `https://api.github.com/users/${username}`;
  var requestURLRepos = `https://api.github.com/users/${username}/repos`;
  var request = new XMLHttpRequest();

  request.open('GET', requestURL, true);

  request.onload = function() {
     if (request.status >= 200 && request.status < 400) {
       var data = JSON.parse(request.responseText);
       console.log(data)
       console.log(data.id)

       $("#github-info").append("<img style='width:150px; height:auto;' src=" + data.avatar_url + "/>" + "User Name : " + data.login + " <h3>Repositories</h3><br>");

     } else {
       console.log("error")
       // We reached our target server, but it returned an error
     }
   };

   request.send();


   var request2 = new XMLHttpRequest();


   request2.open('GET', requestURLRepos, true);

   request2.onload = function() {
      if (request2.status >= 200 && request2.status < 400) {
        var datta = JSON.parse(request2.responseText);
        console.log(datta)

      for (var i = 0; i < datta.length; i++) {
        $("#github-info").append("<br>Repo Name : <b>" + datta[i].name + "</b> &nbsp;&nbsp;&nbsp; forks: <b>" + datta[i].forks + "</b> &nbsp;&nbsp;&nbsp; watchers : <b>" + datta[i].watchers + "</b><br><br>");
      }

      } else {
        console.log("error")
        // We reached our target server, but it returned an error
      }
    };

   request2.send();

});


// --------------------------------
