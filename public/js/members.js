// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {
    $("#change-okSubmit").on("click", function (event) {
        var id = $(this).data("id");
        var cardio = $(this).data("newcardio");

        var newCardioState = {
            cardio: newCardio
        };

        // Send the PUT request.
        $.ajax("/api/members/" + id, {
            type: "PUT",
            data: newCardioState
        }).then(
            function () {
                console.log("changed exercise to", newCardio);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
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
            function () {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-cat").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/cats/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
