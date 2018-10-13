$(document).ready(() => {

  $('#add-burger').on('click', (e) => {//event handler for new post request, add new burger
    e.preventDefault();
    const name = $('#burger-name').val().trim();

    if (name !== '') {
      const newBurger = {
        burger_name: name
      };

      $.post('/', newBurger)
        .then(() => {
          $('#burger-name').val('');
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  });

  $(document).on('click', '.devour', (e) => {//event handler for new patch request, modify existing data
    const data = { id: $(e.target).attr('value') };

    $.ajax({
      url: '/',
      type: 'PATCH',
      data
    })
      .done(() => location.reload())
      .catch((err) => console.log(err));
  });

});