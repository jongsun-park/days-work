export const subscribe = () => {
  const subscribeEl = document.querySelector("button[type='submit']");
  subscribeEl.addEventListener("click", (e) => {
    e.preventDefault();
  });
};
