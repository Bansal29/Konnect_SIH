const emailInput1 = document.getElementById("email1");
const emailInput2 = document.getElementById("email2");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const showPasswordButton = document.getElementById("show-password");
const universitySelect = document.getElementById("university");

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Check if passwords match
  if (password !== confirmPassword) {
    passwordError.textContent = "Passwords do not match";
    return;
  } else {
    passwordError.textContent = "";
  }
  alert("Sign Up successfull! Welcome to Connect!");
  // Redirect to the dashboard page upon successful submission
  window.location.href = "dashboard.html"; // Replace with your actual dashboard page URL
});

showPasswordButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showPasswordButton.textContent = "Show";
  }
});

const universities = [
  "Bharati Vidyapeeth",
  "Deccan College Post-Graduate and Research Institute",
  "MIT University - MIT Art, Design and Technology University",
  "MIT - World Peace University",
];

// Sort the universities array alphabetically
universities.sort();

// Populate the select element with the sorted universities
universities.forEach((university) => {
  const option = document.createElement("option");
  option.text = university;
  option.value = university;
  universitySelect.appendChild(option);
});

universitySelect.addEventListener("change", () => {
  const selectedUniversity = universitySelect.value;

  // Define a mapping of universities to email domains (update as needed)
  const universityToEmailDomain = {
    "Bharati Vidyapeeth": "bharatividyapeeth.edu.in",
    "Deccan College Post-Graduate and Research Institute":
      "deccancollege.edu.in",
    "MIT - World Peace University": "mitwpu.edu.in",
    "MIT University - MIT Art, Design and Technology University":
      "mitwpu.edu.in",
    // Add more universities and domains as needed
  };

  // Set the email field based on the selected university
  if (universityToEmailDomain[selectedUniversity]) {
    emailInput2.value = `@${universityToEmailDomain[selectedUniversity]}`;
  } else {
    emailInput2.value = "";
  }
});
