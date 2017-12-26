import { Component, OnInit } from '@angular/core';
import { AfterViewInit, AfterViewChecked } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, AfterViewChecked {
    public isLoading = true;
    public index = 0;
    public MENU_ITEMS = [{
        'name': 'About',
        'ref': 'about'
    },
    {
        'name': 'Experience',
        'ref': 'experience'
    },
    {
        'name': 'Education',
        'ref': 'education'
    },
    {
        'name': 'Skills',
        'ref': 'skills'
    },
    {
        'name': 'Interests',
        'ref': 'interests'
    }];
    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.isLoading = false;
            this.initExtenalScript();
        }, 3000);
    }

    ngAfterViewChecked() {

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

        $('html, body').on('DOMMouseScroll mousewheel', (event) => {
            let target;
            if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
                // scroll down
                this.index += 1;
                if (this.index > this.MENU_ITEMS.length - 1) {
                    this.index = this.MENU_ITEMS.length - 1;
                }
                target = $('#' + this.MENU_ITEMS[this.index].ref);
            } else {
                this.index = this.index <= 0 ? 0 : this.index - 1;
                target = $('#' + this.MENU_ITEMS[this.index].ref);
            }

            $('html, body').animate({
                scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo');
            // prevent page fom scrolling
            return false;
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        // $('body').scrollspy({
        //     target: '#sideNav'
        // });
    }
}
