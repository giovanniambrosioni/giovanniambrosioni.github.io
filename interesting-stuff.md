---
layout: default
title: Interesting stuff
---


- <a href="https://artificialbureaucracy.substack.com/p/context-widows"> Artificial bureaucracy: <i>Context windows</i></a>. On how LLMs embed in todays scientific discourse with a critique of "measure tuning" POV in science.  <button class="abstract-link" onclick="toggleAbstract(this)">Abstract</button>
  <div class="abstract-text">
TBD
  </div>




  <style>
.abstract-link {
  background: none;
  border: none;
  color: #0645ad;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  margin-left: 6px;
}
.abstract-link:hover {
  color: #0b0080;
  text-decoration: none;
}
.abstract-text {
  display: none;
  margin-top: 6px;
  padding: 8px 12px;
  background-color: #fafafa;
  border-left: 3px solid #ccc;
  border-radius: 4px;
  font-size: 0.9em;
  color: #333;
  max-width: 600px;
}
</style>

<script>
function toggleAbstract(button) {
  const abstract = button.nextElementSibling;
  if (abstract.style.display === "none" || abstract.style.display === "") {
    abstract.style.display = "block";
    button.textContent = "Hide abstract";
  } else {
    abstract.style.display = "none";
    button.textContent = "Abstract";
  }
}
</script>
