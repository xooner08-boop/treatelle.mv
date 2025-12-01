// Simple scroll animation
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < trigger){
            card.style.transform = 'translateY(0)';
            card.style.opacity = 1;
        } else {
            card.style.transform = 'translateY(50px)';
            card.style.opacity = 0;
        }
    });
});