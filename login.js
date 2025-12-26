function login() {
  if (user.value === "admin" && pass.value === "1234") {
    location.href = "admin.html";
  } else {
    msg.innerText = "Login inválido";
  }
}
