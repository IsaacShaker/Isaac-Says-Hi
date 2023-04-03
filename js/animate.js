// Create the observer
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('progress-line-animation');
    }
  });
  });
  
  // Tell the observer which elements to track
  observer.observe(document.querySelector('#python'));
  observer.observe(document.querySelector('#javascript'));
  observer.observe(document.querySelector('#c'));
