const tabsFunctionality = (() => {

    const whichElement  = (clickedElement) => {
        let currentElement = ""
        if(currentElement === ""){
            currentElement = document.querySelector("#one")
        }else{
            currentElement = clickedElement
        }

        return currentElement

    }

    const highlightElement = (element) =>{
        element.style.backgroundColor = "hsl(178, 9%, 81%)"
    }

})()


export {tabsFunctionality}
