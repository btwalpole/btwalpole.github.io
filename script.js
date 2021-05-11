/*
* Changing the image (other colour of same pattern) when a colour button is clicked
*/

const buttons = document.querySelectorAll(".buttons-container .button");

function changeImage(e) {
    if (e.target.innerText == "pastel") {
        let img = document.getElementById("ariel").firstElementChild;
        img.setAttribute('src', images['ariel-pastel'][0]);
        img.setAttribute('id', 'ariel-pastel');
        img.setAttribute('data-img-index', '0');
    } else if (e.target.innerText == "aqua") {
        let img = document.getElementById("ariel").firstElementChild;
        img.setAttribute('src', images['ariel-aqua'][0]);
        img.setAttribute('id', 'ariel-aqua');
        img.setAttribute('data-img-index', '0');
    } else if (e.target.innerText == "red") {
        let img = document.getElementById("ariel").firstElementChild;
        img.setAttribute('src', images['ariel-red'][0]);
        img.setAttribute('id', 'ariel-red');
        img.setAttribute('data-img-index', '0');
    } else if (e.target.innerText == "blush") {
        let img = document.getElementById("cherry-blossom").firstElementChild;
        img.setAttribute('src', images['cherry-blossom-blush'][0]);
        img.setAttribute('id', 'cherry-blossom-blush');
        img.setAttribute('data-img-index', '0');
    } else if (e.target.innerText == "scarlet") {
        let img = document.getElementById("cherry-blossom").firstElementChild;
        img.setAttribute('src', images['cherry-blossom-scarlet'][0]);
        img.setAttribute('id', 'cherry-blossom-scarlet');
        img.setAttribute('data-img-index', '0');
    }
}

function addBorder(e) {
    if (e.target.innerText == "pastel") {
        document.querySelector(".pastel").style.border = "3px solid rgb(240, 240, 240)";
        document.querySelector(".red").style.border = "none";
        document.querySelector(".blue").style.border = "none";
    } else if (e.target.innerText == "red") {
        document.querySelector(".red").style.border = "3px solid rgb(240, 240, 240)";
        document.querySelector(".pastel").style.border = "none";
        document.querySelector(".blue").style.border = "none";
    } else if (e.target.innerText == "aqua") {
        document.querySelector(".blue").style.border = "3px solid rgb(240, 240, 240)";
        document.querySelector(".red").style.border = "none";
        document.querySelector(".pastel").style.border = "none";
    } else if (e.target.innerText == "blush") {
        document.querySelector(".blush").style.border = "3px solid rgb(240, 240, 240)";
        document.querySelector(".scarlet").style.border = "none";
    } else if (e.target.innerText == "scarlet") {
        document.querySelector(".scarlet").style.border = "3px solid rgb(240, 240, 240)";
        document.querySelector(".blush").style.border = "none";
    }
}

buttons.forEach(button => button.addEventListener("click",changeImage));
buttons.forEach(button => button.addEventListener("click",addBorder));

/*
* Changing the image (other lining of same colour&pattern) when right/left buttons are clicked
*/

let images = {
    'afternoon-tea': ['images/afternoontea.jpeg', 'images/afternoonTeaBlush.jpeg', 'images/afternoonTeaHotPink.jpeg'],
    'powerpuff': ['images/powerpuffPink.jpeg', 'images/powerpuffBlue.jpeg', 'images/powerpuffBeige.jpeg', 'images/powerpuffPurple.jpeg'],
    'feather': ['images/feather.jpeg', 'images/featherBlue.jpeg'],
    'monet': ['images/monet.jpeg', 'images/monetPurple.jpeg'],
    'rose': ['images/rose.jpeg', 'images/rosePink.jpeg'],
    'autumn': ['images/autumn.jpeg', 'images/autumnPurple.jpeg'],
    'ariel-aqua': ['images/arielAqua.jpeg', 'images/arielAquaOrange.jpeg', 'images/arielAquaYellow.jpeg'],
    'ariel-red': ['images/arielRedMaroon.jpeg', 'images/arielRed.jpeg', 'images/arielRedPink.jpeg'],
    'ariel-pastel': ['images/arielPastel.jpeg', 'images/arielPastelBlue.jpeg', 'images/arielPastelBlush.jpeg','images/arielPastelPink.jpeg'],
    'cherry-blossom-blush': [ 'images/cherryBlossomBlush.jpeg', 'images/cherryBlossomBlushMaroon.jpeg'],
    'cherry-blossom-scarlet': [ 'images/cherryBlossomScarlet.jpeg', 'images/cherryBlossomScarletBlush.jpeg', 'images/cherryBlossomScarletHotPink.jpeg', 'images/cherryBlossomScarletNavy.jpeg'],
}

