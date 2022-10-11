const input = document.querySelector('#num');
input.onkeypress = (event) => {
  if (event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
};
