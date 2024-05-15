// var counter = 1;

// setInterval(() => {
//     document.getElementById('radio' + counter).checked = true ;
//     counter++;
//     if(counter > 3){
//         counter = 1;
//         }
// }, 4000);

function updateRadioColors(counter) {
    document.querySelectorAll('.navigation-auto div').forEach(btn => {
        btn.style.background = 'transparent';
    });
    document.querySelector('.auto_btn' + counter).style.background = '#f79a36';
}

document.getElementById('radio1').checked = true;
updateRadioColors(1);

var counter = 2;

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    updateRadioColors(counter);
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 4000);


let button = document.querySelector('.btn');

button.addEventListener('click', () => {
    alert("You clicked the Button!");
});

let button2 = document.querySelectorAll('.add');

button2.forEach((button) => {
    button.addEventListener('click', () => {
        alert("You clicked the Add To Cart Button!");
    });
});

let button3 = document.querySelectorAll('.buy');

button3.forEach((button) => {
    button.addEventListener('click', () => {
        alert("You clicked the Buy Now Button!");
    });
});

let cardContainer = document.querySelector('.sectionC')
let hideBtn = document.querySelector('#view');
var currentCards =2;
hideBtn.addEventListener('click', () => {
    let cards = document.querySelectorAll('.card');
    for (var i = currentCards; i < currentCards + 2; i++) {
            cards[i].style.display = 'flex';
    }
    currentCards = currentCards + 2;
    if(currentCards >= cards.length){
        hideBtn.style.display = 'none';
    }
});

gsap.from("#img-move",{
    x:-50,
    opacity:0,
    duration:0.5,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#img-move",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:0.2,
    }
})

gsap.from(".card",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3,
    }
});

gsap.from(".heading",{
    y:50,
    scale:1.2,
    opacity:0,
    duration:1,
    stagger:-0.4,
    scrollTrigger:{
        trigger:".heading",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1,
    }
})

// function cacheImages(array)
// {
//     if (!cacheImages.list) {
//         cacheImages.list = [];
//     }
//     var list = cacheImages.list;
//     for (var i = 0; i < array.length; i++) {
//         var img = new Image();
//         img.onload = function() {
//             var index = list.indexOf(this);
//             if (index !== -1) {
//                 list.splice(index, 1);
//             }
//         }
//         list.push(img);
//         img.src = array[i];
//     }
// }

// cacheImages(["https://t3.ftcdn.net/jpg/02/47/48/00360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg","https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"]);