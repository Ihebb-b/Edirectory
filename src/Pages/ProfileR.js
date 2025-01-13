import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer2 from '../Components/Footer2';
import Header2 from '../Components/Header2';
import $ from 'jquery';
import { useGetMenuListQuery } from '../slices/restaurantSlice';



function ProfileR() {

    useEffect(() => {

        if (window.jQuery && window.jQuery.fn.rateit) {
            const rateitElements = document.querySelectorAll(".rateit");

            rateitElements.forEach((element) => {
                const $element = window.jQuery(element);
                if ($element.data("rateit")) {
                    $element.rateit("destroy"); // Destroy previous instance if it exists
                }
                $element.rateit(); // Reinitialize RateIt
            });
        } else {
            console.error("RateIt plugin is not loaded.");
        }
    }, []);


    const plates = [
        { name: "Falafel", price: "$5.00" },
        { name: "Hummus", price: "$4.50" },
        { name: "Tabbouleh", price: "$6.00" },
        { name: "Baba Ganoush", price: "$5.50" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides visible
        slidesToScroll: 1, // Number of slides to scroll
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };




    const { userInfo } = useSelector((state) => state.auth);
    const backgroundImage = "url('homepages/restaurant/images/darkish.jpg')"; // Ensure correct path to the image
    const dispatch = useDispatch();

    const { data: menus, isLoading, isError, error } = useGetMenuListQuery();
    if (isLoading) return <p>Loading menus...</p>;
    if (isError) return <p>Error fetching menus: {error?.data?.message || error.message}</p>;

    return (

        <>
            <div className="body-inner">

                <Header2 />


                <section className="parallax text-light halfscreen" style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="container-fullscreen">
                            <div className="text-middle text-center text-end">
                                <h1 className="text-uppercase text-medium">
                                    {userInfo.name}
                                </h1>
                                <p className="lead" >{userInfo.role || "Chef"}</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="p-b-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="heading-text heading-section">
                                    <h2>THE COMPANY</h2>
                                    <span className="lead">The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus,
                                        orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna,
                                        id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci.
                                        Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="col-md-6">
                                    <h5>Food Quality</h5>
                                    <div className="rateit" data-rateit-mode="font" data-rateit-value="5" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                </div>
                                <div className="col-md-6">
                                    <h5>Service Standards</h5>
                                    <div className="rateit" data-rateit-mode="font" data-rateit-value="4.7" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                </div>
                                <div className="col-md-6">
                                    <h5>Customer Experience</h5>
                                    <div className="rateit" data-rateit-mode="font" data-rateit-value="4.0" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                </div>
                                <div className="col-md-6">
                                    <h5>Quality Control</h5>
                                    <div className="rateit" data-rateit-mode="font" data-rateit-value="3.5" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="d-flex justify-content-between align-items-center mt-3" style={{ padding: '0 15px' }}>
                    <div className="heading-text" style={{ flex: '1' }} >
                        <h2 style={{ margin: 0 }}>My Menus</h2>
                    </div>
                    <a href="/addmenu" style={{ flex: '1' }}>
                        <button type="button" className="btn btn-rounded btn-outline">Add menu</button>
                    </a>
                </div>

                <section className="box-fancy section-fullwidth text-light p-b-0">
                    <div className="row">
                        {menus.length === 0 ? (
                            <p>No menus found for your account.</p>
                        ) : (
                            menus.map((menu, index) => (
                                <div
                                    key={menu._id}
                                    className={`col-lg-4`}
                                    style={{
                                        textAlign: "left",
                                        backgroundColor: index % 2 === 0 ? "#917d5d" : index % 3 === 0 ? "#a08c6c" : "#ad9979",
                                    }}
                                >
                                    <h1 className="text-l text-uppercase">{menu.name}</h1>
                                    <h3>{menu.description}</h3>
                                    <span>Principle Plates:</span>
                                    <ul>
                                        {menu.plates.map((plate, i) => (
                                            <li key={i}>
                                                {plate.name} - ${plate.price.toFixed(2)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        )}
                    </div>

                </section>


                <section>
                    <div className="container">
                        <div className="heading-text text-center">
                            <h2>What people are saying!</h2>
                            <p className="lead text-center">The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo.</p>
                        </div>

                        <div className="carousel arrows-visibile testimonial testimonial-single testimonial-left" data-items="1">


                            <div className="testimonial-item">
                                <img src="images/team/9.jpg" alt="" />
                                <p>Polo is by far the most amazing template out there! I literally could not be happier that I chose to buy this template!</p>
                                <span>Alan Monre</span>
                                <span>CEO, Square Software</span>
                            </div>

                            <div className="testimonial-item">
                                <img src="images/team/9.jpg" alt="" />
                                <p>Polo is by far the most amazing template out there! I literally could not be happier that I chose to buy this template!</p>
                                <span>Alan Monre</span>
                                <span>CEO, Square Software</span>
                            </div>

                            <div className="testimonial-item">
                                <img src="images/team/9.jpg" alt="" />
                                <p>The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.</p>
                                <span>Alan Monre</span>
                                <span>CEO, Square Software</span>
                            </div>


                        </div>

                    </div>
                </section>

                <section id="page-content">
                    <div class="container">
                        <div class="grid-layout grid-2-columns" data-margin="20" data-item="grid-item" data-lightbox="gallery">
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/1.jpg" data-lightbox="gallery-image"><img src="images/gallery/1.jpg"/></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/2.jpg" data-lightbox="gallery-image"><img src="images/gallery/2.jpg"/></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/3.jpg" data-lightbox="gallery-image"><img src="images/gallery/3.jpg"/></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/4.jpg" data-lightbox="gallery-image"><img src="images/gallery/4.jpg"/></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/5.jpg" data-lightbox="gallery-image"><img src="images/gallery/5.jpg"/></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/6.jpg" data-lightbox="gallery-image"><img src="images/gallery/6.jpg"/></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/7.jpg" data-lightbox="gallery-image"><img src="images/gallery/7.jpg"/></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/8.jpg" data-lightbox="gallery-image"><img src="images/gallery/8.jpg"/></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/9.jpg" data-lightbox="gallery-image"><img src="images/gallery/9.jpg"/></a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer2 />

            </div>
        </>
    )
}

export default ProfileR