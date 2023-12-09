import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addEntryForm = () => {
  clearDom();
  const domString = `
    <form id="submit-entry" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="first-name" placeholder="Title" required>
      </div>
      <div class="form-group">
        <label for="image">Description</label>
             <input type="text" class="form-control" id="last-name" placeholder="Description" required>
      </div>
      <div class="form-group">
        <label for="title">Language</label>
        <input type="text" class="form-control" id="email" aria-describedby="Language" placeholder="Language" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Entry</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addEntryForm;
