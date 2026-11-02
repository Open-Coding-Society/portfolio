---
layout: page
title: Login
permalink: /login
search_exclude: true
show_reading_time: false
hide_title: true
---
<div class="ocs__container ocs__login-page">
    <header class="ocs__login-intro">
        <p class="ocs__community-eyebrow">My Good Brain community</p>
        <h1>Welcome back</h1>
        <p>Sign in to your account, or create one to continue.</p>
    </header>
    <div class="login-container">
    <!-- Python Login Form -->
    <div class="login-card">
        <h2 id="pythonTitle">User Login</h2>
        <hr>
        <form id="pythonForm" onsubmit="loginBoth(); return false;">
            <div class="form-group">
                <input type="text" id="uid" placeholder="Email or username" autocomplete="username" required>
            </div>
            <div class="form-group">
                <input type="password" id="password" placeholder="Enter your password" autocomplete="current-password" required>
            </div>
            <p>
                <button type="submit" class="large primary submit-button">Login</button>
            </p>
            <p id="message" role="status" aria-live="polite"></p>
        </form>
    </div>
    <div class="signup-card">
        <h2 id="signupTitle">Create an account</h2>
        <hr>
        <form id="signupForm" onsubmit="signup(); return false;">
            <div class="form-group">
                <input type="text" id="name" placeholder="Your full name" autocomplete="name" required>
            </div>
            <div class="form-group">
                <input type="text" id="signupUid" placeholder="Choose a username" autocomplete="username" required>
            </div>
            <div class="form-group">
                <input type="text" id="signupSid" placeholder="Student ID" required>
            </div>
            <div class="form-group">
                <input type="email" id="signupEmail" placeholder="Your email address" autocomplete="email" required>
            </div>
            <div class="form-group">
                <input type="password" id="signupPassword" placeholder="Create a password" autocomplete="new-password" required>
            </div>
            <p>
                <label class="switch">
                    <span class="toggle">
                        <input type="checkbox" name="kasmNeeded" id="kasmNeeded">
                        <span class="slider"></span>
                    </span>
                    <span class="label-text">Kasm Server Needed</span>
                </label>

            </p>
            <p>
                <button type="submit" class="large primary submit-button">Sign Up</button>
            </p>
            <p id="signupMessage" role="status" aria-live="polite"></p>
        </form>
    </div>
