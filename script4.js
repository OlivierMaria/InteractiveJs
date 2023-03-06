const editBtns = document.querySelectorAll(".btn-outline-secondary")

 editBtns[1].addEventListener("click", function() {
  const cardText = document.querySelectorAll(".card-text")[1]
  if (cardText.style.color === "green") {
    cardText.style.color = ""
  } else {
    cardText.style.color = "green"
  }
}) 