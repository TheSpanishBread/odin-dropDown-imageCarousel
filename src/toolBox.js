//toolBox Functions

import { DOMVariables } from "./DOMVariables";

const toolBox = {
  dropDown(element, index) {
    console.log(index);
    let dropDownItems = document.querySelector("#dropDownItems" + index);
    console.log(dropDownItems);
    let ul = document.createElement("ul");
    ul.classList.add("flexColumn", "list");
    dropDownItems.appendChild(ul);

    for (let i = 0; i <= 5; i++) {
      let li = document.createElement("li");
      li.textContent = "This is is list item number: " + i;
      ul.appendChild(li);
      //change this
    }

    element.appendChild(dropDownItems);
  },
  switchImage: {
    counter: 0,
    addCounter() {
      if (this.counter == 2) {
        this.counter = 0;
      } else {
        this.counter++;
      }
      console.log(this.counter);
      return this.counter;
    },
    reduceCounter() {
      if (this.counter == 0) {
        this.counter = 2;
      } else {
        this.counter--;
      }
      console.log(this.counter);
      return this.counter;
    },
    getCounter() {
      return this.counter;
    },
    timeCounter(images) {
      setTimeout(() => {
        let currentCounter = this.addCounter();
        DOMVariables.imageContainer.src = images[currentCounter];
        console.log("timer" + currentCounter);
        this.timeCounter(images);
      }, 5000);
    },
  },
  imageCounter(images) {
    for (let i = 0; i < images.length; i++) {
      let button = document.createElement("button");
      button.textContent = "o";
      DOMVariables.dots.appendChild(button);

      button.addEventListener("click", () => {
        DOMVariables.imageContainer.src = images[i];
        console.log(i);
      });
    }
  },
};

export { toolBox };
