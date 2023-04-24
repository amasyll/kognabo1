import { Component, OnInit } from "@angular/core";
import * as jQuery from "jquery";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
    ngOnInit(): void {
        (function($) {
            'use strict';
            var body = $('body');
            $(function() {
                $('[data-toggle="offcanvas"]').on("click", function() {
                    $('.sidebar-offcanvas').toggleClass('active')
                });
                //fullscreen
                $("#fullscreen-button").on("click", function toggleFullScreen() {
                    if (document.fullscreenElement == undefined && document.fullscreenElement == null) {
                        document.documentElement.requestFullscreen()
                        $("#fullscreen-button").removeClass("mdi-fullscreen");
                        $("#fullscreen-button").addClass("mdi-fullscreen-exit");
                    } else {
                        document.exitFullscreen();
                        $("#fullscreen-button").removeClass("mdi-fullscreen-exit");
                        $("#fullscreen-button").addClass("mdi-fullscreen");   
                    }
                });
                $('[data-toggle="minimize"]').on('click', function() {
                    if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
                        body.toggleClass('sidebar-hidden')   
                    } else {
                        body.toggleClass('sidebar-icon-only')   
                    }
                });
            });
            $(document).on('mouseenter, mouseleave', '.slidebar .nav-item', function(ev) {
                var sidebarIconOnly = body.hasClass('sidebar-icon-only');
                var sidebarFixed = body.hasClass('sidebar-fixed');
                if (!('ontouchstar' in document.documentElement)) {
                    if (sidebarIconOnly) {
                        if (sidebarFixed) {
                            if (ev.type == 'mouseenter') {
                                body.removeClass('sidebar-icon-only')
                            }   
                        } else {
                           var $menuItem = $(this);
                           if (ev.type == 'mouseenter') {
                                $menuItem.addClass('hover-open') 
                           } else {
                                $menuItem.removeClass('hover-open')
                           }   
                        }    
                    }   
                }
            });
            $('.aside-toggler').on('click', function() {
                $('.chart-list-wrapper').toggleClass('slide')
            })
        })(jQuery)  
    }
}