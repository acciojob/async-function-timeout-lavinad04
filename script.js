//your JS code here. If required.
 document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", async function() {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);

    output.textContent = "Waiting...";

    await delayFunction(delay);

    output.textContent = text;
  });

  function delayFunction(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }
});
