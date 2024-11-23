// Menu toggle for responsive navigation
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Changes menu icon to close icon
});

// Typing animation for the "multiple-text" in the home section
const multipleText = document.querySelector('.multiple-text');
const textArray = ['Front-End Developer', 'UI/UX Designer', 'Coder'];
let textIndex = 0;
let charIndex = 0;
let typing = true;

function typeAnimation() {
    if (typing) {
        if (charIndex < textArray[textIndex].length) {
            multipleText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeAnimation, 100);
        } else {
            typing = false;
            setTimeout(typeAnimation, 1500); // Pause before deleting
        }
    } else {
        if (charIndex > 0) {
            multipleText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeAnimation, 50);
        } else {
            typing = true;
            textIndex = (textIndex + 1) % textArray.length; // Move to next text
            setTimeout(typeAnimation, 200);
        }
    }
}
typeAnimation();

// Form submission handling
function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
}
