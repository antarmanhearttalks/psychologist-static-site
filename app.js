const clinic = {
  psychologistName: "Dr. Priyanka Atreja",
  clinicName: "Antarman-heart talks",
  phone: "+91-8700434297",
  whatsappNumber: "918700434297",
  email: "antarmanhearttalks@gmail.com",
  city: "Plot no-117, First Floor, Gagan Vihar Extension, Delhi 110051",
};

const iconPaths = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8.09 9.64a16 16 0 0 0 6.27 6.27l1.2-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />',
  location: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" />',
  globe: '<circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20" /><path d="M12 2a15.3 15.3 0 0 0 0 20" />',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />',
  brain: '<path d="M9 3a3 3 0 0 0-3 3v1a4 4 0 0 0 0 8v1a3 3 0 0 0 3 3" /><path d="M15 3a3 3 0 0 1 3 3v1a4 4 0 0 1 0 8v1a3 3 0 0 1-3 3" /><path d="M9 3c2 0 3 1.5 3 3v12c0 1.5-1 3-3 3" /><path d="M15 3c-2 0-3 1.5-3 3" /><path d="M15 21c-2 0-3-1.5-3-3" />',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />',
  check: '<path d="M20 6 9 17l-5-5" />',
  arrow: '<path d="M5 12h14" /><path d="m12 5 7 7-7 7" />',
};

const services = [
  ["Stress, Anxiety and Depression Counselling", "Support for overthinking, panic, work pressure, and emotional stress."],
  ["Relationship Counselling", "Guidance for communication, conflict, family, and couple concerns."],
  ["Child & Teen Counselling", "Improve your child's mental and emotional well-being with counselling."],
  ["Home Visit", "Professional psychological support delivered in the comfort and privacy of your home."],
  ["Career & Life Guidance", "Clarity for personal goals, decisions, confidence, and life transitions."],
  ["Online Therapy", "Private online psychologist consultation through phone or video appointments."],
];

function icon(name, size = 22) {
  const path = iconPaths[name];

  if (!path) {
    return "";
  }

  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

function buildWhatsAppMessage({ psychologistName, name, patientPhone, reason, messageText }) {
  return `Hello ${psychologistName},

I want to book an appointment.

Name: ${name || "Not provided"}
Phone: ${patientPhone || "Not provided"}
Reason: ${reason || "Not selected"}
Message: ${messageText || "Not provided"}`;
}

function createWhatsAppUrl({ whatsappNumber, message }) {
  const phone = String(whatsappNumber || "").replace(/\D/g, "");
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });

  document.querySelectorAll(".stars").forEach((element) => {
    element.innerHTML = Array.from({ length: 5 }, () => icon("star", 16)).join("");
  });
}

function renderServices() {
  const container = document.querySelector("[data-services]");

  if (!container) {
    return;
  }

  container.innerHTML = services
    .map(
      ([title, desc]) => `
        <article>
          <span data-icon="heart" aria-hidden="true"></span>
          <h3>${title}</h3>
          <p>${desc}</p>
        </article>
      `,
    )
    .join("");
}

function hydrateContactDetails() {
  const cleanPhone = clinic.phone.replace(/\s/g, "");
  const directMessage = buildWhatsAppMessage({
    psychologistName: clinic.psychologistName,
    reason: "Appointment enquiry",
  });

  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.href = `tel:${cleanPhone}`;
  });

  document.querySelectorAll("[data-whatsapp-direct]").forEach((link) => {
    link.href = createWhatsAppUrl({
      whatsappNumber: clinic.whatsappNumber,
      message: directMessage,
    });
  });

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.href = `mailto:${clinic.email}`;
  });

  document.querySelectorAll("[data-phone-text]").forEach((element) => {
    element.textContent = clinic.phone;
  });

  document.querySelectorAll("[data-email-text]").forEach((element) => {
    element.textContent = clinic.email;
  });

  document.querySelectorAll("[data-city-text]").forEach((element) => {
    element.textContent = clinic.city;
  });
}

function wireAppointmentForm() {
  const form = document.querySelector("[data-appointment-form]");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const message = buildWhatsAppMessage({
      psychologistName: clinic.psychologistName,
      name: data.get("name")?.trim(),
      patientPhone: data.get("patientPhone")?.trim(),
      reason: data.get("reason"),
      messageText: data.get("message")?.trim(),
    });

    const url = createWhatsAppUrl({
      whatsappNumber: clinic.whatsappNumber,
      message,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

function runTests() {
  const testMessage = buildWhatsAppMessage({
    psychologistName: "Dr. Test",
    name: "Amit",
    patientPhone: "9999999999",
    reason: "Stress / Anxiety",
    messageText: "Need appointment",
  });

  console.assert(testMessage.includes("Hello Dr. Test"), "Test failed: psychologist name missing");
  console.assert(testMessage.includes("Name: Amit"), "Test failed: patient name missing");
  console.assert(testMessage.includes("Phone: 9999999999"), "Test failed: phone missing");
  console.assert(testMessage.includes("Reason: Stress / Anxiety"), "Test failed: reason missing");

  const fallbackMessage = buildWhatsAppMessage({ psychologistName: "Dr. Test" });
  console.assert(fallbackMessage.includes("Name: Not provided"), "Test failed: name fallback missing");
  console.assert(fallbackMessage.includes("Reason: Not selected"), "Test failed: reason fallback missing");

  const testUrl = createWhatsAppUrl({ whatsappNumber: "91 99999 99999", message: testMessage });
  console.assert(
    testUrl.startsWith("https://api.whatsapp.com/send?phone=919999999999&text="),
    "Test failed: WhatsApp URL invalid",
  );
}

renderServices();
renderIcons();
hydrateContactDetails();
wireAppointmentForm();
runTests();
