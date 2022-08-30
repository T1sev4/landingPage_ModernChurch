
let modalStudy = document.querySelector('.modalStudy')
function openStudy(){ 
    modalStudy.classList.toggle('activeStudy')
}
function closeStudy(){
    modalStudy.classList.toggle('activeStudy')
}

let modalAbout = document.querySelector('.modalAbout')
function openAbout(){
    modalAbout.classList.add('activeAbout')
}
function closeAbout(){
    modalAbout.classList.remove('activeAbout')
}

let modalSermons = document.querySelector('.modalSermons')
function openSermons(){ 
    modalSermons.classList.toggle('activeSermons')
}
function closeSermons(){
    modalSermons.classList.toggle('activeSermons')
}

//timer

var countDonwDate = new Date("september 1, 2022 00:00:00").getTime();
var countDonwFunction = setInterval(function(){
    var now = new Date().getTime();
    console.log(countDonwDate);
    console.log(now);
    var distance = countDonwDate - now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000* 60))/1000);
    document.querySelector('.timer-days').innerHTML = days;
    document.querySelector('.timer-hours').innerHTML = hours;
    document.querySelector('.timer-minutes').innerHTML = minutes;
    document.querySelector('.timer-seconds').innerHTML = seconds;

    if (distance < 0){
        clearInterval(countDonwFunction);
        document.querySelector('.timer-days').innerHTML = 0;
    document.querySelector('.timer-hours').innerHTML = 0;
    document.querySelector('.timer-minutes').innerHTML = 0;
    document.querySelector('.timer-seconds').innerHTML = 0;
    }
}, 1000)

// accordion

var acc = document.getElementsByClassName("accordion-faith");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var accordionFAQ = document.getElementsByClassName("accordion-FAQ");
var i;

for (i = 0; i < accordionFAQ.length; i++) {
    accordionFAQ[i].addEventListener("click", function() {
    this.classList.toggle("active-FAQ")
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } 
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";    
    } 
  });
  
}

//------------------------------------------
//NAVS

let navsBtn = document.querySelectorAll('.navs-btn');
let information = document.querySelectorAll('.sermons-item');

for (let i = 0; i < navsBtn.length; i++) {
    navsBtn[i].addEventListener('click', () => {
        changeContent(i);
        changeBtn(i);
    })    
}

function changeContent(index){
    for (let i = 0; i < information.length; i++) {
        if(i == index){
            information[i].classList.add('active-sermons-item');
        }   
        else{
            information[i].classList.remove('active-sermons-item');
        }     
    }
}
function changeBtn(index){
    for (let i = 0; i < navsBtn.length; i++) {
        if(i == index){
            navsBtn[i].classList.add('active-sermons-btn');
        }   
        else{
            navsBtn[i].classList.remove('active-sermons-btn');
        }     
    }
}
//---------------------
//slider


const img = [
    'images/gal-1.jpg',
    'images/gal-2.jpg',
    'images/gal-3.jpg',
    'images/gal-4.jpg',
    'images/gal-5.jpg',
    'images/gal-6.jpg',
    'images/gal-7.jpg',
    'images/gal-8.jpg'
]

let modal = document.querySelector('.modal-window');
let modalImg = document.querySelector('.modalImg');
let dotsDiv = document.querySelector('.dots');
let galPageChan = document.querySelector('.galPageChan');
let pic = 0;

function openGal(number){
    modalImg.src = img[number];
    modal.classList.add('active');
    pic = number;
    galPageChan.innerHTML = number + 1;
}
function closeGal(img){
    modal.classList.remove('active');
}
function changeImg(i){
    pic += i;
    if(pic == (img.length)){
        pic = 0;
    }
    else if(pic == (-1)){
        pic = img.length - 1;
    }
    modalImg.src = img[pic];
    galPageChan.innerHTML = pic + 1;
}



$(function(){
    $('.RGS-block').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll:1
    })
})

$(function(){
    $('.sponsors-block').slick({
        arrows:true,
        slidesToShow: 5,
        slidesToScroll:1,
        responsive: [
        {
            breakpoint: 877,
            settings: {
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 675,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1    
            }
        }
        
    ]
    })
})