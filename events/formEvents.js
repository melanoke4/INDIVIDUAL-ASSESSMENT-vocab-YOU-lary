import {
  getEntries,
  createEntry
} from '../api/vocabData';
import { showEntries } from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    // if (e.target.id.includes('submit-book')) {
    //   const payload = {
    //     title: document.querySelector('#title').value,
    //     description: document.querySelector('#description').value,
    //     image: document.querySelector('#image').value,
    //     price: document.querySelector('#price').value,
    //     author_id: document.querySelector('#author_id').value,
    //     sale: document.querySelector('#sale').checked,
    //   };

    //   createBook(payload).then(({ name }) => {
    //     const patchPayload = { firebaseKey: name };

    //     updateBook(patchPayload).then(() => {
    //       getBooks().then(showBooks);
    //     });
    //   });
    // }

    // // TODO: CLICK EVENT FOR EDITING A BOOK
    // if (e.target.id.includes('update-book')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   console.warn('CLICKED UPDATE BOOK', e.target.id);
    //   console.warn(firebaseKey);
    // }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
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

// // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
// if (e.target.id.includes('update-author')) {
//   const [, firebaseKey] = e.target.id.split('--');
//   const payload = {
//     email: document.querySelector('#email').value,
//     first_name: document.querySelector('#first-name').value,
//     last_name: document.querySelector('#last-name').value,
//     firebaseKey
//   };

// }

export default formEvents;
