let approach = document.getElementById('approach')
let vision = document.getElementById('vision')
let mission = document.getElementById('mission')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

let openApproach = () => {
    approach.style.transform = 'translateX(0)'
    vision.style.transform = 'translateX(1500px)'
    mission.style.transform = 'translateX(1500px)'
    btn1.style.color = 'white'
    btn1.style.backgroundColor = 'darkgreen'
    btn2.style.color = 'black'
    btn2.style.backgroundColor = 'white'
    btn3.style.color = 'black'
    btn3.style.backgroundColor = 'white'
}

let openVision = () => {
    approach.style.transform = 'translateX(1500px)'
    vision.style.transform = 'translateX(0)'
    mission.style.transform = 'translateX(1500px)'
    btn2.style.color = 'white'
    btn2.style.backgroundColor = 'darkgreen'
    btn1.style.color = 'black'
    btn1.style.backgroundColor = 'white'
    btn3.style.color = 'black'
    btn3.style.backgroundColor = 'white'
}

let openMission = () => {
    approach.style.transform = 'translateX(1500px)'
    vision.style.transform = 'translateX(1500px)'
    mission.style.transform = 'translateX(0)'
    btn3.style.color = 'white'
    btn3.style.backgroundColor = 'darkgreen'
    btn2.style.color = 'black'
    btn2.style.backgroundColor = 'white'
    btn1.style.color = 'black'
    btn1.style.backgroundColor = 'white'
}

function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');8
    const navLinks = document.querySelectorAll('.nav a'); // Select all nav links

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('close');
        overlay.classList.toggle('active'); // Toggle overlay visibility
        document.body.classList.toggle('nav-active'); // Prevent body scrolling
    });

     // Close the nav menu when any nav link is clicked
     navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active'); // Hide the nav
            burger.classList.remove('close'); // Reset the burger icon
            document.body.classList.remove('nav-active'); // Reset body class if used for overlay or scrollbar management
        });
    });
}

navSlide();
