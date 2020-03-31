function networkDrop() {
    document.getElementById("networkDrop").classList.toggle("show");
}

function webDrop() {
    document.getElementById("webDrop").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.networkDropBtn')) {
    var myDropdown = document.getElementById("networkDrop");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove ('show');
        }
    }else if (!e.target.matches('.webDropBtn')) {
        var myDropdown = document.getElementById("webDrop");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}