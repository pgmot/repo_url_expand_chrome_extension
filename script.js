var timer = 0;
document.addEventListener('DOMNodeInserted', function(){
  if(timer) return;
  timer = setTimeout(function(){
    timer = 0;
    $("li.iterable-item span.repo-name").each(function(){
      if(!$(this).children('input')[0]){
        var ownerRepo = $(this).children("a.execute").text();
        var splits = ownerRepo.split("/");
        var repoUrl = "git@bitbucket.org:" + splits[0] + "/" + splits[1] + ".git";
        $(this).append("<input type='text' class='clone-url-input' readonly='readonly' style='width: 500px;' value='" + repoUrl.replace(/ /g, "") + "'>");
        console.log(this);
      }
    });
  }, 3000);
}, false);
