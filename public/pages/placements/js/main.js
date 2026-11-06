/**
 * TechZentra Placements - Interactive JavaScript
 * Handles navigation drawer, FAQ accordion, role filtering, and smooth interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFaqAccordion();
  initRoleFilters();
  initSmoothScroll();
});

/**
 * Mobile Navigation Drawer
 */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !overlay) return;

  function toggleMenu(isOpen) {
    const currentState = drawer.classList.contains('open');
    const newState = typeof isOpen === 'boolean' ? isOpen : !currentState;

    drawer.classList.toggle('open', newState);
    overlay.classList.toggle('open', newState);
    toggleBtn.setAttribute('aria-expanded', newState.toString());
    document.body.style.overflow = newState ? 'hidden' : '';

    const iconSvg = toggleBtn.querySelector('svg');
    if (iconSvg) {
      if (newState) {
        // Show Close (X) Icon
        iconSvg.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
      } else {
        // Show Hamburger Menu Icon
        iconSvg.innerHTML = `
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
      }
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());
  overlay.addEventListener('click', () => toggleMenu(false));

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/**
 * FAQ Accordion with Keyboard and ARIA Accessibility
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item, index) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    // Generate unique IDs for ARIA
    const triggerId = `faq-trigger-${index}`;
    const contentId = `faq-content-${index}`;

    trigger.id = triggerId;
    trigger.setAttribute('aria-controls', contentId);
    content.id = contentId;
    content.setAttribute('aria-labelledby', triggerId);
    content.setAttribute('role', 'region');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items (accordion behavior)
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('active', !isActive);
      trigger.setAttribute('aria-expanded', (!isActive).toString());
    });
  });
}

/**
 * Career Opportunities Role Filters
 */
function initRoleFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const roleCards = document.querySelectorAll('.career-role-card');

  if (!filterBtns.length || !roleCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter') || 'all';

      roleCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 40);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Smooth Anchor Scrolling with Header Height Offset
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const headerHeight = 80;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