const rightButtons = document.querySelectorAll(".image-container > .right");
const leftButtons = document.querySelectorAll(".image-container > .left");

rightButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let img = button.parentElement.firstElementChild;
        let id = img.id; //e.g. id = afternoon-tea

        //if images obj has key = id, e.g. afternoon-tea, set image to be current index plus 1
        if (images.hasOwnProperty(id)) {
            let imgIndex = parseInt(img.getAttribute("data-img-index"));
            let newImgIndex;

            if (imgIndex == (images[id].length - 1)) {
                newImgIndex = 0;
            } else {
                newImgIndex = imgIndex + 1;
            }
            
            newImgIndexStr = newImgIndex.toString();
            img.setAttribute("data-img-index", newImgIndexStr);
            img.setAttribute("src", images[id][newImgIndex]);
        }
    })
});

leftButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let img = button.parentElement.firstElementChild;
        let id = img.id; //e.g. id = afternoon-tea

        //if images obj has key = id, e.g. afternoon-tea, set image to be current index minus 1
        if (images.hasOwnProperty(id)) {
            let imgIndex = parseInt(img.getAttribute("data-img-index"));
            let newImgIndex;

            if (imgIndex == 0) {
                newImgIndex = images[id].length - 1;
            } else {
                newImgIndex = imgIndex - 1;
            }
            
            newImgIndexStr = newImgIndex.toString();
            img.setAttribute("data-img-index", newImgIndexStr);
            img.setAttribute("src", images[id][newImgIndex]);
        }
    })
});

//on hover show patterns

let patterns = {
    'afternoon-tea': 'images/patterns/p_afternoonTea.jpg',
    'alaska' : 'images/patterns/p_alaska.jpg',
    'autumn': 'images/patterns/p_autumn.jpg',
    'ariel-aqua' : 'images/patterns/p_aquaAriel.jpg',
    'ariel-red': 'images/patterns/p_arielRed.jpg',
    'ariel-pastel': 'images/patterns/p_arielPastel.jpg',
    'cherry-blossom-blush': 'images/patterns/p_cherryBlossomBlush.jpg',
    'cherry-blossom-scarlet' : 'images/patterns/p_cherryBlossomScarlet.jpg',
    'calypso' : 'images/patterns/p_calypso.jpg',
    'daisy': 'images/patterns/p_daisy.jpg',
    'dragon': 'images/patterns/p_dragon.jpg',
    'feather': 'images/patterns/p_feather.jpg',
    'golden-hour': 'images/patterns/p_goldenHour.jpg',
    'jane': 'images/patterns/p_jane.jpg',
    'seville' : 'images/patterns/p_seville.jpg',
    'powerpuff' : 'images/patterns/p_powerpuff.jpg',
    'monet': 'images/patterns/p_monet.jpg',
    'rose': 'images/patterns/p_rose.jpg',
    'wildflower': 'images/patterns/p_wildflower.jpg',
}

//for every image, add listener => find id, set src to correspoding pattern src

let imgs = document.querySelectorAll('.photo-grid-item img');

imgs.forEach( img => {
    let initalImage = img.getAttribute('src');

    img.addEventListener('mouseover', function() {
        img.setAttribute('src', patterns[img.id]);
    })

    img.addEventListener('mouseout', function() {
        img.setAttribute('src', initalImage);
    })
})

