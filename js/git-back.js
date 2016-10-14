var apiKey = require('./../.env').apiKey;

function Repositories(){
}

Repositories.prototype.getRepositories = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $(".user").text(response.login);
    }).fail(function(error){
    console.log(error.responseJSON.message);
    $(".user").text("User not Found");
  });

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $(".userRepos").text("");
    for(var i=0; i<response.length;i++){
      $(".userRepos").append("<li class='userRepo'>" + response[i].name + "<ul><li class='dateOfRepo'>" + response[i].created_at +  "<li class='description'>" + response[i].description + "</li></ul>" + "</li>")
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.repoModule = Repositories;
