var timer = 0;
document.addEventListener('DOMNodeInserted', function(){
  if(timer) return;
  timer = setTimeout(function(){
    timer = 0;
    $("li.iterable-item span.repo-name").each(function(){
      if(!$(this).children('input')[0]){
        var ownerRepo = $(this).children("a.execute").text();
        var splits = ownerRepo.replace(/ /g, "").split("/");
        var teamname = splits[0];
        var repo = splits[1];
        if(typeof repo === "undefined"){
          teamname = $("span.username").text().replace(/\(|\)/g, "");
          repo = splits[0];
        }

        var repoUrl = "git@bitbucket.org:" + teamname + "/" + repo + ".git";
        $(this).append("<input type='text' class='clone-url-input' readonly='readonly' style='width: 500px;' value='" + repoUrl + "'>");
      }
    });
  }, 3000);
}, false);
