import logo from '../logo.svg';
import React from 'react'


export default function Home() {


    return (

        <div>
            <div class="body-inner">
                <div id="topbar" class="topbar-transparent dark submenu-light ">
                    <div class="container">
                        <div class="row">
                            {/* <div class="col-md-6">
                         <ul class="top-menu">
                            <li><a href="#">Phone: +1 (234) 567-890</a></li>
                            <li><a href="#">Email: contact@inspiro-media.com</a></li>
                        </ul> 
                    </div> */}
                            <div class="col-md-6 d-none d-sm-block">
                                <div class="social-icons social-icons-colored-hover">
                                    <ul>
                                        <li class="social-facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li class="social-twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li class="social-google"><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                        <li class="social-pinterest"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                        <li class="social-vimeo"><a href="#"><i class="fab fa-vimeo"></i></a></li>
                                        <li class="social-linkedin"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        <li class="social-dribbble"><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                        <li class="social-youtube"><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        <li class="social-rss"><a href="#"><i class="fa fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <header id="header" data-transparent="true" class="dark submenu-light">
                    <div class="header-inner">
                        <div class="container">

                            {/* <div id="logo"> <a href="index.html"><span class="logo-default">E-directory</span><span
                                class="logo-dark">E-directory</span></a> </div> */}

                            <div id="logo"> <a href="index.html"><span class="logo-default">E-Directory</span><span
                                class="logo-dark">E-Directory</span></a> </div>


                            {/* <div id="search"><a id="btn-search-close" class="btn-search-close" aria-label="Close search form"><i
                                class="icon-x"></i></a>
                        <form class="search-form" action="search-results-page.html" method="get">
                            <input class="form-control" name="q" type="text" placeholder="Type & Search..." />
                            <span class="text-muted">Start typing & press "Enter" or "ESC" to close</span>
                        </form>
                    </div> */}

                            <div class="header-extras">
                                <ul>
                                    <li>
                                        <a id="btn-search" href="#"> <i class="icon-search"></i></a>
                                    </li>
                                    <li>
                                        <div class="p-dropdown"> <a href="#"><i class="icon-globe"></i></a>
                                            {/*<span>EN</span>*/}
                                            <ul class="p-dropdown-content">
                                                <li><a href="#">French</a></li>
                                                <li><a href="#">Spanish</a></li>
                                                <li><a href="#">English</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div id="mainMenu-trigger"> <a class="lines-button x"><span class="lines"></span></a> </div>


                            <div id="mainMenu">
                                <div class="container">
                                    <nav>
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li class="dropdown"><a href="#">Layout</a>
                                                <ul class="dropdown-menu">
                                                    <li class="dropdown-submenu"><a href="#">Topbar</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="header-topbar.html">Light</a></li>
                                                            <li><a href="header-topbar-dark.html">Dark</a></li>
                                                            <li><a href="header-topbar-transparent.html">Transparent</a></li>
                                                            <li><a href="header-topbar-colored.html">Colored</a></li>
                                                            <li><a href="header-topbar-fullwidth.html">Fullwidth</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><a href="#">Header</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="header.html">Light</a></li>
                                                            <li><a href="header-dark.html">Dark</a></li>
                                                            <li><a href="header-transparent.html">Transparent</a></li>
                                                            <li><a href="header-fullwidth.html">Fullwidth</a></li>
                                                            <li class="dropdown-submenu"><a href="#">Modern</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="header-modern.html">Light</a></li>
                                                                    <li><a href="header-modern-dark.html">Dark</a></li>
                                                                    <li><a href="header-modern-transparent.html">Transparent</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="header-mini.html">Mini</a></li>
                                                            <li><a href="header-alternative.html">Alternative</a></li>
                                                            <li><a href="header-always-fixed.html">Always Fixed</a></li>
                                                            <li><a href="header-disable-fixed.html">Disable Fixed</a></li>
                                                            <li><a href="header-responsive-fixed.html">Responsive Fixed</a></li>
                                                            <li class="dropdown-submenu"><a href="#">Logo</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="header-logo.html">Left</a></li>
                                                                    <li><a href="header-logo-right.html">Right</a></li>
                                                                    <li><a href="header-logo-center.html">Center</a></li>
                                                                    <li><a href="header-logo-fixed-header.html">Header Fixed
                                                                        Logo</a></li>
                                                                    <li><a href="header-logo-responsive.html">Header Responsive
                                                                        Logo</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="dropdown-submenu"><a href="#">Menu Positions</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="header-menu-left.html">Left</a></li>
                                                                    <li><a href="header-menu-right.html">Right</a></li>
                                                                    <li><a href="header-menu-center.html">Center</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><a href="#">Main Menu<span
                                                        class="badge bg-danger">NEW</span></a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="menu.html">Default</a></li>
                                                            <li><a href="menu-lowercase.html">Lowercase</a></li>
                                                            <li><a href="menu-split.html">Split Menu</a></li>
                                                            <li><a href="menu-sub-title.html">Sub Title Menu</a></li>
                                                            <li><a href="menu-overlay.html">Overlay Menu</a></li>
                                                            <li><a href="menu-creative.html">Creative Menu</a></li>
                                                            <li><a href="menu-lines.html">Lines Menu</a></li>
                                                            <li class="dropdown-submenu"><a href="#">Outline</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="menu-outline.html">Default</a></li>
                                                                    <li><a href="menu-outline-dark.html">Dark</a></li>
                                                                    <li><a href="menu-outline-light.html">Light</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="dropdown-submenu"><a href="#">Rounded</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="menu-rounded.html">Default</a></li>
                                                                    <li><a href="menu-rounded-dark.html">Dark</a></li>
                                                                    <li><a href="menu-rounded-light.html">Light</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="dropdown-submenu"><a href="#">Positions</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="menu-left.html">Left Aligned</a></li>
                                                                    <li><a href="menu-center.html">Center Aligned</a></li>
                                                                    <li><a href="menu-right.html">Right Aligned</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="menu-dots.html">Dots Menu</a></li>
                                                            <li><a href="menu-one-page.html">One Page Menu</a></li>
                                                            <li><a href="menu-hover-background.html">Hover Background</a></li>
                                                            <li><a href="menu-button.html">Button Version</a></li>
                                                            <li><a href="menu-social-icons.html">Social Icons Version</a></li>
                                                            <li><a href="menu-onclick.html">OnClick Open</a></li>
                                                            <li><a href="menu-rounded-dropdown.html">Rounded Dropdown</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><a href="#">Page Title</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="page-title.html">Default</a></li>
                                                            <li><a href="page-title-image.html">Image background</a></li>
                                                            <li><a href="page-title-video.html">Video background</a></li>
                                                            <li><a href="page-title-particle.html">Particle animation</a></li>
                                                            <li><a href="page-title-pattern.html">Pattern background</a></li>
                                                            <li><a href="page-title-background-color.html">Colored
                                                                background</a></li>
                                                            <li><a href="page-title-parallax.html">Parallax</a></li>
                                                            <li><a href="page-title-animated.html">Animated</a></li>
                                                            <li><a href="page-title-right.html">Right Aligned</a></li>
                                                            <li><a href="page-title-left.html">Left Aligned</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><a href="#">Page Menu<span
                                                        class="badge bg-danger">NEW</span></a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="page-menu.html">Default</a></li>
                                                            <li><a href="page-menu-sticky.html">Sticky</a></li>
                                                            <li><a href="page-menu-rounded.html">Rounded</a></li>
                                                            <li><a href="page-menu-outline.html">Outline</a></li>
                                                            <li><a href="page-menu-lines.html">Lines</a></li>
                                                            <li><a href="page-menu-solid.html">Solid</a></li>
                                                            <li><a href="page-menu-light.html">Light</a></li>
                                                            <li><a href="page-menu-dark.html">Dark</a></li>
                                                            <li><a href="page-menu-creative.html">Creative</a></li>
                                                            <li><a href="page-menu.html">Dropdown</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><a href="#">Sidebars</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="sidebar-sticky.html">Sticky version</a></li>
                                                            <li><a href="sidebar.html">Left aligned</a></li>
                                                            <li><a href="sidebar-right.html">Right aligned</a></li>
                                                            <li><a href="sidebar-both.html">Both Sidebars</a></li>
                                                            <li><a href="sidebar-modern.html">Modern</a></li>
                                                            <li><a href="sidebar-modern-right.html">Modern Right</a></li>
                                                            <li><a href="sidebar-modern-both.html">Modern Both Sidebars</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><a href="#">Footers</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="footer.html#footer">Default</a></li>
                                                            <li><a href="footer-dark.html#footer">Dark</a></li>
                                                            <li><a href="footer-1.html#footer">Footer 1</a></li>
                                                            <li><a href="footer-2.html#footer">Footer 2</a></li>
                                                            <li><a href="footer-3.html#footer">Footer 3</a></li>
                                                            <li><a href="footer-4.html#footer">Footer 4</a></li>
                                                            <li><a href="footer-5.html#footer">Footer 5</a></li>
                                                            <li><a href="footer-6.html#footer">Footer 6</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><a href="#">Options</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="layout-boxed.html">Boxed</a></li>
                                                            <li><a href="layout-modern.html">Modern</a></li>
                                                            <li><a href="layout-frame.html">Frame</a></li>
                                                            <li><a href="layout-wide.html">Wide (default)</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><a href="#">Features</a>
                                                <ul class="dropdown-menu">
                                                    <li class="dropdown-submenu"><a href="#">Sliders</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="slider-revolution-slider.html">Revolution Slider</a>
                                                            </li>
                                                            <li><a href="slider-inspiro-slider.html">Inspiro Slider</a></li>
                                                            <li><a href="slider-static-media-image.html">Fullscreen Image</a>
                                                            </li>
                                                            <li><a href="slider-static-media-parallax.html">Fullscreen
                                                                Parallax</a></li>
                                                            <li><a href="slider-static-media-text-rotator.html">Fullscreen Text
                                                                Rotator</a></li>
                                                            <li><a href="slider-static-media-video.html">Fullscreen HTML5
                                                                Video</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="widgets.html">Widgets</a></li>
                                                    <li><a href="page-loaders.html">Page Loaders<span
                                                        class="badge bg-danger">NEW</span></a></li>
                                                    <li class="dropdown-submenu"><a href="#">Modal Auto Open<span
                                                        class="badge bg-danger">NEW</span></a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="modal-auto-open-subscription.html">Subscription</a>
                                                            </li>
                                                            <li><a href="modal-auto-open-shop.html">Shop Promotion</a></li>
                                                            <li><a href="modal-auto-open-login.html">Login Form</a></li>
                                                            <li><a href="modal-auto-open-audio.html">Audio Player</a></li>
                                                            <li><a href="modal-auto-open-video.html">HTML5 Video</a></li>
                                                            <li><a href="modal-auto-open-youtube.html">YouTube Video</a></li>
                                                            <li><a href="modal-auto-open-vimeo.html">Vimeo Video</a></li>
                                                            <li><a href="modal-auto-open-iframe.html">Iframe</a></li>
                                                            <li><a href="modal-auto-open.html">Sample Text</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><a href="#">Cookie Notify<span
                                                        class="badge bg-danger">NEW</span></a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="cookie-notify.html">Top position</a></li>
                                                            <li><a href="cookie-notify-bottom.html">Bottom position</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="shape-dividers.html">Shape Dividers<span
                                                        class="badge bg-danger">NEW</span></a></li>
                                                    <li class="dropdown-submenu"><a href="#">Menu Labels</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="#">Label (new)<span
                                                                class="badge bg-danger">NEW</span></a></li>
                                                            <li><a href="#">Label (hot)<span
                                                                class="badge bg-danger">HOT</span></a></li>
                                                            <li><a href="#">Label (popular)<span
                                                                class="badge bg-success">POPULAR</span></a></li>
                                                            <li><a href="#">Label (sale)<span
                                                                class="badge bg-warning">SALE</span></a></li>
                                                            <li><a href="#">Label (info)<span
                                                                class="badge bg-info">INFO</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown mega-menu-item"><a href="#">Elements</a>
                                                <ul class="dropdown-menu">
                                                    <li class="mega-menu-content">
                                                        <div class="row">
                                                            <div class="col-lg-2">
                                                                <ul>
                                                                    <li><a href="shortcode-according.html">Accordions</a></li>
                                                                    <li><a href="shortcode-alerts.html">Alerts</a></li>
                                                                    <li><a href="shortcode-animations.html">Animations</a></li>
                                                                    <li><a href="shortcode-avatar.html">Avatar</a></li>
                                                                    <li><a href="shortcode-audio-video.html">Audio & Video</a>
                                                                    </li>
                                                                    <li><a href="shortcode-blockquotes.html">Blockquotes</a>
                                                                    </li>
                                                                    <li><a href="component-bootstrap-switch.html">BS Switch<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="component-bootstrap-notify.html">BS Notify<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="shortcode-breadcrumbs.html">Breadcrumbs</a>
                                                                    </li>
                                                                    <li><a href="shortcode-buttons.html">Buttons</a></li>
                                                                    <li><a href="shortcode-background-image.html">Background
                                                                        Image</a></li>
                                                                    <li><a href="shortcode-background-overlays.html">Background
                                                                        Overlays</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2">
                                                                <ul>
                                                                    <li><a href="component-charts-chartjs.html">Charts<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="component-calendar.html">Calendar<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="shortcode-client-logo.html">Clients logos</a>
                                                                    </li>
                                                                    <li><a href="shortcode-calltoaction.html">Call to action</a>
                                                                    </li>
                                                                    <li><a href="shortcode-carousel.html">Carousel</a></li>
                                                                    <li><a href="shortcode-code.html">Code</a></li>
                                                                    <li><a href="shortcode-countdown-timer.html">Countdown
                                                                        Timers</a></li>
                                                                    <li><a href="shortcode-countdown.html">Countdown<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="shortcode-counters.html">Counter Numbers</a>
                                                                    </li>
                                                                    <li><a href="component-clipboard.html">Clipboard<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="component-datatable.html">Data Tables<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="component-daterangepicker.html">Date & Time
                                                                        Pickers</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2">
                                                                <ul>
                                                                    <li><a href="shortcode-dropcat-highlight.html">Dropcat &
                                                                        Highlight</a></li>
                                                                    <li><a href="shortcode-dropdowns.html">Dropdowns</a></li>
                                                                    <li><a href="shortcode-team-members.html">Team members</a>
                                                                    </li>
                                                                    <li><a href="shortcode-forms.html">Form Controls</a></li>
                                                                    <li><a href="shortcode-form-validation.html">Form
                                                                        Validation</a></li>
                                                                    <li><a href="shortcode-form-layouts.html">Form Layouts</a>
                                                                    </li>
                                                                    <li><a href="shortcode-file-upload.html">File upload</a>
                                                                    </li>
                                                                    <li><a href="shortcode-grid.html">Grid System</a></li>
                                                                    <li><a href="shortcode-heading-styles.html">Heading
                                                                        Styles</a></li>
                                                                    <li><a href="shortcode-icon-boxes.html">Icon Boxes</a></li>
                                                                    <li><a href="shortcode-icon-lists.html">Icons</a></li>
                                                                    <li><a href="shortcode-images.html">Images</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2">
                                                                <ul>
                                                                    <li><a href="shortcode-lightbox.html">Lightbox</a></li>
                                                                    <li><a href="shortcode-lists.html">Lists</a></li>
                                                                    <li><a href="shortcode-labels-badgets.html">Labels &
                                                                        Badges</a></li>
                                                                    <li><a href="shortcode-maps.html">Maps</a></li>
                                                                    <li><a href="shortcode-modal.html">Modal</a></li>
                                                                    <li><a href="shortcode-modal-strip.html">Modal Strip</a>
                                                                    </li>
                                                                    <li><a href="shortcode-navs.html">Navbar & Navs</a></li>
                                                                    <li><a href="shortcode-paginations.html">Pagination &
                                                                        Pager</a></li>
                                                                    <li><a href="shortcode-panels.html">Panels</a></li>
                                                                    <li><a href="shortcode-pie-chart.html">Pie charts</a></li>
                                                                    <li><a href="shortcode-popover.html">Popover</a></li>
                                                                    <li><a href="shortcode-milestone-stats.html">Milestone &
                                                                        Stats</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2">
                                                                <ul>
                                                                    <li><a href="shortcode-pricing-table.html">Pricing
                                                                        tables</a></li>
                                                                    <li><a href="shortcode-progress-bar.html">Progress bars</a>
                                                                    </li>
                                                                    <li><a href="shortcode-parallax.html">Parallax</a></li>
                                                                    <li><a href="shortcode-particles.html">Particles<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="shortcode-responsive-utilities.html">Responsive
                                                                        utilities</a></li>
                                                                    <li><a href="component-ion-range-slider.html">Range
                                                                        Slider<span class="badge bg-danger">NEW</span></a>
                                                                    </li>
                                                                    <li><a href="shortcode-sections.html">Sections</a></li>
                                                                    <li><a href="shortcode-smooth-scrolling.html">Smooth
                                                                        Scrolling</a></li>
                                                                    <li><a href="shortcode-social-icons.html">Social Icons</a>
                                                                    </li>
                                                                    <li><a href="shortcode-spinners.html">Spinners<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="component-toggles-radio-checkboxes.html">Switch
                                                                        Toggle<span class="badge bg-danger">NEW</span></a>
                                                                    </li>
                                                                    <li><a href="shortcode-shape-dividers.html">Shape
                                                                        Dividers<span class="badge bg-danger">NEW</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2">
                                                                <ul>
                                                                    <li><a href="shortcode-ratings.html">Ratings<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="shortcode-tables.html">Tables</a></li>
                                                                    <li><a href="shortcode-textbox.html">Text Boxes</a></li>
                                                                    <li><a href="shortcode-tabs.html">Tabs</a></li>
                                                                    <li><a href="shortcode-testimonial.html">Testimonials</a>
                                                                    </li>
                                                                    <li><a href="shortcode-toggles.html">Toggles</a></li>
                                                                    <li><a href="shortcode-tooltips.html">Tooltips</a></li>
                                                                    <li><a href="shortcode-typography.html">Typography</a></li>
                                                                    <li><a href="shortcode-text-rotator.html">Text Rotator</a>
                                                                    </li>
                                                                    <li><a href="shortcode-timeline.html">Timeline<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                    <li><a href="shortcode-video-background.html">Video
                                                                        Background</a></li>
                                                                    <li><a href="shortcode-wizard.html">Wizard<span
                                                                        class="badge bg-danger">NEW</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><a href="#">Pages</a>
                                                <ul class="dropdown-menu">
                                                    <li class="dropdown-submenu"><span class="dropdown-menu-title-only">About
                                                        us</span>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="page-about-basic.html">Basic</a></li>
                                                            <li><a href="page-about-extended.html">Extended</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><span class="dropdown-menu-title-only">About
                                                        me</span>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="page-about-me-creative.html">Creative<span
                                                                class="badge bg-danger">NEW</span></a></li>
                                                            <li><a href="page-about-me-basic.html">Basic</a></li>
                                                            <li><a href="page-about-me-extended.html">Extended</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><span class="dropdown-menu-title-only">Contact
                                                        us</span>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="page-contact-classic.html">Classic</a></li>
                                                            <li><a href="page-contact-advanced.html">Advanced</a> </li>
                                                            <li><a href="page-contact-fullwidth-map.html">Fullwidth Map</a></li>
                                                            <li><a href="page-contact-fullscreen-map.html">Fullscreen Map</a>
                                                            </li>
                                                            <li><a href="page-contact-map-bottom.html">Map bottom</a></li>
                                                            <li><a href="page-contact-sidebar-left.html">Sidebar Left</a></li>
                                                            <li><a href="page-contact-sidebar-right.html">Sidebar Right</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><span
                                                        class="dropdown-menu-title-only">Gallery</span>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="page-gallery-2.html">Two Columns</a></li>
                                                            <li><a href="page-gallery-3.html">Three Columns</a></li>
                                                            <li><a href="page-gallery-4.html">Four Columns</a></li>
                                                            <li><a href="page-gallery-5.html">Five Columns</a></li>
                                                            <li><a href="page-gallery-6.html">Six Columns</a></li>
                                                            <li><a href="page-gallery-sidebar.html">Sidebar version</a></li>
                                                            <li><a href="page-gallery-wide.html">Wide version</a></li>
                                                            <li><a href="page-gallery-load-more.html">Load more</a></li>
                                                            <li><a href="page-gallery-infinite-scroll.html">Infinity Scroll</a>
                                                            </li>
                                                            <li><a href="page-gallery-gallery-albums.html">Gallery Albums</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><span class="dropdown-menu-title-only">User
                                                        pages</span>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="page-user-login.html">Login</a></li>
                                                            <li><a href="page-user-login-cover.html">Login - Side Cover</a></li>
                                                            <li><a href="page-user-login-classic.html">Login - Classic</a></li>
                                                            <li><a href="page-user-register-cover.html">Register - Side
                                                                Cover</a></li>
                                                            <li><a href="page-user-register.html">Register</a></li>
                                                            <li><a href="page-user-register-classic.html">Register - Classic</a>
                                                            </li>
                                                            <li><a href="page-user-password-recovery.html">Recovery Password</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="page-services.html">Services</a></li>
                                                    <li><a href="page-our-team.html">Our team</a></li>
                                                    <li><a href="page-our-clients.html">Our clients</a></li>
                                                    <li><a href="page-maintenance.html">Maintenance</a></li>
                                                    <li><a href="page-404.html">404 Page</a></li>
                                                    <li><a href="page-404-parallax.html">404 Page - Parallax</a></li>
                                                    <li><a href="page-500.html">500 Page</a></li>
                                                    <li><a href="page-fullwidth.html">Fullwidth page</a></li>
                                                    <li><a href="page-fullwidth-wide.html">Fullwidth page - Wide</a></li>
                                                    <li class="dropdown-submenu"><span class="dropdown-menu-title-only">Page
                                                        with Sidebar</span>
                                                        <ul class="dropdown-menu">
                                                            <li><a href="page-sidebar.html">Sidebar Left</a></li>
                                                            <li><a href="page-sidebar-right.html">Sidebar Right</a></li>
                                                            <li><a href="page-sidebar-both.html">Sidebar Both</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="page-site-map.html">Site Map</a></li>
                                                    <li><a href="page-faq.html">FAQ</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown mega-menu-item"><a href="#">Portfolio</a>
                                                <ul class="dropdown-menu">
                                                    <li class="mega-menu-content">
                                                        <div class="row">
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Grids</li>
                                                                    <li><a href="portfolio-2.html">Two Columns</a></li>
                                                                    <li><a href="portfolio-3.html">Three Columns</a></li>
                                                                    <li><a href="portfolio-4.html">Four Columns</a></li>
                                                                    <li><a href="portfolio-5.html">Five Columns</a></li>
                                                                    <li><a href="portfolio-6.html">Six Columns</a></li>
                                                                    <li><a href="portfolio-sidebar.html">Sidebar version</a>
                                                                    </li>
                                                                    <li><a href="portfolio-wide-3.html">Wide version</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Masonry</li>
                                                                    <li><a href="portfolio-masonry-2.html">Two Columns</a></li>
                                                                    <li><a href="portfolio-masonry-3.html">Three Columns<span
                                                                        class="badge bg-danger">HOT</span></a></li>
                                                                    <li><a href="portfolio-masonry-4.html">Four Columns</a></li>
                                                                    <li><a href="portfolio-masonry-5.html">Five Columns</a></li>
                                                                    <li><a href="portfolio-masonry-6.html">Six Columns</a></li>
                                                                    <li><a href="portfolio-masonry-sidebar.html">Sidebar
                                                                        version</a></li>
                                                                    <li><a href="portfolio-masonry-wide-3.html">Wide version</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Styles</li>
                                                                    <li><a href="portfolio-filter-styles.html">Filter Styles</a>
                                                                    </li>
                                                                    <li><a href="portfolio-load-more.html">Load more</a></li>
                                                                    <li><a href="portfolio-load-more-sidebar.html">Load more -
                                                                        Sidebar</a></li>
                                                                    <li><a href="portfolio-infinite-scroll.html">Infinity
                                                                        Scroll</a></li>
                                                                    <li><a href="portfolio-ajax.html">Portfolio Ajax</a></li>
                                                                    <li><a href="portfolio-gallery-modal.html">Gallery Modal</a>
                                                                    </li>
                                                                    <li><a href="portfolio-video-modal.html">Video Modal</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Layouts</li>
                                                                    <li><a href="portfolio-sidebar-left.html">Left Sidebar</a>
                                                                    </li>
                                                                    <li><a href="portfolio-sidebar-right.html">Right Sidebar</a>
                                                                    </li>
                                                                    <li><a href="portfolio-sidebar-both.html">Both Sidebars</a>
                                                                    </li>
                                                                    <li><a href="portfolio-slider-3.html">Slider Default</a>
                                                                    </li>
                                                                    <li><a href="portfolio-no-page-title.html">No Page Title</a>
                                                                    </li>
                                                                    <li><a href="portfolio-no-page-title-sidebar.html">No Page
                                                                        Title - Sidebar</a></li>
                                                                    <li><a href="portfolio-hover-styles.html">Hover Styles</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Single Project</li>
                                                                    <li><a href="portfolio-page-grid-gallery.html">Grid
                                                                        Gallery</a></li>
                                                                    <li><a href="portfolio-page-particles.html">Particles Wide
                                                                        Project</a></li>
                                                                    <li><a href="portfolio-page-floating-sidebar.html">Floating
                                                                        Sidebar</a></li>
                                                                    <li><a href="portfolio-page-slider.html">Slider version</a>
                                                                    </li>
                                                                    <li><a href="portfolio-page-background-image.html">Fullscreen
                                                                        image</a></li>
                                                                    <li><a href="portfolio-page-background-video.html">Fullscreen
                                                                        Video</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-12 no-padding">
                                                                <div class="d-none d-lg-block m-t-40 m-b-10">
                                                                    <div class="container">
                                                                        <div class="row">
                                                                            <div class="col-lg-9 m-t-10">
                                                                                <div class="text-center center">
                                                                                    <div class="heading-creative">
                                                                                        <strong>20+</strong> Amazing Hover
                                                                                        Styles</div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-3"><a
                                                                                href="portfolio-hover-styles.html"
                                                                                class="btn m-l-20 btn-light btn-shadow btn-light-hover btn-light-hover">View
                                                                                All Hover Styles</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <ul class="d-block d-lg-none">
                                                                    <li><a class="mega-menu-title"
                                                                        href="portfolio-hover-styles.html">20+ Amazing Hover
                                                                        Styles</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown mega-menu-item"><a href="#">Blog</a>
                                                <ul class="dropdown-menu">
                                                    <li class="mega-menu-content">
                                                        <div class="row">
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Masonry</li>
                                                                    <li><a href="blog-masonry-2.html">Two Columns</a></li>
                                                                    <li><a href="blog-masonry-3.html">Three Columns<span
                                                                        class="badge bg-danger">HOT</span></a></li>
                                                                    <li><a href="blog-masonry-4.html">Four Columns</a></li>
                                                                    <li><a href="blog-masonry-sidebar.html">Sidebar version</a>
                                                                    </li>
                                                                    <li><a href="blog-masonry-no-page-title.html">No page
                                                                        title</a></li>
                                                                    <li><a href="blog-masonry-wide.html">Wide version</a></li>
                                                                    <li><a href="blog-masonry-load-more.html">Load More</a></li>
                                                                    <li><a href="blog-masonry-infinite-scroll.html">Infinite
                                                                        Scroll</a></li>
                                                                    <li><a href="blog-masonry-filter.html">Filter Categories</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Grids Layout</li>
                                                                    <li><a href="blog-1.html">One Column</a></li>
                                                                    <li><a href="blog-2.html">Two Columns</a></li>
                                                                    <li><a href="blog-3.html">Three Columns</a></li>
                                                                    <li><a href="blog-4.html">Four Columns</a></li>
                                                                    <li><a href="blog-no-page-title.html">No page title</a></li>
                                                                    <li><a href="blog-wide.html">Wide version</a></li>
                                                                    <li><a href="blog-load-more.html">Load More</a></li>
                                                                    <li><a href="blog-infinite-scroll.html">Infinite Scroll</a>
                                                                    </li>
                                                                    <li><a href="blog-filter.html">Filter Categories</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Left Image</li>
                                                                    <li><a href="blog-left-image-sidebar-right.html">Right
                                                                        Sidebar</a></li>
                                                                    <li><a href="blog-left-image-sidebar-left.html">Left
                                                                        Sidebar</a></li>
                                                                    <li><a href="blog-left-image-sidebar-both.html">Both
                                                                        Sidebars</a></li>
                                                                    <li><a href="blog-left-image-no-sidebar.html">No Sidebar</a>
                                                                    </li>
                                                                    <li><a href="blog-left-image-no-page-title.html">No page
                                                                        title</a></li>
                                                                    <li><a href="blog-left-image-load-more.html">Load More</a>
                                                                    </li>
                                                                    <li><a href="blog-left-image-infinite-scroll.html">Infinite
                                                                        Scroll</a></li>
                                                                    <li><a href="blog-left-image-author-info.html">Author
                                                                        Info</a></li>
                                                                    <li><a href="blog-left-image-filter.html">Filter
                                                                        Categories</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Layouts</li>
                                                                    <li><a href="blog-sidebar-left.html">Left Sidebar</a></li>
                                                                    <li><a href="blog-sidebar-right.html">Right Sidebar</a></li>
                                                                    <li><a href="blog-sidebar-both.html">Both Sidebars</a></li>
                                                                    <li><a href="blog-fullwidth.html">Fullwidth</a></li>
                                                                    <li class="mega-menu-title">Post Item Styles</li>
                                                                    <li><a href="blog-style-shadow.html">Shadow</a></li>
                                                                    <li><a href="blog-style-textual.html">Textual</a></li>
                                                                    <li><a href="blog-style-grey-bg.html">Grey Background</a>
                                                                    </li>
                                                                    <li><a href="blog-style-author-info.html">Author Info</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Single Post</li>
                                                                    <li><a href="blog-single.html">Default</a></li>
                                                                    <li><a href="blog-single-slider.html">Slider</a></li>
                                                                    <li><a href="blog-single-video.html">Video</a></li>
                                                                    <li><a href="blog-single-audio.html">Audio</a></li>
                                                                    <li><a href="blog-single-creative.html">Creative</a></li>
                                                                    <li class="mega-menu-title">Comments<span
                                                                        class="badge bg-danger">NEW</span></li>
                                                                    <li><a href="blog-comments.html#comments">Default
                                                                        Comments</a></li>
                                                                    <li><a href="blog-comments-disqus.html#comments">Disqus
                                                                        Comments</a></li>
                                                                    <li><a href="blog-comments-facebook.html#comments">Facebook
                                                                        Comments</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown mega-menu-item"><a href="#">Shop</a>
                                                <ul class="dropdown-menu">
                                                    <li class="mega-menu-content">
                                                        <div class="row">
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Columns</li>
                                                                    <li><a href="shop-columns-2.html">Two Columns</a></li>
                                                                    <li><a href="shop-columns-3.html">Three Columns</a></li>
                                                                    <li><a href="shop-columns-4.html">Four Columns</a></li>
                                                                    <li><a href="shop-columns-5.html">Five Columns</a></li>
                                                                    <li><a href="shop-columns-6.html">Six Columns</a></li>
                                                                    <li><a href="shop-sidebar-sticky.html">Sidebar Sticky</a>
                                                                    </li>
                                                                    <li><a href="shop-wide.html">Wide version</a></li>
                                                                    <li><a href="shop-no-page-title.html">No page title</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Layouts</li>
                                                                    <li><a href="shop-sidebar-left.html">Left Sidebar</a></li>
                                                                    <li><a href="shop-sidebar-right.html">Right Sidebar</a></li>
                                                                    <li><a href="shop-sidebar-both.html">Both Sidebars</a></li>
                                                                    <li><a href="shop-fullwidth.html">Fullwidth (Wide)</a></li>
                                                                    <li class="mega-menu-title">Loading Styles</li>
                                                                    <li><a href="shop-load-more.html">Load more</a><a
                                                                        href="shop-load-more-sidebar.html">Load Sidebar</a>
                                                                    </li>
                                                                    <li><a href="shop-infinite-scroll.html">Infinity Scroll</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Order process</li>
                                                                    <li><a class="animsition-link" href="shop-cart.html">Shoping
                                                                        Cart</a></li>
                                                                    <li><a class="animsition-link"
                                                                        href="shop-cart-empty.html">Shoping Cart - Empty</a>
                                                                    </li>
                                                                    <li><a class="animsition-link"
                                                                        href="shop-checkout.html">Checkout</a></li>
                                                                    <li><a class="animsition-link"
                                                                        href="shop-checkout-completed.html">Checkout
                                                                        Completed</a></li>
                                                                    <li><a href="shop-wishlist.html">Wishlist</a></li>
                                                                    <li><a href="shop-wishlist-empty.html">Wishlist Empty</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5">
                                                                <ul>
                                                                    <li class="mega-menu-title">Single Product</li>
                                                                    <li><a href="shop-single-product.html">Fullwidth</a></li>
                                                                    <li><a href="shop-single-product-sidebar-left.html">Left
                                                                        Sidebar</a></li>
                                                                    <li><a href="shop-single-product-sidebar-right.html">Right
                                                                        Sidebar</a></li>
                                                                    <li><a href="shop-single-product-sidebar-both.html">Both
                                                                        Sidebars</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-lg-2-5 p-l-0">
                                                                <h4 class="text-theme">BIG SALE<small>Up to</small></h4>
                                                                <h2 class="text-lg text-theme lh80 m-b-30">70%</h2>
                                                                <p class="m-b-0">The most happiest time of the day!. Morbi
                                                                    sagittis, sem quis ipsum dolor sit amet lacinia faucibus.
                                                                </p><a
                                                                    class="btn btn-shadow btn-roundeded btn-block m-t-10">SHOP
                                                                    NOW!</a><small class="t300">
                                                                    <p class="text-center m-0"><em>* Limited time Offer</em></p>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                <div id="slider" class="inspiro-slider dots-creative" data-height-xs="360" data-autoplay="2600"
                    data-animate-in="fadeIn" data-animate-out="fadeOut" data-items="1" data-loop="true" data-autoplay="true">

                    <div class="slide" data-bg-image="homepages/restaurant/images/main-2.jpg">
                        <div class="bg-overlay"></div>
                        {/* <div class="container">
                            <div class="slide-captions">

                                <h2 class="text-medium no-margin">5 star Hotel</h2>
                                <h2 class="text-lg no-margin">Wonderful Feelings</h2>

                            </div>
                        </div> */}
                    </div>

                    <div class="slide" data-bg-image="homepages/hotel/images/2.jpg">
                        <div class="bg-overlay"></div>
                        {/* <div class="container">
                            <div class="slide-captions">

                                <h2 class="text-medium no-margin text-colored">Enjoy</h2>
                                <h2 class="text-lg no-margin">Wonderful Feelings</h2>

                            </div>
                        </div> */}
                    </div>

                </div>


                <section class="pb-0">
                    <div class="container">
                        <div class="card mt-n10">
                            {/* <div class="card-body">
                                <form>
                                    <div class="row justify-content-center">
                                        <div class="col-lg-3">
                                            <div class="form-group">
                                                <label>Check in</label>
                                                <div class="input-group">
                                                    <input name="fromDate" class="form-control" type="text" />
                                                    <span class="input-group-text" id="basic-addon2"><i
                                                        class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="form-group">
                                                <label>Check out</label>
                                                <div class="input-group">
                                                    <input name="fromDate" class="form-control" type="text" />
                                                    <span class="input-group-text" id="basic-addon2"><i
                                                        class="fas fa-calendar"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-1 col-6">
                                            <div class="form-group">
                                                <label>Adults</label>
                                                <select class="form-select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-1 col-6">
                                            <div class="form-group">
                                                <label>Children</label>
                                                <select class="form-select">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 align-self-end">
                                            <button type="button" class="btn btn-primary mb-3">Check availability</button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}

                            <div class="search-bar-container">
                                <h2 class="search-bar-title">Find Restaurants Nearby</h2>
                                <form class="search-bar-form" role="search">
                                    <div class="input-group">
                                        <input
                                            type="text"
                                            class="form-control search-input"
                                            placeholder="Search for city, region, or zipcode"
                                            aria-label="Search"
                                        />
                                        <button class="btn search-btn" type="submit" aria-label="Search">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>



                        </div>
                    </div>
                </section>

                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <h2 class="text-medium m-t-0">Welcome to Hotel POLO</h2>
                                <div class="seperator"><i class="fa fa-dot-circle-o"></i></div>
                                <p class="lead">Hotel “POLO” is a peaceful and well-equipped holiday hotel. Thanks to the
                                    favourable situation close to the beach, the woods and the village centre, it is an ideal
                                    hotel, where you will certainly feel at home.</p>
                            </div>
                            {/* <div class="col-lg-8">
                        <div class="rooms carousel" data-items="2" data-margin="20" data-dots="false">
                            <div class="room">
                                <div class="room-image">
                                    <img src="homepages/hotel/images/rooms/1.jpg" alt="#"/>
                                    <div class="room-title">Luxury Room</div>
                                    <span class="room-badge">save 60%</span>
                                </div>
                                <div class="room-details">
                                    <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                        ornare sem lacinia quam venenatis vestibulum.</p>
                                    <div class="float-left">
                                        <h4>89$<small>/ Day</small></h4>
                                    </div>
                                    <div class="float-right">
                                        <a href="#" class="btn btn-primary">Book</a>
                                    </div>
                                </div>
                            </div>
                            <div class="room">
                                <div class="room-image">
                                    <img src="homepages/hotel/images/rooms/2.jpg" alt="#"/>
                                    <div class="room-title">Deluxe Room</div>
                                </div>
                                <div class="room-details">
                                    <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                        ornare sem lacinia quam venenatis vestibulum.</p>
                                    <div class="float-left">
                                        <h4>89$<small>/ Day</small></h4>
                                    </div>
                                    <div class="float-right">
                                        <a href="#" class="btn btn-primary">Book</a>
                                    </div>
                                </div>


                            </div>
                            <div class="room">
                                <div class="room-image">
                                    <img src="homepages/hotel/images/rooms/3.jpg" alt="#"/>
                                    <div class="room-title">Standard Room</div>
                                    <span class="room-badge">save 60%</span>
                                </div>
                                <div class="room-details">
                                    <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                        ornare sem lacinia quam venenatis vestibulum.</p>
                                    <div class="float-left">
                                        <h4>89$<small>/ Day</small></h4>
                                    </div>
                                    <div class="float-right">
                                        <a href="#" class="btn btn-primary">Book</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div> */}
                        </div>
                        <div class="seperator"><i class="fa fa-check-circle-o"></i></div>
                        <div class="row m-t-60">
                            <div class="col-lg-3">
                                <i class="fa fa-coffee fa-2x"></i>
                                <h4>Restaurant</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form</p>
                            </div>
                            <div class="col-lg-3">
                                <i class="fas fa-glass-martini fa-2x"></i>
                                <h4>Revolving Cocktail bar</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form</p>
                            </div>
                            <div class="col-lg-3">
                                <i class="fa fa-plane fa-2x"></i>
                                <h4>Free airport pick up service</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form</p>
                            </div>
                            <div class="col-lg-3">
                                <i class="fa fa-star fa-2x"></i>
                                <h4>5/5 Rating</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section-video text-light" data-bg-video="homepages/hotel/video/Coffee-Shot/Coffee-Shot.mp4">
                    <div class="container container-fullscreen">
                        <div class="text-middle text-center text-light">
                            <h1 class="text-uppercase text-lg">HTML5 VIDEO</h1>
                            <p class="lead">Beautiful websites are now easy to made! Ready to Purchase POLO Template?</p>
                            <a href="https://themeforest.net/item/polo-responsive-multipurpose-html5-template/13708923"
                                class="btn btn-primary">Buy now</a>

                        </div>

                    </div>
                </section>

                <section>
                    <div class="container">
                        <div class="text-center m-b-40">
                            <h2 class="text-medium m-t-0">Hotel Rooms</h2>
                            <div class="seperator"><i class="fa fa-dot-circle-o"></i></div>
                            <p class="lead">Hotel “POLO” is a peaceful and well-equipped holiday hotel. Thanks to the favourable
                                situation close to the beach, the woods and the village centre, it is an ideal hotel, where you
                                will certainly feel at home.</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="room">
                                    <div class="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div class="room-title">Deluxe Room</div>
                                        <span class="room-badge">save 60%</span>
                                    </div>
                                    <div class="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>
                                        <div class="float-left">
                                            <h4>89$<small>/ Day</small></h4>
                                        </div>
                                        <div class="float-right">
                                            <a href="#" class="btn btn-primary">Book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="room">
                                    <div class="room-image">
                                        <img src="homepages/hotel/images/rooms/5.jpg" alt="#" />
                                        <div class="room-title">Deluxe Room</div>
                                    </div>
                                    <div class="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>
                                        <div class="float-left">
                                            <h4>89$<small>/ Day</small></h4>
                                        </div>
                                        <div class="float-right">
                                            <a href="#" class="btn btn-primary">Book</a>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div class="col-lg-3">
                                <div class="room">
                                    <div class="room-image">
                                        <img src="homepages/hotel/images/rooms/6.jpg" alt="#" />
                                        <div class="room-title">Deluxe Room</div>
                                        <span class="room-badge">save 60%</span>
                                    </div>
                                    <div class="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>
                                        <div class="float-left">
                                            <h4>89$<small>/ Day</small></h4>
                                        </div>
                                        <div class="float-right">
                                            <a href="#" class="btn btn-primary">Book</a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="room">
                                    <div class="room-image">
                                        <img src="homepages/hotel/images/rooms/7.jpg" alt="#" />
                                        <div class="room-title">Deluxe Room</div>
                                        <span class="room-badge">save 60%</span>
                                    </div>
                                    <div class="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>
                                        <div class="float-left">
                                            <h4>89$<small>/ Day</small></h4>
                                        </div>
                                        <div class="float-right">
                                            <a href="#" class="btn btn-primary">Book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="room">
                                    <div class="room-image">
                                        <img src="homepages/hotel/images/rooms/8.jpg" alt="#" />
                                        <div class="room-title">Deluxe Room</div>
                                        <span class="room-badge">save 60%</span>
                                    </div>
                                    <div class="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>
                                        <div class="float-left">
                                            <h4>89$<small>/ Day</small></h4>
                                        </div>
                                        <div class="float-right">
                                            <a href="#" class="btn btn-primary">Book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="room">
                                    <div class="room-image">
                                        <img src="homepages/hotel/images/rooms/9.jpg" alt="#" />
                                        <div class="room-title">Deluxe Room</div>
                                    </div>
                                    <div class="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>
                                        <div class="float-left">
                                            <h4>89$<small>/ Day</small></h4>
                                        </div>
                                        <div class="float-right">
                                            <a href="#" class="btn btn-primary">Book</a>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div class="col-lg-3">
                                <div class="room">
                                    <div class="room-image">
                                        <img src="homepages/hotel/images/rooms/10.jpg" alt="#" />
                                        <div class="room-title">Deluxe Room</div>
                                        <span class="room-badge">save 60%</span>
                                    </div>
                                    <div class="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>
                                        <div class="float-left">
                                            <h4>89$<small>/ Day</small></h4>
                                        </div>
                                        <div class="float-right">
                                            <a href="#" class="btn btn-primary">Book</a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="room">
                                    <div class="room-image">
                                        <img src="homepages/hotel/images/rooms/11.jpg" alt="#" />
                                        <div class="room-title">Deluxe Room</div>
                                        <span class="room-badge">save 60%</span>
                                    </div>
                                    <div class="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>
                                        <div class="float-left">
                                            <h4>89$<small>/ Day</small></h4>
                                        </div>
                                        <div class="float-right">
                                            <a href="#" class="btn btn-primary">Book</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div class="seperator"><i class="fa fa-dot-circle-o"></i></div>

                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="text-medium">Events</div>
                                <p class="lead">
                                    Ready to Purchase POLO Template?
                                </p>

                                <div class="tabs p-r-20">
                                    <ul class="nav nav-tabs nav-justified text-start" id="myTab">
                                        <li class="nav-item"><a href="#day1" class="nav-link active" data-bs-toggle="tab"
                                            aria-selected="true"><strong>Day 01</strong> <br />17.10.2015</a></li>
                                        <li class="nav-item"><a href="#day2" class="nav-link" data-bs-toggle="tab"><strong>Day
                                            02</strong> <br />18.10.2015</a></li>
                                        <li class="nav-item"><a href="#day3" class="nav-link" data-bs-toggle="tab"><strong>Day
                                            03</strong> <br />19.10.2015</a></li>
                                        <li class="nav-item"><a href="#day4" class="nav-link" data-bs-toggle="tab"><strong>Day
                                            04</strong> <br />20.10.2015</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div id="day1" class="tab-pane fade show active">

                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 09:00 - 10:45</span>
                                                <h5>Juna Doe</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
                                                    quas molestias excepturi</p>
                                            </div>
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 11:00 - 11:45</span>
                                                <h5>Alea Grande</h5>
                                                <p class="m-b-0">Et harum quidem rerum facilis est et expedita distinctio. At
                                                    vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                            </div>
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 08:00 - 08:45</span>
                                                <h5>John Smith</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis
                                                </p>
                                            </div>
                                        </div>
                                        <div id="day2" class="tab-pane fade">
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 11:00 - 11:45</span>
                                                <h5>Alea Grande</h5>
                                                <p class="m-b-0">Et harum quidem rerum facilis est et expedita distinctio. At
                                                    vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                            </div>
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 08:00 - 08:45</span>
                                                <h5>John Smith</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis
                                                </p>
                                            </div>

                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 09:00 - 10:45</span>
                                                <h5>Juna Doe</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
                                                    quas molestias excepturi</p>
                                            </div>
                                        </div>
                                        <div id="day3" class="tab-pane fade">
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 08:00 - 08:45</span>
                                                <h5>John Smith</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis
                                                </p>
                                            </div>
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 11:00 - 11:45</span>
                                                <h5>Alea Grande</h5>
                                                <p class="m-b-0">Et harum quidem rerum facilis est et expedita distinctio. At
                                                    vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                            </div>
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 08:00 - 08:45</span>
                                                <h5>John Smith</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis
                                                </p>
                                            </div>

                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 09:00 - 10:45</span>
                                                <h5>Juna Doe</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
                                                    quas molestias excepturi</p>
                                            </div>
                                        </div>
                                        <div id="day4" class="tab-pane fade">
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 11:00 - 11:45</span>
                                                <h5>Alea Grande</h5>
                                                <p class="m-b-0">Et harum quidem rerum facilis est et expedita distinctio. At
                                                    vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                            </div>
                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 08:00 - 08:45</span>
                                                <h5>John Smith</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis
                                                </p>
                                            </div>

                                            <div class="p-10 border-bottom">
                                                <span><i class="far fa-clock"></i> 09:00 - 10:45</span>
                                                <h5>Juna Doe</h5>
                                                <p class="m-b-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
                                                    quas molestias excepturi</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="text-medium">Appointment</div>
                                <p class="lead">
                                    Register for this next Event
                                </p>
                                <form class="widget-contact-form" novalidate action="include/contact-form.php" role="form"
                                    method="post">

                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" aria-required="true" name="widget-contact-form-name"
                                            class="form-control required name" placeholder="Enter your Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" aria-required="true" required name="widget-contact-form-email"
                                            class="form-control required email" placeholder="Enter your Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Phone Number</label>
                                        <input type="text" aria-required="true" name="widget-contact-form-phone"
                                            class="form-control required" placeholder="Enter your Phone number" />
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <textarea type="text" name="widget-contact-form-message" rows="7"
                                            class="form-control required" placeholder="Enter your Message"></textarea>
                                    </div>
                                    <div class="form-group text-center">
                                        <button class="btn button-light" type="submit" id="form-submit">Send message</button>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>

                <section id="section6" class="no-padding">

                    <div class="map" data-latitude="-37.817240" data-longitude="144.955826" data-style="light"
                        data-info="Hello from &lt;br&gt; Inspiro Themes"></div>

                </section>

                <footer id="footer">
                    <div class="footer-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5">
                                    <div class="widget">

                                        <div class="widget-title">Polo HTML5 Template</div>
                                        <p class="mb-5">Built with love in Fort Worth, Texas, USA<br /> All rights reserved.
                                            Copyright © 2021. INSPIRO.</p>
                                        <a href="https://themeforest.net/item/polo-responsive-multipurpose-html5-template/13708923"
                                            class="btn btn-inverted" target="_blank">Purchase Now</a>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="widget">
                                                <div class="widget-title">Discover</div>
                                                <ul class="list">
                                                    <li><a href="#">Features</a></li>
                                                    <li><a href="#">Layouts</a></li>
                                                    <li><a href="#">Corporate</a></li>
                                                    <li><a href="#">Updates</a></li>
                                                    <li><a href="#">Pricing</a></li>
                                                    <li><a href="#">Customers</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-3">
                                            <div class="widget">
                                                <div class="widget-title">Features</div>
                                                <ul class="list">
                                                    <li><a href="#">Layouts</a></li>
                                                    <li><a href="#">Headers</a></li>
                                                    <li><a href="#">Widgets</a></li>
                                                    <li><a href="#">Footers</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-lg-3">
                                            <div class="widget">
                                                <div class="widget-title">Pages</div>
                                                <ul class="list">
                                                    <li><a href="#">Portfolio</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Shop</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="widget">
                                                <div class="widget-title">Support</div>
                                                <ul class="list">
                                                    <li><a href="#">Help Desk</a></li>
                                                    <li><a href="#">Documentation</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="copyright-content">
                        <div class="container">
                            <div class="copyright-text text-center">&copy; 2021 POLO - Responsive Multi-Purpose HTML5 Template.
                                All Rights Reserved.<a href="https://www.inspiro-media.com" target="_blank" rel="noopener">
                                    INSPIRO</a> </div>
                        </div>
                    </div>
                </footer>


            </div>



            <a id="scrollTop"><i class="icon-chevron-up"></i><i class="icon-chevron-up"></i></a>



        </div>


    );
}

