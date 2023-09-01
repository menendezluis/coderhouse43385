async function postSignup(
  first_name,
  last_name,
  birthDate,
  username,
  password,
  dni
) {
  const data = {
    first_name,
    last_name,
    birthDate,
    email: username,
    password,
    dni,
  };

  const response = await fetch("/api/sessions/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
}

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (event) {
  console.log("tracking");
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const dni = document.getElementById("dni").value;

  const birthDate = document.getElementById("birthDate").value;

  postSignup(first_name, last_name, birthDate, username, password, dni).then(
    (datos) => console.log(datos)
  );
});
