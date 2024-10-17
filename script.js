
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const usernameInput = document.getElementById("username");
const displayName = document.getElementById("display-name");

saveBtn.addEventListener('click', saveUsername);
clearBtn.addEventListener('click', clearUsername);

// Determine the time of day and return a greeting
function getGreeting() {
    const hours = new Date().getHours();

    if (hours < 12) {
        return "Good Morning";
    } else if (hours < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

// Display the saved name
function displaySavedName() {
    const savedName = localStorage.getItem("username");
    const greeting = getGreeting();

    if (savedName) {
        displayName.innerHTML = `${greeting}, ${savedName}!`;
    } else {
        displayName.innerHTML = "No name saved.";
    }
}

// Save the name to localStorage
function saveUsername() {
    const userName = usernameInput.value.trim();

    if (userName) {
        localStorage.setItem('username', userName);
        displaySavedName();
        usernameInput.value = '';  
    } else {
        displayName.innerHTML = "Enter a name.";
    }
}

// Clear the saved name
function clearUsername() {
    localStorage.removeItem('username');
    displayName.innerHTML = "Name has been cleared.";
}


// Display the saved name
displaySavedName();