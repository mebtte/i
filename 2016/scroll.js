(function () {
  const container = document.querySelector('.container');

  function useLightTheme() {
    document.documentElement.style.setProperty('--font-color', '#333');
    document.documentElement.style.setProperty('--background-color', '#eee');
  }

  function useDarkTheme() {
    document.documentElement.style.setProperty('--font-color', '#eee');
    document.documentElement.style.setProperty('--background-color', '#333');
  }

  let timer;
  let counter = 0;
  let autoScrolling = false;
  container.addEventListener('scroll', () => {
    if (autoScrolling) {
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      const { clientHeight, scrollTop } = container;
      if (counter % 2 === 0) {
        useDarkTheme();
      } else {
        useLightTheme();
      }
      counter += 1;

      autoScrolling = true;
      setTimeout(() => {
        autoScrolling = false;
      }, 500);
      container.scrollTop = clientHeight * Math.round(scrollTop / clientHeight);
    }, 2000);
  });
})();
