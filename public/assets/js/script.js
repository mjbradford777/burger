$(function() {
    $('.devour').click(function(event) {
        let id = $(this).data('id');

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT"
          }).then(
            function() {
              console.log('changed burger to devoured');
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })

    $('.create-form').submit(function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#burger_name').val().trim()
        }

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('added a new burger');
                location.reload();
            }
        )
    })
})