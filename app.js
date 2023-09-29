//Print Button
document.querySelector(".print").addEventListener("click", function () {
  window.print();
});

//Click Social Icon
function redirectToSocialMedia(event) {
  const altText = event.target.alt;

  switch (altText) {
    case "Facebook":
      window.location.href = "https://www.facebook.com/";
      break;
    case "Twitter":
      window.location.href = "https://www.twitter.com/";
      break;
    case "Instagram":
      window.location.href = "https://www.instagram.com/";
      break;
    // I've added similar directions for other social media platforms
    default:
      console.log("Unknown social media platform");
  }
}

// Select all icons and link the function to the "click" event
const icons = document.querySelectorAll("#social-icons img");
icons.forEach((icon) => {
  icon.addEventListener("click", redirectToSocialMedia);
});

//SHARE RECEIPT WITH MAIL

document.querySelector(".share-button").addEventListener("click", function () {
  window.location.href =
    "mailto:?subject=Check out this Delicious Recipe!&body=Here's a great recipe I found: [Recipe Link]";
});

//ADD YOUR INGREDIENT

function addIngredient() {
  // Get the material entered by the user
  let ingredient = document.getElementById("newIngredient").value;

  //Create a new li element
  let li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" /> ${ingredient}`;

  // which list you want to add the material to (for example, to add it to the left list)
  let list = document.querySelector(".ingredients-right");

  // Add new material to the list
  list.appendChild(li);

  // Clear input field
  document.getElementById("newIngredient").value = "";
}
