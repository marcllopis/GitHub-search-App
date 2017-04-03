
// i call the button with that ID (it's on Jquery, need to be changed for plain JS)
$( "#github-user" ).on('click', function() {

  $("#github-info").empty(); // i clean the div, so if i look for another user, the last will disappear

  var username = prompt("give me a github user name: "); // i ask for the user repo name
  var requestURL = `https://api.github.com/users/${username}`; // that's the url that will give me the JSON of the user
  var requestURLRepos = `https://api.github.com/users/${username}/repos`; // that's the url that will give me the JSON of the repos of the user
  var request = new XMLHttpRequest(); // i assign the method to a variable

  request.open('GET', requestURL, true); // i call the method GET ( we need to get some info) on the url i wrote before

  request.onload = function() {  // when i get a request, i load the following function
     if (request.status >= 200 && request.status < 400) {  //if the request status is a number between 200 and 400 it means that it returns something good
       var data = JSON.parse(request.responseText); // i convert the response from the request into a JSON file so i'll be able to access it as a normal object
       console.log(data)
       console.log(data.id)

       $("#github-info").append("<img style='width:150px; height:auto;' src=" + data.avatar_url + "/>" + "User Name : " + data.login + " <h3>Repositories</h3><br>"); // i append to an empty div the information i want (i'm calling this with Jquery, needs to be changed to plain JS)

     } else {
       console.log("error") // if there is no response, here we should print some error message instead of console.log that
     }
   };

   request.send(); // i send the request


// next lines are the same for the repos part

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
      }
    };

   request2.send();

});


// --------------------------------
