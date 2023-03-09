
function passwordEnter() {
    var passwordIcon = document.getElementById("show-password");
  
    if (passwordIcon.classList.contains("d-none")) {
      passwordIcon.classList.remove("d-none");
    }
  }
  
  function hidePasswordIcon() {
    var passwordInput = document.getElementById("password");
    var passwordIcon = document.getElementById("show-password");
  
    if (passwordInput.value === "") {
      document.getElementById("hide-password").classList.add("d-none");
      passwordIcon.classList.add("d-none");
    } else {
      passwordIcon.classList.remove("d-none");
    }
  }
  
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("show-password");
    const hidePasswordButton = document.getElementById("hide-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordButton.classList.add("d-none");
      hidePasswordButton.classList.remove("d-none");
    } else {
      passwordInput.type = "password";
      showPasswordButton.classList.remove("d-none");
      hidePasswordButton.classList.add("d-none");
    }
  
    if (passwordInput.value === "") {
      showPasswordButton.classList.remove("d-none");
      hidePasswordButton.classList.remove("d-none");
    }
  }
  
  document.getElementById("password").addEventListener("input", function() {
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("show-password");
    const hidePasswordButton = document.getElementById("hide-password");
  
    if (passwordInput.value !== "") {
      showPasswordButton.classList.remove("d-none");
      hidePasswordButton.classList.remove("d-none");
    } else {
      showPasswordButton.classList.add("d-none");
      hidePasswordButton.classList.add("d-none");
    }
  });
  