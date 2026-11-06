(function () {
  "use strict";

  var markup = `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand" href="/index.html" aria-label="Tech Zentra home">
            <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
            <span class="brand-word">TECH<span>ZENTRA</span></span>
          </a>
          <p class="footer-tagline">Learn Technology. Build Reality.</p>
          <p class="footer-desc">Master the technologies powering modern careers.</p>
        </div>

        <div class="footer-col">
          <h3>Courses</h3>
          <ul>
            <li><a href="/pages/course-details/programs.html">AWS &amp; Cloud</a></li>
            <li><a href="/pages/course-details/programs.html">DevOps</a></li>
            <li><a href="/pages/course-details/programs.html">Full Stack Python</a></li>
            <li><a href="/pages/course-details/programs.html">Full Stack Java</a></li>
            <li><a href="/pages/course-details/programs.html">Data Science</a></li>
            <li><a href="/pages/course-details/programs.html">Cyber Security</a></li>
            <li><a href="/pages/course-details/programs.html">AI / ML</a></li>
            <li><a href="/pages/course-details/programs.html">Software Development</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/pages/course-details/index.html#learning-paths">Learning Paths</a></li>
            <li><a href="/pages/internships/index.html">Internships</a></li>
            <li><a href="/pages/placements/index.html">Placements</a></li>
            <li><a href="/pages/testimonials/index.html">Student Success</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Resources</h3>
          <ul>
            <li><a href="/pages/course-details/programs.html">Course Details</a></li>
            <li><a href="/pages/internships/index.html">Career Preparation</a></li>
            <li><a href="/pages/placements/index.html">Placement Cell</a></li>
            <li><a href="/contact.html#faq">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-social">
        <a class="social-link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Tech Zentra on LinkedIn">LinkedIn <span aria-hidden="true">&nearr;</span></a>
        <a class="social-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Tech Zentra on Instagram">Instagram <span aria-hidden="true">&nearr;</span></a>
        <a class="social-link" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Tech Zentra on YouTube">YouTube <span aria-hidden="true">&nearr;</span></a>
        <a class="social-link" href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Tech Zentra on GitHub">GitHub <span aria-hidden="true">&nearr;</span></a>
      </div>

      <div class="footer-bottom">
        <span>&copy; 2026 Tech Zentra. All Rights Reserved.</span>
        <span>Learn Technology. Build Reality.</span>
      </div>
    </div>
  `;

  function mount() {
    var target = document.getElementById("site-footer") || document.querySelector("footer");
    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.id = "site-footer";
    footer.innerHTML = markup;

    if (target) {
      target.replaceWith(footer);
    } else {
      document.body.appendChild(footer);
    }
  }

  function schedule() {
    window.setTimeout(mount, 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", schedule);
  } else {
    schedule();
  }
})();
