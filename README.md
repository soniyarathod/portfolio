# portfolio
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soniya Rathod - Portfolio</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>

</head>

<body>
    <header class="header">
        <a href="#home" class="logo">Soniya Rathod</a>
        <i class='bx bx-menu' id="menu-icon"></i>

        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <!-- Home section code -->
    <section class="home" id="home">
        <div class="container home-container">
            <div class="home-img">
                <img src="homeimg.jpg" alt="Soniya Rathod" />
            </div>
            <div class="home-content">
                <h3>Hello, I'm</h3>
                <h1>Soniya Rathod</h1>
                <h3>And I'm a <span class="multiple-text">Front-End Developer</span></h3>

                <p>I am dedicated to crafting engaging and responsive user interfaces with expertise in HTML, CSS, and
                    JavaScript.
                    I focus on making sure my websites are easy to use and look great on all devices.</p>
                <div class="social-media">
                    <a href="" class="circle">
                        <img src="https://th.bing.com/th/id/OIP.U-jPl-UeaS0YY4bKeWnO_QHaHa?w=500&h=500&rs=1&pid=ImgDetMain"
                            alt="LinkedIn Profile" />
                    </a>
                    <a href="" class="circle">
                        <img src="https://th.bing.com/th/id/OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg?rs=1&pid=ImgDetMain"
                            alt="GitHub Profile" />
                    </a>
                    <a href="" class="circle">
                        <img src="https://th.bing.com/th/id/OIP.I_m9mn-spa_wbRcR1sCspwHaHa?rs=1&pid=ImgDetMain"
                            alt="Instagram Profile" />
                    </a>
                </div>
                <a href="#" class="button">Download CV</a>

            </div>
        </div>
    </section>
    <!-- About section -->
    <section class="about" id="about">
        <div class="container about">
            <div class="about-img">
                <img src="homeimg.jpg" alt="Soniya Rathod">
            </div>
            <div class="about-content">
                <h2 class="heading">About Me</h2>
                <h3>I'm Soniya Rathod</h3>
                <h4>Computer Science Engineering Student at KLS Gogte Institute of Technology.</h4>
                <p>
                    I love to create beautiful and intuitive web interfaces. I specialize in using
                    HTML, CSS, and JavaScript to build websites that are both visually appealing and
                    easy to use. I focus on ensuring my websites work perfectly on all devices,
                    from desktops to mobile phones. I enjoy turning creative designs into functional
                    and user-friendly websites.
                </p>
                <a href="#" class="button">Read more</a>
            </div>
           
        </div>
    </section>

    <section id="services" class="services-section">
        <h2>Services</h2>
        <div class="services-grid">
            <div class="service-item">
                <img src="imagess/service1.jpeg" alt="Web Development">
                <h3>Web Development</h3>
                <p>Creating responsive and dynamic websites using the latest technologies.</p>
            </div>
            <div class="service-item">
                <img src="imagess/service2.png" alt="UI/UX Design">
                <h3>UI/UX Design</h3>
                <p>Designing user-friendly interfaces with a focus on user experience.</p>
            </div>
            <div class="service-item">
                <img src="imagess/service3.jpeg" alt="Responsive Design">
                <h3>Responsive Design</h3>
                <p>Ensuring your websites look great on all devices, from desktops to mobiles.</p>
            </div>
            <div class="service-item">
                <img src="imagess/service 4.png" alt="Website Maintenance">
                <h3>Website Maintenance</h3>
                <p>Providing ongoing support and maintenance to keep your website up-to-date.</p>
            </div>
        </div>
    </section>
    <!--Portfolio Section-->
    <section id="portfolio" class="portfolio-section">
        <h2>My Portfolio</h2>
        <div class="portfolio-grid">
            <div class="portfolio-item"> <img src="imagess/project1.png" alt="Project 1">
                <h3>Project 1</h3>
                <p>NutriGuard provides personalized, real-time diet recommendations to help you achieve your health
                    goals efficiently.</p>
            </div>
            <div class="portfolio-item"> <img src="imagess/project2.png" alt="Project 2">
                <h3>Project 2</h3>
                <p>The Tailwind Form Project demonstrates how to create visually appealing and user-friendly forms using
                    Tailwind CSS, showcasing various layouts and styles for signup and registration forms.</p>
            </div>
            <div class="portfolio-item"> <img src="imagess/project3.png" alt="Project 3">
                <h3>Project 3</h3>
                <p>The Email Validation Form Project showcases how to implement robust email validation to ensure user
                    inputs are accurate and compliant with format standards.</p>
            </div> 
        </div>
    </section>



    <!--Contact Page-->
    <section id="contact">
        <div>
            <h1>Contact Me</h1>
            <p></p>
            <form id="contactForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="button" onclick="submitForm()">Send Message</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="footer-container">
            <div class="footer-left">
                <p>&copy; Soniya Rathod. All rights reserved.</p>
            </div>
            <div class="footer-center">
                <p>Contact us: soniyarathod712@gmail.com | +91 8971961397</p>
            </div>
            <div class="footer-right">
                <a href="https://www.facebook.com" target="_blank">Facebook</a>
                <a href="https://www.twitter.com" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
                <a href="https://www.instagram.com" target="_blank">Instagram</a>
            </div>
        </div>
    </footer>


</body>

</html>
