// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Back-to-Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.innerText = '⬆️';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);
  
  backToTopButton.style.display = 'none';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.padding = '10px 15px';
  backToTopButton.style.backgroundColor = '#494CA2';
  backToTopButton.style.color = '#fff';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '50%';
  backToTopButton.style.cursor = 'pointer';
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  