function login() {
  const u = user.value;
  const p = pass.value;

  if (u === "admin" && p === "1234") {
    location.href = "admin.html";
  } else {
    msg.innerText = "Login inválido";
  }
}
