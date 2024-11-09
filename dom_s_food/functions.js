/**
 * getting all restaurants, using AJAX
 */
function getAll() {
  //address of your data
  var adr = API_ADDRESS + "restaurants.json";

  //fetching data using ajax
  fetch(adr)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error encountered");
      }
    })
    .then(function (response) {
      var location = document.querySelector("#location").value;
      var keywords = document.querySelector("#keywords").value;

      document.querySelector("#content").innerHTML = "";

      console.log(response);

      //searching function
      var items = search(response, location, keywords);

      //displaying function for each item
      for (var item of items) {
        displayRestaurant(item);
      }
    })
    .catch(function (error) {
      alert(error);
    });
}

/**
 * gets single restaurant's details
 */
function getItem(id) {
  //address of your PHP script
  var adr = API_ADDRESS + "restaurant" + id + ".json";

  //fetching data using ajax
  fetch(adr)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error encountered");
      }
    })
    .then(function (response) {
      //clear DOM container and put data in it
      document.querySelector("#content").innerHTML = "";
      displayDetails(response);
    })
    .catch(function (error) {
      alert(error);
    });
}

/**
 * gets single restaurant's menu
 */

function getMenu(id) {
  console.log("hello");
  var adr = `http://127.0.0.1:8080/dom_s_food/remote/menu${id}.json`;
  // Fetch data from the JSON file
  fetch(adr)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Log all properties of each menu item
      data.forEach((item) => {
        console.log("Kind:", item.kind);
        console.log("Price:", item.price);
        console.log("Price:", item.name);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}


getMenu(1);
