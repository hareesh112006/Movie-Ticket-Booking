function bookTickets() {
  const movieSelect = document.getElementById("movieSelect");
  const seatCount = document.getElementById("seatCount").value;

  const movieId = movieSelect.value;
  let price = 10; // Default price

  // Assign prices based on movie selection
  switch(movieId) {
    case "1":
      price = 100;
      break;
    case "2":
      price = 400;
      break;
    case "3":
      price = 600;
      break;
    default:
      price = invalid;
  }

  const totalPrice = price * seatCount;
  document.getElementById("totalPrice").textContent = "$" + totalPrice;
}

