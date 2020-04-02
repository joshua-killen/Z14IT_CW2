function sevenDrop() {
    document.getElementById("sevenDrop").classList.toggle("osiOshow");
}

function webDrop() {
    document.getElementById("webDrop").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.sevenBtn')) {
        var myDropdown = document.getElementById("sevenDrop");
        if (myDropdown.classList.contains('osiOshow')) {
            myDropdown.classList.remove ('osiOshow');
        }
    }else if (!e.target.matches('.webDropBtn')) {
        var myDropdown = document.getElementById("webDrop");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}