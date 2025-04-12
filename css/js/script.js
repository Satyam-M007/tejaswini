// Set the target date to April 12, 00:00:00
const birthdayDate = new Date('2024-04-16T00:00:00');

// List of romantic songs for other days
const romanticSongs = [
    'https://www.youtube.com/embed/3fumBcKC86U', // Example song 1
    'https://www.youtube.com/embed/2Vv-BfVoq4g', // Example song 2
    'https://www.youtube.com/embed/0KSOMA3QBU0', // Example song 3
    'https://www.youtube.com/embed/8UVNT4wvIGY', // Example song 4
    'https://www.youtube.com/embed/2Vv-BfVoq4g'  // Example song 5
];

// Update countdown timer
function updateCountdown() {
    const currentDate = new Date();
    const difference = birthdayDate - currentDate;

    // Check if the current date is April 12
    const isBirthday = currentDate.getDate() === 16 && currentDate.getMonth() === 3; // April is month 3

    if (isBirthday) {
        // Show birthday message
        document.querySelector('.countdown-container').style.display = 'none';
        document.querySelector('.happy-birthday').textContent = 'Congratulations TEJASWINI, you are 18 now!';
        document.querySelector('.sender').classList.remove('hidden');
        startHeartAnimation();
        document.getElementById('musicPlayer').src = 'https://www.youtube.com/embed/nl62hhiBMOM?controls=1&autoplay=1';
    } else {
        // Change song for other days
        const randomSong = romanticSongs[Math.floor(Math.random() * romanticSongs.length)];
        document.getElementById('musicPlayer').src = randomSong + '?controls=1&autoplay=1';
        
        // Show countdown timer
        document.querySelector('.countdown-container').style.display = 'grid';
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

// Heart animation
function createHeart() {
    const colors = ['#ff69b4', '#ff1493', '#ff0000', '#ff69b4', '#ff1493'];
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    
    const size = Math.random() * 20 + 20;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 3 + 2;
    const startDelay = Math.random() * 2;
    
    heart.style.fontSize = `${size}px`;
    heart.style.color = color;
    heart.style.left = `${left}%`;
    heart.style.animationDuration = `${animationDuration}s`;
    heart.style.animationDelay = `-${startDelay}s`;
    
    const container = document.getElementById('hearts-container');
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

function startHeartAnimation() {
    // Create initial hearts
    for(let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 300);
    }
    // Continue creating hearts
    setInterval(createHeart, 300);
}

// Particle animation
function createParticle() {
    const colors = ['#ff00ff', '#00ffff', '#ffff00'];
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.boxShadow = `0 0 ${size}px ${color}`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${animationDuration}s`;
    
    const container = document.getElementById('particles-container');
    container.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, animationDuration * 1000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Initialize countdown and celebration
updateCountdown();
