function search(){
    let searchBar = document.querySelector('.search-input') .value.toUpperCase();
    let productlist = document.querySelectorAll('.products');
    let product=document.querySelectorAll('.product-card');
    let getname = document.getElementsByTagName('h3');
    for (let i = 0; i < getname.length; i++){
        if (getname[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
            product[i].style.display = "";
        }
        else{
            product[i].style.display = "none";
        }
       
    }
}
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    // Name validation
    if (!name) {
      document.getElementById('nameError').textContent = 'Name is required.';
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      valid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Enter a valid email address.';
      valid = false;
    }

    // Password validation
    if (!password) {
      document.getElementById('passwordError').textContent = 'Password is required.';
      valid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      valid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Please re-enter your password.';
      valid = false;
    } else if (confirmPassword !== password) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      valid = false;
    }

    if (valid) {
      // You can now safely submit the form
      alert('Form submitted successfully!');
      // e.target.submit(); // Uncomment if you want to submit
    }
  });