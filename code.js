const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  resizeOps();
  window.addEventListener("resize", resizeOps);

  window.addEventListener("load", () => {
    document.querySelector(".data").innerHTML = `Heights: \n 
    vh (blue): ${document.querySelector(".vh").clientHeight}px,
    js-changed-vh (red): ${document.querySelector(".js-changed-vh").clientHeight}px,
    percent-to-body (yellow0): ${document.querySelector(".percent-to-body").clientHeight}px`;
  })