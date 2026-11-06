(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.getElementById("site-header");
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");

  /* Sticky header state */
  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* Mobile navigation */
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

    var desktop = window.matchMedia("(min-width: 981px)");
    var handleDesktop = function (event) {
      if (event.matches) setMenu(false);
    };

    if (desktop.addEventListener) {
      desktop.addEventListener("change", handleDesktop);
    } else if (desktop.addListener) {
      desktop.addListener(handleDesktop);
    }
  }

  /* Same-page smooth scrolling (supports "#id" and "/#id" on the home page) */
  var currentPath = window.location.pathname.replace(/\/index\.html$/, "/");

  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = link.getAttribute("href");
      if (!href || href === "#") return;

      var url;
      try {
        url = new URL(href, window.location.href);
      } catch (error) {
        return;
      }

      var targetPath = url.pathname.replace(/\/index\.html$/, "/");
      if (targetPath !== currentPath) return;

      var hash = url.hash;
      if (!hash || hash === "#") return;

      var target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      setMenu(false);
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", hash);
      }
    });
  });

  /* Scroll reveal */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
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

  /* Statistics counters */
  var statValues = Array.prototype.slice.call(document.querySelectorAll(".stat-value"));

  function animateStat(element) {
    var target = parseInt(element.getAttribute("data-target"), 10);
    if (!Number.isFinite(target)) return;

    var duration = 1800;
    var start = null;

    function tick(now) {
      if (start === null) start = now;
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased).toLocaleString("en-US");

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      } else {
        element.textContent = target.toLocaleString("en-US");
      }
    }

    window.requestAnimationFrame(tick);
  }

  if (statValues.length && !prefersReducedMotion && "IntersectionObserver" in window) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateStat(entry.target);
          statObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    statValues.forEach(function (element) {
      statObserver.observe(element);
    });
  }

  /* Subtle hero image parallax */
  var heroVisual = document.getElementById("hero-visual");
  var heroMain = heroVisual ? heroVisual.querySelector(".hero-shot--main") : null;
  var heroSmall = heroVisual ? heroVisual.querySelector(".hero-shot--small") : null;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (heroVisual && heroMain && heroSmall && !prefersReducedMotion && finePointer.matches) {
    heroMain.style.transition = "transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1)";
    heroSmall.style.transition = "transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1)";

    heroVisual.addEventListener("mousemove", function (event) {
      var rect = heroVisual.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;
      heroMain.style.transform = "translate3d(" + x * 9 + "px, " + y * 9 + "px, 0)";
      heroSmall.style.transform = "translate3d(" + x * -6 + "px, " + y * -6 + "px, 0)";
    });

    heroVisual.addEventListener("mouseleave", function () {
      heroMain.style.transform = "translate3d(0, 0, 0)";
      heroSmall.style.transform = "translate3d(0, 0, 0)";
    });
  }

  /* Hero image slideshow */
  var heroSlider = document.querySelector("[data-hero-slider]");
  var heroMini = document.querySelector("[data-hero-mini]");

  if (heroSlider && heroMini) {
    var heroSlides = Array.prototype.slice.call(heroSlider.querySelectorAll(".hero-slide"));
    var heroMiniSlides = Array.prototype.slice.call(heroMini.querySelectorAll(".hero-small-slide"));
    var heroDots = Array.prototype.slice.call(heroSlider.querySelectorAll("[data-hero-dot]"));
    var heroToggle = heroSlider.querySelector("[data-hero-toggle]");
    var heroCurrent = heroSlider.querySelector("[data-hero-current]");
    var heroTotal = heroSlider.querySelector("[data-hero-total]");
    var heroCaption = heroSlider.querySelector("[data-hero-caption-output]");
    var heroInterval = 6200;
    var heroIndex = 0;
    var heroTimer = null;
    var heroPaused = false;
    var heroVisible = true;

    function padHeroNumber(value) {
      return value < 10 ? "0" + value : String(value);
    }

    function stopHeroTimer() {
      if (heroTimer !== null) {
        window.clearInterval(heroTimer);
        heroTimer = null;
      }
    }

    function startHeroTimer() {
      stopHeroTimer();
      if (prefersReducedMotion || heroPaused || !heroVisible || document.hidden) return;

      heroTimer = window.setInterval(function () {
        setHeroSlide(heroIndex + 1, false);
      }, heroInterval);
    }

    function setHeroSlide(index, resetTimer) {
      if (!heroSlides.length) return;

      heroIndex = (index + heroSlides.length) % heroSlides.length;

      heroSlides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === heroIndex;
        slide.classList.toggle("is-active", isActive);

        if (isActive) {
          slide.removeAttribute("aria-hidden");
        } else {
          slide.setAttribute("aria-hidden", "true");
        }
      });

      heroMiniSlides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === heroIndex);
      });

      heroDots.forEach(function (dot, dotIndex) {
        var isActive = dotIndex === heroIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-pressed", String(isActive));
      });

      if (heroCurrent) heroCurrent.textContent = padHeroNumber(heroIndex + 1);

      if (heroCaption) {
        heroCaption.textContent =
          heroSlides[heroIndex].getAttribute("data-hero-caption") || "";
      }

      if (resetTimer) startHeroTimer();
    }

    function setHeroPaused(paused) {
      heroPaused = paused;

      if (heroToggle) {
        heroToggle.classList.toggle("is-paused", paused);
        heroToggle.setAttribute(
          "aria-label",
          paused ? "Play hero slideshow" : "Pause hero slideshow"
        );
      }

      startHeroTimer();
    }

    heroDots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var index = parseInt(dot.getAttribute("data-hero-dot"), 10);
        if (Number.isFinite(index)) setHeroSlide(index, true);
      });
    });

    if (heroToggle) {
      heroToggle.addEventListener("click", function () {
        setHeroPaused(!heroPaused);
      });

      if (prefersReducedMotion) heroToggle.hidden = true;
    }

    if ("IntersectionObserver" in window) {
      var heroObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            heroVisible = entry.isIntersecting;
            startHeroTimer();
          });
        },
        { threshold: 0.15 }
      );

      heroObserver.observe(heroSlider);
    }

    document.addEventListener("visibilitychange", startHeroTimer);

    if (heroTotal) heroTotal.textContent = padHeroNumber(heroSlides.length);
    setHeroSlide(0, false);
    startHeroTimer();
  }

  /* Animated build terminal */
  var buildTerminal = document.getElementById("build-terminal");
  var terminalLines = document.getElementById("terminal-lines");
  var terminalWindow = buildTerminal ? buildTerminal.closest(".terminal-window") : null;
  var terminalCursor = buildTerminal ? buildTerminal.querySelector(".t-cursor") : null;

  var terminalSequence = [
    { prompt: true, text: "npm run build" },
    { className: "t-muted", text: "vite build" },
    { className: "t-ok", text: "✓ built in 2.4s" },
    { prompt: true, text: "docker build -t tech-zentra ." },
    { className: "t-ok", text: "✓ image created" },
    { prompt: true, text: "kubectl apply -f deploy.yml" },
    { className: "t-ok", text: "✓ configuration applied" },
  ];

  function buildTerminalLines() {
    terminalLines.innerHTML = "";

    return terminalSequence.map(function (step) {
      var line = document.createElement("p");
      line.className = "terminal-line" + (step.className ? " " + step.className : "");

      if (step.prompt) {
        var prompt = document.createElement("span");
        prompt.className = "t-prompt";
        prompt.textContent = "$";
        line.appendChild(prompt);
        line.appendChild(document.createTextNode(" "));
      }

      var text = document.createElement("span");
      text.className = "t-text";
      line.appendChild(text);
      terminalLines.appendChild(line);

      return { line: line, text: text };
    });
  }

  function typeTerminalLine(element, text, speed, done) {
    var index = 0;

    function tick() {
      if (index <= text.length) {
        element.textContent = text.slice(0, index);
        index += 1;
        window.setTimeout(tick, speed);
        return;
      }

      element.textContent = text;
      done();
    }

    tick();
  }

  function runBuildTerminal() {
    if (!terminalWindow || !terminalLines || !terminalCursor) return;

    var items = buildTerminalLines();
    var lineIndex = 0;

    terminalWindow.classList.remove("is-complete");
    terminalWindow.classList.add("is-typing");

    function playLine() {
      if (lineIndex >= items.length) {
        terminalWindow.classList.remove("is-typing");
        terminalWindow.classList.add("is-complete");
        window.setTimeout(runBuildTerminal, 3600);
        return;
      }

      var step = terminalSequence[lineIndex];
      var item = items[lineIndex];
      var speed = step.prompt ? 42 : 16;

      item.line.classList.add("is-typing");
      item.line.appendChild(terminalCursor);

      typeTerminalLine(item.text, step.text, speed, function () {
        item.line.classList.remove("is-typing");
        item.line.classList.add("is-done");
        lineIndex += 1;
        window.setTimeout(playLine, step.prompt ? 280 : 520);
      });
    }

    playLine();
  }

  if (
    buildTerminal &&
    terminalLines &&
    terminalCursor &&
    !prefersReducedMotion &&
    "IntersectionObserver" in window
  ) {
    var terminalObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          terminalObserver.disconnect();
          runBuildTerminal();
        });
      },
      { threshold: 0.35 }
    );

    terminalObserver.observe(buildTerminal);
  }
})();
