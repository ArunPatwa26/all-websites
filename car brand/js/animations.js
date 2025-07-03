// Performance counter animation
document.addEventListener('DOMContentLoaded', () => {
  const performanceCards = document.querySelectorAll('.performance-card');
  
  performanceCards.forEach(card => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Animate the counter
          const counter = entry.target.querySelector('.counter');
          const target = +entry.target.dataset.value;
          const duration = 2000;
          const start = 0;
          const increment = target / (duration / 16);
          
          let current = start;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(timer);
              current = target;
            }
            counter.textContent = Math.floor(current);
          }, 16);
          
          // Animate the progress bar
          const progressBar = entry.target.querySelector('.bg-red-500');
          gsap.to(progressBar, {
            scaleX: 1,
            duration: 2,
            ease: 'power3.out'
          });
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(card);
  });
  
  // Tech cards animation
  const techCards = document.querySelectorAll('.tech-card');
  techCards.forEach((card, index) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(card);
  });
  
  // Engine sound hover effect
  const engineSoundTrigger = document.querySelector('.engine-sound-trigger');
  const engineSound = document.getElementById('engine-sound');
  
  if (engineSoundTrigger && engineSound) {
    engineSoundTrigger.addEventListener('mouseenter', () => {
      engineSound.play();
      engineSoundTrigger.style.opacity = '0';
      setTimeout(() => {
        engineSoundTrigger.style.display = 'none';
      }, 300);
    });
    
    document.getElementById('performance').addEventListener('mouseleave', () => {
      engineSound.pause();
      engineSound.currentTime = 0;
      engineSoundTrigger.style.display = 'flex';
      setTimeout(() => {
        engineSoundTrigger.style.opacity = '1';
      }, 10);
    });
  }
});

