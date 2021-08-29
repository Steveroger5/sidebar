let hidden = 0;
document.getElementById("icon-toggle").style.transition = "all 1.5s";
document.getElementById("sidebar").style.transition = "all 1.5s";
document.getElementById("collapse").addEventListener("click", function(){ 
    if(hidden===0){
        document.getElementById("sidebar").style.marginLeft="-150%";
        document.getElementById("icon-toggle").style.color="black";
        hidden = 1;
    }
    else{
        document.getElementById("sidebar").style.marginLeft="0";
        document.getElementById("icon-toggle").style.color="#fff";
        hidden = 0;
    }
 });