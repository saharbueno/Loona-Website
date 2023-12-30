
// changes images when clicked (try to figure out if you can make it look diff)
let image = document.querySelectorAll('.page1');

function clickImageZero() {
    image[0].src = 'images/odd-eye-circle-page-1.jpg';
    image[1].src = 'images/yyxy-page-1.jpg';
    image[2].src = 'images/loona-1-3-page-1.jpg';
}

function clickImageOne() {
    image[0].src = 'images/yyxy-page-1.jpg';
    image[1].src = 'images/loona-1-3-page-1.jpg';
    image[2].src = 'images/odd-eye-circle-page-1.jpg';
}

function clickImageTwo() {
    image[0].src = 'images/loona-1-3-page-1.jpg';
    image[1].src = 'images/odd-eye-circle-page-1.jpg';
    image[2].src = 'images/yyxy-page-1.jpg';
}

image[0].addEventListener('click', clickImageZero);
image[1].addEventListener('click', clickImageOne);
image[2].addEventListener('click', clickImageTwo);

// changes greeting per day of the week
let d = new Date();
let day = d.getDay();
let date = d.getDate() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
let greeting = document.querySelector('.greeting');

if (day == 1){
    greeting.textContent = 'Happy Monday! Today\'s date is: ' + date;
} else if (day == 2) {
    greeting.textContent = 'Happy Tuesday! Today\'s date is: ' + date;
} else if (day == 3) {
    greeting.textContent = 'Happy Wednesday! Today\'s date is: ' + date;
} else if (day == 4) {
    greeting.textContent = 'Happy Thursday! Today\'s date is: ' + date;
} else if (day == 5) {
    greeting.textContent = 'Happy Friday! Today\'s date is: ' + date;
} else if (day == 6) {
    greeting.textContent = 'Happy Saturday! Today\'s date is: ' + date;
} else if (day == 0) {
    greeting.textContent = 'Happy Sunday! Today\'s date is: ' + date;
}