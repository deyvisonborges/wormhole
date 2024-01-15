// document.addEventListener("DOMContentLoaded", function () {
//   // Criar o container principal
//   const container = document.getElementById("container");

//   // Criar os microfrontends
//   createMicrofrontend(container, "microfrontend1");
//   createMicrofrontend(container, "microfrontend2");
// });

// function createMicrofrontend(container, name) {
//   const microfrontend = document.createElement("div");
//   microfrontend.classList.add("microfrontend");

//   const content = document.createElement("div");
//   content.innerHTML = `
//       <h1>${name}</h1>
//       <p>This is ${name} content.</p>
//   `;

//   microfrontend.appendChild(content);
//   container.appendChild(microfrontend);
// }

// // Criar um elemento h1 fora da função de evento DOMContentLoaded
// const h1Element = document.createElement("h1");
// h1Element.innerText = "Microfrontend Outside";
// document.body.appendChild(h1Element);

document.addEventListener("DOMContentLoaded", function () {
  const microfrontend = document.currentScript.closest(".microfrontend");
  const name = microfrontend.getAttribute("data-name");

  const content = document.createElement("div");
  content.innerHTML = `
      <h1>${name}</h1>
      <p>This is ${name} content.</p>
  `;

  microfrontend.appendChild(content);
});
