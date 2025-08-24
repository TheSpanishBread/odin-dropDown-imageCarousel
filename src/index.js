import "./styles.css";
import { toolBox } from "./toolBox";
import { DOMVariables } from "./DOMVariables";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";

const images = [image0, image1, image2];

toolBox.switchImage.addCounter();
toolBox.imageCounter(images);
toolBox.switchImage.timeCounter(images);
// dropddown
DOMVariables.dropDowns.forEach((element, index) => {
  element.addEventListener("mouseenter", () => {
    toolBox.dropDown(element, index);
  });
});

DOMVariables.dropDowns.forEach((element, index) => {
  element.addEventListener("mouseleave", () => {
    //fix something here
    if (document.querySelector("#dropDownItems" + index).firstChild) {
      while (document.querySelector("#dropDownItems" + index).firstChild)
        document.querySelector("#dropDownItems" + index).firstChild.remove();
    }
  });
});
//carousel
DOMVariables.left.addEventListener("click", () => {
  let counter = toolBox.switchImage.addCounter();
  DOMVariables.imageContainer.src = images[counter];
});

DOMVariables.right.addEventListener("click", () => {
  let counter = toolBox.switchImage.reduceCounter();
  DOMVariables.imageContainer.src = images[counter];
});
