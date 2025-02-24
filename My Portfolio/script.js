document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    // 🌟 Smooth Scrolling
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav ul li a");
        const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector("nav ul");
    
        // 🌟 Smooth Scrolling
        navLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
    
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
    
                // Close menu on mobile
                if (window.innerWidth < 768) {
                    navMenu.classList.remove("show");
                }
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            const menuToggle = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-links");
        
            // 📱 Toggle Mobile Menu
            menuToggle.addEventListener("click", function () {
                navMenu.classList.toggle("active");
            });
        
            // 🛠 Close Menu When Clicking Outside
            document.addEventListener("click", function (event) {
                if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                    navMenu.classList.remove("active");
                }
            });
        });
        
        // 📱 Mobile Menu Toggle (Now Works Properly)
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    
        // 🛠 Close Mobile Menu When Clicking Outside
        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove("show");
            }
        });
    });
    
    
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }

            // Close menu on mobile
            if (window.innerWidth < 768) {
                navMenu.classList.remove("show");
            }
        });
    });

    // 🎯 Highlight Active Section in Navbar
    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // 👀 Reveal Sections with Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // 🎹 Typing Effect
    const textElement = document.querySelector(".home-content h1 .highlight");
    const text = "Rudra Vyas";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 150);
        }
    }

    if (textElement) {
        textElement.innerHTML = ""; // Clear text first
        typeText();
    }

    // 📱 Mobile Menu Toggle
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});
