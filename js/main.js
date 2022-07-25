const item1 = document.querySelector('.box-smartphone-item1');
const item2 = document.querySelector('.box-smartphone-item2');
const item3 = document.querySelector('.box-smartphone-item3');
const item4 = document.querySelector('.box-smartphone-item4');
const item5 = document.querySelector('.box-smartphone-item5');
const item6 = document.querySelector('.box-smartphone-item6');

const tamTela1 = window.matchMedia('(max-width: 768px)') && window.matchMedia('(max-width: 1000px)');
const tamTela2 = window.matchMedia('(max-width: 1000px)');
const tamTela3 = window.matchMedia('(max-width: 1200px)');

let tamItem = '';
let alturaItem = '';

if (document.body.clientWidth <= 1000) {
    tamItem = '';
    alturaItem = '';
}
else if (document.body.clientWidth > 1000 && document.body.clientWidth <= 1200) {
    tamItem = '320px';
    alturaItem = '300px'
}
else {
    tamItem = '420px';
    alturaItem = '365px'
}

document.body.onresize = function () {
    if (document.body.clientWidth <= 1000) {
        tamItem = '';
        alturaItem = '';
    }
    else if (document.body.clientWidth > 1000 && document.body.clientWidth <= 1200) {
        tamItem = '320px';
        alturaItem = '300px'
    }
    else {
        tamItem = '420px';
        alturaItem = '365px'
    }
}

// Item 1
item1.addEventListener("mouseover", function (e) {
    item1.style.border = '1px solid #fff';
    item1.style.width = tamItem;
    item2.style.height = alturaItem;
    item3.style.height = alturaItem;
})

item1.addEventListener("mouseout", function (e) {
    item1.style = "grid-area = box1";
    item2.style = "grid-area = box2";
    item3.style = "grid-area = box3";
})

// Item 2
item2.addEventListener("mouseover", function (e) {
    item2.style.border = '1px solid #fff';
    item2.style.width = tamItem;
    item1.style.height = alturaItem;
    item3.style.height = alturaItem;
})

item2.addEventListener("mouseout", function (e) {
    item2.style = "grid-area = box2";
    item1.style = "grid-area = box1";
    item3.style = "grid-area = box3";
})

// Item 3
item3.addEventListener("mouseover", function (e) {
    item3.style.border = '1px solid #fff';
    item3.style.width = tamItem;
    item1.style.height = alturaItem;
    item2.style.height = alturaItem;
})

item3.addEventListener("mouseout", function (e) {
    item2.style = "grid-area = box2";
    item1.style = "grid-area = box1";
    item3.style = "grid-area = box3";
})

// Item 4
item4.addEventListener("mouseover", function (e) {

    item4.style.border = '1px solid #fff';
    item4.style.width = tamItem;
    item5.style.height = alturaItem;
    item6.style.height = alturaItem;
})

item4.addEventListener("mouseout", function (e) {
    item4.style = "grid-area = box1";
    item5.style = "grid-area = box2";
    item6.style = "grid-area = box3";
})
// Item 5
item5.addEventListener("mouseover", function (e) {

    item5.style.border = '1px solid #fff';
    item5.style.width = tamItem;
    item4.style.height = alturaItem;
    item6.style.height = alturaItem;
})

item5.addEventListener("mouseout", function (e) {
    item4.style = "grid-area = box1";
    item5.style = "grid-area = box2";
    item6.style = "grid-area = box3";
})

// Item 6
item6.addEventListener("mouseover", function (e) {
    item6.style.border = '1px solid #fff';
    item6.style.width = tamItem;
    item4.style.height = alturaItem;
    item5.style.height = alturaItem;
})

item6.addEventListener("mouseout", function (e) {
    item4.style = "grid-area = box1";
    item5.style = "grid-area = box2";
    item6.style = "grid-area = box3";
})



// ---------------------------------------------------------------
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

