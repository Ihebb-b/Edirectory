import React, { useEffect } from 'react'
import Header2 from '../Components/Header2'
import Footer2 from '../Components/Footer2'

function RestaurantDetail() {

    useEffect(() => {
        const elements = document.querySelectorAll('[data-animate]');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.getAttribute('data-animate');
                const delay = element.getAttribute('data-animate-delay');
                element.classList.add('animate__animated', animation);
                if (delay) {
                  element.style.animationDelay = `${delay}ms`;
                }
                observer.unobserve(element); // Stop observing once animated
              }
            });
          },
          { threshold: 0.1 }
        );
    
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect(); // Clean up observer
      }, []);

      
    return (

        <>
            <div className="body-inner">

                <Header2 />

                <div id="slider" className="inspiro-slider dots-creative" data-height-xs="360">
                    <div className="slide kenburns" style={{ backgroundImage: "url('homepages/restaurant/images/restaurant1.jpg')" }}>
                        <div className="bg-overlay"></div>
                        <div className="container">
                            <div className=" text-center text-light">

                                <span className="strong">Barcelona, Spain</span>
                                <h1>Teoric Taverna Gastronomica</h1>

                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="heading-text heading-section">
                                    <h2>Our restaurant</h2>

                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-6" style={{ textAlign: "justify" }}>Welcome to Teoric Taverna Gastronomica,
                                        where the heart of Mediterranean cuisine comes alive.
                                        Nestled in the vibrant streets of Barcelona, our restaurant
                                        isn't just a place to eat it's an experience. Imagine the aroma
                                        of freshly prepared Spanish delicacies greeting you as you step inside.
                                        Here, every dish is a story, crafted with passion and inspired by the
                                        timeless traditions of Mediterranean cooking.
                                        Our chefs take pride in sourcing the finest ingredients,
                                        blending bold flavors with delicate artistry.
                                        Whether it's the crisp, golden tapas or the melt in
                                        your-mouth seafood paella, each bite is a journey into
                                        the soul of Spain.

                                    </div>

                                    <div className="col-lg-6" style={{ textAlign: "justify" }} >But it's not just about the food it's about the feeling.
                                        The warm smiles of our staff, the gentle hum of
                                        conversation, and the cozy, welcoming atmosphere make
                                        Teoric Taverna a home away from home.
                                        So whether you're celebrating a special moment or simply
                                        exploring the magic of Barcelona, we invite you to join us.
                                        Come taste the Mediterranean, one unforgettable bite at a
                                        time.</div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section id="section-about" className="p-t-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6" >
                                <h5 className="m-b-0">Why our</h5>
                                <h2 className="text-lg font-herr-von-muellerhoff text-colored">Delicious food</h2>
                                <p style={{ textAlign: "center" }}>Why our delicious meals? Because every plate we serve is a reflection of our passion,
                                    tradition, and commitment to excellence. At Teoric Taverna Gastronomica,
                                    we believe food is more than just nourishment it's a way to connect,
                                    to celebrate, and to create memories.

                                    <br />

                                    Our meals are crafted with love, using only the freshest, high quality ingredients
                                    sourced from local markets and trusted suppliers. Each recipe is rooted in Mediterranean
                                    heritage, combining the bold, sun kissed flavors of Spain with a modern twist to
                                    delight your palate.

                                    But it's not just about the taste. It's the care we pour into every detail the way our chefs
                                    experiment with textures, aromas, and colors to create a feast for all the senses.
                                    It's the warmth of our team ensuring every guest feels special, and the inviting
                                    atmosphere that turns a simple meal into an unforgettable experience.
                                    Why our delicious meals? Because they're more than food they're
                                    a celebration of life, culture, and the joy of sharing something truly extraordinary.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="float-right">
                                    <img className="img-fluid" src="homepages/restaurant/images/teoric1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3" data-animate="animate__fadeIn" data-animate-delay="300">
                                <div className="text-center">
                                    <img src="homepages/restaurant/images/icons/1.png" style={{ marginBottom: '16px' }} alt="" />
                                    <h4>Unique Recipets</h4>
                                    <p>
                                        Each dish tells a story, crafted by chefs who pour their heart into reinventing
                                        classic Mediterranean flavors with innovative techniques.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3" data-animate="animate__fadeIn" data-animate-delay="500">
                                <div className="text-center">
                                    <img src="homepages/restaurant/images/icons/2.png" style={{ marginBottom: '16px' }} alt="" />
                                    <h4>Fresh food</h4>
                                    <p>Freshness is at the heart of everything we serve. We source our ingredients
                                        daily from local farmers and trusted suppliers to ensure the highest quality.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3" data-animate="animate__fadeIn" data-animate-delay="700">
                                <div className="text-center">
                                    <img src="homepages/restaurant/images/icons/3.png" style={{ marginBottom: '16px' }} alt="" />
                                    <h4>Drinks</h4>
                                    <p>Our drink menu is a perfect companion to your dining experience.
                                        each drink is carefully curated to pair harmoniously with our dishes.</p>
                                </div>
                            </div>

                            <div className="col-lg-3" data-animate="animate__fadeIn" data-animate-delay="700">
                                <div className="text-center">
                                    <img src="homepages/restaurant/images/icons/4.png" style={{ marginBottom: '16px' }} alt="" />
                                    <h4>Fastfood</h4>
                                    <p>Even our fast food is a cut above the rest. Designed for those on the go,
                                        our fast food offerings never compromise on quality or taste.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section-menu" className="p-t-100 p-b-100 text-light" style={{ backgroundImage: "url('homepages/restaurant/images/menu2.jpg')" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-medium m-b-40">MENU</h2>
                            </div>
                            <div className="col-lg-6" data-animate="animate__fadeIn">


                                <ul className="price-menu-list">
                                    <li>
                                        <h2 className="font-nothing-you-could-do">Etiam dictum Nunc enim</h2>
                                        <p>Vivamus sit amet felis</p>
                                        <h3>$19.9</h3>
                                    </li>
                                    <li>
                                        <h2 className="font-nothing-you-could-do">Etiam dictum Nunc enim</h2>
                                        <p>Vivamus sit amet felis</p>
                                        <h3>$19.9</h3>
                                    </li>
                                    <li>
                                        <h2 className="font-nothing-you-could-do">Etiam dictum Nunc enim</h2>
                                        <p>Vivamus sit amet felis</p>
                                        <h3>$19.9</h3>
                                    </li>
                                    <li>
                                        <h2 className="font-nothing-you-could-do">Etiam dictum Nunc enim</h2>
                                        <p>Vivamus sit amet felis</p>
                                        <h3>$19.9</h3>
                                    </li>
                                </ul>


                            </div>
                            <div className="col-lg-6" data-animate="animate__fadeIn">

                                <ul className="price-menu-list">
                                    <li>
                                        <h2 className="font-nothing-you-could-do">Etiam dictum Nunc enim</h2>
                                        <p>Vivamus sit amet felis</p>
                                        <h3>$19.9</h3>
                                    </li>
                                    <li>
                                        <h2 className="font-nothing-you-could-do">Etiam dictum Nunc enim</h2>
                                        <p>Vivamus sit amet felis</p>
                                        <h3>$19.9</h3>
                                    </li>
                                    <li>
                                        <h2 className="font-nothing-you-could-do">Etiam dictum Nunc enim</h2>
                                        <p>Vivamus sit amet felis</p>
                                        <h3>$19.9</h3>
                                    </li>
                                    <li>
                                        <h2 className="font-nothing-you-could-do">Etiam dictum Nunc enim</h2>
                                        <p>Vivamus sit amet felis</p>
                                        <h3>$19.9</h3>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </section>

                <section id="section-gallery" className="p-t-150 p-b-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h5 className="m-b-0">The food</h5>
                                <h2 className="text-lg font-herr-von-muellerhoff text-colored">Gallery</h2>
                                <p style={{textAlign:"justify"}}>Step into a visual feast with our gallery of meals, 
                                    showcasing the vibrant and mouthwatering dishes that
                                     define our restaurant. From beautifully plated Mediterranean
                                      classics to creative modern delights, 
                                      each image captures the artistry, freshness,
                                       and passion that go into every meal we serve. 
                                       Let your eyes savor the rich colors of our dishes, 
                                       the perfect sear on our meats, the freshness of our salads, 
                                       and the indulgent allure of our desserts. It's not just food; 
                                       it's an experience waiting to be savored.
                                </p>
                            </div>

                            <div className="col-lg-8">

                            <div className="row">
                    
                    <div className="col-md-4 mb-3">
                        <img src="homepages/restaurant/images/gallery/8.jpg" alt="Gallery Image 1" className="img-fluid" />
                    </div>
                   
                    <div className="col-md-4 mb-3">
                        <img src="homepages/restaurant/images/gallery/7.jpg" alt="Gallery Image 2" className="img-fluid" />
                    </div>
                  
                    <div className="col-md-4 mb-3">
                        <img src="homepages/restaurant/images/gallery/6.jpg" alt="Gallery Image 3" className="img-fluid" />
                    </div>
                   
                    <div className="col-md-4 mb-3">
                        <img src="homepages/restaurant/images/gallery/5.jpg" alt="Gallery Image 4" className="img-fluid" />
                    </div>
                   
                    <div className="col-md-4 mb-3">
                        <img src="homepages/restaurant/images/gallery/4.jpg" alt="Gallery Image 5" className="img-fluid" />
                    </div>
                   
                    <div className="col-md-4 mb-3">
                        <img src="homepages/restaurant/images/gallery/3.jpg" alt="Gallery Image 6" className="img-fluid" />
                    </div>
                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="section-reviews" className="text-light p-t-150 p-b-100" style={{ backgroundImage: "url('homepages/restaurant/images/darkish.jpg')" }}>
                    <div className="container">
                        <div className="text-center">
                            <h5 className="m-b-0">Chef Message</h5>
                            <h2 className="text-lg font-herr-von-muellerhoff text-light">We Promise</h2>
                            <h4>A happy day, is the result of a good, a healthy, and most importantly a delicious meal. That's what you'll be served here in our lovely restaurant</h4>
                        </div>
                    </div>
                </section>

                <section id="section-contact" className="background-grey p-t-40 p-b-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="icon-box effect small clean text-center">
                                    <div className="icon mb-3">
                                        <a href="#"><i className="far fa-clock fa-2x"></i></a>
                                    </div>
                                    <h3>Working Days</h3>
                                    <p><strong>Monday - Friday</strong>
                                        <br />10:00 AM - 11:00 PM</p>
                                    <p><strong>Saturday - Sunday</strong>
                                        <br />10:00 AM - 04:00 PM</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="icon-box effect small clean text-center">
                                    <div className="icon mb-3">
                                        <a href="#"><i className="fa fa-map-marker-alt fa-2x"></i></a>
                                    </div>
                                    <h3>Restaurant Location</h3>
                                    <p><strong>Restaurant Address:</strong>
                                        <br /> 795 Folsom Ave, Suite 600
                                        <br /> San Francisco, CA 94107
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="icon-box effect small clean text-center">
                                    <div className="icon mb-3">
                                        <a href="#"><i className="fa fa-phone fa-2x"></i></a>
                                    </div>
                                    <h3>Restaurant Contact</h3>
                                    <p><strong>Phone:</strong>
                                        <br /> (123) 456-7890
                                        <br /> (987) 654-3210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div classNameName="seperator"><i classNameName="fa fa-dot-circle-o"></i></div>

                <Footer2 />


            </div>



            <a id="scrollTop"><i classNameName="icon-chevron-up"></i><i classNameName="icon-chevron-up"></i></a>





        </>

    )
}

export default RestaurantDetail