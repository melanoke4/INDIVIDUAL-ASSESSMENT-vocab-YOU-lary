import {
  getEntries,
  createEntry
} from '../api/vocabData';
import { showEntries } from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        discription: document.querySelector('#description').value
      };

      createEntry(payload).then(() => {
        getEntries().then(showEntries);
      });
    }
  });
};

export default formEvents;
