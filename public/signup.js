const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value;

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

  if (!passwordRegex.test(password)) {
    document.getElementById("message").innerText =
      "Password must contain minimum 8 characters, one uppercase letter, one lowercase letter and one number";
    return;
  }

  const res = await fetch("/api/users/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: password,
      passwordConfirm: document.getElementById("passwordConfirm").value,
    }),
  });

  if (res.ok) {
    document.getElementById("message").innerText = "Signup successful";
  } else {
    document.getElementById("message").innerText = "Signup failed";
  }
});
