function clickAction(){
    var menu = document.getElementById("menu")
    menu.classList.toggle("hidden")  
}

window.onresize = function() {
    if (this.window.innerWidth >= 820){
        var menu = document.getElementById("menu")
        menu.classList.add("hidden")  
    }
};