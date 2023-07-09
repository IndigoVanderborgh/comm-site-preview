// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
// added onclick button to error on line 8 of index.html

let errorParagraph = document.getElementById("error")

function purchase() {
    errorParagraph.textContent = "Something went wrong, please try again"
}