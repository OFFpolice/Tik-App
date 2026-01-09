window.addEventListener("load", () => {

  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    tg.ready();
    //tg.expand();
    tg.enableClosingConfirmation();
    tg.disableVerticalSwipes();
    tg.requestFullscreen();
    tg.lockOrientation();

    console.log("Telegram WebApp is ready:", tg.initData);
  } else {
    console.warn("Telegram WebApp not found.");
  }
});