<script>
        // Mobile menu toggle
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu after clicking
                    document.getElementById('navMenu').classList.remove('active');
                }
            });
        });

        // Add scroll effect to navigation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                // Approximate #11071F with higher opacity for scroll state
                nav.style.background = 'rgba(17, 7, 31, 0.98)';
            } else {
                // Approximate #11071F with base opacity
                nav.style.background = 'rgba(17, 7, 31, 0.95)';
            }
        });
    </script>