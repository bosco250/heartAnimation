const bodyEl = document.body;
bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.clientX;
  const yPos = event.clientY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  bodyEl.appendChild(spanEl);
  let size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
