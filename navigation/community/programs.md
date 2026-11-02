---
layout: page
title: Community Programs
permalink: /community/programs/
hide_title: true
show_reading_time: false
---

<div class="ocs__container ocs__community-programs">
  <header class="ocs__community-programs-header">
    <p class="ocs__community-eyebrow">Creative support for growing minds</p>
    <h1>Community Programs</h1>
    <p class="ocs__lead">Explore My Good Brain programs, workshops, and resources that bring art, play, and emotional wellness into community life.</p>
  </header>

  <section class="ocs__card ocs__community-program-controls" aria-label="Find a program">
    <div class="ocs__field">
      <label class="ocs__label" for="mgbSearchInput">Search programs</label>
      <input type="search" id="mgbSearchInput" class="ocs__input" placeholder="Search programs..." oninput="filterPrograms()">
    </div>

    <div class="ocs__community-filters" role="group" aria-label="Filter programs by category">
      <button type="button" class="ocs__btn pill accent fill mgb-filter-btn active" aria-pressed="true" onclick="filterCategory('all', this)">All Programs</button>
      <button type="button" class="ocs__btn pill mgb-filter-btn" aria-pressed="false" onclick="filterCategory('Youth', this)">Youth &amp; Kids</button>
      <button type="button" class="ocs__btn pill mgb-filter-btn" aria-pressed="false" onclick="filterCategory('Family', this)">Family Outreach</button>
      <button type="button" class="ocs__btn pill mgb-filter-btn" aria-pressed="false" onclick="filterCategory('Workshops', this)">Workshops &amp; Kits</button>
      <button type="button" class="ocs__btn pill mgb-filter-btn" aria-pressed="false" onclick="filterCategory('Media', this)">Media &amp; Arts</button>
    </div>
  </section>

  <section class="ocs__community-program-grid" id="mgbGrid" aria-label="Community programs">
    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Family" data-title="San Diego Military Families">
      <div>
        <span class="ocs__badge">Family Outreach</span>
        <h2>San Diego Military Families</h2>
        <p class="ocs__text">Explore family and caregiver resources alongside My Good Brain programs for children and families.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/military-families" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Visit Program <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Family" data-title="Homeschool & Charter Families">
      <div>
        <span class="ocs__badge">Family Outreach</span>
        <h2>Homeschool &amp; Charter Families</h2>
        <p class="ocs__text">Learn how families and teachers can request My Good Brain enrichment services through charter schools.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/enrichment" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Visit Program <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Workshops" data-title="MGB Tool Kit">
      <div>
        <span class="ocs__badge">Workshops &amp; Kits</span>
        <h2>MGB Tool Kit</h2>
        <p class="ocs__text">A school-based program with art activities that introduce topics such as mindfulness and stress management.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/mgbtoolkit" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Request Kit <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Workshops" data-title="Art x Mental Wellness Workshops">
      <div>
        <span class="ocs__badge">Workshops &amp; Kits</span>
        <h2>Art x Mental Wellness Workshops</h2>
        <p class="ocs__text">Free, one-hour community workshops pair mental wellness topics with related arts and crafts activities.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/library-workshops" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">View Schedule <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Youth" data-title="Kids at Heart">
      <div>
        <span class="ocs__badge">Youth &amp; Kids</span>
        <h2>Kids at Heart</h2>
        <p class="ocs__text">Discover My Good Brain’s activities and resources for young people and families.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/kidsatheart" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Explore Program <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Youth" data-title="Little Sound Minds">
      <div>
        <span class="ocs__badge">Youth &amp; Kids</span>
        <h2>Little Sound Minds</h2>
        <p class="ocs__text">Explore early-childhood resources, including caregiver guidance for helping little ones through big feelings.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/little-sound-minds" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Explore Program <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Youth" data-title="Little Mess Club">
      <div>
        <span class="ocs__badge">Youth &amp; Kids</span>
        <h2>Little Mess Club</h2>
        <p class="ocs__text">Find creative ways to make room for exploration, play, and emotional expression.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/little-mess-club" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Explore Program <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Media" data-title="Podcast">
      <div>
        <span class="ocs__badge">Media &amp; Arts</span>
        <h2>My Good Brain Podcast</h2>
        <p class="ocs__text">Discussions and interviews highlighting youth mental health and art stories.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/podcast" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Listen Now <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Media" data-title="Sunday Art Club">
      <div>
        <span class="ocs__badge">Media &amp; Arts</span>
        <h2>Sunday Art Club</h2>
        <p class="ocs__text">Free, on-demand arts and crafts videos that introduce social-emotional learning themes at home.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/sunday-art-club" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Watch activities <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>

    <article class="ocs__card ocs__community-program-card mgb-card" data-category="Media" data-title="Teen Creative Arts">
      <div>
        <span class="ocs__badge">Media &amp; Arts</span>
        <h2>Teen Creative Arts</h2>
        <p class="ocs__text">A dedicated space for adolescents to express self-identity and relieve stress.</p>
      </div>
      <div class="ocs__links">
        <a href="https://www.mygoodbrain.org/teen-creative-arts" target="_blank" rel="noopener noreferrer" class="ocs__btn accent fill">Explore Program <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>
  </section>
</div>

<script>
let currentCategory = 'all';

function filterPrograms() {
  const query = document.getElementById('mgbSearchInput').value.toLowerCase();
  const cards = document.querySelectorAll('#mgbGrid [data-category]');

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const category = card.getAttribute('data-category');
    card.hidden = !(title.includes(query) && (currentCategory === 'all' || category === currentCategory));
  });
}

function filterCategory(category, btnElement) {
  currentCategory = category;
  document.querySelectorAll('.mgb-filter-btn').forEach(btn => {
    const isActive = btn === btnElement;
    btn.classList.toggle('active', isActive);
    btn.classList.toggle('accent', isActive);
    btn.classList.toggle('fill', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  filterPrograms();
}
</script>
