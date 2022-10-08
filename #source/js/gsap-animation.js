const gsap = () => {
  const mediaQuery = window.matchMedia("(min-width: 601px)");
  if (mediaQuery.matches) {
    TweenMax.from(".js-title-main", 0.8, {
      delay: 0.1,
      opacity: 0,
      x: -500,
      easy: Expo.easyInOut,
    });

    TweenMax.from(".js-text-main", 0.8, {
      delay: 0.5,
      opacity: 0,
      x: -500,
      easy: Expo.easyInOut,
    });

    TweenMax.from(".js-btn-main", 0.8, {
      delay: 1,
      opacity: 0,
      easy: Expo.easyInOut,
    });

    TweenMax.from(".js-cake", 1.5, {
      delay: 1.2,
      ease: "bounce.out",
      y: -1000,
    });
  }

  const mediaQueryMobile = window.matchMedia("(max-width: 600px)");
  if (mediaQueryMobile.matches) {
    TweenMax.from(".js-title-main", 0.8, {
      delay: 0.1,
      opacity: 0,
      x: -500,
      easy: Expo.easyInOut,
    });

    TweenMax.from(".js-btn-main", 0.8, {
      delay: 0.5,
      opacity: 0,
      easy: Expo.easyInOut,
    });

    TweenMax.from(".js-cake", 1.5, {
      delay: 0.8,
      ease: "bounce.out",
      y: -1500,
    });
  }
};

gsap();
