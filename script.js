// Dynamic Portfolio Enhanced JS
document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode Toggle
  const toggle = document.getElementById('darkmode-toggle');
  const html = document.documentElement;
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  toggle.checked = savedTheme === 'dark';
  
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update navbar background on scroll
    if (window.scrollY > 100) {
      document.querySelector('.navbar').style.background = theme === 'dark' ? 'rgba(26,26,46,0.95)' : 'rgba(255,255,255,0.95)';
    }
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = html.getAttribute('data-theme') === 'dark' ? 'rgba(26,26,46,0.95)' : 'rgba(255,255,255,0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.style.background = 'transparent';
      navbar.style.backdropFilter = 'none';
    }
  });

  // Typing Animation
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 500);
  }

  // Smooth Scroll for Nav Links
  document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Progress Bars Animation
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.progress');
        progressBars.forEach(bar => {
          const value = bar.dataset.value;
          bar.style.width = value + '%';
          bar.textContent = value + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe skill bars section
  const skillsSection = document.querySelector('.info');
  if (skillsSection) observer.observe(skillsSection);

  // Project Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.dataset.category === filterValue) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(50px)';
        }
      });
    });
  });

  // Project Links (Demo opens modal - simplified)
  document.querySelectorAll('.demo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Demo link - Open GitHub Pages or Live Demo');
    });
  });

  // Contact Form
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      const message = formData.get('message');
      
      // Simulate send
      form.innerHTML = '<div style="text-align:center;padding:2rem;"><h3>Message Sent! 🎉</h3><p>Thank you ' + name + ', I\\\'ll get back soon!</p></div>';      
      
      setTimeout(() => {
        form.reset();
        form.innerHTML = `
          <div class="form-group">
            <input type="text" name="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        `;
        // Re-attach form listener
        // (In production, use delegation or recreate listener)
      }, 3000);
    });
  }

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.project-card, .about, .info, .projects, .contact');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('fade-in');
        }, index * 100);
      }
    });
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Update progress bar styles to use CSS vars
  const bars = document.querySelectorAll('.progress');
  bars.forEach(bar => {
    bar.style.background = 'var(--bg-secondary)';
    bar.style.setProperty('--progress-color', 'var(--accent)');
  });
});
