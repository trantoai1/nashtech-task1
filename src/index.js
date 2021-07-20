import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/vendor/nouislider/nouislider.css';
import './assets/fonts/hkgrotesk/stylesheet.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/css/style.css';
import './assets/css/custom.css';
// import './assets/vendor/jquery/jquery.min.js';
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import './assets/vendor/owl.carousel/owl.carousel.js';
// import './assets/vendor/owl.carousel2.thumbs/owl.carousel2.thumbs.min.js';
// import './assets/vendor/nouislider/nouislider.min.js';
// import './assets/vendor/smooth-scroll/smooth-scroll.polyfills.min.js';
// import './assets/vendor/glightbox/js/glightbox.min.js';
// import './assets/vendor/object-fit-images/ofi.min.js';
// import './assets/js/theme.js';
// import './assets/vendor/jquery.cookie/jquery.cookie.js';
// import './assets/js/demo.js';
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
