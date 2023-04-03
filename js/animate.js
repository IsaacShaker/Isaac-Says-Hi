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
  
  // // Another Observer (slide animation)
  // const observer2 = new IntersectionObserver(entries => {
  //   // Loop over the entries
  // entries.forEach(entry => {
  //   // If the element is visible
  //   if (entry.isIntersecting) {
  //     // Add the animation class
  //     entry.target.classList.add('slide-animation');
  //   }
  // });
  // });

  // Tell the observer which elements to track
  observer.observe(document.querySelector('#python'));
  observer.observe(document.querySelector('#javascript'));
  observer.observe(document.querySelector('#c'));

  // observer2.observe(document.querySelector('#profile-pic'));
  // observer2.observe(document.querySelector('#name-intro'));
  // observer2.observe(document.querySelector('#intro-divider'));
  // observer2.observe(document.querySelector('#filed-of-study'));


