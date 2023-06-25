import { tabsFunctionality } from "./modules";

const addedEelements = [
  {
    label: "one",
    contentTitle: "one title",
    content: "bruuuuh",
  },
  {
    label: "two",
    contentTitle: "twp title",
    content: "bruuuuh",
  },
];

class Tab {
  constructor(container, config) {
    this.container = container;
    this.config = config;
  }

  findContainer() {
    return document.querySelector(this.container);
  }

  addElementToContainer() {
    const element = document.createElement("div");
    element.innerHTML = this.config.content;
    element.id = this.config.label;
    this.findContainer().appendChild(element)
  }

  tabHi
}

function addTabs(tab, index){
  let testTab = new Tab(".tabs-container", addedEelements[index])
  testTab.addElementToContainer()
}

addedEelements.forEach(addTabs)

console.log(tabsFunctionality.whichElement())