
const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', () => {
  button.style.transform = 'scale(1)';
});


const services = document.querySelectorAll('.service');

services.forEach(service => {
  service.addEventListener('mouseover', () => {
    service.style.transform = 'translateY(-5px)';
    service.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  });
  
  service.addEventListener('mouseout', () => {
    service.style.transform = 'translateY(0)';
    service.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
  });
});


const testimonials = document.querySelectorAll('.testimonial');

testimonials.forEach(testimonial => {
  testimonial.addEventListener('mouseover', () => {
    testimonial.style.transform = 'translateY(-5px)';
    testimonial.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  });
  
  testimonial.addEventListener('mouseout', () => {
    testimonial.style.transform = 'translateY(0)';
    testimonial.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
  });
});
