
function chageInviteCow(element){
    var elementCow = element.closest("div").querySelector(".cardCow");
    elementCow.src = element.value;
}

function addInviteCard(){
    var name = document.getElementById("nameUserInvite");
    var avatar = document.getElementById("avatarUserInvite");
    var cow = document.getElementById("nameUserCowInvite");

    addCard(avatar.value, name.value, cow.value);
}

function closeInviteButton(){
    var sInvite = document.querySelector(".sInvite");
    sInvite.style.display = "none";
}

function openInviteButton(){
    var sInvite = document.querySelector(".sInvite");
    sInvite.style.display = "flex";
}