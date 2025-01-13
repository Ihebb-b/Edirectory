import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAddMenuMutation } from '../slices/restaurantSlice';

function AddMenu() {
    // const [ingredients, setIngredients] = useState([""]);

    // const handleAddField = () => {
    //     setIngredients([...ingredients, ""]);
    // };

    // const handleRemoveField = (index) => {
    //     const updatedIngredients = ingredients.filter((_, i) => i !== index);
    //     setIngredients(updatedIngredients);
    // };

    // const handleFieldChange = (index, value) => {
    //     const updatedIngredients = ingredients.map((ingredient, i) =>
    //         i === index ? value : ingredient
    //     );
    //     setIngredients(updatedIngredients);
    // };


    const [addMenu, { isLoading }] = useAddMenuMutation(); // Mutation hook

    const [showSpinner, setShowSpinner] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const [menuName, setMenuName] = useState("");
    const [description, setDescription] = useState("");


    const navigate = useNavigate(); // Initialize useNavigate

    const handleReturn = () => {
        navigate('/profileR'); // Navigate to the /profileR route
    };

    const [plates, setPlates] = useState([{ name: "", price: "" }]);

    const handleAddField = () => {
        setPlates([...plates, { name: "", price: "" }]);
    };

    const handleRemoveField = (index) => {
        const updatedPlates = plates.filter((_, i) => i !== index);
        setPlates(updatedPlates);
    };

    const handleFieldChange = (index, field, value) => {
        const updatedPlates = plates.map((plate, i) =>
            i === index ? { ...plate, [field]: value } : plate
        );
        setPlates(updatedPlates);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const menuData = {
            name: menuName,
            description,
            plates,
        };

        try {
            const response = await addMenu(menuData).unwrap();
            setAlert({ show: true, type: 'success', message: 'Menu added successfully!' });
            setShowSpinner(true);

            setTimeout(() => {
                navigate("/profileR");
            }, 2000);

            setTimeout(() => {
                setShowSpinner(false);

            }, 2000);

            //navigate("/profileR"); // Redirect after success
        } catch (error) {
            console.error("Error adding menu:", error);
            //alert("Failed to add menu. Please try again.");
            setAlert({ show: true, type: 'danger', message: error?.data?.message || "Login failed." });

        }
    };

    return (
        <>
            <div className="body-inner">
            {alert.show && (
                    <div className="col-lg-6">
                        <div role="alert" className={`alert alert-${alert.type} alert-dismissible`}>
                            <button type="button" className="btn-close" onClick={() => setAlert({ ...alert, show: false })} aria-label="Close"></button>
                            <strong><i className={`fa ${alert.type === 'success' ? 'fa-check-circle' : 'fa-warning'}`}></i> {alert.type === 'success' ? 'Success!' : 'Error!'}</strong> {alert.message}
                        </div>
                    </div>
                )}
                <div className="container-fluid">
                    <div className="row min-vh-100">
                        <div className="col-md-8 col-lg-4 d-flex align-items-center">

                            <button
                                type="button"
                                onClick={handleReturn}

                                className="btn btn-secondary mb-3 d-flex align-items-center"
                            >
                                <i className="fas fa-arrow-left me-2"></i> {/* Font Awesome icon */}
                            </button>

                            <div className="w-100 px-3 px-sm-5 py-xl-5 px-xl-7">

                                <h3>Add New Menu</h3>
                                <p>Create a menu by entering the information below.
                                </p>

                                <h5>Menu Details</h5>

                                <form 
                                    id="form1" 
                                    className="form-validate mt-5 d-flex align-items-center"
                                    onSubmit={handleSubmit}
                                    >

                                    <div className="col-12 ">

                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                placeholder="Enter the name of the menu"
                                                value={menuName}
                                                onChange={(e) => setMenuName(e.target.value)}
                                                required="" />
                                        </div>
                                        <div className="form-group">
                                            <label for="description">Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="description"
                                                placeholder="Enter the description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                required="" />
                                        </div>

                                        <h5 style={{ textAlign: "left", marginBottom: "10px" }}>Plates</h5>
                                        {plates.map((plate, index) => (
                                            <div
                                                key={index}
                                                className="form-group d-flex align-items-center mb-3"
                                            >
                                                {/* Plate Name Field */}

                                                <div className="col-8 me-4">
                                                    <input
                                                        type="text"
                                                        id={`plate-name-${index}`}
                                                        className="form-control me-2"
                                                        placeholder={`Enter plate ${index + 1}'s name`}
                                                        value={plate.name}
                                                        onChange={(e) =>
                                                            handleFieldChange(index, "name", e.target.value)
                                                        }
                                                        required
                                                    />
                                                </div>
                                                {/* Plate Price Field */}
                                                <div className="col-3">
                                                    <input
                                                        type="number"
                                                        id={`plate-price-${index}`}
                                                        className="form-control me-2"
                                                        placeholder="Price $"
                                                        value={plate.price}
                                                        onChange={(e) =>
                                                            handleFieldChange(index, "price", e.target.value)
                                                        }
                                                        required
                                                    />
                                                </div>
                                                {/* Remove Icon */}
                                                {plates.length > 1 && (
                                                    <i
                                                        className="icon-trash text-danger"
                                                        style={{ cursor: "pointer", fontSize: "1.5rem" }}
                                                        onClick={() => handleRemoveField(index)}
                                                    ></i>
                                                )}
                                            </div>
                                        ))}

                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            {/* Add Icon */}
                                            <i
                                                className="icon-plus-circle text-primary"
                                                style={{
                                                    cursor: "pointer",
                                                    fontSize: "2rem",
                                                    marginBottom: "10px",
                                                }}
                                                onClick={handleAddField}
                                            ></i>
                                            {/* Submit Button */}
                                            <div className="mt-4">
                                                <button type="submit" className="btn btn-primary me-2"  disabled={isLoading}>
                                                {isLoading ? "Submitting..." : "Submit"}
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-secondary" 
                                                    onClick={handleReturn}
                                                    >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div> */}
                                    {/* <h5 style={{ textAlign: "left", marginBottom: "5px" }}>Ingredients</h5> */}
                                    {/* <i
                                            className="icon-plus-circle text-primary"
                                            style={{ cursor: "pointer", fontSize: "2rem" }}
                                            onClick={handleAddField}
                                        ></i> */}
                                    {/* </div> */}

                                    {/* {ingredients.map((ingredient, index) => (
                                        <div key={index} className="form-group d-flex align-items-center">
                                            <input
                                                type="text"
                                                id={`ingredient-${index}`}
                                                className="form-control"
                                                placeholder={`Enter ingredient ${index + 1}`}
                                                value={ingredient}
                                                onChange={(e) => handleFieldChange(index, e.target.value)}
                                                required
                                            />
                                            {ingredients.length > 1 && (
                                                <i
                                                    className="icon-trash text-danger ms-2"
                                                    style={{ cursor: "pointer", fontSize: "1.5rem" }}
                                                    onClick={() => handleRemoveField(index)}
                                                ></i>
                                            )}

                                        </div>

                                    ))}
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}> */}
                                    {/* <i
                                            className="icon-plus-circle text-primary"
                                            style={{ cursor: "pointer", fontSize: "2rem", marginBottom: "10px" }} // Add margin for spacing
                                            onClick={handleAddField}
                                        ></i>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div> */}

                                </form>

                            </div>
                        </div>
                        <div className="col-md-4 col-lg-8 d-none d-md-block bg-cover" style={{ backgroundImage: "url('homepages/restaurant/images/menu2.jpg')", backgroundPosition: "center center", backgroundSize: "cover" }}>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddMenu