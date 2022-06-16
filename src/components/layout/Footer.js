import React from "react";

function Footer(props) {
  return (
    <React.Fragment>
      <div>
        <footer id="footer" class="footer">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Moweb MIS</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits"></div>
        </footer>

        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>

        <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/chart.js/chart.min.js"></script>
        <script src="assets/vendor/echarts/echarts.min.js"></script>
        <script src="assets/vendor/quill/quill.min.js"></script>
        <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
        <script src="assets/vendor/tinymce/tinymce.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>

        <script src="assets/js/main.js"></script>
      </div>
    </React.Fragment>
  );
}




export default Footer;


// import React from 'react'


// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }
// function Car2(props) {
//   return <h2>I am a { props.hello }!</h2>;
// }


// function Footer() {
//   return (
//     <>
   
// 	    <h1>Who lives in my garage?</h1>
// 	    <Car brand="Ford" />
//       <Car2 hello="kriti"/>
//     </>
//   );
// }



// export default Footer