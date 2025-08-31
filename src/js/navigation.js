const MenuButtonAriaLabel = {
  OPEN: 'Открыть меню',
  CLOSE: 'Закрыть меню',
};

const navigation = document.querySelector('.navigation');
const navigationList = navigation.querySelector('.navigation__list');
const menuButton = navigation.querySelector('.navigation__menu-button');

const applyMenuButtonAria = (isOpen) => {
  menuButton['aria-expanded'] = isOpen;
  menuButton['aria-label'] = isOpen ? MenuButtonAriaLabel.CLOSE : MenuButtonAriaLabel.OPEN;
};

const setNavigationModalState = (isOpen) => {
  applyMenuButtonAria(isOpen);
  if (isOpen) {
    navigation.classList.remove('closing');
    navigation.classList.add('opening', 'navigation--modal');
  } else {
    navigation.classList.remove('opening');
    navigation.classList.add('closing');
  }
};

navigationList.addEventListener('animationend', (e) => {
  if (e.target !== navigationList) return;

  if (navigation.classList.contains('opening')) {
    navigation.classList.remove('opening');
  }

  if (navigation.classList.contains('closing')) {
    navigation.classList.remove('closing', 'navigation--modal');
  }
});

menuButton.addEventListener('click', () => {
  const isModalShown = navigation.classList.contains('navigation--modal');
  const isOpening = navigation.classList.contains('opening');
  const isClosing = navigation.classList.contains('closing');
  const isTransitionState = isOpening || isClosing;

  if (isTransitionState) {
    setNavigationModalState(!isOpening);
  } else {
    setNavigationModalState(!isModalShown);
  }
});
