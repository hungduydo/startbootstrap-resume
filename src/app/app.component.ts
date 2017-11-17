import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'app';

    ngOnInit() {

    }

    ngAfterViewInit() {
        console.log();
        const scripts = [];
        scripts.push('https://code.jquery.com/jquery-3.2.1.min.js');
        scripts.push('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js');
        scripts.push('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js');
        scripts.push('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js');
        scripts.forEach((element, index) => {
            setTimeout(() => this.loadScript(element, index, (interIndex) => {
                if (interIndex === 3) {
                    this.initExtenalScript();
                }
            }), index * 300);
        });
    }

    initExtenalScript() {
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top)
                    }, 1000, 'easeInOutExpo');
                    return false;
                }
            }
        });

        $('html, body').on('DOMMouseScroll mousewheel', function (event) {
            if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
                // scroll down
                console.log('Down in ');
            } else {
                // scroll up
                console.log('Up');
            }
            // prevent page fom scrolling
            // return false;
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#sideNav'
        });
    }

    loadScript(url, index, callback) {
        // Adding the script tag to the head as suggested before
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        if (callback) {
            script.onload = callback.bind(this, index);
        }

        // Fire the loading
        head.appendChild(script);
    }
}
