// Start landing-page
let landingPage = document.querySelector('.landing-page')
let imgArray = ["poster 1.png","poster 2.png","poster 3.png","poster 12.png"]

// change background img array url


setInterval(function(){
    let RandomNumber = Math.floor(Math.random() * imgArray.length);
    landingPage.style.backgroundImage = 'url("images/' + imgArray[RandomNumber] + '")';
},3000

);
// End landing-page

// Start Video-Card
let videosCards = document.querySelectorAll('.video-card');

videosCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1]
        video.pause();
    });
});
// End Video-Card