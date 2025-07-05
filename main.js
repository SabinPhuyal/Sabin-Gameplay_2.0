function click(){
    var loader_video = document.getElementById("loader_video");

    loader_video.addEventListener("click",function(){
        window.open("nx.html","_parent")
    });
}

click();