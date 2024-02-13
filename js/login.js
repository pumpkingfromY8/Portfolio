function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Load account data from account.json
    fetch('account.json')
        .then(response => response.json())
        .then(accountData => {
            // Check if the entered username and password match any account
            const isValidUser = accountData.some(account => account.username === username && account.password === password);

            if (isValidUser) {
                alert('Login successful!');

                // Store user information in localStorage
                const userData = { username, password };
                localStorage.setItem('user', JSON.stringify(userData));

                // Redirect to the dashboard or another page
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        })
        .catch(error => console.error('Error fetching account data:', error));
}

const loginform = document.getElementById("form");
// Retrieve user information from localStorage
const userData = JSON.parse(localStorage.getItem('user'));

if (userData) {
const username = userData.username;
// Use the username or other user information as needed
} else {
loginform.style.display = "block";
// User is not logged in, handle accordingly
// alert('User is not logged in. Redirect to login page or take appropriate action.');
}