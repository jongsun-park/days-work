import Cursor from "./cursor";
import { gsap } from "gsap";
import { post } from "./post";
import { subscribe } from "./subscribe";

const body = document.querySelector("body");

window.onload = () => {
  body.classList.remove("loading");
  post();
  subscribe();
  gsap.from(body, {
    opacity: 0,
    duration: 1,
  });
  const cursor = new Cursor(document.querySelector(".cursor"));
};
