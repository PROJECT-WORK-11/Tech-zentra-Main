const categories = [
  { title: "Data Science and Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=85", description: "Turn data into useful decisions and clear insights." },
  { title: "Artificial Intelligence and Machine Learning", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=85", description: "Design intelligent systems that learn and adapt." },
  { title: "Software Development", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=85", description: "Build reliable applications and digital products." },
  { title: "Web Development", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85", description: "Create responsive, accessible web experiences." },
  { title: "Cloud Computing", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=85", description: "Work with scalable, modern cloud platforms." },
  { title: "Cybersecurity", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=85", description: "Protect systems, data and digital infrastructure." },
  { title: "UI/UX Design", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=700&q=85", description: "Shape thoughtful and intuitive user experiences." },
  { title: "Product Management", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=85", description: "Guide ideas from discovery to delivery." },
  { title: "Business Analytics", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=85", description: "Connect business questions with measurable insight." },
  { title: "Digital Marketing", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=700&q=85", description: "Create campaigns that reach and engage audiences." }
];

const internships = [
  { id: 1, role: "Software Development Intern", company: "Example Labs", category: "Software Development", mode: "Remote", location: "India (Remote)", duration: 3, stipend: 15000, paid: true, type: "Full-time", skills: ["JavaScript", "Git", "APIs"], posted: "2026-11-02", postedRank: 10, deadline: "2026-11-20", openings: 3, fresh: true, description: "Work with a sample development team on practical application features and code reviews.", responsibilities: ["Build reusable interface components", "Fix and test reported issues", "Document implementation decisions"], preferred: ["Basic familiarity with REST APIs", "Responsive web development"], apply: "#" },
  { id: 2, role: "Data Science Intern", company: "Northstar Demo", category: "Data Science", mode: "Hybrid", location: "Bengaluru", duration: 4, stipend: 18000, paid: true, type: "Full-time", skills: ["Python", "SQL", "Pandas"], posted: "2026-10-29", postedRank: 8, deadline: "2026-11-18", openings: 2, fresh: true, description: "Explore datasets and develop clear analytical workflows for a demonstration analytics project.", responsibilities: ["Clean and explore sample datasets", "Create analytical visualizations", "Present findings to the project team"], preferred: ["Basic statistics knowledge", "Experience with notebooks"], apply: "#" },
  { id: 3, role: "AI Research Intern", company: "Vector Sample Co.", category: "AI / ML", mode: "Remote", location: "India (Remote)", duration: 3, stipend: 20000, paid: true, type: "Full-time", skills: ["Python", "Machine Learning", "NumPy"], posted: "2026-10-25", postedRank: 7, deadline: "2026-11-16", openings: 1, fresh: false, description: "Support an educational machine-learning prototype using approved public or synthetic datasets.", responsibilities: ["Prepare training data", "Run baseline experiments", "Document model results"], preferred: ["Fundamental linear algebra", "Model evaluation experience"], apply: "#" },
  { id: 4, role: "Frontend Web Intern", company: "Studio Sample", category: "Web Development", mode: "On-site", location: "Mumbai", duration: 3, stipend: 12000, paid: true, type: "Part-time", skills: ["HTML", "CSS", "React"], posted: "2026-10-23", postedRank: 6, deadline: "2026-11-14", openings: 4, fresh: false, description: "Create accessible interface screens for a sample product in an on-site learning environment.", responsibilities: ["Implement responsive layouts", "Connect interface states", "Test across browser sizes"], preferred: ["Basic React experience", "Attention to accessibility"], apply: "#" },
  { id: 5, role: "UX Design Intern", company: "Form Demo Studio", category: "UI/UX Design", mode: "Hybrid", location: "Pune", duration: 2, stipend: 10000, paid: true, type: "Part-time", skills: ["Figma", "Wireframes", "Research"], posted: "2026-10-20", postedRank: 5, deadline: "2026-11-12", openings: 2, fresh: false, description: "Assist with user-flow mapping, interface concepts and usability review for a demonstration product.", responsibilities: ["Map user journeys", "Create low-fidelity wireframes", "Prepare usability review notes"], preferred: ["Portfolio of design exercises", "Basic design-system knowledge"], apply: "#" },
  { id: 6, role: "Cybersecurity Analyst Intern", company: "Secure Example", category: "Cybersecurity", mode: "Remote", location: "India (Remote)", duration: 6, stipend: 0, paid: false, type: "Part-time", skills: ["Networking", "Linux", "Security Basics"], posted: "2026-10-18", postedRank: 4, deadline: "2026-11-10", openings: 2, fresh: false, description: "Learn defensive security fundamentals through supervised practice in an isolated demonstration environment.", responsibilities: ["Review sample security logs", "Document risk observations", "Complete guided lab exercises"], preferred: ["Foundational networking knowledge", "Interest in defensive security"], apply: "#" },
  { id: 7, role: "Product Management Intern", company: "Roadmap Demo", category: "Product Management", mode: "Remote", location: "India (Remote)", duration: 3, stipend: 14000, paid: true, type: "Full-time", skills: ["Research", "Documentation", "Analytics"], posted: "2026-10-15", postedRank: 3, deadline: "2026-11-08", openings: 3, fresh: false, description: "Support product discovery and planning activities for a fictional learning platform.", responsibilities: ["Synthesize user feedback", "Draft product requirements", "Maintain a demonstration roadmap"], preferred: ["Clear written communication", "Curiosity about user behavior"], apply: "#" },
  { id: 8, role: "Digital Marketing Intern", company: "Bright Example", category: "Digital Marketing", mode: "On-site", location: "Hyderabad", duration: 2, stipend: 0, unpaid: true, type: "Part-time", skills: ["Content", "SEO", "Analytics"], posted: "2026-10-12", postedRank: 2, deadline: "2026-11-05", openings: 2, fresh: false, description: "Plan sample campaign concepts and measure learning outcomes through an educational marketing project.", responsibilities: ["Draft campaign concepts", "Review content performance", "Recommend improvements"], preferred: ["Written communication skills", "Basic SEO awareness"], apply: "#" }
];

const experiences = [
  { type: "Independent practice project", title: "Build a customer analytics dashboard", field: "Data + BI", level: "Intermediate", duration: "4–6 hours", skills: ["SQL", "Visualization"], outcome: "Analyze a prepared dataset and present business insights." },
  { type: "Independent practice project", title: "Design a secure authentication flow", field: "Cybersecurity", level: "Beginner", duration: "3–4 hours", skills: ["Threat modeling", "UX"], outcome: "Map risks and propose a safer sign-in experience." },
  { type: "Independent practice project", title: "Prototype a sustainable travel app", field: "Product + UX", level: "Intermediate", duration: "6–8 hours", skills: ["Research", "Figma"], outcome: "Turn research into a tested clickable product prototype." }
];

const faqs = [
  ["Who can apply for internships?", "Eligibility varies by opportunity. Students, recent graduates and career-switchers should review the qualifications listed for each internship."],
  ["Can first-year students apply?", "Yes, if an internship does not require a higher year of study or specific prior experience. Entry-level listings often accept first-year applicants."],
  ["Are remote internships available?", "Remote opportunities are available, depending on the employer. Use the Remote filter to see listings marked as work from home."],
  ["Are all internships paid?", "No. Paid and unpaid opportunities may be listed separately. Always confirm compensation and any expenses directly with the organisation."],
  ["How do I know whether an internship is genuine?", "Verify the organisation, review the role details, avoid requests for upfront payments and never share sensitive financial information."],
  ["What skills should I have before applying?", "Start with the required skills in the listing. Strengthen foundations through focused practice before applying for roles above your current level."],
  ["Can I apply without previous experience?", "Often, yes. Look for internships that value coursework, personal projects, portfolio work and willingness to learn."],
  ["How can I prepare my resume?", "Keep it concise, show relevant projects and skills, quantify measurable results and tailor it to the responsibilities in each listing."],
  ["How long do internships usually last?", "Duration commonly ranges from two to six months, but it depends on the role. Check the listing for exact dates and weekly commitment."],
  ["Will I receive a certificate?", "Certificate availability depends on the organisation and should be stated in the opportunity details. Do not assume that one will be provided."]
];

const saved = new Set();
const categoryGrid = document.querySelector("#category-grid");
const opportunityGrid = document.querySelector("#opportunity-grid");
const dialog = document.querySelector("#detail-dialog");

categoryGrid.innerHTML = categories.map((category, index) => `
  <button class="category-card" data-category="${category.title}" aria-label="Filter internships by ${category.title}">
    <div class="category-image-wrap">
      <img class="category-image" src="${category.image}" alt="" loading="lazy">
    </div>
    <div class="category-card-content">
      <span class="category-num">INTERNSHIP ${String(index + 1).padStart(2, "0")}</span>
      <h3>${category.title}</h3>
      <p>${category.description}</p>
      <span class="category-link" aria-hidden="true">Explore Internship <span>↗</span></span>
    </div>
  </button>`).join("");

document.querySelector("#experience-grid").innerHTML = experiences.map((item) => `
  <article class="experience-card">
    <span class="experience-type">${item.type}</span>
    <h3>${item.title}</h3>
    <p>${item.outcome}</p>
    <div class="skills">${item.skills.map(skill => `<span>${skill}</span>`).join("")}</div>
    <div class="experience-meta"><span>${item.field}</span><span>${item.level}</span><span>${item.duration}</span></div>
    <button type="button">Explore experience ↗</button>
  </article>`).join("");

document.querySelector("#faq-list").innerHTML = faqs.map(([question, answer], index) => `
  <article class="faq-item ${index === 0 ? "open" : ""}">
    <button class="faq-question" aria-expanded="${index === 0}" id="faq-q-${index}">
      ${question}<span>${index === 0 ? "−" : "+"}</span>
    </button>
    <div class="faq-answer" role="region" aria-labelledby="faq-q-${index}">${answer}</div>
  </article>`).join("");

function formatStipend(value) {
  return value ? `₹${value.toLocaleString("en-IN")} / month` : "Unpaid";
}

function renderInternships() {
  const query = document.querySelector("#explorer-search").value.trim().toLowerCase();
  const categoriesSelected = [...document.querySelectorAll('input[name="category"]:checked')].map(input => input.value);
  const mode = document.querySelector('input[name="mode"]:checked')?.value || "";
  const types = [...document.querySelectorAll('input[name="type"]:checked')].map(input => input.value);
  const paid = document.querySelector('input[name="paid"]:checked')?.value || "";
  const minimum = Number(document.querySelector("#stipend-range").value);
  const duration = document.querySelector("#duration-filter").value;
  let results = internships.filter(item => {
    const haystack = `${item.role} ${item.company} ${item.category} ${item.skills.join(" ")}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory = !categoriesSelected.length || categoriesSelected.includes(item.category);
    const matchesMode = !mode || item.mode === mode;
    const matchesType = !types.length || types.includes(item.type);
    const matchesPaid = !paid || (paid === "paid" ? item.paid : !item.paid);
    const matchesStipend = item.stipend >= minimum;
    const matchesDuration = !duration || (duration === "4" ? item.duration >= 4 : item.duration === Number(duration));
    return matchesQuery && matchesCategory && matchesMode && matchesType && matchesPaid && matchesStipend && matchesDuration;
  });

  const sort = document.querySelector("#sort-select").value;
  if (sort === "stipend") results.sort((a, b) => b.stipend - a.stipend);
  if (sort === "newest") results.sort((a, b) => b.postedRank - a.postedRank);
  if (sort === "relevance" && query) {
    results.sort((a, b) => Number(`${a.role} ${a.skills.join(" ")}`.toLowerCase().includes(query)) - Number(`${b.role} ${b.skills.join(" ")}`.toLowerCase().includes(query)));
  }

  document.querySelector("#results-count").textContent = `${results.length} ${results.length === 1 ? "opportunity" : "opportunities"}`;
  opportunityGrid.innerHTML = results.length ? results.map(item => `
    <article class="opportunity-card">
      <div class="company-logo" aria-hidden="true">${item.company.split(" ").map(word => word[0]).join("").slice(0, 2)}</div>
      <div>
        <h3>${item.role}</h3>
        <div class="company-name">${item.company} · ${item.category}</div>
        <div class="badges"><span class="badge">${item.mode}</span><span class="badge paid">${item.paid ? "Paid" : "Unpaid"}</span>${item.fresh ? '<span class="badge new">New</span>' : ""}<span class="badge">${item.type}</span></div>
        <div class="opportunity-meta"><span>⌖ ${item.location}</span><span>◷ ${item.duration} months</span><span>Deadline: ${item.deadline}</span></div>
        <div class="skills">${item.skills.map(skill => `<span>${skill}</span>`).join("")}</div>
      </div>
      <div class="card-side">
        <button class="save-button ${saved.has(item.id) ? "saved" : ""}" data-save="${item.id}" aria-label="${saved.has(item.id) ? "Remove saved internship" : "Save internship"}">${saved.has(item.id) ? "♥" : "♡"}</button>
        <div class="stipend">${formatStipend(item.stipend)}<small>Posted ${item.posted}</small></div>
        <div class="card-actions"><button data-details="${item.id}">View Details</button><a class="${item.apply === "#" ? "" : "apply"}" href="${item.apply}" ${item.apply === "#" ? 'aria-disabled="true"' : ""}>Apply Now</a></div>
      </div>
    </article>`).join("") : `<div class="empty-state"><strong>No matching opportunities</strong><p>Try clearing a filter or searching for another skill or role.</p><button class="button button-secondary" id="empty-clear">Clear filters</button></div>`;

  const checked = categoriesSelected.length + types.length + (mode ? 1 : 0) + (paid ? 1 : 0) + (minimum ? 1 : 0) + (duration ? 1 : 0);
  document.querySelector("#active-filter-count").textContent = checked ? checked : "";
}

function clearFilters() {
  document.querySelectorAll(".filters input").forEach(input => {
    if (input.type === "checkbox" || input.type === "radio") input.checked = false;
    if (input.type === "range") input.value = 0;
  });
  document.querySelector("#duration-filter").value = "";
  document.querySelector("#stipend-value").textContent = "₹0+";
  document.querySelector("#explorer-search").value = "";
  renderInternships();
}

document.addEventListener("input", event => {
  if (event.target.matches("#explorer-search, .filters input, #duration-filter")) {
    if (event.target.id === "stipend-range") document.querySelector("#stipend-value").textContent = `₹${Number(event.target.value).toLocaleString("en-IN")}+`;
    renderInternships();
  }
});
document.querySelector("#sort-select").addEventListener("change", renderInternships);
document.querySelector("#hero-search").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#explorer-search").value = document.querySelector("#hero-query").value;
  renderInternships();
  document.querySelector("#opportunities").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#clear-filters").addEventListener("click", clearFilters);
document.querySelector("#filter-toggle").addEventListener("click", event => {
  document.querySelector("#filters").classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", document.querySelector("#filters").classList.contains("open"));
});
document.querySelector("#category-grid").addEventListener("click", event => {
  const card = event.target.closest(".category-card");
  if (!card) return;
  clearFilters();
  const requestedCategory = card.dataset.category;
  const categoryAliases = [
    ["Data Science and Analytics", "Data Science"],
    ["Artificial Intelligence and Machine Learning", "AI / ML"],
    ["UI/UX Design", "UI/UX Design"]
  ];
  const filterValue = categoryAliases.find(([name]) => name === requestedCategory)?.[1] || requestedCategory;
  const checkbox = [...document.querySelectorAll('input[name="category"]')]
    .find(input => input.value === filterValue);
  if (checkbox) checkbox.checked = true;
  renderInternships();
  document.querySelector("#opportunities").scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("click", event => {
  if (event.target.matches("[data-save]")) {
    const id = Number(event.target.dataset.save);
    saved.has(id) ? saved.delete(id) : saved.add(id);
    renderInternships();
  }
  if (event.target.matches("[data-details]")) openDetails(Number(event.target.dataset.details));
  if (event.target.id === "empty-clear") clearFilters();
});

function openDetails(id) {
  const item = internships.find(internship => internship.id === id);
  if (!item) return;
  document.querySelector("#dialog-content").innerHTML = `
    <header class="dialog-header"><p>${item.company} · ${item.category}</p><h2>${item.role}</h2><div class="badges"><span class="badge">${item.mode}</span><span class="badge paid">${item.paid ? "Paid" : "Unpaid"}</span><span class="badge">${item.type}</span></div></header>
    <div class="dialog-body">
      <div class="detail-grid"><div>Location<strong>${item.location}</strong></div><div>Duration<strong>${item.duration} months</strong></div><div>Stipend<strong>${formatStipend(item.stipend)}</strong></div><div>Start date<strong>To be confirmed</strong></div><div>Deadline<strong>${item.deadline}</strong></div><div>Openings<strong>${item.openings || "Not listed"}</strong></div></div>
      <section><h3>Internship overview</h3><p>${item.description}</p><small>This listing is demonstration data and has not been verified as an active opportunity.</small></section>
      <section><h3>Roles and responsibilities</h3><ul>${item.responsibilities.map(value => `<li>${value}</li>`).join("")}</ul></section>
      <section><h3>Required skills</h3><div class="skills">${item.skills.map(skill => `<span>${skill}</span>`).join("")}</div></section>
      <section><h3>Preferred skills</h3><ul>${item.preferred.map(value => `<li>${value}</li>`).join("")}</ul></section>
      <section><h3>About this sample company</h3><p>${item.company} is a fictional example used to demonstrate internship listings.</p></section>
      <a class="dialog-apply" href="${item.apply === "#" ? "#opportunities" : item.apply}" aria-disabled="${item.apply === "#"}">Application link unavailable</a>
    </div>`;
  dialog.showModal();
}

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#faq-list").addEventListener("click", event => {
  const button = event.target.closest(".faq-question");
  if (!button) return;
  const item = button.closest(".faq-item");
  const isOpen = item.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen);
  button.querySelector("span").textContent = isOpen ? "−" : "+";
});
document.querySelector(".menu-toggle").addEventListener("click", event => {
  const links = document.querySelector("#nav-links");
  links.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", links.classList.contains("open"));
});
document.querySelectorAll(".text-action").forEach(button => button.addEventListener("click", () => {
  document.querySelector("#opportunities").scrollIntoView({ behavior: "smooth" });
}));

renderInternships();