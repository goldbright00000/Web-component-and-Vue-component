Introduction

    Material Dashboard is a premium Bootstrap 4 Admin Template.

## Quick start

    To start using the Admin Dashboard you will need to import some files in your current project or start from scratch using our template (scroll  down in this page to view it).
    There is pages in the index folder

## CSS

  Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.

  <!-- CSS Files -->
  <link href="/assets/css/material-dashboard.min.css?v=2.1.1" rel="stylesheet" />

## JS

    Many of our components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the following <script>s near the end of your pages, right before the closing </body> tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.

## Fonts and Icons

    Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load the Fonts and Icons.

## File Structure

    Within the download you'll find the following directories and files:
    material-dashboard/
        ├── assets/
        |   ├── css/
        |   |   ├── bootstrap.min.css
        |   |   ├── material-dashboard.css
        |   |   ├── material-dashboard-rtl.css
        |   |   └── demo.css
        |   ├── js/
        |   |   ├── bootstrap-notify.js
        |   |   ├── bootstrap.min.js
        |   |   ├── chartist.min.js
        |   |   ├── demo.js
        |   |   ├── jquery-3.1.0.min.js
        |   |   ├── material-dashboard.js
        |   |   └── material.min.js
        |   ├── sass/
        |   |    ├── md
        |   |    └── material-dashboard.scss
        |   └── img/
        |    
        ├── index/

        ```

## Starter template

    Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:


    <!doctype html>
        <html lang="en">
        <head>
            <title>Hello, world!</title>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />

            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

            <!--     Fonts and icons     -->
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

            <!-- Material Dashboard CSS -->
            <link rel="stylesheet" href="assets/css/material-dashboard.css?v=2.1.1">

        </head>
        <body>
            <h1>Hello, world!</h1>

        <!--   Core JS Files   -->
        <script src="assets/js/core/jquery.min.js" type="text/javascript"></script>
        <script src="assets/js/core/popper.min.js" type="text/javascript"></script>
        <script src="assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>

        <!-- Plugin for the Perfect Scrollbar -->
        <script src="assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>

        <!-- Plugin for the momentJs  -->
        <script src="assets/js/plugins/moment.min.js"></script>

        <!--  Plugin for Sweet Alert -->
        <script src="assets/js/plugins/sweetalert2.js"></script>

        <!-- Forms Validations Plugin -->
        <script src="assets/js/plugins/jquery.validate.min.js"></script>

        <!--  Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
        <script src="assets/js/plugins/jquery.bootstrap-wizard.js"></script>

        <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
        <script src="assets/js/plugins/bootstrap-selectpicker.js" ></script>

        <!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
        <script src="assets/js/plugins/bootstrap-datetimepicker.min.js"></script>

        <!--  DataTables.net Plugin, full documentation here: https://datatables.net/    -->
        <script src="assets/js/plugins/jquery.datatables.min.js"></script>

        <!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
        <script src="assets/js/plugins/bootstrap-tagsinput.js"></script>

        <!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
        <script src="assets/js/plugins/jasny-bootstrap.min.js"></script>

        <!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
        <script src="assets/js/plugins/fullcalendar.min.js"></script>

        <!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
        <script src="assets/js/plugins/jquery-jvectormap.js"></script>

        <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
        <script src="assets/js/plugins/nouislider.min.js" ></script>

        <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>

        <!-- Library for adding dinamically elements -->
        <script src="assets/js/plugins/arrive.min.js"></script>

        <!--  Google Maps Plugin    -->
        <script  src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>

        <!-- Chartist JS -->
        <script src="assets/js/plugins/chartist.min.js"></script>

        <!--  Notifications Plugin    -->
        <script src="assets/js/plugins/bootstrap-notify.js"></script>

        <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
        <script src="assets/js/material-dashboard.min.js?v=2.1.1" type="text/javascript"></script>

        </body>
        </html>