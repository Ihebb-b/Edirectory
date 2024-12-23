import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Header2 from '../Components/Header2'
import Footer2 from '../Components/Footer2'
import { NavLink } from 'react-router-dom'


function RestaurantList() {

    // State to toggle map visibility
    const [isMapVisible, setMapVisible] = useState(false);

    // Function to toggle map visibility
    const toggleMap = () => setMapVisible(!isMapVisible);

    return (
        <>
            <div class="body-inner">

                <Header2 />
                <section id="page-title" data-bg-parallax="homepages/restaurant/images/main-1.jpg"
                    style={{
                        marginTop: "80px",
                        backgroundImage: "url('homepages/restaurant/images/main-1.jpg')",
                        backgroundPosition: "50% 70%",
                        backgroundSize: "cover", backgroundRepeat: "no-repeat"
                    }}>

                    <div class="bg-overlay"></div>
                    <div class="container">
                        <div class="page-title">
                            <h1 class="text-uppercase text-medium">RESTAURANTS</h1>
                            <span>Good and Healthy meals are the norm in the Mediterranean !</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="border">
                        {isMapVisible && (
                            <div class="map" data-latitude="-37.817240" data-longitude="144.955826" data-style="light" data-info="Hello from &lt;br&gt; Inspiro Themes"></div>
                        )}
                    </div>

                </section>

                <section className="no-padding-section">
                    <div className='row'>
                        <div class="hide-content col-lg-6">
                            <button onClick={toggleMap} className="btn btn-outline btn-dark mt-3">
                                {isMapVisible ? "Hide Map" : "View on Map"}
                            </button>
                        </div>
                    </div>
                </section>



                <section id="page-content" class="sidebar-left">
                    <div class="container">

                        <div class="row">
                            <div class="content col-lg-9">
                                <div class="page-title">
                                    <div class="breadcrumb float-left">
                                        <ul>
                                            <li> <NavLink to="/">Home</NavLink></li>
                                            <li class="active"> <NavLink to="/rntlist">Restaurants</NavLink></li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="blog" class="post-thumbnails">

                                    <div class="post-item">
                                        <div class="post-item-wrap">
                                            <div class="post-image">
                                                <a href="#">
                                                <img alt="" src="/homepages/restaurant/images/restaurant1.jpg" />
                                                </a>
                                            </div>
                                            <div class="post-item-description">

                                                <h2><a href="#">Teoric Taverna Gastronomica - Barcelona, Spain
                                                </a></h2>
                                                <p style={{textAlign: "justify"}}>This classic Spanish restaurant serves some of the best Mediterranean food you'll ever taste. 
                                                    With great service, amazing food and a friendly atmosphere, 
                                                    Teoric Taverna Gastronomica is a must-visit for the next time 
                                                    you find yourself in Barcelona.</p>
                                                    <i class="icon-chevron-right"> <NavLink to="/restaurantdetail" class="item-link">Read More</NavLink></i>

                                            </div>
                                        </div>
                                    </div>






                                    <div class="post-item">
                                        <div class="post-item-wrap">
                                            <div class="post-image">
                                                <a href="#">
                                                <img alt="" src="/homepages/restaurant/images/restaurant2.jpg" />
                                                </a>
                                            </div>
                                            <div class="post-item-description">

                                                <h2><a href="#">La Montgolfiere Henri Geraci - Manoca
                                                </a></h2>
                                                <p style={{textAlign: "justify"}}>This restaurant is a true Monaco staple,
                                                     serving excellent French, Mediterranean, 
                                                     and Western-European menu options. Everything
                                                      they create at the world-class La Montgolfiere
                                                       Henri Geraci is made with care and precision, giving an end result that is sure to satisfy.</p>
                                                <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="post-item">
                                        <div class="post-item-wrap">
                                            <div class="post-image">
                                                <a href="#">
                                                <img alt="" src="/homepages/restaurant/images/restaurant3.jpg" />
                                                </a>
                                            </div>
                                            <div class="post-item-description">

                                                <h2><a href="#">La Vague d'OR - St Tropez, France
                                                </a></h2>
                                                <p style={{textAlign: "justify"}}>St. Tropez only has two Michelin-starred restaurants, and La Vague d'Or is one of them. 
                                                    Meaning 'the golden wave' in English, this three-Michelin 
                                                    star restaurant is at the top of its class. 
                                                    With a menu rooted in Mediterranean origins, this destination 
                                                    on the French Riviera is sure to provide a feast for your palate.</p>
                                                <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="post-item">
                                        <div class="post-item-wrap">
                                            <div class="post-image">
                                                <a href="#">
                                                <img alt="" src="/homepages/restaurant/images/restaurant4.jpg" />
                                                </a>
                                            </div>
                                            <div class="post-item-description">

                                                <h2><a href="#">Ricks Cafe - Casablanca, Morocco
                                                </a></h2>
                                                <p style={{textAlign: "justify"}}>Rick's Café is a complete recreation of the bar made famous by Humphrey Bogart and Ingrid Bergman so many years ago in the movie Casablanca. Large staircases, classic Moroccan architecture and a grand piano on display add to the incredible food served at Rick's.</p>
                                                <a href="#" class="item-link">Read More <i class="icon-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
                                </ul>

                            </div>



                            <div class="sidebar sticky-sidebar col-lg-3">

                                {/*                        
                        <div class="widget ">
                            <h4 class="widget-title">Recent Posts</h4>
                            <div class="post-thumbnail-list">
                                <div class="post-thumbnail-entry">
                                    <img alt="" src="images/blog/thumbnail/5.jpg"/>
                                    <div class="post-thumbnail-content">
                                        <a href="#">A true story, that never been told!</a>
                                        <span class="post-date"><i class="icon-clock"></i> 6m ago</span>
                                        <span class="post-category"><i class="fa fa-tag"></i> Technology</span>
                                    </div>
                                </div>
                                <div class="post-thumbnail-entry">
                                    <img alt="" src="images/blog/thumbnail/6.jpg"/>
                                    <div class="post-thumbnail-content">
                                        <a href="#">Beautiful nature, and rare feathers!</a>
                                        <span class="post-date"><i class="icon-clock"></i> 24h ago</span>
                                        <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                    </div>
                                </div>
                                <div class="post-thumbnail-entry">
                                    <img alt="" src="images/blog/thumbnail/7.jpg"/>
                                    <div class="post-thumbnail-content">
                                        <a href="#">Lorem ipsum dolor sit amet</a>
                                        <span class="post-date"><i class="icon-clock"></i> 11h ago</span>
                                        <span class="post-category"><i class="fa fa-tag"></i> Lifestyle</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                                {/* <div class="widget">
                                    <h4 class="widget-title">Filter Restaurants</h4>
                                    <div class="post-thumbnail-list">
                                        <div class="filter_type">
                                            <h6>Price</h6>
                                            <input type="text" id="range" name="range" value="" />
                                        </div>
                                        <div class="filter_type">
                                            <h6>Star Category</h6>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" /><span class="rating">
                                                            <i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i>
                                                        </span>(15)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" /><span class="rating">
                                                            <i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81"></i>
                                                        </span>(45)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" /><span class="rating">
                                                            <i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81 voted"></i><i class="icon_set_1_icon-81"></i><i class="icon_set_1_icon-81"></i>
                                                        </span>(35)
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="filter_type">
                                            <h6>Review Score</h6>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />Superb: 9+ (77)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />Very good: 8+ (552)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />Good: 7+ (909)
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="filter_type">
                                            <h6>Facility</h6>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />Pet allowed
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />Wifi
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />Restaurant
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="filter_type">
                                            <h6>District</h6>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />Paris Centre
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />La Defance
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" />Latin Quarter
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div class="widget">
                                    <h4 class="widget-title">Filter Restaurants</h4>
                                    <div class="post-thumbnail-list">
                                        

                                        <div class="filter_type">
                                            <h6>Star Category</h6>
                                            <ul>
                                                <li>
                                                    <h5>5 Stars</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="5-stars" checked/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>4 Stars</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="4-stars" checked/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>3 Stars</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="3-stars"/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="filter_type">
                                            <h6>Review Score</h6>
                                            <ul>
                                                <li>
                                                    <h5>Superb: 9+</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="superb" checked/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Very Good: 8+</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="very-good" checked/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Good: 7+</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="good"/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="filter_type">
                                            <h6>Facility</h6>
                                            <ul>
                                                <li>
                                                    <h5>Pet Allowed</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="pet-allowed"/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Wifi</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="wifi" checked/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Restaurant</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="restaurant" checked/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="filter_type">
                                            <h6>District</h6>
                                            <ul>
                                                <li>
                                                    <h5>Paris Centre</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="paris-centre" checked/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>La Defance</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="la-defance"/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Latin Quarter</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="latin-quarter"/><span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div class="widget">
                                    <h4 class="widget-title">Filter Restaurants</h4>
                                    <div class="post-thumbnail-list">
                                        <div class="filter_type">
                                            <h6>Star Category</h6>
                                            <ul>
                                                <li>
                                                    <h5>5 Stars</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="5-stars" checked />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>4 Stars</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="4-stars" checked />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>3 Stars</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="3-stars" />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="filter_type">
                                            <h6>Review Score</h6>
                                            <ul>
                                                <li>
                                                    <h5>Superb: 9+</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="superb" checked />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Very Good: 8+</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="very-good" checked />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Good: 7+</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="good" />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="filter_type">
                                            <h6>Facility</h6>
                                            <ul>
                                                <li>
                                                    <h5>Pet Allowed</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="pet-allowed" />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Wifi</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="wifi" checked />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Restaurant</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="restaurant" checked />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="filter_type">
                                            <h6>District</h6>
                                            <ul>
                                                <li>
                                                    <h5>Paris Centre</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="paris-centre" checked />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>La Defance</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="la-defance" />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <h5>Latin Quarter</h5>
                                                    <label class="p-switch p-switch-sm">
                                                        <input type="checkbox" name="latin-quarter" />
                                                        <span class="p-switch-style"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                <div class="widget-sidebar">

                                    <h4 class="widget-title text-uppercase font-weight-bold">Filter Restaurants</h4>


                                    <div class="filter_type mt-4">
                                        <h6 class="text">Star Category</h6>
                                        <ul class="list-unstyled">
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">5 Stars</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="5-stars" id="5-stars" />
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">4 Stars</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="4-stars" id="4-stars" />
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">3 Stars</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="3-stars" id="3-stars" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="filter_type mt-4">
                                        <h6 class="text">Review Score</h6>
                                        <ul class="list-unstyled">
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">Superb: 9+</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="superb" id="superb" />
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">Very Good: 8+</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="very-good" id="very-good" />
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">Good: 7+</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="good" id="good" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="filter_type mt-4">
                                        <h6 class="text">Facility</h6>
                                        <ul class="list-unstyled">
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">Pet Allowed</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="pet-allowed" id="pet-allowed" />
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">Wifi</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="wifi" id="wifi" />
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">Restaurant</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="restaurant" id="restaurant" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="filter_type mt-4">
                                        <h6 class="text">District</h6>
                                        <ul class="list-unstyled">
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">Paris Centre</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="paris-centre" id="paris-centre" />
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">La Defance</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="la-defance" id="la-defance" />
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center mb-2">
                                                <span class="flex-grow-1">Latin Quarter</span>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" name="latin-quarter" id="latin-quarter" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>





                                <div class="widget-sidebar ">
                                    <h4 class="widget-title">Tags</h4>
                                    <div class="tags">
                                        <a href="#">Vegan</a>
                                        <a href="#">Fruitarian</a>
                                        <a href="#">Vegetarian</a>
                                        <a href="#">Flexterian</a>
                                        <a href="#">No Diet</a>
                                        <a href="#">Religiously Observant</a>
                                        <a href="#">Other</a>
                                    </div>
                                </div>

                                <div class="widget ">
                                    <div class="box_style_2">
                                        <i class="fa fa-headset"></i>                                        <h4>Need <span>Help?</span></h4>
                                        <a href="tel://21699445999" class="phone">+216 99 445 999</a>
                                        <small>Monday to Friday 9.00am - 7.30pm</small>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <div className="seperator"><i className="fa fa-dot-circle-o"></i></div>

                <Footer2 />


            </div>



            <a id="scrollTop"><i className="icon-chevron-up"></i><i className="icon-chevron-up"></i></a>





        </>

    )
}

export default RestaurantList