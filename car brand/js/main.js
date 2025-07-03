// Initialize GSAP scroll animations
gsap.registerPlugin(ScrollTrigger);

// Set up scroll triggers for each section
document.querySelectorAll('section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Circular navigation
const navDots = document.querySelectorAll('.nav-dot');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  
  navDots.forEach(dot => {
    dot.classList.remove('active');
    if (dot.dataset.section === current) {
      dot.classList.add('active');
    }
  });
});

// Contact form sheet
const contactTrigger = document.getElementById('contact-trigger');
const contactSheet = document.getElementById('contact-sheet');
const closeContact = document.getElementById('close-contact');

contactTrigger.addEventListener('click', () => {
  contactSheet.classList.remove('hidden');
  setTimeout(() => {
    contactSheet.style.transform = 'translateY(0)';
  }, 10);
});

closeContact.addEventListener('click', () => {
  contactSheet.style.transform = 'translateY(100%)';
  setTimeout(() => {
    contactSheet.classList.add('hidden');
  }, 500);
});