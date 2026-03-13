---
layout: default
title: Interesting stuff
---


- <a href="https://artificialbureaucracy.substack.com/p/context-widows"> Artificial bureaucracy: <i>Context windows</i></a>. On how LLMs embed in todays scientific discourse with a critique of "measure tuning" POV in science.  <button class="abstract-link" onclick="toggleAbstract(this)">More</button>
  <div class="abstract-text">
A common and—at this point—hopelessly clichéd response to this history is to invoke Goodhart’s Law: when a measure becomes a target, it ceases to be a good measure. The solution, in this interpretation, is to find better measures—more sophisticated metrics, altmetrics, multi-dimensional assessment. If citation counts can be gamed, supplement them with other indicators. If any single indicator can be gamed, use a portfolio. The search, as Keith Hoskin has put it, is always for “better targets.”
But this response misses what’s actually wrong. Goodhart’s Law is a cybernetic feedback problem—the measure gets corrupted, so fix the measure. Goal displacement is a different diagnosis that is being made on a different patient. The problem is not in the metric but in the organizational form that needs metrics to function. The emphasis is inverted. Goodhart asks about the validity of the measure; Merton asks about the consequences for the thing being measured and the organization doing the measuring. One implies we should repair the instrument; the other suggests the instrument is working exactly as institutional logic requires.
Framing the dysfunction as “Goodhart’s Law” constrains what questions you can ask. It leads, inevitably, to the search for better indicators—exactly the program that metascience reformers have pursued for the past two decades through pre-registration, registered reports, open science initiatives, DORA declarations, altmetrics manifestos.15 These are not trivial interventions, and some of them may help at the margins and for a little while before the players in the game figure out how to manipulate them. But they remain inside the frame, tinkering with measures while leaving the organizational form untouched. The measures don’t just assess science; they reshape what kinds of projects researchers choose to pursue, what questions seem worth asking, what work seems worth doing.16 Fixing the metric doesn’t fix that.
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
    button.textContent = "Hide";
  } else {
    abstract.style.display = "none";
    button.textContent = "More";
  }
}
</script>
