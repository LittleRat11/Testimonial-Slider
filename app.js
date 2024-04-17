const testimonials = [{
        name: "Cherise G",
        photo: "cutsomer1.jpeg",
        text: "healthy is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
    },
    {
        name: "Cherise G",
        photo: "customer2.jpeg",
        text: "healthy makes me more productive and gets the job done in a fraction of the time. I'm glad I found healthy."
    },
    {
        name: "Cherise G",
        photo: "customer3.jpeg",
        text: "We don’t need to spend as much time in meetings now that we use healthy."
    }
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".testimonial-text")
const userName = document.querySelector(".user-name")
let idx = 0;
updateTestimonial();

function updateTestimonial() {
    const { name, photo, text } = testimonials[idx]
    imgEl.src = photo;
    textEl.innerText = text;
    userName.innerText = name
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 5000)
}