document.addEventListener('DOMContentLoaded', () => {
  const colorOptions = document.querySelectorAll('.color-option');
  const carImage = document.getElementById('car-color-image');
  
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove active class from all options
      colorOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active class to clicked option
      option.classList.add('active');
      
      // Change car image
      const newImage = option.dataset.image;
      if (newImage && carImage) {
        // In a real implementation, this would swap the 3D model texture
        // For this demo, we'll just simulate it with an image swap
        carImage.src = `assets/images/${newImage}`;
        
        // Add a nice transition effect
        carImage.style.opacity = '0';
        setTimeout(() => {
          carImage.style.opacity = '1';
        }, 300);
      }
    });
  });
});