/* ==========================================================================
   contact.js — builds the prefilled WhatsApp / email deep links
   ---------------------------------------------------------------------------
   Step 1 is who is reaching out; step 2 is their details; the line they send
   to is a refinement inside the composer, not a way around it. The send
   buttons stay inert until a role is chosen.

   Two numbers, both real: a personal line and a business line. Email is one
   inbox. Zero backend — nothing is submitted here.
   ========================================================================== */

/* Change numbers in ONE place. Digits only, with country code, no "+". */
const LINES = {
  personal: { label: "Personal line", number: "919141542270", display: "+91 91415 42270" },
  business: { label: "Business line", number: "919480727214", display: "+91 94807 27214" }
};
const EMAIL = "kartik.h6822@gmail.com";
const SITE = "kartik-h6.github.io/Portfolio";

const ROLES = {
  recruiter:  { label: "Recruiter or hiring manager", line: "I'm reaching out as a recruiter, about a role or opportunity." },
  researcher: { label: "Researcher or academic",      line: "I'm reaching out as a researcher, about a possible collaboration." },
  writing:    { label: "Medical writing or content",  line: "I'm reaching out about medical-writing or health-content work." },
  student:    { label: "Student or early career",     line: "I'm reaching out as a student, with a question." },
  other:      { label: "Something else",              line: "I'd like to connect about something else." }
};

let currentRole = null;         // nothing chosen until the visitor chooses
let currentLine = "personal";   // personal line is the portfolio default
const $ = (id) => document.getElementById(id);

function buildMessage() {
  const name = ($("c-name").value || "").trim();
  const note = ($("c-note").value || "").trim();
  const lines = ["Hello Kartik,", "", ROLES[currentRole].line];
  if (name) lines.push("", "Name: " + name);
  if (note) lines.push("Note: " + note);
  lines.push("", "\u2014 sent from " + SITE);
  return lines.join("\n");
}

function gate(on) {
  [$("send-wa"), $("send-mail")].forEach((b) => {
    b.classList.toggle("is-disabled", !on);
    if (on) b.removeAttribute("aria-disabled");
    else b.setAttribute("aria-disabled", "true");
  });
}

function render() {
  const preview = $("preview");

  if (!currentRole) {
    preview.dataset.empty = "true";
    preview.textContent = "Pick who you are above and your message will appear here, ready to send.";
    [$("send-wa"), $("send-mail")].forEach((b) => b.removeAttribute("href"));
    gate(false);
    return;
  }

  const msg = buildMessage();
  preview.dataset.empty = "false";
  preview.textContent = msg;

  $("send-wa").href = "https://wa.me/" + LINES[currentLine].number + "?text=" + encodeURIComponent(msg);
  $("send-mail").href =
    "mailto:" + EMAIL +
    "?subject=" + encodeURIComponent("Portfolio \u2014 " + ROLES[currentRole].label) +
    "&body=" + encodeURIComponent(msg);

  const note = $("line-note");
  if (note) note.textContent = "Sending to the " + LINES[currentLine].label.toLowerCase() + " — " + LINES[currentLine].display;

  gate(true);
}

function init() {
  const roleChips = Array.from(document.querySelectorAll(".chip[data-role]"));
  const lineChips = Array.from(document.querySelectorAll(".chip[data-line]"));

  roleChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      currentRole = chip.dataset.role;
      roleChips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      render();
    });
  });

  lineChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      currentLine = chip.dataset.line;
      lineChips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      render();
    });
  });

  ["c-name", "c-note"].forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("input", render);
  });

  // belt and braces: a disabled button must not navigate even if clicked
  [$("send-wa"), $("send-mail")].forEach((b) => {
    b.addEventListener("click", (e) => { if (!b.getAttribute("href")) e.preventDefault(); });
  });

  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
