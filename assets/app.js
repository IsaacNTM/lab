/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

const $ = require( "jquery" );
global.$ = global.jQuery = $;



setInterval(function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var time = hours + ":" + minutes;
    document.getElementById("time").innerHTML = time;
}, 1000);
