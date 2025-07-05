function loader_timer_ii(){

    var bl_01 = document.getElementById("loader_logoo")
     var bl_02 = document.getElementById("loader_bgg")

    setTimeout(function(){
        bl_01.style.filter = "blur(1px)"
    },100);

       setTimeout(function(){
        bl_01.style.filter = "blur(3px)"
    },400);

       setTimeout(function(){
        bl_01.style.filter = "blur(5px)"
    },800);

       setTimeout(function(){
        bl_01.style.filter = "blur(8px)"
    },1000);

       setTimeout(function(){
        bl_01.style.filter = "blur(10px)"
    },1400);

         setTimeout(function(){
        bl_01.style.display = "blur(15px)"
    },1800);

       setTimeout(function(){
        bl_01.style.display = "None"
    },2000);

    //Next 

        setTimeout(function(){
        bl_02.style.filter = "blur(1px)"
    },100);

       setTimeout(function(){
        bl_02.style.filter = "blur(3px)"
    },400);

       setTimeout(function(){
        bl_02.style.filter = "blur(5px)"
    },800);

       setTimeout(function(){
        bl_02.style.filter = "blur(8px)"
    },1000);

       setTimeout(function(){
        bl_02.style.filter = "blur(10px)"
    },1400);

       setTimeout(function(){
        bl_02.style.display = "blur(15px)"
    },1800);

          setTimeout(function(){
        bl_02.style.display = "None"
    },2000);

             setTimeout(function(){
                window.open("update_04.html","_parent")
    },2400);

}

loader_timer_ii()