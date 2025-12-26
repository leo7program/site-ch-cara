let reservas = [];

fetch("reservas.json")
.then(r => r.json())
.then(d => {
  reservas = d;
  render();
});

function add() {
  if (data.value && !reservas.includes(data.value)) {
    reservas.push(data.value);
    render();
  }
}

function render() {
  lista.innerHTML = "";
  reservas.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    lista.appendChild(li);
  });
}
