// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  debugger;
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //hw-12 bu$(function() {
  $(".devour-it").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");

    // var newSleepState = {
    //   sleepy: newSleep
    // };
    
    var newBurgerState = {
      devouring: newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("New instance of burger", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //////////////////////////////////////////////
  

  $(".create-form").on("submit", function(event) {
    debugger;
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat
    }).then(
      function() {
        debugger;
        console.log("created new cat  RELOADING");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        debugger;
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
