import Footer from '../Components/Footer';
import Footer2 from '../Components/Footer2';
import Header from '../Components/Header';
import RevolutionSlider from '../Components/RevolutionSlider';
import Slider from '../Components/Slider';
import logo from '../logo.svg';
import React from 'react'
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";



export default function Home() {


    return (

        <>
            <div className="body-inner">

                <Header />

                <Slider />

                <section className="pb-0">
                    <div className="container">
                        <div className="card mt-n10">
                            <div className="card-body">
                                <form>
                                    <div className="row justify-content-center">

                                        <div className="col-lg-3 col-6">
                                            <div className="form-group">
                                                <label className="font-size-lg">Country</label>
                                                <select className="form-select">
                                                    <option>Tunisia</option>
                                                    <option>Algeria</option>
                                                    <option>Morroco</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <div className="form-group">
                                                <label className="font-size-lg">Region</label>
                                                <select className="form-select">
                                                    <option>Sidi Bouzid</option>
                                                    <option>Casablanca</option>
                                                    <option>Wahran</option>
                                                    <option>Tahran</option>
                                                    <option>Ariana</option>
                                                    <option>Manouba</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-6">
                                            <div className="form-group">
                                                <label className="font-size-lg">Zip</label>
                                                <select className="form-select">
                                                    <option>9100</option>
                                                    <option>2080</option>
                                                    <option>2800</option>
                                                    <option>2022</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 align-self-end">
                                            <button type="button" className="btn btn-primary mb-3">Check restaurant</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-medium m-t-0">Welcome to the mediterranians</h2>
                                <div className="seperator"><i className="fa fa-dot-circle-o"></i></div>
                                <p className="lead">The Mediterranean cuisine is celebrated for its vibrant menus and wholesome recipes,
                                    featuring fresh vegetables, fruits, whole grains, legumes, nuts, and heart-healthy olive oil.
                                    Dishes often include lean proteins like fish and poultry, flavored with aromatic herbs and spices
                                    that enhance both taste and nutritional value.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="room">
                                        <div className="room-image">
                                            <img src="homepages/restaurant/images/restaurant1.jpg" alt="#" />
                                            <div className="room-title">Restaurants</div>
                                        </div>
                                        <div className="room-details">
                                            <p>Mediterranean restaurants exude a warm and inviting atmosphere,
                                                reflecting the region's rich cultural heritage.
                                                They are characterized by rustic decor, earthy tones, and a cozy ambiance.
                                            </p>

                                            <div className="flex justify-center items-center h-full">
                                                <NavLink to="/rlist">
                                                    <button class="btn btn-roundeded btn-outline">Show all</button>
                                                </NavLink>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="room">
                                        <div className="room-image">
                                            <img src="homepages/restaurant/images/envt.jpg" alt="#" />
                                            <div className="room-title">Environments</div>
                                        </div>
                                        <div className="room-details">
                                            <p>The environment of the Mediterranean promotes a sense of community and relaxation.
                                                Soft lighting, a natural blend of modern
                                                and traditional aesthetics create a perfect environment.</p>

                                            <div className="flex justify-center items-center h-full">
                                                <a href="#" className="btn btn-roundeded btn-outline">Show all</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="room">
                                        <div className="room-image">
                                            <img src="homepages/restaurant/images/menu1.jpg" alt="#" />
                                            <div className="room-title">Menus</div>
                                        </div>
                                        <div className="room-details">
                                            <p>Menus at Mediterranean restaurants are a flavorful journey through the region,
                                                offering a wide variety of dishes to suit all tastes.
                                                with an emphasis on fresh,
                                                seasonal ingredients.  </p>

                                            <div className="flex justify-center items-center h-full">
                                                <a href="#" className="btn btn-roundeded btn-outline">Show all</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-3">
                                    <div className="room">
                                        <div className="room-image">
                                            <img src="homepages/restaurant/images/recipe2.jpg" alt="#" />
                                            <div className="room-title">Recipes</div>
                                        </div>
                                        <div className="room-details">
                                            <p>Mediterranean recipes are rooted in simplicity and tradition,
                                                focusing on letting the natural flavors of the ingredients shine.
                                                Olive oil, garlic, lemon, and herbs are staples in most
                                                preparations. </p>

                                            <div className="flex justify-center items-center h-full">
                                                <a href="#" className="btn btn-roundeded btn-outline">Show all</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>


                            {/* <div class="carousel" data-items="3" data-dots="false" data-lightbox="gallery">
                          
                            <div class="portfolio-item img-zoom ct-photography ct-media ct-branding ct-Media">
                                <div class="portfolio-item-wrap">
                                    <div class="portfolio-image">
                                        <a href="#"><img src="homepages/hotel/images/rooms/1.jpg" alt=""/></a>
                                    </div>
                                    <div class="portfolio-description">
                                        <a title="Paper Pouch!" data-lightbox="gallery-image" href="images/portfolio/63.jpg" class="btn btn-light btn-roundeded">Zoom</a>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="portfolio-item img-zoom ct-photography ct-media ct-branding ct-Media">
                                <div class="portfolio-item-wrap">
                                    <div class="portfolio-image">
                                        <a href="#"><img src="homepages/hotel/images/rooms/1.jpg" alt=""/></a>
                                    </div>
                                    <div class="portfolio-description">
                                        <a title="Paper Pouch!" data-lightbox="gallery-image" href="images/portfolio/64.jpg" class="btn btn-light btn-roundeded">Zoom</a>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="portfolio-item img-zoom ct-photography ct-media ct-branding ct-Media">
                                <div class="portfolio-item-wrap">
                                    <div class="portfolio-image">
                                        <a href="#"><img src="homepages/hotel/images/rooms/1.jpg" alt=""/></a>
                                    </div>
                                    <div class="portfolio-description">
                                        <a title="Paper Pouch!" data-lightbox="gallery-image" href="images/portfolio/65.jpg" class="btn btn-light btn-roundeded">Zoom</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="portfolio-item img-zoom ct-photography ct-media ct-branding ct-Media">
                                <div class="portfolio-item-wrap">
                                    <div class="portfolio-image">
                                        <a href="#"><img src="homepages/hotel/images/rooms/1.jpg" alt=""/></a>
                                    </div>
                                    <div class="portfolio-description">
                                        <a title="Paper Pouch!" data-lightbox="gallery-image" href="images/portfolio/66.jpg" class="btn btn-light btn-roundeded">Zoom</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="portfolio-item img-zoom ct-photography ct-media ct-branding ct-Media">
                                <div class="portfolio-item-wrap">
                                    <div class="portfolio-image">
                                        <a href="#"><img src="homepages/hotel/images/rooms/1.jpg" alt=""/></a>
                                    </div>
                                    <div class="portfolio-description">
                                        <a title="Paper Pouch!" data-lightbox="gallery-image" href="images/portfolio/67.jpg" class="btn btn-light btn-roundeded">Zoom</a>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="portfolio-item img-zoom ct-photography ct-media ct-branding ct-Media">
                                <div class="portfolio-item-wrap">
                                    <div class="portfolio-image">
                                        <a href="#"><img src="homepages/hotel/images/rooms/1.jpg" alt=""/></a>
                                    </div>
                                    <div class="portfolio-description">
                                        <a title="Paper Pouch!" data-lightbox="gallery-image" href="images/portfolio/68.jpg" class="btn btn-light btn-roundeded">Zoom</a>
                                    </div>
                                </div>
                            </div>
                           
                        </div> */}
                            {/* <div className="col-lg-8">
                                <div className="rooms carousel" data-items="2" data-margin="20" data-dots="false">
                                    <div className="room">
                                        <div className="room-image">
                                            <img src="homepages/hotel/images/rooms/1.jpg" alt="#" />
                                            <div className="room-title">Luxury Room</div>
                                            <span className="room-badge">save 60%</span>
                                        </div>
                                        <div className="room-details">
                                            <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                                ornare sem lacinia quam venenatis vestibulum.</p>
                                            <div className="float-left">
                                                <h4>89$<small>/ Day</small></h4>
                                            </div>
                                            <div className="float-right">
                                                <a href="#" className="btn btn-primary">Book</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="room">
                                        <div className="room-image">
                                            <img src="homepages/hotel/images/rooms/2.jpg" alt="#" />
                                            <div className="room-title">Deluxe Room</div>
                                        </div>
                                        <div className="room-details">
                                            <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                                ornare sem lacinia quam venenatis vestibulum.</p>
                                            <div className="float-left">
                                                <h4>89$<small>/ Day</small></h4>
                                            </div>
                                            <div className="float-right">
                                                <a href="#" className="btn btn-primary">Book</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="room">
                                        <div className="room-image">
                                            <img src="homepages/hotel/images/rooms/3.jpg" alt="#" />
                                            <div className="room-title">Standard Room</div>
                                            <span className="room-badge">save 60%</span>
                                        </div>
                                        <div className="room-details">
                                            <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                                ornare sem lacinia quam venenatis vestibulum.</p>
                                            <div className="float-left">
                                                <h4>89$<small>/ Day</small></h4>
                                            </div>
                                            <div className="float-right">
                                                <a href="#" className="btn btn-primary">Book</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="seperator"><i className="fa fa-check-circle"></i></div>
                        <div className="row m-t-60">
                            <div className="col-lg-3">
                                <i className="fa fa-heartbeat fa-2x"></i>
                                <h4>Health</h4>
                                <p>Olive oil, a staple of the Mediterranean diet, supports heart health and reduces bad cholesterol levels. Other sources include nuts, seeds, and avocados.</p>
                            </div>
                            <div className="col-lg-3">
                                <i className="fas fa-fish fa-2x"></i>
                                <h4>Fish and Seafood</h4>
                                <p>Fish such as salmon, sardines, and mackerel are consumed at least twice a week. They are rich in omega-3 fatty acids,
                                    which are essential for heart and brain health.</p>
                            </div>
                            <div className="col-lg-3">
                                <i className="fa fa-tree fa-2x"></i>
                                <h4>Herbs and Spices</h4>
                                <p>Herbs and spices like oregano, basil, rosemary, and garlic enhance flavor without adding salt,
                                    helping to lower sodium intake and improve blood pressure.</p>
                            </div>
                            <div className="col-lg-3">
                                <i className="fa fa-users fa-2x"></i>
                                <h4>Strong Community</h4>
                                <p>Meals are often enjoyed in a communal setting, fostering social connections. Eating mindfully and savoring food promotes
                                    better digestion and a healthier relationship with food.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-video text-light" data-bg-video="homepages/restaurant/video/restaurant.mp4">
                    <div className="container container-fullscreen">
                        <div className="text-middle text-center text-light">
                            <h1 className="text-uppercase text-lg">E-Directory</h1>
                            <p className="lead">Don't waste any more time and energy, dive in and enjoy our menus and recipes</p>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="text-center m-b-40">
                            <div className="d-flex align-items-center justify-content-between mb-3">

                                <h2 className="text-medium m-t-0 mb-0">Restaurants</h2>


                                <button type="button" className="btn btn-outline btn-dark">Explore More</button>
                            </div>
                            <div className="seperator"><i className="fa fa-dot-circle-o"></i></div>
                            <p className="lead mb-0">
                                Mediterranean restaurants offer a culinary experience inspired by the diverse and vibrant
                                flavors of countries bordering the Mediterranean Sea, such as Greece, Italy, Spain, Turkey,
                                Morocco, and Lebanon. These establishments typically focus on fresh, wholesome ingredients,
                                including olive oil, fresh vegetables, herbs, legumes, lean proteins like fish and chicken,
                                and whole grains.
                            </p>

                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section>
                    <div className="container">
                        <div className="text-center m-b-40">
                            <div className="d-flex align-items-center justify-content-between mb-3">

                                <h2 className="text-medium m-t-0 mb-0">Menus</h2>


                                <button type="button" className="btn btn-outline btn-dark">Explore More</button>
                            </div>
                            <div className="seperator"><i className="fa fa-dot-circle-o"></i></div>
                            <p className="lead mb-0">
                                Mediterranean restaurants offer a culinary experience inspired by the diverse and vibrant
                                flavors of countries bordering the Mediterranean Sea, such as Greece, Italy, Spain, Turkey,
                                Morocco, and Lebanon. These establishments typically focus on fresh, wholesome ingredients,
                                including olive oil, fresh vegetables, herbs, legumes, lean proteins like fish and chicken,
                                and whole grains.
                            </p>

                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="text-center m-b-40">
                            <div className="d-flex align-items-center justify-content-between mb-3">

                                <h2 className="text-medium m-t-0 mb-0">Recipes</h2>


                                <button type="button" className="btn btn-outline btn-dark">Explore More</button>
                            </div>
                            <div className="seperator"><i className="fa fa-dot-circle-o"></i></div>
                            <p className="lead mb-0">
                                Mediterranean restaurants offer a culinary experience inspired by the diverse and vibrant
                                flavors of countries bordering the Mediterranean Sea, such as Greece, Italy, Spain, Turkey,
                                Morocco, and Lebanon. These establishments typically focus on fresh, wholesome ingredients,
                                including olive oil, fresh vegetables, herbs, legumes, lean proteins like fish and chicken,
                                and whole grains.
                            </p>

                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="room">
                                    <div className="room-image">
                                        <img src="homepages/hotel/images/rooms/4.jpg" alt="#" />
                                        <div className="room-title">Deluxe Room</div>
                                        <span className="room-badge">save 60%</span>
                                    </div>
                                    <div className="room-details">
                                        <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque
                                            ornare sem lacinia quam venenatis vestibulum.</p>

                                        <div className="float-center">
                                            <a href="#" className="btn btn-outline btn-dark ">details</a>
                                        </div>
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


    );
}


