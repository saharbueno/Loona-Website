// change background color per member hover 
let members = document.querySelectorAll('.members');
let background = document.querySelector('body');


function changeBgOne() {
    background.style.backgroundColor = '#F498BE';
}
function changeBgTwo() {
    background.style.backgroundColor = '#F4F198';
}
function changeBgThree() {
    background.style.backgroundColor = '#B2F498';
}
function changeBgFour() {
    background.style.backgroundColor = '#F4D398';
}
function changeBgFive() {
    background.style.backgroundColor = '#F9D8E7';
}
function changeBgSix() {
    background.style.backgroundColor = '#FD8489';
}
function changeBgSeven() {
    background.style.backgroundColor = '#D8C9FD';
}
function changeBgEight() {
    background.style.backgroundColor = '#E8BCF9';
}
function changeBgNine() {
    background.style.backgroundColor = '#C27491';
}
function changeBgTen() {
    background.style.backgroundColor = '#FFC1B2';
}
function changeBgEleven() {
    background.style.backgroundColor = '#95D89E';
}
function changeBgTwelve() {
    background.style.backgroundColor = '#DCDFEF';
}

members[0].addEventListener('mouseenter', changeBgOne);
members[1].addEventListener('mouseenter', changeBgTwo);
members[2].addEventListener('mouseenter', changeBgThree);
members[3].addEventListener('mouseenter', changeBgFour);
members[4].addEventListener('mouseenter', changeBgFive);
members[5].addEventListener('mouseenter', changeBgSix);
members[6].addEventListener('mouseenter', changeBgSeven);
members[7].addEventListener('mouseenter', changeBgEight);
members[8].addEventListener('mouseenter', changeBgNine);
members[9].addEventListener('mouseenter', changeBgTen);
members[10].addEventListener('mouseenter', changeBgEleven);
members[11].addEventListener('mouseenter', changeBgTwelve);

