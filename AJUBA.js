const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach(button => {
  button.addEventListener('click', event => {
    const li = event.target.parentNode;
    li.remove();
  });
});

const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  });
});
