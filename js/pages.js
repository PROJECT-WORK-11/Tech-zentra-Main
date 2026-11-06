(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scrollspy for the single-page navigation ---------- */

  var spyLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[data-spy]"));
  var spySections = spyLinks
    .map(function (link) {
      return document.getElementById(link.getAttribute("data-spy"));
    })
    .filter(Boolean);

  function updateSpy() {
    if (!spySections.length) return;

    var position = window.scrollY + 160;
    var currentId = spySections[0].id;

    spySections.forEach(function (section) {
      if (section.offsetTop <= position) currentId = section.id;
    });

    spyLinks.forEach(function (link) {
      var isActive = link.getAttribute("data-spy") === currentId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  updateSpy();
  window.addEventListener("scroll", updateSpy, { passive: true });
  window.addEventListener("resize", updateSpy);

  /* ---------- Internship filters ---------- */

  var internChips = Array.prototype.slice.call(document.querySelectorAll("[data-intern-filter]"));
  var internCards = Array.prototype.slice.call(document.querySelectorAll("[data-intern-category]"));

  internChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var value = chip.getAttribute("data-intern-filter");

      internChips.forEach(function (other) {
        other.classList.toggle("is-active", other === chip);
      });

      internCards.forEach(function (card) {
        var match = value === "all" || card.getAttribute("data-intern-category") === value;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* ---------- Testimonial filters ---------- */

  var testiChips = Array.prototype.slice.call(document.querySelectorAll("[data-testi-filter]"));
  var testiCards = Array.prototype.slice.call(document.querySelectorAll("[data-testi-category]"));

  testiChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var value = chip.getAttribute("data-testi-filter");

      testiChips.forEach(function (other) {
        other.classList.toggle("is-active", other === chip);
      });

      testiCards.forEach(function (card) {
        var match = value === "all" || card.getAttribute("data-testi-category") === value;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* ---------- FAQ accordion ---------- */

  function initFaq() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".contact-faq-item"));
    if (!items.length) return;

    function openItem(item) {
      var button = item.querySelector(".contact-faq-question");
      var answer = item.querySelector(".contact-faq-answer");
      if (!button || !answer) return;

      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      answer.setAttribute("aria-hidden", "false");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    function closeItem(item) {
      var button = item.querySelector(".contact-faq-question");
      var answer = item.querySelector(".contact-faq-answer");
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
      var button = item.querySelector(".contact-faq-question");
      var answer = item.querySelector(".contact-faq-answer");
      if (!button || !answer) return;

      answer.addEventListener("transitionend", function (event) {
        if (event.propertyName !== "max-height") return;
        if (item.classList.contains("is-open")) {
          answer.style.maxHeight = "none";
        }
      });

      button.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");

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

  /* ---------- Enquiry form (demo submission) ---------- */

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var submitButton = document.getElementById("contact-submit");
    var submitLabel = submitButton ? submitButton.querySelector(".btn-label") : null;
    var status = document.getElementById("form-status");

    var fields = {
      name: { input: document.getElementById("cf-name"), error: document.getElementById("err-name") },
      email: { input: document.getElementById("cf-email"), error: document.getElementById("err-email") },
      phone: { input: document.getElementById("cf-phone"), error: document.getElementById("err-phone") },
      experience: {
        input: document.getElementById("cf-experience"),
        error: document.getElementById("err-experience"),
      },
      program: { input: document.getElementById("cf-program"), error: document.getElementById("err-program") },
      message: { input: document.getElementById("cf-message"), error: document.getElementById("err-message") },
      consent: { input: document.getElementById("cf-consent"), error: document.getElementById("err-consent") },
    };

    var fieldOrder = ["name", "email", "phone", "experience", "program", "message", "consent"];

    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
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

    var validators = {
      name: function () {
        var value = fields.name.input ? fields.name.input.value.trim() : "";
        if (!value) return "Please enter your full name.";
        if (value.length < 2) return "Your name must be at least 2 characters.";
        return "";
      },
      email: function () {
        var value = fields.email.input ? fields.email.input.value.trim() : "";
        if (!value) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          return "Please enter a valid email address.";
        }
        return "";
      },
      phone: function () {
        var value = fields.phone.input ? fields.phone.input.value.trim() : "";
        if (!value) return "";
        if (!/^[+]?[\d\s().-]{7,24}$/.test(value)) {
          return "Please enter a valid phone number.";
        }
        var digits = value.replace(/\D/g, "");
        if (digits.length < 7 || digits.length > 15) {
          return "Please enter a valid phone number.";
        }
        return "";
      },
      experience: function () {
        var value = fields.experience.input ? fields.experience.input.value : "";
        if (!value) return "Please select your experience level.";
        return "";
      },
      program: function () {
        var value = fields.program.input ? fields.program.input.value : "";
        if (!value) return "Please select a program.";
        return "";
      },
      message: function () {
        var value = fields.message.input ? fields.message.input.value.trim() : "";
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

    function setError(key, message) {
      var field = fields[key];
      if (!field || !field.input || !field.error) return;
      field.error.textContent = message;
      field.input.setAttribute("aria-invalid", "true");
      if (field.wrapper) field.wrapper.classList.add("has-error");
    }

    function clearError(key) {
      var field = fields[key];
      if (!field || !field.input || !field.error) return;
      field.error.textContent = "";
      field.input.removeAttribute("aria-invalid");
      if (field.wrapper) field.wrapper.classList.remove("has-error");
    }

    function clearAllErrors() {
      fieldOrder.forEach(clearError);
    }

    function validateForm() {
      var firstInvalid = null;

      fieldOrder.forEach(function (key) {
        var message = validators[key]();
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

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      hideStatus();

      var firstInvalid = validateForm();
      if (firstInvalid) {
        firstInvalid.focus({ preventScroll: true });
        firstInvalid.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "center",
        });
        return;
      }

      setSubmitting(true);

      window.setTimeout(function () {
        form.reset();
        clearAllErrors();
        setSubmitting(false);
        showStatus(
          "Thank you. Your enquiry has been recorded. We'll be in touch soon.",
          "success"
        );
      }, 700);
    });
  }

  initContactForm();
})();
