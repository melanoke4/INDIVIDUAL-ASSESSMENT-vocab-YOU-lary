import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#new-entry').addEventListener('click', () => {
    console.warn('CLICKED NEW ENTRY');
  });
};

export default navigationEvents;
