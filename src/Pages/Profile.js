import React, { useEffect, useState } from 'react'
import Header2 from '../Components/Header2'
import { NavLink } from 'react-router-dom'
import { logout, setCredentials } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';


function Profile() {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const { userInfo } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        setShowModal(false);
    };

    return (

        <>
            <div className="body-inner">

                <Header2 />

                <section className="parallax text-light halfscreen" data-bg-parallax="images/parallax/17.jpg">
                    <div className="container">
                        <div className="container-fullscreen">
                            <div className="text-middle text-center text-end">
                                <h1 className="text-uppercase text-medium" data-animate="animate__fadeInDown" data-animate-delay="100">
                                    {userInfo.name}
                                </h1>
                                <p className="lead" data-animate="animate__fadeInDown" data-animate-delay="300">{userInfo.role || "Chef"}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row  m-b-50">
                            <div className="col-lg-3">
                                <div className="heading-text heading-section">
                                    <h2>ABOUT ME</h2>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-6">The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never
                                        been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,
                                        <br />
                                        <br /> facilisis ut venenatis eu, sodales vel dolor. The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna,
                                        id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. </div>
                                    <div className="col-lg-6">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius
                                        consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. Pellentesque ipsum erat, facilisis
                                        ut venenatis eu, sodales vel dolor.
                                        <br />
                                        <br />The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volut.</div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-3">
                                <div className="heading-text heading-section m-b-20">
                                    <h2>My Skills</h2>
                                </div>Lorem ipsum dolor sit ametusp endisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,
                            </div>
                            <div className="col-lg-9">
                                <div className="m-t-60">
                                    <div className="p-progress-bar-container title-up small extra-small color">
                                        <div className="p-progress-bar" data-percent="100" data-delay="100" data-type="%">
                                            <div className="progress-title">HTML5</div>
                                        </div>
                                    </div>
                                    <div className="p-progress-bar-container title-up small extra-small color">
                                        <div className="p-progress-bar" data-percent="94" data-delay="200" data-type="%">
                                            <div className="progress-title">CSS3</div>
                                        </div>
                                    </div>
                                    <div className="p-progress-bar-container title-up small extra-small color">
                                        <div className="p-progress-bar" data-percent="78" data-delay="300" data-type="%">
                                            <div className="progress-title">JQUERY</div>
                                        </div>
                                    </div>
                                    <div className="p-progress-bar-container title-up small extra-small color">
                                        <div className="p-progress-bar" data-percent="65" data-delay="400" data-type="%">
                                            <div className="progress-title">MYSQL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div >
                </section >

                <section className="no-padding">

                    <div id="portfolio" className="grid-layout portfolio-5-columns" data-margin="0">

                        <div className="portfolio-item no-overlay ct-photography ct-media ct-branding ct-Media ct-webdesign">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-slider">
                                    <div className="carousel dots-inside dots-dark arrows-dark" data-items="1" data-loop="true" data-autoplay="true" data-animate-in="fadeIn" data-animate-out="fadeOut" >
                                        <a href="#"><img src="images/portfolio/64.jpg" alt="" /></a>
                                        <a href="#"><img src="images/portfolio/70.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item img-zoom ct-photography ct-marketing ct-media">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-image">
                                    <a href="#"><img src="images/portfolio/60.jpg" alt="" /></a>
                                </div>
                                <div className="portfolio-description">
                                    <a title="Paper Pouch!" data-lightbox="image" href="images/portfolio/83l.jpg"><i className="icon-maximize"></i></a>
                                    <a href="portfolio-page-grid-gallery.html"><i className="icon-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item large-width  img-zoom ct-photography ct-media ct-branding ct-Media">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-image">
                                    <a href="#"><img src="images/portfolio/61.jpg" alt="" /></a>
                                </div>
                                <div className="portfolio-description">
                                    <a href="portfolio-page-grid-gallery.html">
                                        <h3>Let's Go Outside</h3>
                                        <span>Illustrations / Graphics</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item overlay-light img-zoom ct-photography ct-media ct-branding ct-Media ct-webdesign">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-slider">
                                    <div className="carousel dots-inside arrows-dark dots-dark" data-items="1" data-loop="true" data-autoplay="true" >
                                        <a href="#"><img src="images/portfolio/22.jpg" alt="" /></a>
                                        <a href="#"><img src="images/portfolio/23.jpg" alt="" /></a>
                                        <a href="#"><img src="images/portfolio/24.jpg" alt="" /></a>
                                    </div>
                                </div>
                                <div className="portfolio-description">
                                    <a href="portfolio-page-grid-gallery.html">
                                        <h3>Stockholm Fashion</h3>
                                        <span>Illustrations / Graphics</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item img-zoom ct-photography ct-media ct-branding ct-marketing ct-webdesign">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-image">
                                    <a href="#"><img src="images/portfolio/65.jpg" alt="" /></a>
                                </div>
                                <div className="portfolio-description" data-lightbox="gallery">
                                    <a title="Photoshop Mock-up!" data-lightbox="gallery-image" href="images/portfolio/80l.jpg"><i className="icon-copy"></i></a>
                                    <a title="Paper Pouch!" data-lightbox="gallery-image" href="images/portfolio/81l.jpg" className="hidden"></a>
                                    <a title="Mock-up" data-lightbox="gallery-image" href="images/portfolio/82l.jpg" className="hidden"></a>
                                    <a href="portfolio-page-grid-gallery.html"><i className="icon-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-image">
                                    <a href="#"><img src="images/portfolio/66.jpg" alt="" /></a>
                                </div>
                                <div className="portfolio-description">
                                    <a href="portfolio-page-grid-gallery.html">
                                        <h3>Last Iceland Sunshine</h3>
                                        <span>Graphics</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item img-zoom ct-photography ct-media ct-branding ct-marketing ct-webdesign">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-image">
                                    <a href="#"><img src="images/portfolio/67.jpg" alt="" /></a>
                                </div>
                                <div className="portfolio-description">
                                    <a title="Paper Pouch!" data-lightbox="iframe" href="https://www.youtube.com/watch?v=k6Kly58LYzY"><i className="icon-play"></i></a>
                                    <a href="portfolio-page-grid-gallery.html"><i className="icon-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item no-overlay ct-photography ct-media ct-branding ct-Media ct-marketing ct-webdesign">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-slider">
                                    <div className="carousel dots-inside dots-dark arrows-dark" data-items="1" data-loop="true" data-autoplay="true" data-animate-in="fadeIn" data-animate-out="fadeOut" >
                                        <a href="#"><img src="images/portfolio/68.jpg" alt="" /></a>
                                        <a href="#"><img src="images/portfolio/71.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item img-zoom ct-photography ct-marketing ct-media">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-image">
                                    <a href="#"><img src="images/portfolio/69.jpg" alt="" /></a>
                                </div>
                                <div className="portfolio-description">
                                    <a href="portfolio-page-grid-gallery.html">
                                        <h3>Luxury Wine</h3>
                                        <span>Graphics / Branding</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-image">
                                    <a href="#"><img src="images/portfolio/70.jpg" alt="" /></a>
                                </div>
                                <div className="portfolio-description">
                                    <a href="portfolio-page-grid-gallery.html">
                                        <h3>Last Iceland Sunshine</h3>
                                        <span>Graphics</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item img-zoom ct-photography ct-media ct-branding ct-marketing ct-webdesign">
                            <div className="portfolio-item-wrap">
                                <div className="portfolio-image">
                                    <a href="#"><img src="images/portfolio/72.jpg" alt="" /></a>
                                </div>
                                <div className="portfolio-description">
                                    <a href="portfolio-page-grid-gallery.html">
                                        <h3>Towel World</h3>
                                        <span>Graphics</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>


            </div>

        </>


    )
}

export default Profile