import React from 'react'
import { NavLink } from 'react-router-dom'

function Header2() {
    return (


        <header id="header" class="dark" data-fullwidth="true">
            <div class="header-inner">
                <div class="container">

                    <div id="logo">
                        <NavLink to="/">
                            <span class="logo-default">E-Directory</span>
                            <span class="logo-dark">E-Directory</span>
                        </NavLink>
                    </div>

                    <div id="search"><a id="btn-search-close" class="btn-search-close" aria-label="Close search form"><i class="icon-x"></i></a>
                        <form class="search-form" action="search-results-page.html" method="get">
                            <input class="form-control" name="q" type="text" placeholder="Type & Search..." />
                            <span class="text-muted">Start typing & press "Enter" or "ESC" to close</span>
                        </form>
                    </div>

                    <div class="header-extras">
                        <ul>

                            <li>
                                <div class="p-dropdown">
                                    <a href="#"><i class="icon-globe"></i><span>EN</span></a>
                                    <ul class="p-dropdown-content">
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">Spanish</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="mainMenu-trigger">
                        <a class="lines-button x"><span class="lines"></span></a>
                    </div>

                    <div id="mainMenu">
                        <div className="container">
                            <nav>
                                <ul>
                                    <li>
                                        <a id="btn-search" href="#"> <i class="icon-search"></i></a>
                                    </li>
                                    <li> <NavLink to="/">Home</NavLink></li>
                                    <li className="dropdown"><a href="#">Restaurants</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu"><a href="#">categ1</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="header-topbar.html">Light</a></li>
                                                    <li><a href="header-topbar-dark.html">Dark</a></li>
                                                    <li><a href="header-topbar-transparent.html">Transparent</a></li>
                                                    <li><a href="header-topbar-colored.html">Colored</a></li>
                                                    <li><a href="header-topbar-fullwidth.html">Fullwidth</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu"><a href="#">categ2</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="header.html">Light</a></li>
                                                    <li><a href="header-dark.html">Dark</a></li>
                                                    <li><a href="header-transparent.html">Transparent</a></li>
                                                    <li><a href="header-fullwidth.html">Fullwidth</a></li>
                                                    <li className="dropdown-submenu"><a href="#">Modern</a>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="header-modern.html">Light</a></li>
                                                            <li><a href="header-modern-dark.html">Dark</a></li>
                                                            <li><a href="header-modern-transparent.html">Transparent</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="dropdown"><a href="#">Menus</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-submenu"><a href="#">categ1</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="slider-revolution-slider.html">subcateg1</a>
                                                    </li>
                                                    <li><a href="slider-inspiro-slider.html">subcateg2</a></li>
                                                    <li><a href="slider-static-media-image.html">sybcateg3</a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li><a href="widgets.html">categ2</a></li>
                                            <li><a href="page-loaders.html">categ3<span
                                                className="badge bg-danger">NEW</span></a></li>



                                        </ul>
                                    </li>
                                    <li className="dropdown mega-menu-item"><a href="#">Recipes</a>
                                        <ul className="dropdown-menu">
                                            <li className="mega-menu-content">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <ul>
                                                            <li><a href="shortcode-according.html">categ1</a></li>
                                                            <li><a href="shortcode-alerts.html">categ2</a></li>
                                                            <li><a href="shortcode-animations.html">categ3</a></li>

                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <ul>
                                                            <li><a href="component-charts-chartjs.html">categ1<span
                                                                className="badge bg-danger">NEW</span></a></li>
                                                            <li><a href="component-calendar.html">categ2<span
                                                                className="badge bg-danger">NEW</span></a></li>
                                                            <li><a href="shortcode-client-logo.html">categ3</a>
                                                            </li>


                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <ul>
                                                            <li><a href="shortcode-dropcat-highlight.html">categ1</a></li>
                                                            <li><a href="shortcode-dropdowns.html">categ2</a></li>
                                                            <li><a href="shortcode-team-members.html">categ3</a>
                                                            </li>
                                                            <li><a href="shortcode-forms.html">categ4</a></li>

                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <ul>
                                                            <li><a href="shortcode-pricing-table.html">categ1</a></li>
                                                            <li><a href="shortcode-progress-bar.html">categ2</a>
                                                            </li>
                                                            <li><a href="shortcode-parallax.html">categ3</a></li>


                                                        </ul>
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
    )
}

export default Header2