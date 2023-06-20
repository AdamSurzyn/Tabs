const addedEelements = [
  {
    label: "one",
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
}

const testTab = new Tab(".tabs-container", addedEelements[0])

testTab.addElementToContainer()