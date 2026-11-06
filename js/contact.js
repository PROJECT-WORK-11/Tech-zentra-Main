import { contactConfig } from "./contact.config.js";

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  /* ---------- Sticky header ---------- */

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---------- Mobile navigation ---------- */

  function setMenu(open) {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileMenu.setAttribute("aria-hidden", String(!open));
    mobileMenu.classList.toggle("is-open", open);
    if ("inert" in mobileMenu) mobileMenu.inert = !open;
  }

  setMenu(false);

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuToggle.focus();
      }
    });

    const desktop = window.matchMedia("(min-width: 981px)");
    const handleDesktop = function (event) {
      if (event.matches) setMenu(false);
    };

    if (desktop.addEventListener) {
      desktop.addEventListener("change", handleDesktop);
    } else if (desktop.addListener) {
      desktop.addListener(handleDesktop);
    }
  }

  /* ---------- Same-page smooth scrolling ---------- */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.classList.contains("skip-link")) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      setMenu(false);
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });

  /* ---------- Scroll reveal ---------- */

  const revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach(function (item, index) {
      item.style.setProperty("--reveal-delay", (index % 4) * 70 + "ms");
      revealObserver.observe(item);
    });
  }

  /* ---------- Hero image parallax ---------- */

  const heroVisual = document.getElementById("contact-hero-visual");
  const heroMain = heroVisual ? heroVisual.querySelector(".contact-hero-photo--main") : null;
  const heroSmall = heroVisual ? heroVisual.querySelector(".contact-hero-photo--small") : null;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (heroVisual && heroMain && heroSmall && !prefersReducedMotion && finePointer.matches) {
    heroMain.style.transition = "transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1)";
    heroSmall.style.transition = "transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1)";

    heroVisual.addEventListener("mousemove", function (event) {
      const rect = heroVisual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroMain.style.transform = "translate3d(" + x * 8 + "px, " + y * 8 + "px, 0)";
      heroSmall.style.transform = "translate3d(" + x * -6 + "px, " + y * -6 + "px, 0)";
    });

    heroVisual.addEventListener("mouseleave", function () {
      heroMain.style.transform = "translate3d(0, 0, 0)";
      heroSmall.style.transform = "translate3d(0, 0, 0)";
    });
  }

  /* ---------- Verified contact details ---------- */

  function renderContactDetails() {
    const container = document.getElementById("contact-details");
    const list = document.getElementById("contact-details-list");
    if (!container || !list) return;

    const details = contactConfig.details || {};
    const entries = [];

    if (details.email) {
      entries.push({ label: "Email", value: details.email, href: "mailto:" + details.email });
    }
    if (details.phone) {
      entries.push({
        label: "Phone",
        value: details.phone,
        href: "tel:" + details.phone.replace(/[^\d+]/g, ""),
      });
    }
    if (details.address) {
      entries.push({ label: "Office", value: details.address });
    }
    if (details.hours) {
      entries.push({ label: "Hours", value: details.hours });
    }

    if (!entries.length) return;

    entries.forEach(function (entry) {
      const item = document.createElement("div");
      item.className = "contact-detail";

      const label = document.createElement("span");
      label.textContent = entry.label;

      let value;
      if (entry.href) {
        value = document.createElement("a");
        value.href = entry.href;
      } else {
        value = document.createElement("p");
      }
      value.textContent = entry.value;

      item.appendChild(label);
      item.appendChild(value);
      list.appendChild(item);
    });

    container.hidden = false;
  }

  renderContactDetails();

  /* ---------- FAQ accordion ---------- */

  function initFaq() {
    const items = Array.prototype.slice.call(document.querySelectorAll(".contact-faq-item"));
    if (!items.length) return;

    function openItem(item) {
      const button = item.querySelector(".contact-faq-question");
      const answer = item.querySelector(".contact-faq-answer");
      if (!button || !answer) return;

      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      answer.setAttribute("aria-hidden", "false");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    function closeItem(item) {
      const button = item.querySelector(".contact-faq-question");
      const answer = item.querySelector(".contact-faq-answer");
      if (!button || !answer || !item.classList.contains("is-open")) return;

      item.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      answer.setAttribute("aria-hidden", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";

      window.requestAnimationFrame(function () {
        answer.style.maxHeight = "0px";
      });
    }

    items.forEach(function (item) {
      const button = item.querySelector(".contact-faq-question");
      const answer = item.querySelector(".contact-faq-answer");
      if (!button || !answer) return;

      answer.addEventListener("transitionend", function (event) {
        if (event.propertyName !== "max-height") return;
        if (item.classList.contains("is-open")) {
          answer.style.maxHeight = "none";
        }
      });

      button.addEventListener("click", function () {
        const isOpen = item.classList.contains("is-open");

        items.forEach(function (otherItem) {
          if (otherItem !== item) closeItem(otherItem);
        });

        if (isOpen) {
          closeItem(item);
        } else {
          openItem(item);
        }
      });
    });
  }

  initFaq();

  /* ---------- Enquiry form ---------- */

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const submitButton = document.getElementById("contact-submit");
    const submitLabel = submitButton ? submitButton.querySelector(".btn-label") : null;
    const status = document.getElementById("form-status");

    const fields = {
      name: {
        input: document.getElementById("cf-name"),
        error: document.getElementById("err-name"),
        wrapper: null,
      },
      email: {
        input: document.getElementById("cf-email"),
        error: document.getElementById("err-email"),
        wrapper: null,
      },
      phone: {
        input: document.getElementById("cf-phone"),
        error: document.getElementById("err-phone"),
        wrapper: null,
      },
      experience: {
        input: document.getElementById("cf-experience"),
        error: document.getElementById("err-experience"),
        wrapper: null,
      },
      program: {
        input: document.getElementById("cf-program"),
        error: document.getElementById("err-program"),
        wrapper: null,
      },
      message: {
        input: document.getElementById("cf-message"),
        error: document.getElementById("err-message"),
        wrapper: null,
      },
      consent: {
        input: document.getElementById("cf-consent"),
        error: document.getElementById("err-consent"),
        wrapper: null,
      },
    };

    Object.keys(fields).forEach(function (key) {
      const field = fields[key];
      if (!field.input) return;
      field.wrapper = field.input.closest(".form-field") || field.input.closest(".form-consent");
      field.input.addEventListener("input", function () {
        clearError(key);
        hideStatus();
      });
      field.input.addEventListener("change", function () {
        clearError(key);
        hideStatus();
      });
    });

    const validators = {
      name: function () {
        const value = fields.name.input ? fields.name.input.value.trim() : "";
        if (!value) return "Please enter your full name.";
        if (value.length < 2) return "Your name must be at least 2 characters.";
        return "";
      },
      email: function () {
        const value = fields.email.input ? fields.email.input.value.trim() : "";
        if (!value) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          return "Please enter a valid email address.";
        }
        return "";
      },
      phone: function () {
        const value = fields.phone.input ? fields.phone.input.value.trim() : "";
        if (!value) return "";
        if (!/^[+]?[\d\s().-]{7,24}$/.test(value)) {
          return "Please enter a valid phone number.";
        }
        const digits = value.replace(/\D/g, "");
        if (digits.length < 7 || digits.length > 15) {
          return "Please enter a valid phone number.";
        }
        return "";
      },
      experience: function () {
        const value = fields.experience.input ? fields.experience.input.value : "";
        if (!value) return "Please select your experience level.";
        return "";
      },
      program: function () {
        const value = fields.program.input ? fields.program.input.value : "";
        if (!value) return "Please select a program.";
        return "";
      },
      message: function () {
        const value = fields.message.input ? fields.message.input.value.trim() : "";
        if (!value) return "Please tell us a little about your enquiry.";
        if (value.length < 10) return "Please add a little more detail (at least 10 characters).";
        return "";
      },
      consent: function () {
        if (!fields.consent.input || !fields.consent.input.checked) {
          return "Please confirm we can contact you about your enquiry.";
        }
        return "";
      },
    };

    const fieldOrder = ["name", "email", "phone", "experience", "program", "message", "consent"];

    function setError(key, message) {
      const field = fields[key];
      if (!field || !field.input || !field.error) return;
      field.error.textContent = message;
      field.input.setAttribute("aria-invalid", "true");
      if (field.wrapper) field.wrapper.classList.add("has-error");
    }

    function clearError(key) {
      const field = fields[key];
      if (!field || !field.input || !field.error) return;
      field.error.textContent = "";
      field.input.removeAttribute("aria-invalid");
      if (field.wrapper) field.wrapper.classList.remove("has-error");
    }

    function clearAllErrors() {
      fieldOrder.forEach(clearError);
    }

    function validateForm() {
      let firstInvalid = null;

      fieldOrder.forEach(function (key) {
        const message = validators[key]();
        if (message) {
          setError(key, message);
          if (!firstInvalid) firstInvalid = fields[key].input;
        } else {
          clearError(key);
        }
      });

      return firstInvalid;
    }

    function hideStatus() {
      if (!status) return;
      status.textContent = "";
      status.classList.remove("is-visible", "is-error", "is-success");
    }

    function showStatus(message, type) {
      if (!status) return;
      status.textContent = message;
      status.classList.remove("is-error", "is-success");
      status.classList.add("is-visible", type === "success" ? "is-success" : "is-error");
      status.focus({ preventScroll: true });
    }

    function setSubmitting(isSubmitting) {
      if (!form || !submitButton) return;
      form.classList.toggle("is-submitting", isSubmitting);
      submitButton.disabled = isSubmitting;
      submitButton.setAttribute("aria-busy", String(isSubmitting));
      if (submitLabel) {
        submitLabel.textContent = isSubmitting ? "Sending enquiry" : "Send enquiry";
      }
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      hideStatus();

      const firstInvalid = validateForm();
      if (firstInvalid) {
        firstInvalid.focus({ preventScroll: true });
        firstInvalid.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "center",
        });
        return;
      }

      if (!contactConfig.endpoint) {
        console.warn(
          "[Tech Zentra] Contact form endpoint is not configured. Set contactConfig.endpoint in js/contact.config.js before accepting live enquiries."
        );
        showStatus(
          "We're sorry — the enquiry form isn't connected right now. Please try again later.",
          "error"
        );
        return;
      }

      setSubmitting(true);

      const payload = {
        name: fields.name.input.value.trim(),
        email: fields.email.input.value.trim(),
        phone: fields.phone.input.value.trim(),
        program: fields.program.input.value,
        experience: fields.experience.input.value,
        message: fields.message.input.value.trim(),
        consent: fields.consent.input.checked,
        source: "contact-page",
      };

      try {
        const response = await fetch(contactConfig.endpoint, {
          method: contactConfig.method || "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Contact submission failed with status " + response.status);
        }

        let result = null;
        try {
          result = await response.json();
        } catch (error) {
          result = null;
        }

        if (result && result.success === false) {
          throw new Error("Contact endpoint returned an unsuccessful response.");
        }

        form.reset();
        clearAllErrors();
        showStatus(
          "Thank you. Your enquiry has been sent. We'll be in touch soon.",
          "success"
        );
      } catch (error) {
        console.error("[Tech Zentra] Contact submission error:", error);
        showStatus(
          "We couldn't send your enquiry right now. Please check your connection and try again.",
          "error"
        );
      } finally {
        setSubmitting(false);
      }
    });
  }

  initContactForm();
})();
