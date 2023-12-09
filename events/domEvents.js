import { getEntries, deleteSingleEntry } from '../api/vocabData';
import addEntryForm from '../components/forms/addEntryForm';
import { showEntries } from '../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    console.warn('main-container clicked');

    if (e.target.id.includes('delete-entry-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteSingleEntry(firebaseKey).then(() => { getEntries().then(showEntries); });
      }
    }

    if (e.target.id.includes('add-entry-btn')) {
      console.warn('ADD ENTRY');
      if (e.target.id.includes('add-entry-btn')) {
        addEntryForm();
      }
    }
  });
};

export default domEvents;
