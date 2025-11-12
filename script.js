document.querySelectorAll('.dropdown').forEach(drop => {
  const button = drop.querySelector('.dropbtn');
  const menu = drop.querySelector('.dropdown-menu');
  let timeout;

  function showMenu() {
    clearTimeout(timeout);
    menu.classList.add('show');
  }

  function hideMenu() {
    timeout = setTimeout(() => {
      menu.classList.remove('show');
    }, 50);
  }

  button.addEventListener('mouseenter', showMenu);
  button.addEventListener('mouseleave', hideMenu);
  menu.addEventListener('mouseenter', showMenu);
  menu.addEventListener('mouseleave', hideMenu);
});
