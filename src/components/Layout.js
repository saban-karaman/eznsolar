import Header from "./Header"
import Footer from "./Footer"
import Script from "next/script"

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            {/* <Script src="js/jquery.js"></Script>
      <Script src="js/wow.js"></Script>
      <Script src="js/bootstrap.bundle.min.js"></Script>
      <Script src="js/jquery.fancybox.js"></Script>
      <Script src="js/jquery.countTo.js"></Script>
      <Script src="js/appear.js"></Script>
      <Script src="js/owl.js"></Script>
      <Script src="js/validation.js"></Script>
      <Script src="js/jquery.mixitup.min.js"></Script>
      <Script src="js/isotope.js"></Script>
      <Script src="js/jquery.paroller.min.js"></Script>
      <Script src="js/jquery.easing.min.js"></Script>
      <Script src="js/jquery.enllax.min.js"></Script> */}
      {/* <Script src="http://maps.google.com/maps/api/js?key=AIzaSyB2uu6KHbLc_y7fyAVA4dpqSVM4w9ZnnUw"></Script> */}
      {/* <Script src="js/gmaps.js"></Script> */}
      {/* <Script src="js/map-helper.js"></Script> */}

      {/* <Script src="assets/language-switcher/jquery.polyglot.language.switcher.js"></Script>
      <Script src="assets/timepicker/timePicker.js"></Script>
      <Script src="js/bootstrap-select.min.js"></Script>
      <Script src="assets/html5lightbox/html5lightbox.js"></Script> */}

       {/* <!--Revolution Slider-->  */}
      {/* <Script src="plugins/revolution/js/jquery.themepunch.revolution.min.js"></Script>
      <Script src="plugins/revolution/js/jquery.themepunch.tools.min.js"></Script> */}
      {/* <Script src="plugins/revolution/js/extensions/revolution.extension.actions.min.js"></Script> */}
      {/* <Script src="plugins/revolution/js/extensions/revolution.extension.carousel.min.js"></Script>
      <Script src="plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"></Script>
      <Script src="plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></Script>
      <Script src="plugins/revolution/js/extensions/revolution.extension.migration.min.js"></Script> */}
      {/* <Script src="plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></Script> */}
      {/* <Script src="plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></Script>
      <Script src="plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></Script>
      <Script src="plugins/revolution/js/extensions/revolution.extension.video.min.js"></Script>
      <Script src="js/main-slider-script.js"></Script> */}

      {/* <!-- thm custom script -->  */}
     {/* <Script src="js/custom.js"></Script>  */}
        </div>
    )
}

export default Layout