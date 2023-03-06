let cards = document.querySelectorAll('.card');

function addCollapseListeners() {
  let viewButtons = document.querySelectorAll('button.btn.btn-sm.btn-success');

  for (let i = 0; i < viewButtons.length; i++) {
    const viewButton = viewButtons[i];
    let isCollapsed = false;

    viewButton.addEventListener('mouseover', function() {
      const card = viewButton.closest('.card');
      const image = card.querySelector('.card-img-top');

      if (!isCollapsed) {
        card.classList.add('card-collapsed');
        image.style.width = '20%';
      } else {
        card.classList.remove('card-collapsed');
        image.style.width = '100%';
      }

      isCollapsed = !isCollapsed;
    });

    viewButton.addEventListener('mouseleave', function() {
      const card = viewButton.closest('.card');
      const image = card.querySelector('.card-img');

      if (isCollapsed) {
        card.classList.remove('card-collapsed');
        image.style.width = '100%';
      }

      isCollapsed = false;
    });
  }
}

addCollapseListeners();
