const translations = {
  en: {
    name: "Bui Duc Hung",
    title: "Back-end Developer",
    contact: "Email: bui820126@gmail.com | Phone: +84 934 275 164",
    about: "About Me",
    aboutText: "A back-end developer with 2 years of experience specializing in ERP system development. Proficient in Python, JavaScript, and HTML, with a strong understanding of server-side logic, database integration, and web application architecture.",
    programSkills: "Program Skills",
    languages: "Languages",
    languagesName1: "English",
    languagesName2: "German",
    experience: "Experience",
    experienceText: "2 years of experience in ERP system development at Viidoo, a technology company in Haiphong, Vietnam. Proficient with Odoo framework and PostgreSQL database management.",
    education: "Education",
    educationText: "Bachelor's Degree in Computer Science, Vietnam Maritime University, 2018 - 2024. Specialized in software development and database management. Participated in scientific research on drone control and won 3rd prize at the university level.",
    educationList: "<ul> <li>2018 - 2024: Informatic Technology, Vietnam Maritime University</li> <li>2022 - 2024: Back-end Developer, Viidoo Technology Company</li> <li>2024 - 2025: B1 German, Devis</li> </ul>"
  },
  de: {
    name: "Bui Duc Hung",
    title: "Back-End Entwickler",
    contact: "Email: bui820126@gmail.com | Tel: +84 934 275 164",
    about: "Über mich",
    aboutText: "Back-End-Entwickler mit 2 Jahren Erfahrung in der Entwicklung von ERP-Systemen. Versiert in Python, JavaScript und HTML mit fundiertem Verständnis für serverseitige Logik, Datenbankintegration und Webanwendungsarchitektur.",
    programSkills: "Programmierkenntnisse",
    languages: "Sprachen",
    languagesName1: "Englisch",
    languagesName2: "Deutsch",
    experience: "Erfahrung",
    experienceText: "2 Jahre Erfahrung in der Entwicklung von ERP-Systemen bei Viidoo, einem Technologieunternehmen in Haiphong, Vietnam. Versiert im Odoo-Framework und in der Verwaltung von PostgreSQL-Datenbanken.",
    education: "Studium",
    educationText: "Bachelor-Abschluss in Informatik, Vietnam Maritime University, 2018 - 2024. Spezialisierung auf Softwareentwicklung und Datenbankmanagement. Teilnahme an wissenschaftlicher Forschung zur Drohnensteuerung und Gewinn des 3. Preises auf Universitätsebene.",
    educationList: "<ul> <li>2018 - 2024: Informatik, Vietnam Maritime University</li> <li>2022 - 2024: Back-End Entwickler, Viidoo Technologieunternehmen</li> <li>2024 - 2025: B1 Deutsch, Devis</li> </ul>"
  }
};

function switchLanguage(lang) {
  const t = translations[lang];
  document.getElementById("name").textContent = t.name;
  document.getElementById("title").textContent = t.title;
  document.getElementById("contact").textContent = t.contact;
  document.getElementById("program-skills").textContent = t.programSkills;
  document.getElementById("languages").textContent = t.languages;
  document.getElementById("en").textContent = t.languagesName1;
  document.getElementById("de").textContent = t.languagesName2;
  document.getElementById("about-me").textContent = t.about;
  document.getElementById("about-text").textContent = t.aboutText;
  document.getElementById("experience").textContent = t.experience;
  document.getElementById("experience-text").textContent = t.experienceText;
  document.getElementById("education").textContent = t.education;
  document.getElementById("education-text").textContent = t.educationText;
  document.getElementById("education-list").innerHTML = t.educationList;
}
