// Аккордеон в командах

let teamsItemTitle = document.querySelectorAll(".teams__item-title");

teamsItemTitle.forEach((title, i) => {
  title.addEventListener("click", () => {
    title.closest(".teams__item").classList.add("teams__item--active");
    let description = title
      .closest(".teams__item")
      .querySelector(".teams__item-decription");

    description.style.maxHeight = description.scrollHeight + "px";

    teamsItemTitle.forEach((otherTitle, j) => {
      if (j != i) {
        otherTitle
          .closest(".teams__item")
          .classList.remove("teams__item--active");
        let otherDescription = otherTitle
          .closest(".teams__item")
          .querySelector(".teams__item-decription");
        otherDescription.style.maxHeight = null;
      }
    });
  });
});
