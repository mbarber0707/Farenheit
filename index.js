function conversion(event) {
  let farenheit = document.querySelector("#input").value;
  let celcius = (farenheit - 32) * (5 / 9);
  let kelvin = ((farenheit - 32) * 5) / 9 + 273.15;
  if (farenheit <= 32) {
    document.body.style.backgroundColor = "LightSkyBlue";
    document.querySelector(".mo-fire").classList.add("hidden");
    document.querySelector(".snowflakes").classList.remove("hidden");
  } else if (farenheit >= 212) {
    document.body.style.backgroundColor = "FireBrick";
    document.querySelector(".mo-fire").classList.remove("hidden");
    document.querySelector(".snowflakes").classList.add("hidden");
  } else {
    document.body.style.backgroundColor = "white";
    document.querySelector(".mo-fire").classList.add("hidden");
    document.querySelector(".snowflakes").classList.add("hidden");
  }
  document.querySelector("#celciusAnswer").textContent = celcius;
  document.querySelector("#kelvinAnswer").textContent = kelvin;
}
const submit = document.querySelector("#submit");
submit.addEventListener("click", conversion);
