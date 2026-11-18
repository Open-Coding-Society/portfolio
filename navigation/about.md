---
layout: post
title: About
permalink: /about/
comments: true
gallery_images:
  - missionary.jpg
  - john_tamara.jpg
  - tamara_fam.jpg
  - surf.jpg
  - john_lora.jpg
  - lora_fam.jpg
  - lora_fam2.jpg
  - pj_party.jpg
  - trent_family.png
  - claire.jpg
  - grandkids.jpg
  - farm.jpg
---

<!-- markdownlint-disable MD033 -->

## As a conversation Starter

Here are some places I have lived.

<comment>
Flags are made using Wikipedia images
</comment>

<!-- The OCS grid grammar styles the container; JavaScript uses its id to add locations. -->
<div class="ocs__grid ocs__grid--card" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California - forever"},
        {"flag": "b/b9/Flag_of_Oregon.svg", "greeting": "Hi", "description": "Oregon - 9 years"},
        {"flag": "b/be/Flag_of_England.svg", "greeting": "Alright mate", "description": "England - 2 years"},
        {"flag": "e/ef/Flag_of_Hawaii.svg", "greeting": "Aloha", "description": "Hawaii - 2 years"},
    ];

    // 3a. The OCS card grid adjusts its columns to the available space.

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a grid cell for each location
        var gridItem = document.createElement("div");
        gridItem.className = "ocs__grid-cell";
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.className = "ocs__image-frame ocs__image-frame--thumbnail";
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

### Journey through Life

Here is what I did at those places

- 🏫 Lots of Elementary Schools in Tucson, LA, Honolulu, and Glendale (CA)
- 🏫 Middle and High School in Glendale (CA), Hoover High graduated '77
- 🎓 Glendale CA Community College, UCLA Extension, LA Wilshire Computer Tech School '77 to '79
- ⛪ England, London Missionary for Church of Jesus Christ of Latter-day Saints '79 to '81
- 💼 Culver City, Glendale CA founder at Ashton-Tate, original PC's dBase 2 and 3 '82 to '87
- 🎓 Eugene Oregon Undergraduate CompSci Degree at University of Oregon (Go Ducks!) '89 to '91
- 💼 Eugene Oregon, founder and owner @ Microniche `88, Point Control CAD CAM developer '91 to '96
- 🏢 San Diego CA Qualcomm, Satellite Comm and 1st Mobile OS (BREW) '96 to '19
- 👨‍🏫 San Diego CA Teacher of Computer Science @ Del Norte High School San Diego '19 to present

### Culture, Family, and Fun

Everything for me, as for many others, revolves around family and faith.

- My mother told me that I was Danish, English. and Irish, here is my researched [family tree]({{site.baseurl}}/images/about/familytree.png)
- My family is pretty big as I have been married twice, my 1st wife passed away.  We have had 5 kids, 4 adopted by me, 1 biological.  Plus, there are three grandkids.  My name to my grandkids is Abuilito.
- The gallery of pics has some of my family, fun, culture and faith memories.

<comment>
Gallery of Pics
</comment>
{% comment %}
Assign the one-per-line front matter list for the gallery iteration.
{% endcomment %}
{% assign gallery_images = page.gallery_images %}
<div class="ocs__grid ocs__grid--gallery">
  {% comment %}
  Render one OCS thumbnail for each filename in the list.{% endcomment %}
  {% for image in gallery_images %}
  <div class="ocs__grid-cell">
    <div class="ocs__image-frame ocs__image-frame--cover ocs__image-frame--thumbnail">
      <img src="{{site.baseurl}}/images/about/{{image}}" alt="Image {{forloop.index}}">
    </div>
  </div>
  {% endfor %}
</div>
