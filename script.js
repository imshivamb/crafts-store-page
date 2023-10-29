document.addEventListener("DOMContentLoaded", function() {
  var topNav = document.getElementById('top-nav');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
          topNav.style.height = '0'; 
      } else {
          topNav.style.height = '30px'; 
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const frames = document.querySelectorAll('.carousel-frame');
    let currentFrame = 0;

    function showFrame(index) {
      frames.forEach(frame => frame.classList.remove('active', 'next'));
      frames[index].classList.add('active');
      frames[(index + 1) % frames.length].classList.add('next');
      currentFrame = index;
  }
  

    function nextFrame() {
        currentFrame = (currentFrame + 1) % frames.length;
        showFrame(currentFrame);
    }

    function prevFrame() {
        currentFrame = (currentFrame - 1 + frames.length) % frames.length;
        showFrame(currentFrame);
    }

    document.querySelector('.next-btn').addEventListener('click', nextFrame);
    document.querySelector('.prev-btn').addEventListener('click', prevFrame);
});


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');
    const searchOverlay = document.getElementById('search-overlay');
  
    searchIcon.addEventListener('click', function () {
      searchInput.classList.toggle('active');
      searchOverlay.style.display = searchInput.classList.contains('active') ? 'block' : 'none';
      if (searchInput.classList.contains('active')) {
        searchInput.focus();
      }
    });
  });



  
  document.getElementById('menu-icon').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.left === '-100%') {
      mobileMenu.style.left = '0';
    } else {
      mobileMenu.style.left = '-100%';
    }
  });


document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.videos-link');
  
    videos.forEach(video => {
      video.addEventListener('click', function(event) {
        event.preventDefault();
  
        const videoUrl = this.getAttribute('href');
        const videoId = videoUrl.split('v=')[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
        const overlay = document.getElementById('overlay');
        const popupPlayer = document.getElementById('popup-player');
  
        popupPlayer.innerHTML = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
  
        overlay.style.display = 'block';
        popupPlayer.style.display = 'block';
      });
    });
  
    // Close the pop-up player
    document.getElementById('overlay').addEventListener('click', function() {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('popup-player').style.display = 'none';
      document.getElementById('popup-player').innerHTML = ''; // Remove the iframe
    });
  });
  