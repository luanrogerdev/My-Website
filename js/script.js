   //header
   const header = document.querySelector("header");
    window.addEventListener("scroll", function(){
        header.classList.toggle("sticky", window.scrollY > 90)
    });

    let menu= document.querySelector('#menu-icon');
    let navlist= document.querySelector('.navlist');

    menu.onclick = () => {
        navlist.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    };

    window.addEventListener('scroll', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    });   
    
    



    //scroll reveal
    ScrollReveal({
        distance: '30px',
        duration: 3000,
    });

    ScrollReveal().reveal('.hero-text, .portfolio-content, .skills-content, .contact-content', {origin: 'left'});






    //roll scroll
    document.addEventListener('DOMContentLoaded', function() {
        const scrollButton = document.querySelector('.scroll a');
        const sectionIds = ['home', 'portfolio', 'skills', 'contact'];
        let currentIndex = 0;
    
        function scrollToNextSection() {
            // Get the next ID in the list
            currentIndex = (currentIndex + 1) % sectionIds.length;
            const nextSectionId = sectionIds[currentIndex];
            const nextSection = document.getElementById(nextSectionId);
    
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    
        function updateScrollButtonVisibility() {
            const lastSectionId = sectionIds[sectionIds.length - 1];
            const lastSection = document.getElementById(lastSectionId);
            const scrollPosition = window.scrollY + window.innerHeight;
    
            // Verify if the last section is visible
            if (lastSection) {
                const lastSectionOffsetTop = lastSection.offsetTop;
                const lastSectionHeight = lastSection.offsetHeight;
                
                // Define where the button must desapear
                const hideBeforeOffset = lastSectionOffsetTop + lastSectionHeight - 380;
    
                if (scrollPosition > hideBeforeOffset) {
                    scrollButton.style.display = 'none';
                } else {
                    scrollButton.style.display = 'block';
                }
            }
        }
    
        function handleScroll() {
            // Update the visibility of button
            updateScrollButtonVisibility();
    
            // Ajust the índice of visible section
            for (let i = 0; i < sectionIds.length; i++) {
                const section = document.getElementById(sectionIds[i]);
                if (section && isElementInViewport(section)) {
                    currentIndex = i;
                    break;
                }
            }
        }
    
        function isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    
        // Add the click event into the scroll button click
        scrollButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToNextSection();
        });
    
        // Refresh the visibility of button into the roll
        window.addEventListener('scroll', handleScroll);
    
        // Start the visibility of the button in the indice of section
        handleScroll();
    });    