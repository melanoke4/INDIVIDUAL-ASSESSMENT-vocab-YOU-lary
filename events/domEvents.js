const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('this')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('?')) {
        console.warn('CLICKED', e.target.id);
        // const [, firebaseKey] = (e.target.id.split('--'));
      }
    }
  });
};

export default domEvents;
