
function getRandomId() {
    id=1000+Math.floor(Math.random() * 8999);
    return id;
}

function addCard(avatar, name, cow) {
    
    var avatarImg = createElementClassId("img","cardAvatar");
    if(avatar)
    avatarImg.src = avatar;
    else
    avatarImg.src = "avatar/avatar0.jpg";

    var nameUser = createElementClassId("p","left cardNameUser");
    if(name)
    nameUser.textContent = name;
    else
    nameUser.textContent = "Name User";

    var cowImg = createElementClassId("img","cardCow");
    cowImg.src = cow;

    var idCardNumber = getRandomId();

    

    var avatarPart = createElementClassId("div","left cardText");
    avatarPart.append(avatarImg);
    
    var avatarPartText = createElementClassId("div","column");
    avatarPartText.append(nameUser);
    var avatarPartTextId = createElementClassId("p","left");
    avatarPartTextId.textContent = "ID: " + idCardNumber;
    avatarPartText.append(avatarPartTextId);

    avatarPart.append(avatarPartText);

    

    var cowPart = createElementClassId("div","cardCowImg");
    cowPart.append(cowImg);

    

    var removeImg = document.createElement("img");
    removeImg.src = './img/remove.svg';

    var removeText = document.createElement("p");
    removeText.textContent = "Remove This Cow";

    var removePart;
    removePart = createElementClassId("div","right cardText");
    removePart.append(removeImg, removeText);
    removePart.setAttribute("onclick", "removeCardId('" + idCardNumber + "')");

    

    var cardCollectionGrass = document.getElementById("yourPasture").querySelector("div.cardCollection");

    var card = createElementClassId("div", "column cardGrassContent");
    card.append(avatarPart, cowPart, removePart);
    
    var cardGrass = createElementClassId("div","card cardGrass");
    cardGrass.id = "" + idCardNumber;
    cardGrass.append(card);
    
    cardCollectionGrass.append(cardGrass);
}

function createElementClassId(element,elementClass){
    var newElement = document.createElement(element);
    if(elementClass!=null){
        newElement.className = elementClass;
    }
    return newElement;
}

function removeCardId(id){
    var elementRemove = document.getElementById(id);
    if(elementRemove){
        elementRemove.remove();
    }
}









