import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer2 from '../Components/Footer2';
import Header2 from '../Components/Header2';
import $ from 'jquery';
import { useDeleteMenuMutation, useGetMenuListQuery } from '../slices/restaurantSlice';
import { useGetRecipeListQuery } from '../slices/recipeSlice';
import { useNavigate } from 'react-router-dom';



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

    const [showModal, setShowModal] = useState(false);
    const [selectedMenuId, setSelectedMenuId] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const [deleteMenu] = useDeleteMenuMutation();




    const navigate = useNavigate();

    
    const { data: menus, isLoading, isError, error, refetch } = useGetMenuListQuery();
    const { data: recipes, isLoadingRec, isErrorRec, errorRec } = useGetRecipeListQuery();


    const handleModify = (id) => {
        navigate(`/modifyMenu/${id}`); // Redirect to the modification page
    };

    const handleShow = (id) => {
        navigate(`/getMenu/${id}`); // Redirect to the modification page
    };

    

    const handleDeleteMenu = async (menuId) => {
        setShowModal(false); // Close the modal
        setShowSpinner(true); // Show spinner while deleting

        const token = localStorage.getItem('token');
        try {
            await deleteMenu({ token, id: menuId }).unwrap();
            setShowSpinner(false); // Hide spinner after deletion
            // Optionally, refresh or update the UI

            refetch();
            
        } catch (error) {
            console.error("Error deleting menu:", error);
            setShowSpinner(false); // Hide spinner on error
        }
    };






    const { userInfo } = useSelector((state) => state.auth);
    const backgroundImage = "url('homepages/restaurant/images/darkish.jpg')"; // Ensure correct path to the image
    const dispatch = useDispatch();



    if (isLoading || isLoadingRec) return <p>Loading ...</p>;
    if (isError || isErrorRec) return <p>Error fetching data: {error?.data?.message || error.message}</p>;

    return (

        <>
            <div className="body-inner">

                <Header2 />


                <section className="parallax text-light halfscreen" style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="container-fullscreen">
                            <div className="text-middle text-center text-end">
                                <h1 className="text-uppercase text-medium">
                                    {userInfo.name || "Guest"}
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
                                    <h2>SUMMARY</h2>
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

                {/* <section className="red-bg">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mt-3" style={{ padding: '0 15px' }}>
                            <div className="heading-text" style={{ flex: '1' }}>
                                <h2 style={{ margin: 0 }}>My Menus</h2>
                            </div>
                            <a href="/addmenu" style={{ flex: '1' }}>
                                <button type="button" className="btn btn-rounded btn-outline">Add Menu</button>
                            </a>
                        </div>

                        <div className="row mt-4">
                            {Array.isArray(menus) && menus.length === 0 ? (
                                <p className="col-12 text-center">No menus found for your account.</p>
                            ) : (
                                menus?.map((menu) => (
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={menu._id}>
                                        <div className="room card " 
                                            style={{
                                                backgroundColor: '#FFF6F4',
                                                height: '45vh',
                                            }}>
                                            <div className="room-image card-img-top">
                                                <img
                                                    src={`http://localhost:3000${menu.image}`}
                                                    alt={menu.name || "Menu Image"}
                                                    className="img-fluid"
                                                    style={{
                                                        width: '100%',
                                                        height: '30vh',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                    }}
                                                />
                                                <div className="room-title card-body">
                                                    <h4 className="card-title" style={{ color: "white" }}>{menu.name}</h4>
                                                </div>
                                            </div>
                                            <div className="room-title card-body">
                                                <h5 className="card-title" style={{ color: "black" }}>{menu.description}</h5>
                                            </div>
                                           

                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section> */}

                <section className="red-bg">
                    <div className="container">
                        <div
                            className="d-flex justify-content-between align-items-center mt-3"
                            style={{ padding: "0 15px" }}
                        >
                            <div className="heading-text" style={{ flex: "1" }}>
                                <h2 style={{ margin: 0 }}>My Menus</h2>
                            </div>
                            <a href="/addmenu" style={{ flex: "1" }}>
                                <button type="button" className="btn btn-rounded btn-outline">
                                    Add Menu
                                </button>
                            </a>
                        </div>

                        <div className="row mt-4">
                            {Array.isArray(menus) && menus.length === 0 ? (
                                <p className="col-12 text-center">No menus found for your account.</p>
                            ) : (
                                menus?.map((menu) => (
                                    <div
                                        className="col-lg-4 col-md-4 col-sm-6 mb-4"
                                        key={menu._id}
                                    >
                                        <div
                                            className="room card position-relative"
                                            style={{
                                                backgroundColor: "#FFF6F4",
                                                height: "45vh",
                                                position: "relative",
                                                overflow: "hidden", // Ensure icons don't overflow the card
                                            }}
                                            onMouseEnter={(e) => {
                                                const hoverIcons = e.currentTarget.querySelector(".hover-icons");
                                                hoverIcons.style.opacity = "1";
                                                hoverIcons.style.pointerEvents = "auto";
                                            }}
                                            onMouseLeave={(e) => {
                                                const hoverIcons = e.currentTarget.querySelector(".hover-icons");
                                                hoverIcons.style.opacity = "0";
                                                hoverIcons.style.pointerEvents = "none";
                                            }}
                                        >
                                            {/* Hoverable Icons */}


                                            <div
                                                className="hover-icons d-flex align-items-center justify-content-center position-absolute w-100 h-100"
                                                style={{
                                                    top: 0,
                                                    left: 0,
                                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                    opacity: "0", // Start hidden
                                                    transition: "opacity 0.3s",
                                                    zIndex: "10",
                                                    borderRadius: "8px",
                                                    pointerEvents: "none", // Disable interactions when hidden
                                                }}
                                            >
                                                <button
                                                    type="button"
                                                    className="btn btn-light m-2"
                                                    onClick={() => handleModify(menu._id)}
                                                >
                                                    <i className="icon-edit-2"></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-light m-2"
                                                    onClick={() => handleShow(menu._id)}
                                                >
                                                    <i className="icon-eye"></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger m-2"
                                                    onClick={() => setShowModal(true)}
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                            {showSpinner && (
                                                <div className="backdrop-overlay">
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                            )}

                                            {showModal && (
                                                <div className="alert-modal-overlay">
                                                    <div className="alert-modal">
                                                        <p>Are you sure you want to delete this menu?</p>
                                                        <div className="alert-modal-actions">
                                                            <button
                                                                className="btn alert-cancel-btn"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                className="btn alert-logout-btn"
                                                                onClick={() => handleDeleteMenu(menu._id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}


                                            {/* Menu Image */}
                                            <div
                                                className="room-image card-img-top"
                                                style={{ position: "relative" }}
                                            >
                                                <img
                                                    src={`http://localhost:3000${menu.image}`}
                                                    alt={menu.name || "Menu Image"}
                                                    className="img-fluid"
                                                    style={{
                                                        width: "100%",
                                                        height: "30vh",
                                                        objectFit: "cover",
                                                        borderRadius: "8px",
                                                    }}
                                                />
                                                <div className="room-title card-body">
                                                    <h4 className="card-title" style={{ color: "white" }}>
                                                        {menu.name}
                                                    </h4>
                                                </div>
                                            </div>

                                            {/* Menu Description */}
                                            <div className="room-title card-body">
                                                <h5 className="card-title" style={{ color: "black" }}>
                                                    {menu.description}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}


                        </div>
                    </div>
                </section >




                {/* <div className="room-title card-body">
                                                <h5 className="card-title" >
                                                    {Array.isArray(menu.plates) && menu.plates.length > 0 ? (
                                                        menu.plates.map((plate, index) => (
                                                            <div key={plate._id}>
                                                                <p>{`Plate ${index + 1}: ${plate.name}, Price: $${plate.price}`}</p>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p>No plates available.</p>
                                                    )}
                                                </h5>
                                            </div> */}


                < section >
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
                </section >


                <section className="red-bg">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mt-3" style={{ padding: '0 15px' }}>
                            <div className="heading-text" style={{ flex: '1' }} >
                                <h2 style={{ margin: 0 }}>My Recipes</h2>
                            </div>
                            <a href="/addrecipe" style={{ flex: '1' }}>
                                <button type="button" className="btn btn-rounded btn-outline">Add recipe</button>
                            </a>
                        </div>

                        <div className="row">

                            {Array.isArray(recipes) && recipes.length === 0 ? (
                                <p className="col-12 text-center">No menus found for your account.</p>
                            ) : (
                                recipes?.map((recipe) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={recipe._id}>
                                        <div className="room card h-50 shadow">
                                            <div className="room-image card-img-top">
                                                <img
                                                    src={`http://localhost:3000${recipe.image}`}
                                                    alt={recipe.name || "Recipe Image"}
                                                    className="img-fluid"
                                                    style={{
                                                        width: '100%',
                                                        height: '30vh',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                    }}
                                                />
                                                <div className="room-title card-body">
                                                    <h5 className="card-title" style={{ color: "white" }}>{recipe.name}</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>


                <section id="page-content">
                    <div class="container">
                        <div class="grid-layout grid-2-columns"  >
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/1.jpg" ><img src="images/gallery/1.jpg" /></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/2.jpg" ><img src="images/gallery/2.jpg" /></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/3.jpg" ><img src="images/gallery/3.jpg" /></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/4.jpg"><img src="images/gallery/4.jpg" /></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/5.jpg" ><img src="images/gallery/5.jpg" /></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/6.jpg" ><img src="images/gallery/6.jpg" /></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/7.jpg" ><img src="images/gallery/7.jpg" /></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/8.jpg" ><img src="images/gallery/8.jpg" /></a>
                            </div>
                            <div class="grid-item">
                                <a class="image-hover-zoom" href="images/gallery/9.jpg" ><img src="images/gallery/9.jpg" /></a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer2 />

            </div >
        </>
    )
}

export default ProfileR