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

// Аккордеон в вакнсиях

let subdivisionVacancyTitle = document.querySelectorAll(".subdivision__vacancy-title");

subdivisionVacancyTitle.forEach((title, i) => {
  title.addEventListener("click", () => {
    title.closest(".subdivision__vacancy").classList.toggle("subdivision__vacancy--active");
    let description = title
      .closest(".subdivision__vacancy")
      .querySelector(".subdivision__vacancy-more");
    if (description.style.maxHeight) {
      description.style.maxHeight = null;
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
    }
  });
});

// Слайдер в about vk teams
if (document.documentElement.clientWidth < 768) {
  let aboutVkteamsCardsListWrapper = document.querySelector('.about-vkteams__cards-list-wrapper');
  let aboutVkteamsCard = aboutVkteamsCardsListWrapper.querySelectorAll('.about-vkteams__card');

  if (aboutVkteamsCardsListWrapper) {
    aboutVkteamsCard.forEach(card => {
      card.classList.add('swiper-slide')
    })

    const swiper = new Swiper(aboutVkteamsCardsListWrapper, {
      wrapperClass: 'about-vkteams__cards-list',
      slidesPerView: 1.25,
    
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}