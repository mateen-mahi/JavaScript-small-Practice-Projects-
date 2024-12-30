const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const images = document.querySelectorAll(".slide-img img");

  let counter = 0;

  // Function to update the image slider
  function updateSlider() {
    images.forEach((image, index) => {
      image.style.left = `${(index - counter) * 100}%`;
    });
  }

  // Next button click event
  nextBtn.addEventListener("click", () => {
    counter = (counter + 1) % images.length;
    updateSlider();
  });

  // Previous button click event
  prevBtn.addEventListener("click", () => {
    counter = (counter - 1 + images.length) % images.length;
    updateSlider();
  });

  // Auto-play slider
  function autoPlay() {
    counter = (counter + 1) % images.length;
    updateSlider();
  }

  // Set an interval for auto-play
  const autoPlayInterval = setInterval(autoPlay, 2000);

  // Initial call to set the initial position
  updateSlider();

  // Clear the interval when the page is unloaded (optional)
  window.addEventListener('beforeunload', () => {
    clearInterval(autoPlayInterval);
  });