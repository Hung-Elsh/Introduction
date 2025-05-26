const translations = {
  en: {
    name: "Bui Duc Hung",
    title: "Back-end Developer",
    contact: "Email: bui820126@gmail.com | Phone: +84 934 275 164",
    about: "About Me",
    aboutText: "\t A back-end developer with 2 years of experience specializing in ERP system development. Proficient in Python, JavaScript, and HTML, with a strong understanding of server-side logic, database integration, and web application architecture.",
    programSkills: "Program Skills",
    languages: "Languages",
    experience: "Experience",
    experienceText: "\t 2 years of experience in ERP system development at Viidoo, a technology company in Haiphong, Vietnam. Proficient with Odoo framework and PostgreSQL database management.",
    education: "Education",
    educationText: "\t Bachelor's Degree in Computer Science, Vietnam Maritime University, 2018 - 2022. Specialized in software development and database management.\n Participated in scientific research on drone control and won 3rd prize at the university level.",
    contactMe: "Contact Me",
    yourName: "Your Name",
    yourEmail: "Your Email",
    message: "Message",
    send: "Send",
    success: "Message sent successfully!"
  },
  de: {
    name: "Bui Duc Hung",
    title: "Back-End Entwickler",
    contact: "Email: bui820126@gmail.com | Tel: +84 934 275 164",
    about: "Über mich",
    aboutText: "\t Back-End-Entwickler mit 2 Jahren Erfahrung in der Entwicklung von ERP-Systemen. Versiert in Python, JavaScript und HTML mit fundiertem Verständnis für serverseitige Logik, Datenbankintegration und Webanwendungsarchitektur.",
    programSkills: "Programmierkenntnisse",
    languages: "Sprachen",
    experience: "Erfahrung",
    experienceText: "\t 2 Jahre Erfahrung in der Entwicklung von ERP-Systemen bei Viidoo, einem Technologieunternehmen in Haiphong, Vietnam. Versiert im Odoo-Framework und in der Verwaltung von PostgreSQL-Datenbanken.",
    education: "Studium",
    educationText: "\t Bachelor-Abschluss in Informatik, Vietnam Maritime University, 2018 - 2022. Spezialisierung auf Softwareentwicklung und Datenbankmanagement.\n Teilnahme an wissenschaftlicher Forschung zur Drohnensteuerung und Gewinn des 3. Preises auf Universitätsebene.",
    contactMe: "Kontaktieren Sie mich",
    yourName: "Ihr Name",
    yourEmail: "Ihre E-Mail",
    message: "Nachricht",
    send: "Senden",
    success: "Nachricht erfolgreich gesendet!"
  }
};

function switchLanguage(lang) {
  const t = translations[lang];
  document.getElementById("name").textContent = t.name;
  document.getElementById("title").textContent = t.title;
  document.getElementById("contact").textContent = t.contact;
  document.getElementById("program-skills").textContent = t.programSkills;
  document.getElementById("languages").textContent = t.languages;
  document.getElementById("about-me").textContent = t.about;
  document.getElementById("about-text").textContent = t.aboutText;
  document.getElementById("experience").textContent = t.experience;
  document.getElementById("experience-text").textContent = t.experienceText;
  document.getElementById("education").textContent = t.education;
  document.getElementById("education-text").textContent = t.educationText;
  // document.querySelectorAll("h2.section-title")[5].textContent = t.contactMe;
  // document.querySelector("label[for='name']").textContent = t.yourName;
  // document.querySelector("label[for='email']").textContent = t.yourEmail;
  // document.querySelector("label[for='message']").textContent = t.message;
  // document.querySelector("button[type='submit']").textContent = t.send;
  // document.getElementById("form-alert").textContent = t.success;
}
