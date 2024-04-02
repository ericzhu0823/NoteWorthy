// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Code for image carousel and modal pop-ups will go here
});

// Assuming you have a membersData object that contains the bio for each member
const membersData = {
    "eddie-cekici": {
        bio: "Hey, what’s up y’all, it’s nice to meet you, but it’s even better to meet me. My name is Eddie Cekici, I have 250 hours in Noteworthy and I specialize in making weird ass noises with my mouth. Noteworthy is a way of life for me. I go in there, do some b’s, maybe some k’s, throw in a couple t’s in there to really get everybody pumped. ",

    },
    "ellington-chen": {
        bio: "For the past two years my Noteworthy bio has been pretty bad, so for this semester’s bio I decided to employ a Professionally Engineered Nanotech Inspired Smachine-learning algorithm that I fed some of Noteworthy’s best bios of the past to make the penultimate bio – and finally make me seem funny.",
    
    },
    "athena-liu" : {
        bio: "great! i got your attention! okay. i need your help. listen close. someone trapped me in this webpage. "
    },
    "bhaskar-roberts" : {
        bio: "tom-guan"
    }, 
    "stephanus-yang" : {
        bio: "So I have no idea what to write for my bio, but I’m in a funny and silly™ mood so I’ll tell some jokes and you’ll have to get the punchline from me in-person (I’m so sorry, in advance)."
    },
    "jessica-yu" : {
        bio: "The first non-male and soprano to ever become part of Noteworthy (go Tenor 1). Noteworthy’s human tuner when no whistle tuner is around."
    },
    "andrew-tran" : {
        bio: "It’s kinda crazy to go from a place where there are 7 different people with the exact same name to being the only Andrew in a cappella (at the time of writing [citation needed] )."
    },
    "tom-guan" : {
        bio: "So I have no idea what to write for my bio, but I’m in a funny and silly™ mood so I’ll tell some jokes and you’ll have to get the punchline from me in-person (I’m so sorry, in advance)."
    }
    
};

function getMemberBioById(memberId) {
    // Retrieve the member's bio from the membersData object
    return membersData[memberId] ? membersData[memberId].bio : "Bio not found.";
}

document.querySelectorAll('.btn-bio').forEach(button => {
    button.addEventListener('click', function(event) {
        let memberId = this.parentElement.getAttribute('data-member-id');
        openBioModal(memberId);
    });
});

function openBioModal(memberId) {
    const modal = document.querySelector('.modal');
    const bioContent = document.querySelector('.modal-content');

    // Retrieve the bio content based on memberId
    const memberBio = getMemberBioById(memberId);
    bioContent.innerHTML = `<p>${memberBio}</p>`;
    
    modal.style.display = 'block';
}

// Assuming there's an element with the class 'close-modal' to close the modal
const closeModalElements = document.querySelectorAll('.close-modal');
closeModalElements.forEach(element => {
    element.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Closing the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});


// script.js
let currentSlide = 0;

function showSlide(index, carouselItems) {
    if (index >= carouselItems.length) currentSlide = 0;
    if (index < 0) currentSlide = carouselItems.length - 1;

    carouselItems.forEach(item => {
        item.style.transform = `translateX(-${currentSlide * 100}%)`;
    });

    document.getElementById('event-description').textContent = carouselItems[currentSlide].getAttribute('data-description');
}

document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.event-carousel .carousel-item');
    
    document.querySelector('#events .next').addEventListener('click', () => {
        currentSlide++;
        showSlide(currentSlide, carouselItems);
    });

    document.querySelector('#events .prev').addEventListener('click', () => {
        currentSlide--;
        showSlide(currentSlide, carouselItems);
    });

    // Initialize the first slide
    showSlide(currentSlide, carouselItems);
});

