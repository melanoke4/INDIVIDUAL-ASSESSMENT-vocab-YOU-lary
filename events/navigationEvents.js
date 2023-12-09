// import addEntryForm from '../components/forms/addEntryForm';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#new-entry').addEventListener('click', () => {
    console.warn('CLICKED NEW ENTRY');
  });
};

export default navigationEvents;
