const addedEelements = [
  {
    label: "one",
    contentTitle: "One title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    label: "two",
    contentTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    label: "three",
    contentTitle: "Three title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
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
    element.innerHTML = this.config.contentTitle;
    element.id = this.config.label;
    this.findContainer().appendChild(element)
  }

  addOnclickHighlight() {
    const element = document.querySelector(`#${this.config.label}`)

    element.addEventListener("click", function(){
      highlightElement(element)
      showElementsContent(element)
    })
  }

}

function addTabs(testTab, index){
  testTab = new Tab(".tabs-container", addedEelements[index])
  testTab.addElementToContainer()
  testTab.addOnclickHighlight()
}

function highlightElement(element){
  addedEelements.forEach((el)=>{
    let targetElement = document.querySelector(`#${el.label}`)
    targetElement.style.backgroundColor = "white";
  })

  if (element === undefined){
    element = document.querySelector("#one")
  }
  element.style.backgroundColor = "#FEE68E"
  // i/o changing the style, i should swap a class with this background color.

}

function showElementsContent(element){
  const tabTitleElement = document.querySelector(".tab-title")
  const tabContentElement = document.querySelector(".tab-content")
  if (element === undefined){
    element = document.querySelector("#one")
  }
  addedEelements.forEach((tab)=>{
    if(element.id === tab.label){
      tabTitleElement.innerHTML = tab.contentTitle
      tabContentElement.innerHTML = tab.content
    }
  })

}

addedEelements.forEach(addTabs)
highlightElement()
showElementsContent()
