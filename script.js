document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Attach click event listeners to each scroll link
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', smoothScroll);
    }
    
    // Smooth scrolling function
    function smoothScroll(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      
      // Calculate the target element's position relative to the viewport
      var targetPosition = targetElement.getBoundingClientRect().top;
      
      // Smoothly scroll to the target position using `window.scrollTo` or `window.scroll`
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
/*
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const elements = document.querySelectorAll('.transition-in');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Trigger initial check on page load
  handleScroll();*/
  