// CONFIGURATION DATA - EDIT THIS PART
const DATA = {
    name: "Dev Patel",
    role: "Full Stack Web Developer",
    about: "Computer Engineering graduate with a B.Tech (BE) in Computer Engineering and internship experience in Django, React, and REST API development. Skilled in building responsive web applications and integrating frontend with backend services. Passionate about full stack development and eager to apply technical knowledge gained during academic studies and internships while contributing to a professional development team.",
    email: "devpatel2654@gmail.com",
    phone: "+91 9586572038", // Replace with your actual phone number
    location: "Gujarat, India", // Replace with your actual location
    socials: [
        { icon: "fab fa-github", link: "https://github.com/devpatel2654" },
        { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/devpatel26/" },
    ],
    experience: [
        {
            role: "Full Stack Developer",
            company: "Spectrics Solutions Pvt. Ltd.",
            period: "june 2025 - fabruary 2026",
            desc: "Worked on developing and maintaining web applications using Django and React. Designed responsive user interfaces and developed RESTful APIs for seamless frontend-backend integration. Collaborated with team members to implement new features and fix bugs. Gained practical experience in full stack development and real-world project workflows."
        }
    ],
    education: [
        {
            Degree: "B.Tech in Computer Engineering",
            University: "Gujarat Technological University",
            period: "2022 - 2026",
            CGPA: "8.37/10",
        },
        {
            Degree: "Diploma in Computer Engineering",
            University: "Gujarat Technological University",
            period: "2019 - 2022",
            CGPA: "7.83/10",
        }
    ],
    projects: [
        {
            title: "Fruit seller website",
            desc: "Designed a responsive fruit seller website using React and Tailwind CSS. Built reusable UI components for product listings and layout structure. Created modern, visually appealing interfaces with Tailwind utility classes. Ensured mobile-friendly and cross-device compatibility for better user experience.",
            tech: ["React js", "Tailwind"],
            link: "#"
        },
        {
            title: "Admin Panel",
            desc: "Developed a backend admin panel using Django framework. Designed database models for products, users, and orders. Implemented authentication system (login, signup, logout). Created REST APIs and handled CRUD operations for dynamic data management.",
            tech: ["Django", "REST APIs", "DRF", "HTML", "CSS"],
            link: "#"
        }
    ],
    certifications: [
        {
            // title: "AWS Certified Developer",
            // issuer: "Amazon Web Services",
            // year: "2023"
        },
    ],

    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Python", "Django", "REST APIs", "DRF", "C++", "POSTMAN", "Git"]
};

// RENDERING LOGIC & SPA NAVIGATION
document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Basic Info
    document.getElementById('user-name').innerText = DATA.name;
    document.getElementById('hero-tagline').innerText = DATA.role;
    document.getElementById('about-text').innerText = DATA.about;
    document.getElementById('year').innerText = new Date().getFullYear();

    const emailElem = document.getElementById('footer-email');
    if (emailElem) {
        emailElem.innerText = DATA.email;
        emailElem.href = `mailto:${DATA.email}`;
    }

    const phoneElem = document.getElementById('footer-phone');
    if (phoneElem) {
        phoneElem.innerText = DATA.phone;
        phoneElem.href = `tel:${DATA.phone.replace(/\s+/g, '')}`;
    }

    const locElem = document.getElementById('footer-location');
    if (locElem) {
        locElem.innerText = DATA.location;
    }

    // 2. Render Socials
    const socialContainer = document.getElementById('social-links');
    DATA.socials.forEach(s => {
        socialContainer.innerHTML += `<a href="${s.link}" target="_blank" rel="noopener noreferrer"><i class="${s.icon}"></i></a>`;
    });

    // 3. Render Experience
    const expList = document.getElementById('experience-list');
    DATA.experience.forEach(item => {
        expList.innerHTML += `
            <div class="timeline-item">
                <h3>${item.role}</h3>
                <span>${item.company} | ${item.period}</span>
                <p>${item.desc}</p>
            </div>`;
    });

    // 4. Render Education
    const eduList = document.getElementById('education-list');
    DATA.education.forEach(item => {
        eduList.innerHTML += `
            <div class="timeline-item">
                <h3>${item.Degree}</h3>
                <span>${item.University} | ${item.period}</span>
                <p style="color: var(--text-muted); margin-top: 0.5rem; font-weight: 500;">CGPA: <span style="background: transparent; padding: 0; color: var(--text);">${item.CGPA}</span></p>
            </div>`;
    });

    // 5. Render Projects
    const projGrid = document.getElementById('project-grid');
    DATA.projects.forEach(p => {
        projGrid.innerHTML += `
            <div class="card">
                <h3>${p.title}</h3>
                <p style="color: var(--text-muted)">${p.desc}</p>
                <div class="tags">
                    ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                ${p.link !== "#" ? `<a href="${p.link}" target="_blank" style="display:block; margin-top:1.5rem; color:var(--primary); text-decoration:none; font-weight:600;"><i class="fas fa-external-link-alt"></i> View Project</a>` : ''}
            </div>`;
    });

    // 6. Render Certifications
    const certGrid = document.getElementById('cert-grid');
    DATA.certifications.forEach(c => {
        certGrid.innerHTML += `
            <div class="card" style="padding: 2rem">
                <i class="fas fa-award" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem;"></i>
                <h3 style="margin-bottom: 0.5rem;">${c.title}</h3>
                <p style="color: var(--secondary); font-size: 0.9rem; font-weight: 600;">${c.issuer}</p>
                <div style="margin-top: auto; padding-top: 1rem;">
                    <span class="tag"><i class="far fa-calendar-alt"></i> Issued ${c.year}</span>
                </div>
            </div>`;
    });

    // 7. Render Skills
    const skillBox = document.getElementById('skills-list');

    // Mapping some common skills to FontAwesome icons (optional enhancement)
    const iconMap = {
        "HTML": "fab fa-html5", "CSS": "fab fa-css3-alt", "JavaScript": "fab fa-js",
        "React": "fab fa-react", "Python": "fab fa-python", "Git": "fab fa-git-alt"
    };

    DATA.skills.forEach(s => {
        let iconHtml = iconMap[s] ? `<i class="${iconMap[s]}" style="color: var(--primary)"></i> ` : '<i class="fas fa-check-circle" style="color: var(--secondary); font-size: 0.8rem"></i> ';
        skillBox.innerHTML += `<div class="skill-badge">${iconHtml}<span>${s}</span></div>`;
    });

    // --- SPA NAVIGATION LOGIC ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    // Handle Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            if (sidebar.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Handle Navigation Clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');

            // Remove active class from all links and sections
            navLinks.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Add active class to clicked link and corresponding section
            link.classList.add('active');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Close sidebar on mobile after clicking a link
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }

            // Scroll to top
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
