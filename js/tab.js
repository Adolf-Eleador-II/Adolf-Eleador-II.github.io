
document.getElementById("defaultOpen").click();

function openTab(evt, openTab) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("contentTab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("buttonTab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(openTab).style.display = "flex";
    evt.currentTarget.className += " active";
}
