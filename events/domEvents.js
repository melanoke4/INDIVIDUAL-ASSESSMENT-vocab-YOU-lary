import { getEntries, deleteSingleEntry } from '../api/vocabData';
import addEntryForm from '../components/forms/addEntryForm';
import { showEntries } from '../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    // if (e.target.id.includes('delete-book')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     console.warn('CLICKED DELETE BOOK', e.target.id);
    //     const [, firebaseKey] = (e.target.id.split('--'));
    //     deleteBook(firebaseKey).then(() => {
    //       getBooks().then(showBooks);
    //     });
    //   }
    // }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING AN ENTRY
    // if (e.target.id.includes('add-book-btn')) {
    //   console.warn('ADD BOOK');
    //   if (e.target.id.includes('add-book-btn')) {
    //     addEntryForm();
    //   }
    // }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    // if (e.target.id.includes('edit-book-btn')) {
    //   // console.warn('EDIT BOOK', e.target.id);
    //   // console.warn(e.target.id.split('--'));
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    // }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    // if (e.target.id.includes('view-book-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getBookDetails(firebaseKey).then(viewBook);
    // }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-entry-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteSingleEntry(firebaseKey).then(() => { getEntries().then(showEntries); });
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-entry-btn')) {
      console.warn('ADD AUTHOR');
      if (e.target.id.includes('add-entry-btn')) {
        addEntryForm();
      }
    }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    // if (e.target.id.includes('update-author')) {
    //   console.warn('EDIT AUTHOR');
    //   if (e.target.id.split('--')) {
    //     const [, firebaseKey] = e.target.id.split('--');

    //     getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
    //   }
    // }
  });
};

export default domEvents;
