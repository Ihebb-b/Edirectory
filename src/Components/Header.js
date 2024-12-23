import React from 'react'
import './Slider.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <div id="topbar" className="topbar-transparent dark submenu-light ">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-6">
         <ul className="top-menu">
            <li><a href="#">Phone: +1 (234) 567-890</a></li>
            <li><a href="#">Email: contact@inspiro-media.com</a></li>
        </ul> 
    </div> */}
                        <div className="col-md-6 d-none d-sm-block">
                            <div className="social-icons social-icons-colored-hover">
                                <ul>
                                    <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="social-twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="social-google"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li className="social-pinterest"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                    <li className="social-vimeo"><a href="#"><i className="fab fa-vimeo"></i></a></li>
                                    <li className="social-linkedin"><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    <li className="social-dribbble"><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                    <li className="social-youtube"><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li className="social-rss"><a href="#"><i className="fa fa-rss"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header id="header" data-transparent="true" className="dark submenu-light">
                <div className="header-inner">
                    <div className="container">

                        {/* <div id="logo"> <a href="index.html"><span className="logo-default">E-directory</span><span
                className="logo-dark">E-directory</span></a> </div> */}

                        <div id="logo"> <NavLink to="/"><span className="logo-default">E-Directory</span><span
                            className="logo-dark">E-Directory</span></NavLink> </div>


                        {/* <div id="search"><a id="btn-search-close" className="btn-search-close" aria-label="Close search form"><i
                className="icon-x"></i></a>
        <form className="search-form" action="search-results-page.html" method="get">
            <input className="form-control" name="q" type="text" placeholder="Type & Search..." />
            <span className="text-muted">Start typing & press "Enter" or "ESC" to close</span>
        </form>
    </div> */}

                        <div className="header-extras">
                            <ul>

                                <li>
                                    <div className="p-dropdown"> <a href="#"><i className="icon-globe"></i></a>
                                        {/*<span>EN</span>*/}
                                        <ul className="p-dropdown-content">
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Spanish</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div id="mainMenu-trigger"> <a className="lines-button x"><span className="lines"></span></a> </div>


                        <div id="mainMenu">
                            <div className="container">
                                <nav>
                                    <ul>
                                        <li>
                                            <a id="btn-search" href="#"> <i className="icon-search"></i></a>
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
        </>
    )
}

export default Header