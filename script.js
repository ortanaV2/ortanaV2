// Renders the hero + timeline from PORTFOLIO_DATA defined in data.js.
// To add a new timeline entry, edit data.js only — no HTML/JS changes needed.

function calcAge(birthDateStr) {
  const birth = new Date(birthDateStr);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const notYetHadBirthday =
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
  if (notYetHadBirthday) age--;
  return age;
}

function renderHero(profile) {
  document.getElementById('hero-name').textContent    = profile.name;
  document.getElementById('hero-tagline').textContent = profile.tagline;

  // Inject auto-calculated age into bio
  let bio = profile.bio;
  if (profile.birthDate) {
    const age = calcAge(profile.birthDate);
    bio = bio.replace(/\b\d{1,2}-year-old\b/i, `${age}-year-old`);
    // If bio doesn't contain an age placeholder, prepend age naturally
    if (!/\d+-year-old/i.test(bio)) {
      bio = `${age}-year-old ${bio.charAt(0).toLowerCase()}${bio.slice(1)}`;
    }
  }
  document.getElementById('hero-bio').textContent = bio;

  const skillsEl = document.getElementById('hero-skills');
  profile.skills.forEach(skill => {
    const span = document.createElement('span');
    span.className   = 'skill-tag';
    span.textContent = skill;
    skillsEl.appendChild(span);
  });

  const linksEl = document.getElementById('hero-links');
  if (profile.contact?.github) {
    const a = document.createElement('a');
    a.href      = profile.contact.github;
    a.className = 'hero__link hero__link--primary';
    a.target    = '_blank';
    a.rel       = 'noopener noreferrer';
    a.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>GitHub`;
    linksEl.appendChild(a);
  }
}

function createTimelineEntry(entry, index) {
  const side      = index % 2 === 0 ? 'left' : 'right';
  const animClass = side === 'left' ? 'from-left' : 'from-right';

  const el = document.createElement('div');
  el.className = `tl-entry tl-entry--${side} ${animClass}`;

  // Dot column
  const dotCol = document.createElement('div');
  dotCol.className = 'tl-entry__dot';

  const year = document.createElement('span');
  year.className   = 'tl-entry__year';
  year.textContent = entry.year;
  dotCol.appendChild(year);

  // Card column
  const card = document.createElement('div');
  card.className = 'tl-entry__card';

  // Optional image
  if (entry.image) {
    const img = document.createElement('img');
    img.src       = entry.image;
    img.alt       = entry.title;
    img.className = `tl-entry__image tl-entry__image--${entry.imageSize || 'medium'}`;
    img.loading   = 'lazy';
    card.appendChild(img);
  }

  const title = document.createElement('h3');
  title.className   = 'tl-entry__title';
  title.textContent = entry.title;
  card.appendChild(title);

  const desc = document.createElement('p');
  desc.className   = 'tl-entry__desc';
  desc.textContent = entry.description;
  card.appendChild(desc);

  // Optional link
  if (entry.link?.url) {
    const a = document.createElement('a');
    a.href      = entry.link.url;
    a.className = 'tl-entry__link';
    a.target    = '_blank';
    a.rel       = 'noopener noreferrer';
    a.innerHTML = `${entry.link.label}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>`;
    card.appendChild(a);
  }

  if (entry.tags?.length) {
    const tagsEl = document.createElement('div');
    tagsEl.className = 'tl-entry__tags';
    entry.tags.forEach(tag => {
      const t = document.createElement('span');
      t.className   = 'tl-tag';
      t.textContent = tag;
      tagsEl.appendChild(t);
    });
    card.appendChild(tagsEl);
  }

  el.appendChild(dotCol);
  el.appendChild(card);
  return el;
}

function renderTimeline(entries) {
  const container = document.getElementById('timeline');
  entries.forEach((entry, i) => {
    container.appendChild(createTimelineEntry(entry, i));
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.tl-entry').forEach(el => observer.observe(el));
}

function createCarousel(images) {
  const wrap = document.createElement('div');
  wrap.className = `proj-carousel${images.length === 0 ? ' proj-carousel--empty' : ''}`;

  if (images.length === 0) return wrap;

  // Track
  const track = document.createElement('div');
  track.className = 'proj-carousel__track';

  images.forEach(src => {
    const slide = document.createElement('div');
    slide.className = 'proj-carousel__slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    slide.appendChild(img);
    track.appendChild(slide);
  });
  wrap.appendChild(track);

  if (images.length <= 1) return wrap;

  let current = 0;
  const total = images.length;

  const dots = document.createElement('div');
  dots.className = 'proj-carousel__dots';

  const dotEls = images.map((_, i) => {
    const d = document.createElement('div');
    d.className = `proj-carousel__dot${i === 0 ? ' active' : ''}`;
    d.addEventListener('click', () => goTo(i));
    dots.appendChild(d);
    return d;
  });

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotEls.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  const btnPrev = document.createElement('button');
  btnPrev.className = 'proj-carousel__btn proj-carousel__btn--prev';
  btnPrev.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;
  btnPrev.addEventListener('click', () => goTo(current - 1));

  const btnNext = document.createElement('button');
  btnNext.className = 'proj-carousel__btn proj-carousel__btn--next';
  btnNext.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
  btnNext.addEventListener('click', () => goTo(current + 1));

  wrap.appendChild(btnPrev);
  wrap.appendChild(btnNext);
  wrap.appendChild(dots);
  return wrap;
}

function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'proj-card';
  card.style.transitionDelay = `${(index % 3) * 0.1}s`;

  card.appendChild(createCarousel(project.images || []));

  const body = document.createElement('div');
  body.className = 'proj-body';

  const meta = document.createElement('div');
  meta.className = 'proj-meta';
  const date = document.createElement('span');
  date.className = 'proj-date';
  date.textContent = project.date;
  meta.appendChild(date);
  body.appendChild(meta);

  const title = document.createElement('h3');
  title.className = 'proj-title';
  title.textContent = project.title;
  body.appendChild(title);

  const desc = document.createElement('p');
  desc.className = 'proj-desc';
  desc.textContent = project.description;
  body.appendChild(desc);

  card.appendChild(body);
  return card;
}

function renderProjects(projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid || !projects?.length) return;
  projects.forEach((p, i) => grid.appendChild(createProjectCard(p, i)));
}

renderHero(PORTFOLIO_DATA.profile);
renderTimeline(PORTFOLIO_DATA.timeline);
renderProjects(PORTFOLIO_DATA.projects);
initScrollAnimations();

// Observe project cards too
const projObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); projObserver.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.proj-card').forEach(el => projObserver.observe(el));
