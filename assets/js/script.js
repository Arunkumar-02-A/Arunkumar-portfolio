$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Arun Kumar";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json") :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="assets/images/projects/${project.image}.png" alt="project erro"/>
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });




// Skills data embedded in the JavaScript
const skills = [
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    // {
    //     "name": "Redux",
    //     "icon": "https://img.icons8.com/color/48/000000/redux.png"
    // },
    // {
    //     "name": "Firebase",
    //     "icon": "https://img.icons8.com/color/48/000000/firebase.png"
    // },
    // {
    //     "name": "Android",
    //     "icon": "https://img.icons8.com/fluency/48/000000/android-os.png"
    // },
    // {
    //     "name": "MaterialUI",
    //     "icon": "https://img.icons8.com/color/48/000000/material-ui.png"
    // },
    // {
    //     "name": "ChakraUI",
    //     "icon": "https://img.icons8.com/color/48/000000/chakra-ui.png"
    // },
    {
        "name": "TailwindCSS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    // {
    //     "name": "Bootstrap",
    //     "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    // },
    // {
    //     "name": "Sass",
    //     "icon": "https://img.icons8.com/color/48/000000/sass.png"
    // },
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    // {
    //     "name": "Java",
    //     "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    // },
    // {
    //     "name": "Kotlin",
    //     "icon": "https://img.icons8.com/color/48/000000/kotlin.png"
    // },
    // {
    //     "name": "PHP",
    //     "icon": "https://img.icons8.com/offices/48/000000/php-logo.png"
    // },
    // {
    //     "name": "Python",
    //     "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    // },
    // {
    //     "name": "C++",
    //     "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    // },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    // {
    //     "name": "PostgreSQL",
    //     "icon": "https://img.icons8.com/color/48/000000/postgreesql.png"
    // },
    // {
    //     "name": "AWS",
    //     "icon": "https://img.icons8.com/color/48/000000/amazon-web-services.png"
    // },
    // {
    //     "name": "Heroku",
    //     "icon": "https://img.icons8.com/color/48/000000/heroku.png"
    // },
    // {
    //     "name": "Netlify",
    //     "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    // },
    // {
    //     "name": "DigitalOcean",
    //     "icon": "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png"
    // },
    // {
    //     "name": "jQuery",
    //     "icon": "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
    // },
    // {
    //     "name": "Git VCS",
    //     "icon": "https://img.icons8.com/color/48/000000/git.png"
    // },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    // {
    //     "name": "WordPress",
    //     "icon": "https://img.icons8.com/color/48/000000/wordpress.png"
    // }
];
showSkills(skills)


// Array of project objects
const projects = [
    
    {
        "name": "UDEMY CLONE",
        "desc": "Developed a small website named Udemy Clone using <strong>HTML</strong>,<strong> CSS</strong>, and <strong>React</strong>. The project provides an overview of Udemy's core layout and functionality",
        "image": "udemy",
        "links": {
            "view": "https://udemy-react-green.vercel.app/",
            "code": "https://github.com/Arunkumar-02-A/Udemy-react"
        }
    },
    {
        "name": "NOSTRA CLONE",
        "desc": "Created a small website named Nostra Clone using <strong> HTML</strong>,<strong> CSS</strong>, and <strong>JavaScript</strong>. This clone replicates the structure and design of the Nostra website.",
        "image": "nostr",
       
        "links": {
            "view": "https://arunkumar-02-a.github.io/Nostra-Website-Clone/",
            "code": "https://github.com/Arunkumar-02-A/Nostra-Website-Clone"
        }
    },
    {
        "name": "GREENDEN CLONE",
        "desc": "Built a GreenDen clone using<strong> HTML, Tailwind CSS,</strong> and <strong> JavaScript</strong>. This project showcases a clean, responsive design and basic interactivity similar to the original website",
        "image": "green",
        
        "links": {
            "view": "https://arunkumar-02-a.github.io/Greenden-Tailwind-Clone/",
            "code": "https://github.com/Arunkumar-02-A/Greenden-Tailwind-Clone"
        }
    },
    {
        "name": "TRIPADVISOR CLONE",
        "desc": "Designed a TripAdvisor Clone using <strong>HTML and CSS </strong>. The website includes key sections, with a focus on layout and basic styling.",
        "image": "trip",
        "category": "basicweb",
        "links": {
            "view": "https://arunkumar-02-a.github.io/Tripadvisor-Project-/",
            "code": "https://github.com/Arunkumar-02-A/Tripadvisor-Project-"
        }
    },
    
    {
        "name": "SEARCH",
        "desc": "small Google search clone",
        "image": "google",
        "category": "basicweb",
        "links": {
            "view": "https://arunkumar-02-a.github.io/search-/",
            "code": "https://github.com/Arunkumar-02-A/search-"
        }
    },
 
];




// Call the function to display the projects
showProjects(projects);


