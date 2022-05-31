import _ from "lodash";
import "./assets/styles/style.css";
import "./assets/styles/style.scss";
import Knife from "./assets/imgs/knife.jpg";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  const random = Math.random();

  element.classList.add(random > 0.5 ? "hello" : "hello-sass");
  return element;
}

function imageComponent(isBg = false) {
  if (isBg) {
    const element = document.createElement("div");
    element.classList.add("libai");
    return element;
  }
  const image = new Image();
  image.src = Knife;
  return image;
}

document.body.appendChild(component());
document.body.appendChild(component());
document.body.appendChild(imageComponent());
document.body.appendChild(imageComponent(true));
