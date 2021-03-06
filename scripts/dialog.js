const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    // Show Betty's details when the button is clicked
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )

    // Show Nemo's details when the button is clicked
    document.querySelector("#button--nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--nemo")
            theDialog.showModal()
        }
    )
    
    // Show Bob's details when the button is clicked
    document.querySelector("#button--bob").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bob")
            theDialog.showModal()
        }
    )

    // Show Dory's details when the button is clicked
    document.querySelector("#button--dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dory")
            theDialog.showModal()
        }
    )
    // Show Dave's details when the button is clicked
    document.querySelector("#button--dave").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dave")
            theDialog.showModal()
        }
    )
   
    //Show Jerry's details when button is clicked
    document.querySelector("#button--jerry").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--jerry")
            theDialog.showModal()
        }
    )

    //Show Billy's details when button is clicked
    document.querySelector("#button--billy").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--billy")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents