import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")

/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}

/*
    RENDERING FUNCTION
*/
const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}


/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.
*/
// e is the event that happens, can be named something else
// addEventListener is listening for anything clicked in theme class div
// document.querySelector(".themes").addEventListener("click", e => {
//     const idOfClickedElement = e.target.id

//     if (idOfClickedElement.startsWith("themeButton--")) {
//         // if an actual button is clicked, split the name in half
//         // and pull out the color of the themeButtons--color class
//         // const [prefix, color] is putting a label to two parts of array
//         const [prefix, color] = idOfClickedElement.split("--")
//         contentTarget.classList = []
//         contentTarget.classList.add(color)
//         // .classList adds a class to the targeted div with name corresponding to
//         // class name in the css
//     }
// })

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked using the eventHub.
*/
const eventHub = document.querySelector(".container")
// listen to the .container section and 

eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color
    // look inside the event, target the detail label, find the color label

    contentTarget.classList = []
    contentTarget.classList.add(color)
})