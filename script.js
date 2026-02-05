document.querySelectorAll(".type").forEach((el) => {
  const text = el.textContent;
  el.textContent = "";
  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.setProperty("--i", i);
    el.appendChild(span);
  });
});
