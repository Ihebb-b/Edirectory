import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Header2 from '../Components/Header2'
import Footer2 from '../Components/Footer2'
import { NavLink } from 'react-router-dom'
import { useGetAllRestaurantsPagiQuery, useGetAllRestaurantsQuery } from '../slices/userApiSlice'


function RestaurantList() {

   
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const { data, isLoading, isError } = useGetAllRestaurantsPagiQuery({
        page: currentPage,
        limit: itemsPerPage,
    });

    const restaurantImages = [
        "/homepages/restaurant/images/restaurantmed1.jpg",
        "/homepages/restaurant/images/restaurantmed2.jpg",
        "/homepages/restaurant/images/restaurantmed3.jpg",
        "/homepages/restaurant/images/restaurantmed4.jpg",
        // "/homepages/restaurant/images/restaurant1.jpg",
        // "/homepages/restaurant/images/restaurant2.jpg",
        // "/homepages/restaurant/images/restaurant3.jpg",
        // "/homepages/restaurant/images/restaurant4.jpg",
    ];

    const restaurants = data?.restaurants || [];
    const totalPages = data?.totalPages || 1;




    // State to toggle map visibility
    const [isMapVisible, setMapVisible] = useState(false);

    // Function to toggle map visibility
    const toggleMap = () => setMapVisible(!isMapVisible);

    //const { restaurants, totalPages } = data;



    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const currentRestaurants = restaurants.slice(startIndex, startIndex + itemsPerPage) || [];

    //const totalPages = Math.ceil((restaurants?.length || 0) / itemsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }

    // if (isError || !restaurants || restaurants.length === 0) return <p>No restaurants available.</p>;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    // Error state
    if (isError) {
        return <p>An error occurred while fetching restaurants.</p>;
    }

    // Empty state
    if (!restaurants.length) {
        return <p>No restaurants available.</p>;
    }

    return (
        <>
            <div className="body-inner">

                <Header2 />

                <section id="page-title" data-bg-parallax="homepages/restaurant/images/main-1.jpg"
                    style={{
                        marginTop: "80px",
                        backgroundImage: "url('homepages/restaurant/images/main-1.jpg')",
                        backgroundPosition: "50% 70%",
                        backgroundSize: "cover", backgroundRepeat: "no-repeat"
                    }}>

                    {/* <div className="bg-overlay"></div> */}
                    <div className="container">
                        <div className="page-title">
                            <h1 className="text-uppercase text-medium">RESTAURANTS</h1>
                            <span>Good and Healthy meals are the norm in the Mediterranean !</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="border">
                        {isMapVisible && (
                            <iframe
                                title="Google Map"
                                className="embedded-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531531675!3d-37.81720997975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f29cda1d45e1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1699871345668!5m2!1sen!2sau"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        )}

                        {/* <div className="map" data-latitude="-37.817240" data-longitude="144.955826" data-style="light" data-info="Hello from &lt;br&gt; Inspiro Themes"></div> */}


                    </div>

                </section>

                <section className="no-padding-section">
                    <div className='row'>
                        <div className="hide-content col-lg-6">
                            <button onClick={toggleMap} className="btn btn-outline btn-dark mt-3">
                                {isMapVisible ? "Hide Map" : "View on Map"}
                            </button>
                        </div>
                    </div>
                </section>



                <section id="page-content" className="sidebar-left">
                    <div className="container">

                        <div className="row">
                            <div className="content col-lg-9">
                                <div className="page-title">
                                    <div className="breadcrumb float-left">
                                        <ul>
                                            <li> <NavLink to="/">Home</NavLink></li>
                                            <li className="active"> <NavLink to="/rntlist">Restaurants</NavLink></li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="blog" className="post-thumbnails">
                                    {restaurants.map((restaurant, index) => (
                                        <div className="post-item" key={restaurant._id}>
                                            <div className="post-item-wrap">
                                                <div className="post-image">
                                                    <a href="#">
                                                        <img
                                                            alt={restaurant.name}
                                                            src={`/homepages/restaurant/images/restaurantmed${index % 4 + 1}.jpg`} // Cycle through static images
                                                        />
                                                    </a>
                                                </div>
                                                <div className="post-item-description">
                                                    
                                                    <h2>
                                                        <a href={`/restaurant/${restaurant?._id}`}>{restaurant.name}</a>
                                                    </h2>
                                                    <p style={{ textAlign: "justify" }}>{restaurant.description}</p>
                                                    <NavLink
                                                        to={`/restaurant/${restaurant?._id}`} // Dynamically link to restaurant detail page
                                                        className="item-link"
                                                    >
                                                        Read More <i className="icon-chevron-right"></i>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <a
                                            className="page-link"
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(currentPage - 1);
                                            }}
                                        >
                                            <i className="fa fa-angle-left"></i>
                                        </a>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                            <a
                                                className="page-link"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(i + 1);
                                                }}
                                            >
                                                {i + 1}
                                            </a>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <a
                                            className="page-link"
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(currentPage + 1);
                                            }}
                                        >
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>

                            </div>



                            <div className="sidebar sticky-sidebar col-lg-3">

                                <div className="widget-sidebar">

                                    <h4 className="widget-title text-uppercase font-weight-bold">Filter Restaurants</h4>


                                    <div className="filter_type mt-4">
                                        <h6 className="text">Star Category</h6>
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">5 Stars</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="5-stars" id="5-stars" />
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">4 Stars</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="4-stars" id="4-stars" />
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">3 Stars</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="3-stars" id="3-stars" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="filter_type mt-4">
                                        <h6 className="text">Review Score</h6>
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">Superb: 9+</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="superb" id="superb" />
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">Very Good: 8+</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="very-good" id="very-good" />
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">Good: 7+</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="good" id="good" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="filter_type mt-4">
                                        <h6 className="text">Facility</h6>
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">Pet Allowed</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="pet-allowed" id="pet-allowed" />
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">Wifi</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="wifi" id="wifi" />
                                                </div>
                                            </li>
                                            {/* <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">Restaurant</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="restaurant" id="restaurant" />
                                                </div>
                                            </li> */}
                                        </ul>
                                    </div>


                                    <div className="filter_type mt-4">
                                        <h6 className="text">District</h6>
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">Paris Centre</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="paris-centre" id="paris-centre" />
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">La Defance</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="la-defance" id="la-defance" />
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <span className="flex-grow-1">Latin Quarter</span>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" name="latin-quarter" id="latin-quarter" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>





                                <div className="widget-sidebar ">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tags">
                                        <a href="#">Vegan</a>
                                        <a href="#">Fruitarian</a>
                                        <a href="#">Vegetarian</a>
                                        <a href="#">Flexterian</a>
                                        <a href="#">No Diet</a>
                                        <a href="#">Religiously Observant</a>
                                        <a href="#">Other</a>
                                    </div>
                                </div>

                                <div className="widget ">
                                    <div className="box_style_2">
                                        <i className="fa fa-headset"></i>
                                        <h4>Need <span>Help?</span></h4>
                                        <a href="tel://21699445999" className="phone">+216 99 445 999</a>
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