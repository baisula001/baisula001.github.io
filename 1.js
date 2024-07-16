document.addEventListener('DOMContentLoaded', function() {
    // 技能动画代码保持不变

    
        // 打字效果
    const text = "Responsible, self-driven learning ability, good at independent thinking, logical thinking ,be patient to deal with new things, easy to get along well with people, have a strong-Teamwork ability.";
    const typingEffect = document.getElementById('typing-effect');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingEffect.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
    
    
    
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    
    
    
    
    
    
    // 项目动画
    const projects = document.querySelectorAll('.project');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    projects.forEach(project => {
        project.style.opacity = 0;
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(project);
    });
});
