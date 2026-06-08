const skills = document.querySelectorAll('.skill-progress');

window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const pos = skill.getBoundingClientRect().top;

        if (pos < window.innerHeight) {
            skill.style.width = skill.getAttribute('data-width');
        }
    });
});

