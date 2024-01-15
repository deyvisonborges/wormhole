document.addEventListener("DOMContentLoaded", function () {
  const microfrontend = document.currentScript.closest(".microfrontend");
  const name = document.currentScript.getAttribute("data-name");

  const content = document.createElement("div");
  content.innerHTML = `
      <h1>Micronfrontend 1</h1>
      <p>This is Microfrontend 1 content.</p>
  `;

  microfrontend.appendChild(content);
});

// Criação do elemento h1 deve ser feita dentro da função de evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const h1Element = document.createElement("h1");
  h1Element.innerText = "Microfrontend 1";
  document.body.appendChild(h1Element); // Ou substitua `document.body` pelo elemento desejado
});
