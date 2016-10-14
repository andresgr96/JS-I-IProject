var Repos = require('./../js/Repos.js').repoModule;

$(document).ready(function(){
  var cRepo = new Repositories;
  $('#getRepos').click(function(){
    var userName = $('#name').val();
    Repo.getRepositories(userName);
  });
});
