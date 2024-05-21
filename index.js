const signInForm = document.getElementById('signInForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (email === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 8 characters long.');
        return;
      }

   
      console.log('Sign-in successful!');
    });

    function isValidEmail(email) {
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }