document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('passwordInput');
    var resultElement = document.getElementById('result');
    var showPasswordButton = document.getElementById('showPasswordButton');
    var clearButton = document.getElementById('clearButton');

    passwordInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkPasswordStrength();
        }
    });

    function checkPasswordStrength() {
        var password = passwordInput.value;

        // Password strength checking logic (use your existing JavaScript logic here)
        var result = checkPasswordStrengthLogic(password);

        // Use innerHTML to render HTML tags
        resultElement.innerHTML = result;
    }

    function checkPasswordStrengthLogic(password) {
        // Minimum length check
        if (password.length < 8) {
            return '<span style="color: #FF3F7C;">Weak</span> <span class="animatedEmoji">💔</span><br><span style="font-size: smaller;">(Password should be minimum 8 characters long)</span>';
        }

        // Check for uppercase, lowercase, and digits
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
            return '<span style="color: #FF3F7C;">Weak</span> <span class="animatedEmoji">💔</span><br><span style="font-size: smaller;">(Password should contain uppercase, lowercase, and numeric characters)</span>';
        }

        // Check for special characters
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return '<span style="color: #FF3F7C;">Weak</span> <span class="animatedEmoji">💔</span><br><span style="font-size: smaller;">(Password should contain special characters)</span>';
        }

        // Strong password
        return '<span style="color: #FF3F7C;">Strong</span> <span class="animatedEmoji">❤️</span>';
    }

    // Show/hide password functionality
    showPasswordButton.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordButton.innerHTML = '🔓';
        } else {
            passwordInput.type = 'password';
            showPasswordButton.innerHTML = '🔒';
        }
    });

    // Clear function
    clearButton.addEventListener('click', function () {
        passwordInput.value = '';
        resultElement.innerHTML = '';
    });

});
