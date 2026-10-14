/* ==========================================================================
   contact.js — builds the prefilled WhatsApp / email deep links
   ---------------------------------------------------------------------------
   Zero backend. Nothing is submitted from this page: the visitor reviews the
   message below, then sends it from their own WhatsApp or mail client. That
   means no form service, no server, no spam inbox and nothing to maintain.
   ========================================================================== */

/* Change the number in ONE place. Digits only, with country code, no "+". */
const WA_NUMBER = "919141542270";
const EMAIL = "kartik.h6822@gmail.com";
const SITE = "kartik-h6.github.io/Portfolio";

const INTENTS = {
  role:     { label: "Role or opportunity",    line: "I'd like to talk about a role or opportunity." },
  research: { label: "Research collaboration", line: "I'd like to discuss a possible research collaboration." },
  writing:  { label: "Medical writing",        line: "I have a medical-writing requirement I'd like to discuss." },
  academic: { label: "Academic or talk",       line: "I'd like to invite you to contribute or speak." },
  other:    { label: "Something else",         line: "I'd like to connect about something else." }
};

let currentIntent = "role";
const $ = (id) => document.getElementById(id);

function buildMessage() {
  const name = ($("c-name").value || "").trim();
  const note = ($("c-note").value || "").trim();
  const lines = ["Hello Kartik,", "", "I came across your portfolio. " + INTENTS[currentIntent].line];
  if (name) lines.push("", "Name: " + name);
  if (note) lines.push("Note: " + note);
  lines.push("", "\u2014 sent from " + SITE);
  return lines.join("\n");
}

function render() {
  const msg = buildMessage();
  $("preview").textContent = msg;
  $("send-wa").href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  $("send-mail").href =
    "mailto:" + EMAIL +
    "?subject=" + encodeURIComponent("Portfolio \u2014 " + INTENTS[currentIntent].label) +
    "&body=" + encodeURIComponent(msg);
}

function init() {
  const chips = Array.from(document.querySelectorAll(".chip"));

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      currentIntent = chip.dataset.intent;
      chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      render();
    });
  });

  ["c-name", "c-note"].forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("input", render);
  });

  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
