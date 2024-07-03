function vars(){
    var logo = document.getElementById("logo");
    var youtube = document.getElementById("youtube");
    var triangle = document.getElementById("triangle");
    var facebook = document.getElementById("facebook");
    var instagram = document.getElementById("instagram");
    var outer = document.getElementById("outer");
    var inner = document.getElementById("inner");
    var dot = document.getElementById("dot");
    var twitter = document.getElementById("twitter");
    var line_a = document.getElementById("line_a");
    var line_b = document.getElementById("line_b");
    var line_c = document.getElementById("line_c");
    var down = document.getElementById("down");
}

function links(){
    logo.onclick = function(){
        window.open("INDEX.html","_parent");
    };

    youtube.onclick = function(){
        window.open("https://www.youtube.com/@sabinphuyal2.079");
    };

    triangle.onclick = function(){
        window.open("https://www.youtube.com/@sabinphuyal2.079");
    };

    facebook.onclick = function(){
        window.open("https://www.facebook.com/profile.php?id=61557429841121");
    };

    instagram.onclick = function(){
        window.open("https://www.instagram.com/aaa16484/?hl=en");
    };

    outer.onclick = function(){
        window.open("https://www.instagram.com/aaa16484/?hl=en");
    };

    inner.onclick = function(){
        window.open("https://www.instagram.com/aaa16484/?hl=en");
    };

    dot.onclick = function(){
        window.open("https://www.instagram.com/aaa16484/?hl=en");
    };

    twitter.onclick = function(){
        alert("Link Will Be Available Soon");
    };

    line_a.onclick = function(){
        alert("Link Will Be Available Soon");
    };

    line_b.onclick = function(){
        alert("Link Will Be Available Soon");
    };

    line_c.onclick = function(){
        window.open("updates/update_01.html");
    };

    down.onclick = function(){
        window.open("updates/update_01.html");
    };
}

function random_img(){
    var random_img = Math.ceil(Math.random()*6);

    var gta6 = new Image();
    var cod = new Image();
    var far_cry = new Image();
    var gta5 = new Image();
    var assassins_creed = new Image();
    var watch_dogs = new Image();

    gta6.src = "GTA6.jpg";
    cod.src = "COD.jpg";
    far_cry.src = "FAR_CRY.jpg";
    gta5.src = "GTA5.jpg";
    assassins_creed.src = "ASSASSINS_CREED.jpg";
    watch_dogs.src = "WATCH_DOGS.jpg";
 

    if(random_img == 1){
        gta6.style.position = "absolute";
        gta6.style.left = "70px";
        gta6.style.top = "0%";
        gta6.style.maxWidth = "100%";
        gta6.style.maxHeight = "100%";
        gta6.style.zIndex = -1;

        document.body.appendChild(gta6);
    }

    else if(random_img == 2){
        cod.style.position = "absolute";
        cod.style.left = "70px";
        cod.style.top = "0%";
        cod.style.maxWidth = "100%";
        cod.style.maxHeight = "100%";
        cod.style.zIndex = -1;

        document.body.appendChild(cod);
    }

    else if(random_img == 3){
        far_cry.style.position = "absolute";
        far_cry.style.left = "70px";
        far_cry.style.top = "0%";
        far_cry.style.maxWidth = "100%";
        far_cry.style.maxHeight = "100%";
        far_cry.style.zIndex = -1;

        document.body.appendChild(far_cry);
    }

    else if(random_img == 4){
        gta5.style.position = "absolute";
        gta5.style.left = "70px";
        gta5.style.top = "0%";
        gta5.style.maxWidth = "100%";
        gta5.style.maxHeight = "100%";
        gta5.style.zIndex = -1;

        document.body.appendChild(gta5);
    }

    else if(random_img == 5){
        assassins_creed.style.position = "absolute";
        assassins_creed.style.left = "70px";
        assassins_creed.style.top = "0%";
        assassins_creed.style.maxWidth = "100%";
        assassins_creed.style.maxHeight = "100%";
        assassins_creed.style.zIndex = -1;

        document.body.appendChild(assassins_creed);
    }

    else if(random_img == 6){
        watch_dogs.style.position = "absolute";
        watch_dogs.style.left = "70px";
        watch_dogs.style.top = "0%";
        watch_dogs.style.maxWidth = "100%";
        watch_dogs.style.maxHeight = "100%";
        watch_dogs.style.zIndex = -1;

        document.body.appendChild(watch_dogs);
    }
}

function detect(){
    var user_status = navigator.onLine;
    var java = navigator.javaEnabled;

    if(user_status){
        console.log("User is Currently Online");
    }

    else{
        alert("User is Currently Offline")
    }

    if(java){
        console.log("Java is Enabled");
    }

    else{
        alert("Java is Disabled");
    }
}

function popup(){
    var pop = document.createElement("div");
    pop.style.width = "500px";
    pop.style.height = "130px";
    pop.style.background = "pink";
    pop.style.position = "absolute";
    pop.style.left = "415px";
    pop.style.top = "10px";
    pop.style.borderRadius = "30px";
    pop.style.border = "5px solid black";
    pop.style.fontSize = "40px";
    pop.style.textAlign = "center";
    pop.style.alignItems = "center";
    pop.innerText = "Hi User !";
    document.body.appendChild(pop);

    var btn = document.createElement("div");
    btn.style.width = "100px";
    btn.style.height = "50px";
    btn.style.background = "skyblue";
    btn.style.position = "absolute";
    btn.style.left = "615px";
    btn.style.top = "70px";
    btn.style.borderRadius = "30px";
    btn.style.border = "5px solid black";
    btn.innerText = "OK";
    btn.style.fontSize = "40px";
    btn.style.textAlign = "center";
    btn.style.alignContent = "center";
    btn.style.alignItems = "center";
    document.body.appendChild(btn);

    btn.onclick = function(){
        pop.style.display = "none";
        btn.style.display = "none";
    };
}

vars();
links();
popup();

setInterval(random_img,1200);
setInterval(detect,5000);

