
// $(function () {


$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour").on("click", function(event) {
    event.preventDefault();

    var burger_id = $(this).attr("data-id")
    $.ajax({
        method: "PUT",
        url: "/" + burger_id
    }).then(function(res) {
        console.log(res);
        location.reload()
    })
    console.log(burger_id)
  })

// })