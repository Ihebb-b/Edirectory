import Footer2 from '../Components/Footer2'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation, useRegisterMutation, useUpdateUserMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';


function Role() {
    const backgroundImage = "url('homepages/restaurant/images/main-1.jpg')";

    const [role, setRole] = useState(null); // To store the selected role
    const [showDetailsForm, setShowDetailsForm] = useState(false); // To toggle the detailed form
    const [localisation, setLocalisation] = useState('');
    const [averageBill, setAverageBill] = useState('');
    const [diet, setDiet] = useState('');
    const [updateUser] = useUpdateUserMutation();
    const dispatch = useDispatch();
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });
    const navigate = useNavigate();
    const [showSpinner, setShowSpinner] = useState(false);



    const handleRoleClick = (selectedRole) => {
        setRole(selectedRole);
        setShowDetailsForm(true);

    };


    const handleBackClick = () => {
        setShowDetailsForm(false);
        setRole(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await updateUser({ role, localisation, averageBill, diet }).unwrap();
            dispatch(setCredentials(updatedUser));
            setAlert({ show: true, type: 'success', message: 'Login successful!' });
            setShowSpinner(true);

            setTimeout(() => {
                navigate("/");
            }, 2000);

            setTimeout(() => {
                setShowSpinner(false);

            }, 2000);

        } catch (err) {
            console.error('Failed to update profile:', err);
            setAlert({ show: true, type: 'danger', message: err?.data?.message || "Login failed." });
        }

    };

    return (

        <>
            <header id="header" className="dark" data-fullwidth="true">
                <div className="header-inner">
                    <div className="container">
                        <div id="logo">
                            {/* <NavLink to="/">
                                <span className="logo-default">E-Directory</span>
                                <span className="logo-dark">E-Directory</span>
                            </NavLink> */}

                            <a href='/'>
                                <img
                                    src="images/moremeddietlogo.png"
                                    alt="E-Directory Logo"
                                    style={{
                                        width: "100px",
                                        height: "70px",
                                        marginLeft: "2px",
                                        display: "inline-block"
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                {alert.show && (
                    <div className="col-lg-6">
                        <div role="alert" className={`alert alert-${alert.type} alert-dismissible`}>
                            <button type="button" className="btn-close" onClick={() => setAlert({ ...alert, show: false })} aria-label="Close"></button>
                            <strong><i className={`fa ${alert.type === 'success' ? 'fa-check-circle' : 'fa-warning'}`}></i> {alert.type === 'success' ? 'Success!' : 'Error!'}</strong> {alert.message}
                        </div>
                    </div>
                )}
            </header>
            <div className="body-inner">

                <section
                    className="pt-5 pb-5"
                    style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >


                    <div className="container-fluid d-flex flex-column">
                        <div className="row align-items-center min-vh-100">
                            <div className="col-md-6 col-lg-4 col-xl-3 mx-auto">
                                <div className="card">
                                    <div className="card-body py-5 px-sm-5">
                                        {!showDetailsForm ? (
                                            <div>
                                                <div className="mb-3 text-center">
                                                    <h6 className="h3 mb-1 ">Help us!</h6>
                                                    <p className="text-muted mb-0">Are you a Restaurant Owner or a Customer?</p>
                                                </div>
                                                <span className="clearfix"></span>
                                                <form className="form-validate">
                                                    <label htmlFor="role" style={{ fontSize: "15px", marginBottom: "10px" }}>
                                                        Choose Your Role
                                                    </label>
                                                    <div className="input-groupe">
                                                        <ul
                                                            className="list-icon list-icon-check list-icon-colored"
                                                            style={{ fontSize: "15px" }}
                                                        >
                                                            <li
                                                                className="text"
                                                                onClick={() => handleRoleClick("restaurant")}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                Restaurant
                                                            </li>
                                                            <li
                                                                className="text"
                                                                onClick={() => handleRoleClick("customer")}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                Customer
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </form>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="mb-3 text-center">
                                                    <h6 className="h3 mb-1 ">Welcome!</h6>
                                                    <p className="text-muted mb-0">Feel free to fill complementary informations</p>
                                                </div>
                                                <span className="clearfix"></span>
                                                {role === "restaurant" ? (
                                                    <form
                                                        className={`form-validate details-form ${showDetailsForm ? "animate" : ""
                                                            }`}
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <label htmlFor="local">Restaurant Details</label>

                                                        <div className="form-group">
                                                            <label htmlFor="localisation" >Localisation</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="localisation"
                                                                    placeholder="Enter localisation"
                                                                    required
                                                                />
                                                                <span className="input-group-text"><i className="icon-map-pin"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="averageBill" >Average Bill</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    name="averageBill"
                                                                    placeholder="Enter average bill"
                                                                    required
                                                                />
                                                                <span className="input-group-text"><i className="icon-dollar-sign"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary btn-block btn-primary"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                        <div className="mt-4 text-center">
                                                            <a className="text-muted"
                                                                onClick={handleBackClick}
                                                                style={{ cursor: "pointer" }}>
                                                                <i className="icon-arrow-left"></i> Back
                                                            </a>
                                                        </div>
                                                    </form>
                                                ) : (
                                                    <form
                                                        className={`form-validate details-form ${showDetailsForm ? "animate" : ""
                                                            }`}
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <label htmlFor="local">Costumer Details</label>
                                                        <div className="form-group">
                                                            <label htmlFor="dietType" >Diet Type</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="dietType"
                                                                    placeholder="Enter diet type"
                                                                    required
                                                                />
                                                                <span className="input-group-text"><i className="icon-tag"></i></span>
                                                            </div>

                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="localisation" >Localisation</label>
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="localisation"
                                                                    placeholder="Enter localisation"
                                                                    required
                                                                />
                                                                <span className="input-group-text"><i className="icon-map-pin"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary btn-block btn-primary"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                        <div className="mt-4 text-center">
                                                            <a className="text-muted"
                                                                onClick={handleBackClick}
                                                                style={{ cursor: "pointer" }}>
                                                                <i className="icon-arrow-left"></i> Back
                                                            </a>
                                                        </div>
                                                    </form>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>

    )
}

export default Role