</div>
</div>
<script type="module">
    import { login, pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    // Function to handle both Python and Java login simultaneously
    window.loginBoth = function () {
    javaLogin();  // Call Java login
    pythonLogin();
};
    // Function to handle Python login
    window.pythonLogin = function () {
        const options = {
            URL: `${pythonURI}/api/authenticate`,
            callback: pythonDatabase,
            message: "message",
            method: "POST",
            cache: "no-cache",
            body: {
                uid: document.getElementById("uid").value,
                password: document.getElementById("password").value,
            }
        };
        login(options);
    }
    // Function to handle Java login
    window.javaLogin = function () {
    const loginURL = `${javaURI}/authenticate`;
    const databaseURL = `${javaURI}/api/person/get`;
    const signupURL = `${javaURI}/api/person/create`;
    const userCredentials = JSON.stringify({
        uid: document.getElementById("uid").value,
        password: document.getElementById("password").value,
    });
    const loginOptions = {
        ...fetchOptions,
        method: "POST",
        body: userCredentials,
    };
    console.log("Attempting Java login...");
    fetch(loginURL, loginOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Invalid login");
            }
            return response.json();
        })
        .then(data => {
            console.log("Login successful!", data);
            window.location.href = '{{site.baseurl}}/profile';
            // Fetch database after login success using fetchOptions
            return fetch(databaseURL, fetchOptions);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Spring server response: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Java database response:", data);
        })
        .catch(error => {
            console.error("Login failed:", error.message);
            // If login fails, attempt account creation
            if (error.message === "Invalid login") {
                alert("Login for Spring failed. Creating a new Java account...");
                const signupData = JSON.stringify({
                    uid: document.getElementById("uid").value,
                    email: document.getElementById("uid").value + "@gmail.com",
                    dob: "11-01-2024", // Static date, can be modified
                    name: document.getElementById("uid").value,
                    password: document.getElementById("password").value,
                    kasmServerNeeded: false,
                });
                const signupOptions = {
                    ...fetchOptions,
                    method: "POST",
                    body: signupData,
                };
                fetch(signupURL, signupOptions)
                    .then(signupResponse => {
                        if (!signupResponse.ok) {
                            throw new Error("Account creation failed!");
                        }
                        return signupResponse.json();
                    })
                    .then(signupResult => {
                        console.log("Account creation successful!", signupResult);
                        alert("Account Creation Successful. Logging you into Flask/Spring!");
                        // Retry login after account creation
                        return fetch(loginURL, loginOptions);
                    })
                    .then(newLoginResponse => {
                        if (!newLoginResponse.ok) {
                            throw new Error("Login failed after account creation");
                        }
                        console.log("Login successful after account creation!");
                        // Fetch database after successful login
                        return fetch(databaseURL, fetchOptions);
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Spring server response: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log("Java database response:", data);
                    })
                    .catch(newLoginError => {
                        console.error("Error after account creation:", newLoginError.message);
                    });
            } else {
                console.log("Logged in!");
            }
        });
};
    // Function to fetch and display Python data
    function pythonDatabase() {
        const URL = `${pythonURI}/api/id`;
        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Flask server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                window.location.href = '{{site.baseurl}}/profile';
            })
            .catch(error => {
                document.getElementById("message").textContent = `Error: ${error.message}`;
            });
    }
    window.signup = function () {
        const signupButton = document.querySelector(".signup-card button");
        // Disable the button and change its color
        signupButton.disabled = true;
        signupButton.classList.add("disabled");
        const signupOptionsPython = {
            URL: `${pythonURI}/api/user`,
            method: "POST",
            cache: "no-cache",
            body: {
                name: document.getElementById("name").value,
                uid: document.getElementById("signupUid").value,
                email: document.getElementById("signupEmail").value,
                password: document.getElementById("signupPassword").value,
                kasm_server_needed: document.getElementById("kasmNeeded").checked,
            }
        };
        const signupOptionsJava = {
            URL: `${javaURI}/api/person/create`,
            method: "POST",
            cache: "no-cache",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                uid: document.getElementById("signupUid").value,
                sid: document.getElementById("signupSid").value,
                email: document.getElementById("signupEmail").value,
                dob: "11-01-2024",  // Static date for now, you can modify this
                name: document.getElementById("name").value,
                password: document.getElementById("signupPassword").value,
                kasmServerNeeded: document.getElementById("kasmNeeded").checked,
            })
        };
        fetch(signupOptionsJava.URL, signupOptionsJava)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById("signupMessage").innerText = "Sign up successful!";
                } else {
                    document.getElementById("signupMessage").innerText = "Sign up failed: " + data.message;
                }
            })
            .catch(error => {
                document.getElementById("signupMessage").innerText = "Error: " + error.message;
                console.error('Error during signup:', error);
            });
        fetch(signupOptionsPython.URL, {
            method: signupOptionsPython.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupOptionsPython.body)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Signup failed on one or both backends: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                document.getElementById("signupMessage").textContent = "Signup successful!";
                // Optionally redirect to login page or handle as needed
                // window.location.href = '{{site.baseurl}}/profile';
            })
            .catch(error => {
                console.error("Signup Error:", error);
                document.getElementById("signupMessage").textContent = `Signup Error: ${error.message}`;
                // Re-enable the button if there is an error
                signupButton.disabled = false;
                signupButton.style.backgroundColor = ''; // Reset to default color
            });
    }
    function javaDatabase() {
        const URL = `${javaURI}/api/person/get`;
        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error("Java Database Error:", error);
            });
    }
</script>
