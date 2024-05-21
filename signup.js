
function isValidName(name) {
  return /^[A-Za-z]+$/.test(name);
}


function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function isValidPhoneNumber(phone) {
  return /^\d{10}$/.test(phone);
}


function isValidPassword(password) {
  return password.length >= 8;
}


const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (!isValidName(name)) {
    alert('Name must contain only letters.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!isValidPhoneNumber(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  if (!isValidPassword(password)) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  console.log('Sign-up successful!');
});
