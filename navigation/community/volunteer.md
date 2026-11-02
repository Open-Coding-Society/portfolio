---
layout: page
title: Volunteer
permalink: /community/volunteer/
hide_title: true
---

<div class="ocs__container ocs__community-volunteer">
  <header class="ocs__community-volunteer-header">
    <span class="ocs__badge">My Good Brain · Get Involved</span>
    <h1>Volunteer with MGB</h1>
    <p class="ocs__lead">Learn more about how to get involved with volunteer work at My Good Brain.</p>
  </header>

  <section class="ocs__card" aria-labelledby="teen-volunteer">
    <h2 id="teen-volunteer">San Diego Teens – Volunteer for Teen Creative Arts!</h2>
    <p class="ocs__text">Are you a creative San Diego teen ages 13–18 looking for a space to volunteer? If so, we’d love to have you join us!</p>
  </section>

  <section class="ocs__card" aria-labelledby="volunteer-impact">
    <h2 id="volunteer-impact">Volunteer</h2>
    <p class="ocs__text">
      Our volunteers make My Good Brain a great place to be! Their shared passion for art and mental health creates an environment of endless possibilities for our current and upcoming programs.
    </p>
    <p class="ocs__callout">Explore the roles below and apply to be part of our MGB San Diego chapter!</p>
  </section>

  <section class="ocs__card" aria-labelledby="volunteer-roles">
    <h2 id="volunteer-roles">Volunteer Roles</h2>
    <p class="ocs__text">Learn about our different volunteer roles and groups.</p>
    <div class="ocs__table-wrap">
      <table class="ocs__table">
        <thead>
          <tr><th scope="col">Role</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Research &amp; Education</th>
            <td>
              <ul class="ocs__community-volunteer-role-list">
                <li>Research mental health topics relevant to monthly themes.</li>
                <li>Write blog posts for the MGB website.</li>
                <li>Create infographics.</li>
                <li>Assist in creation of online resources and educational materials.</li>
                <li>Create art activities for the Tool Kit Program.</li>
                <li>Work collaboratively with other volunteers to boost our impact.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Webmaster</th>
            <td>
              <ul class="ocs__community-volunteer-role-list">
                <li>Update and maintain MGB Website, ensuring all information is current and accurate.</li>
                <li>Enhance the user experience by maintaining a visually appealing and user-friendly layout.</li>
                <li>Work closely with the Social Media &amp; Marketing Team to align web content with ongoing campaigns and events.</li>
                <li>Monitor website analytics and provide reports on visitor engagement and traffic trends.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Tool Kit Assembly leader</th>
            <td>
              <ul class="ocs__community-volunteer-role-list">
                <li>Lead a team of volunteers during assembly, fostering a positive and collaborative environment.</li>
                <li>Coordinate volunteer tasks, assigning roles such as assembling kits, quality checks, and packing for delivery.</li>
                <li>Ensure all materials for Tool Kits (books, art supplies, packaging) are organized and ready prior to assembly day.</li>
                <li>Coordinate with school partners to ensure Tool Kits are distributed on time.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Community Outreach &amp; Events</th>
            <td>
              <ul class="ocs__community-volunteer-role-list">
                <li>Assist and participate in our in-person art events in San Diego, CA.</li>
                <li>Hands-on support in preparing and delivering resources, including art therapy tool kits.</li>
                <li>Actively search for opportunities to increase audience awareness about MGB.</li>
                <li>Work collaboratively with other volunteers to boost our impact.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Video Content Creator</th>
            <td>
              <ul class="ocs__community-volunteer-role-list">
                <li>Create visual assets (instructional arts and crafts videos, Kids At Heart Video series) for social media.</li>
                <li>Make regular posts for various social platforms (IG, Facebook, TikTok).</li>
                <li>Increase social media engagement on platforms, educational content, and website.</li>
                <li>Help with fundraiser events to support programs.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="ocs__card ocs__volunteer-signup" aria-labelledby="volunteer-signup-title">
    <h2 id="volunteer-signup-title">Interested in volunteering?</h2>
    <p class="ocs__text">Fill out this form preview to explore the sign-up experience. It does not send or save your information.</p>

    <form id="ocs-volunteer-signup" class="ocs__volunteer-form">
      <div class="ocs__volunteer-form-grid">
        <div class="ocs__volunteer-field">
          <label for="volunteer-name">Name <span aria-hidden="true">*</span></label>
          <input id="volunteer-name" name="name" type="text" autocomplete="name" required>
        </div>

        <div class="ocs__volunteer-field">
          <label for="volunteer-email">Email <span aria-hidden="true">*</span></label>
          <input id="volunteer-email" name="email" type="email" autocomplete="email" required>
        </div>

        <div class="ocs__volunteer-field ocs__volunteer-field--wide">
          <label for="volunteer-role">Role of interest <span aria-hidden="true">*</span></label>
          <select id="volunteer-role" name="role" required>
            <option value="" selected disabled>Choose a volunteer role</option>
            <option>Research &amp; Education</option>
            <option>Webmaster</option>
            <option>Tool Kit Assembly leader</option>
            <option>Community Outreach &amp; Events</option>
            <option>Video Content Creator</option>
            <option>I'm open to any role</option>
          </select>
        </div>

        <div class="ocs__volunteer-field ocs__volunteer-field--wide">
          <label for="volunteer-note">What would you like us to know? <span class="ocs__volunteer-optional">(optional)</span></label>
          <textarea id="volunteer-note" name="message" rows="4" maxlength="500"></textarea>
        </div>
      </div>

      <button class="ocs__btn accent fill" id="volunteer-preview-button" type="button" disabled>Preview sign-up</button>
      <p class="ocs__volunteer-status" id="volunteer-preview-status" role="status" aria-live="polite">
        Preview only — your information will not be sent or saved.
      </p>
      <noscript><p>JavaScript is required to use this form preview. Your information is not submitted.</p></noscript>
    </form>
  </section>
</div>

<script src="{{ site.baseurl }}/assets/js/volunteer-signup.js" defer></script>
