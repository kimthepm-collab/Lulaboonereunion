const reunionDate =
  new Date("2027-06-18T00:00:00-04:00");


function updateCountdown() {

  const now = new Date();

  const distance =
    reunionDate.getTime() - now.getTime();


  if (distance <= 0) {

    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";

    return;
  }


  const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor(
      (distance / (1000 * 60 * 60)) % 24
    );

  const minutes =
    Math.floor(
      (distance / (1000 * 60)) % 60
    );

  const seconds =
    Math.floor(
      (distance / 1000) % 60
    );


  document.getElementById("days").textContent =
    days;

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);



/* MOBILE NAVIGATION */

const menuButton =
  document.querySelector(".menu-button");

const navigation =
  document.querySelector("#navigation");


menuButton.addEventListener("click", () => {

  const open =
    navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    open
  );

});


navigation
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });
