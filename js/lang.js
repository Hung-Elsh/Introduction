const translations = {
    en: {
      name: "Jane Doe",
      title: "Full Stack Developer",
      contact: "Email: jane.doe@example.com | Phone: +123 456 7890 | Website: janedoe.dev",
      about: "About Me",
      aboutText: "Passionate developer with 5+ years of experience building responsive web apps using modern technologies.",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contactMe: "Contact Me",
      yourName: "Your Name",
      yourEmail: "Your Email",
      message: "Message",
      send: "Send",
      success: "Message sent successfully!"
    },
    es: {
      name: "Juana Pérez",
      title: "Desarrolladora Full Stack",
      contact: "Correo: juana.perez@ejemplo.com | Tel: +123 456 7890 | Web: juanaperez.dev",
      about: "Sobre Mí",
      aboutText: "Desarrolladora apasionada con más de 5 años de experiencia creando aplicaciones web responsivas.",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      contactMe: "Contáctame",
      yourName: "Tu Nombre",
      yourEmail: "Tu Correo",
      message: "Mensaje",
      send: "Enviar",
      success: "¡Mensaje enviado exitosamente!"
    }
  };
  
  function switchLanguage(lang) {
    const t = translations[lang];
    document.getElementById("name").textContent = t.name;
    document.getElementById("title").textContent = t.title;
    document.getElementById("contact").textContent = t.contact;
    document.querySelector("h2.section-title").textContent = t.about;
    document.querySelector("div > p").textContent = t.aboutText;
    document.querySelectorAll("h2.section-title")[1].textContent = t.skills;
    document.querySelectorAll("h2.section-title")[2].textContent = t.experience;
    document.querySelectorAll("h2.section-title")[3].textContent = t.education;
    document.querySelectorAll("h2.section-title")[4].textContent = t.contactMe;
    document.querySelector("label[for='name']").textContent = t.yourName;
    document.querySelector("label[for='email']").textContent = t.yourEmail;
    document.querySelector("label[for='message']").textContent = t.message;
    document.querySelector("button[type='submit']").textContent = t.send;
    document.getElementById("form-alert").textContent = t.success;
  }
  