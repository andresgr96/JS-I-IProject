var Repositories = require('./../js/Repos.js').repoModule;

$(document).ready(function(){
  var Repo = new Repositories;
  $('#butt').click(function(){
    var userName = $('#name').val();
    Repo.getRepositories(userName);
  });
});
