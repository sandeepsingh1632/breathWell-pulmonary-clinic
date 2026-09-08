// Import Styles
import './style.css';
import '@tabler/icons-webfont/dist/tabler-icons.css';
import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     SINGLE UNIFIED NAVBAR CONTROLLER (Desktop Inline + Mobile Offcanvas)
     ========================================================================== */
  const navbarMenu = document.getElementById('navbarMenu');
  const navbarBackdrop = document.getElementById('navbarBackdrop');
  const openNavbarBtn = document.getElementById('openNavbarBtn');
  const closeNavbarBtn = document.getElementById('closeNavbarBtn');
  const navLinks = navbarMenu?.querySelectorAll('a:not(.dropdown-item)');

  // 1. Mobile Drawer Open/Close Handlers
  function openMobileMenu() {
    if (!navbarMenu || !navbarBackdrop) return;
    navbarBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    navbarBackdrop.classList.add('opacity-100', 'pointer-events-auto');

    navbarMenu.classList.remove('translate-x-full');
    navbarMenu.classList.add('translate-x-0');

    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    if (!navbarMenu || !navbarBackdrop) return;
    navbarBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    navbarBackdrop.classList.add('opacity-0', 'pointer-events-none');

    navbarMenu.classList.remove('translate-x-0');
    navbarMenu.classList.add('translate-x-full');

    document.body.classList.remove('overflow-hidden');
  }

  openNavbarBtn?.addEventListener('click', openMobileMenu);
  closeNavbarBtn?.addEventListener('click', closeMobileMenu);
  navbarBackdrop?.addEventListener('click', closeMobileMenu);

  // Close mobile drawer when a link is clicked
  navLinks?.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        closeMobileMenu();
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && window.innerWidth < 1024) {
      closeMobileMenu();
    }
  });

  // Handle window resize (cleanup overflow if resized to desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      document.body.classList.remove('overflow-hidden');
      navbarBackdrop?.classList.add('opacity-0', 'pointer-events-none');
      navbarBackdrop?.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  /* ==========================================================================
     2. PAGES DROPDOWN (Click Toggle for both Desktop & Mobile + Outside Click)
     ========================================================================== */
  const pagesDropdown = document.getElementById('pagesDropdown');
  const pagesToggleBtn = document.getElementById('pagesToggleBtn');
  const pagesDropdownMenu = document.getElementById('pagesDropdownMenu');
  const pagesArrow = document.getElementById('pagesArrow');

  // Toggle on Click (Works on Desktop, Tablet & Mobile)
  pagesToggleBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = pagesDropdownMenu?.classList.contains('dropdown-open');
    if (isOpen) {
      pagesDropdownMenu?.classList.remove('dropdown-open');
      pagesArrow?.classList.remove('rotate-180');
    } else {
      pagesDropdownMenu?.classList.add('dropdown-open');
      pagesArrow?.classList.add('rotate-180');
    }
  });

  // Close dropdown when clicking anywhere outside
  document.addEventListener('click', (e) => {
    if (!pagesDropdown?.contains(e.target)) {
      pagesDropdownMenu?.classList.remove('dropdown-open');
      pagesArrow?.classList.remove('rotate-180');
    }
  });

  /* ==========================================================================
     3. PATIENT TESTIMONIALS SWIPER SLIDER
     ========================================================================== */
  const testimonialSwiperEl = document.querySelector('.testimonial-swiper');
  if (testimonialSwiperEl) {
    new Swiper('.testimonial-swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 500,
      navigation: {
        prevEl: '.testimonial-prev',
        nextEl: '.testimonial-next',
      },
      observer: true,
      observeParents: true,
      grabCursor: true,
      autoHeight: false,
    });
  }

  /* ==========================================================================
     4. INSURANCE PARTNERS SWIPER SLIDER (Slow Smooth Auto-slide: 5 Desktop, 4 Tablet, 3 Mobile)
     ========================================================================== */
  const insuranceSwiperEl = document.querySelector('.insurance-swiper');
  if (insuranceSwiperEl) {
    new Swiper('.insurance-swiper', {
      modules: [Autoplay],
      loop: true,
      speed: 1200,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },
      observer: true,
      observeParents: true,
      grabCursor: true,
    });
  }

  /* ==========================================================================
     5. FAQ ACCORDION CONTROLLER (Single Open / Toggle Handler)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) otherContent.classList.add('hidden');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content?.classList.add('hidden');
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content?.classList.remove('hidden');
      }
    });
  });

  /* ==========================================================================
     6. STATS COUNTER ANIMATION (Pure Vanilla JS, Conflict-Free)
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    let animated = false;

    const animateCounters = () => {
      if (animated) return;
      animated = true;

      statNumbers.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 1800; // 1.8 seconds
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic formula
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easeProgress * target);

          counter.textContent = current.toLocaleString('en-US') + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString('en-US') + suffix;
          }
        };

        requestAnimationFrame(updateCounter);
      });
    };

    const firstStat = statNumbers[0];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (firstStat) {
      observer.observe(firstStat);
    }
  }
});
