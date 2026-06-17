const fs = require("fs");
const PDFDocument = require("pdfkit");

function generateResume() {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 40, bottom: 40, left: 40, right: 40 },
  });

  const outputStream = fs.createWriteStream("Manoj_R_Resume.pdf");
  doc.pipe(outputStream);

  // Helper colors
  const primaryColor = "#0f172a"; // slate-900
  const secondaryColor = "#1e293b"; // slate-800
  const accentColor = "#2563eb"; // blue-600
  const textColor = "#334155"; // slate-700
  const lightTextColor = "#64748b"; // slate-500

  // Title / Header
  doc
    .fillColor(primaryColor)
    .font("Helvetica-Bold")
    .fontSize(22)
    .text("MANOJ R", { align: "center" });

  doc.moveDown(0.2);

  doc
    .fillColor(textColor)
    .font("Helvetica")
    .fontSize(8.5)
    .text(
      "Address: 1/86-5, Sowmiyanarayanapuram, Pudukattambur, Tirupathur, Sivaganaga, Tamil Nadu - 630211.",
      { align: "center" },
    );

  doc.moveDown(0.15);

  // Contact links
  doc
    .fillColor(textColor)
    .font("Helvetica")
    .text("Phone: ", { continued: true })
    .font("Helvetica-Bold")
    .text("+91 8508056920", { continued: true })
    .font("Helvetica")
    .text("  |  E-mail: ", { continued: true })
    .font("Helvetica-Bold")
    .fillColor(accentColor)
    .text("manojraja7263@gmail.com", { continued: true })
    .fillColor(textColor)
    .font("Helvetica")
    .text("  |  GitHub: ", { continued: true })
    .font("Helvetica-Bold")
    .fillColor(accentColor)
    .text("https://github.com/MANOJ7263", { align: "center" });

  doc.moveDown(0.6);

  // Helper function to draw Section Header
  function drawSectionHeader(title) {
    doc
      .fillColor(primaryColor)
      .font("Helvetica-Bold")
      .fontSize(11)
      .text(title.toUpperCase());

    // Draw horizontal line
    const y = doc.y + 2;
    doc
      .strokeColor("#cbd5e1")
      .lineWidth(0.5)
      .moveTo(40, y)
      .lineTo(555, y)
      .stroke();

    doc.moveDown(0.4);
  }

  // --- CAREER OBJECTIVE ---
  drawSectionHeader("Career Objective");
  doc
    .fillColor(textColor)
    .font("Helvetica")
    .fontSize(9.5)
    .text(
      "Motivated and detail-oriented B.Tech Artificial Intelligence and Data Science graduate (2026) with strong knowledge of Core Java, Object-Oriented Programming, SQL, JDBC, and web technologies including HTML, CSS, and JavaScript. Hands-on experience in developing academic and internship projects using Java, MySQL, Spring Boot, and REST APIs. Passionate about software development, problem-solving, and continuous learning, seeking an entry-level Software Engineer or Java Developer role to contribute technical skills and grow within a dynamic organization.",
      { align: "justify", lineGap: 1.5 },
    );
  doc.moveDown(0.8);

  // --- EDUCATION ---
  drawSectionHeader("Education");
  doc
    .fillColor(primaryColor)
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .text("B.Tech - Artificial Intelligence And Data Science Engineering", {
      continued: true,
    })
    .font("Helvetica-Oblique")
    .fillColor(accentColor)
    .text("   CGPA: 8.05", { continued: true })
    .font("Helvetica")
    .fillColor(lightTextColor)
    .text(" (2022 - 2026)", { align: "right" });

  doc
    .fillColor(textColor)
    .font("Helvetica")
    .fontSize(9)
    .text("Hindusthan Institute of Technology, Coimbatore.", { align: "left" });
  doc.moveDown(0.8);

  // --- SKILLS ---
  drawSectionHeader("Technical Skills");

  function drawSkillCategory(category, details) {
    doc
      .fillColor(primaryColor)
      .font("Helvetica-Bold")
      .fontSize(9.5)
      .text(category);

    details.forEach((item) => {
      doc
        .fillColor(textColor)
        .font("Helvetica")
        .fontSize(9)
        .text("  \u2022  " + item, { lineGap: 1 });
    });
    doc.moveDown(0.4);
  }

  drawSkillCategory("Java", [
    "Strong foundation in Core Java with a solid understanding of Object-Oriented Programming concepts including Inheritance, Encapsulation, Abstraction, and Polymorphism.",
    "Proficient in Java programming concepts such as Arrays, Strings, Methods, Constructors, Exception Handling, Collections Framework, Multithreading, and Java 8 features including Lambda Expressions and Stream API.",
    "Familiar with JDBC and Hibernate for building database-driven applications.",
  ]);

  drawSkillCategory("Database (SQL)", [
    "Good knowledge of SQL with experience in writing queries using Joins, Subqueries, Aggregate Functions, and Grouping operations.",
    "Strong understanding of database concepts including Primary Keys, Foreign Keys, and Normalization.",
    "Familiar with DDL, DML, DCL, and TCL commands, along with operations such as DELETE, TRUNCATE, and DROP.",
  ]);

  drawSkillCategory("Web Technologies", [
    "Good knowledge of HTML, CSS, and JavaScript for developing responsive and user-friendly web applications.",
    "Familiar with DOM Manipulation, Form Validation, Client-Server Communication, and modern web development concepts.",
    "Basic understanding of React JS and component-based frontend development.",
  ]);

  drawSkillCategory("Frameworks & Tools", [
    "Proficient in using Git and GitHub for version control and collaborative development.",
    "Experienced with development tools such as IntelliJ IDEA, Eclipse IDE, Visual Studio Code, and MySQL Workbench.",
  ]);

  doc.moveDown(0.4);

  // --- PROJECTS ---
  drawSectionHeader("Projects");

  function drawProject(title, techStack, points) {
    doc
      .fillColor(primaryColor)
      .font("Helvetica-Bold")
      .fontSize(9.5)
      .text(title, { continued: true })
      .font("Helvetica-BoldOblique")
      .fillColor(accentColor)
      .text("  |  Tech Stack: " + techStack);

    doc.moveDown(0.1);

    points.forEach((pt) => {
      doc
        .fillColor(textColor)
        .font("Helvetica")
        .fontSize(9)
        .text("  \u2022  " + pt, { lineGap: 1 });
    });
    doc.moveDown(0.5);
  }

  drawProject(
    "NeuroFleetX - AI-Driven Urban Mobility System",
    "Java, Spring Boot, MySQL, REST APIs, JWT",
    [
      "Developed an AI-powered urban mobility platform with fleet management, booking management, and real-time tracking.",
      "Implemented role-based authentication and secure API access using Spring Security and JWT.",
      "Integrated intelligent route optimization and predictive maintenance features.",
    ],
  );

  drawProject("Supermarket Billing System", "Java, MySQL, JDBC", [
    "Developed a desktop-based billing application for managing product sales and inventory.",
    "Implemented automated bill generation, stock updates, and database integration.",
    "Enhanced data accuracy through CRUD operations and transaction handling.",
  ]);

  drawProject("Online Book Store", "HTML, CSS, JavaScript", [
    "Developed a responsive web application for browsing and purchasing books.",
    "Implemented shopping cart functionality, product listing, and user-friendly navigation.",
    "Applied frontend development concepts to create an interactive user experience.",
  ]);

  doc.moveDown(0.3);

  // --- INTERNSHIP ---
  drawSectionHeader("Internship");
  doc
    .fillColor(primaryColor)
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .text("Infosys Virtual Internship - Java Full Stack Development", {
      continued: true,
    })
    .font("Helvetica")
    .fillColor(lightTextColor)
    .text(" (Completed)", { align: "right" });

  doc.moveDown(0.1);

  const internPoints = [
    "Developed 'NeuroFleetX', an AI-driven urban mobility system using Java Spring Boot, MySQL, and REST APIs.",
    "Designed key modules including fleet management, real-time tracking, booking system, and role-based authentication using Spring Security and JWT.",
    "Implemented AI-based route optimization, predictive maintenance, and integrated full-stack architecture for scalable solutions.",
  ];

  internPoints.forEach((pt) => {
    doc
      .fillColor(textColor)
      .font("Helvetica")
      .fontSize(9)
      .text("  \u2022  " + pt, { lineGap: 1 });
  });

  doc.moveDown(0.8);

  // --- CERTIFICATIONS ---
  drawSectionHeader("Certifications");
  const certs = [
    "Infosys Springboard Virtual Internship Certificate - Java Full Stack Development.",
    "Coursera Specialization Course: Board Infinity - Java Full Stack Developer Specialization.",
    "Coursera Specialization Course: IBM - Full Stack Software Developer Specialization.",
  ];
  certs.forEach((c) => {
    doc
      .fillColor(textColor)
      .font("Helvetica")
      .fontSize(9)
      .text("  \u2022  " + c, { lineGap: 1 });
  });

  doc.moveDown(0.8);

  // --- DECLARATION ---
  drawSectionHeader("Declaration");
  doc
    .fillColor(textColor)
    .font("Helvetica")
    .fontSize(8.5)
    .text(
      "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I understand that any misrepresentation or false information may lead to the cancellation of my candidature.",
      { align: "justify", lineGap: 1.5 },
    );

  doc.moveDown(0.6);

  // Footer / Signature line
  const startX = 40;
  const currentY = doc.y;

  doc
    .fillColor(primaryColor)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("Date: " + new Date().toISOString().slice(0, 10), startX, currentY);

  doc
    .fillColor(primaryColor)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("Signature: MANOJ R", 420, currentY, { align: "right" });

  doc.end();
  console.log("Resume PDF generated successfully as Manoj_R_Resume.pdf");
}

generateResume();
