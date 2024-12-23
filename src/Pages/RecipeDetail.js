import React from 'react'
import Header2 from '../Components/Header2'
import Footer2 from '../Components/Footer2'

function RecipeDetail() {
    return (
        <>
            <div className="body-inner">
                <Header2 />

                <section class="profile-content">
                    <div class="profile-image" style={{ backgroundImage: "url('homepages/restaurant/images/shakshouka.jpg')" }}>
                        <div class="profile-name">
                            <h3>Shakshouka</h3>
                        </div>
                    </div>
                    <div class="profile-bio">
                        <h3>Shakshouka recipe</h3>
                        <br />


                        <p>  Shakshuka is a flavorful and wholesome dish originating from North Africa and
                            popular across the Mediterranean. This recipe serves 4 and is perfect for
                            breakfast, brunch, or even a light dinner.</p>

                        <div class="ingredients-list m-t-60">
                            <h3 class="text-uppercase text-center">Ingredients</h3>
                            <ul class="ingredients">
                                <li>
                                    <span class="ingredient-name">Olive Oil</span>
                                    <span class="ingredient-quantity">2 tbsp</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Onion</span>
                                    <span class="ingredient-quantity">1 medium</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Red Bell Pepper</span>
                                    <span class="ingredient-quantity">1 large</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Garlic Cloves</span>
                                    <span class="ingredient-quantity">3 cloves</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Tomatoes</span>
                                    <span class="ingredient-quantity">6 ripe</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Tomato Paste</span>
                                    <span class="ingredient-quantity">2 tbsp</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Ground Cumin</span>
                                    <span class="ingredient-quantity">1 tsp</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Red Pepper Flakes</span>
                                    <span class="ingredient-quantity">1/4 tsp</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Salt and Black Pepper</span>
                                    <span class="ingredient-quantity">To taste</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Eggs</span>
                                    <span class="ingredient-quantity">6 large</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Fresh Parsley</span>
                                    <span class="ingredient-quantity">For garnish</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Crumbled Feta Cheese</span>
                                    <span class="ingredient-quantity">Optional</span>
                                </li>
                                <li>
                                    <span class="ingredient-name">Bread or Pita</span>
                                    <span class="ingredient-quantity">To serve</span>
                                </li>
                            </ul>
                        </div>


                        <div class="instructions-container m-t-60">
                            <h3 class="text-uppercase">Instructions</h3>
                            <ol class="instruction-list">
                                <li>
                                    Heat 2 tablespoons of olive oil in a large skillet over medium heat.
                                </li>
                                <li>
                                    Sauté the chopped onion and diced red bell pepper until softened, about 5 minutes.
                                </li>
                                <li>
                                    Add the minced garlic and cook until fragrant, about 1 minute.
                                </li>
                                <li>
                                    Stir in the chopped tomatoes, tomato paste, ground cumin, red pepper flakes, and season with salt and black pepper to taste.
                                </li>
                                <li>
                                    Simmer the mixture, stirring occasionally, until it thickens slightly, about 10 minutes.
                                </li>
                                <li>
                                    Make small wells in the sauce and crack the eggs into each well. Cover the skillet and cook until the egg whites are set but the yolks remain runny, about 7–10 minutes.
                                </li>
                                <li>
                                    Garnish with fresh parsley and optional crumbled feta cheese.
                                </li>
                                <li>
                                    Serve hot with crusty bread or pita for dipping.
                                </li>
                            </ol>
                        </div>

                        <div class="profile-bio-footer">
                            <div class="text-center"> &copy; 2021 POLO - Responsive Multi-Purpose HTML5 Template. All Rights Reserved.INSPIRO</div>
                        </div>
                    </div>
                </section>






            </div>



            <a id="scrollTop"><i classNameName="icon-chevron-up"></i><i classNameName="icon-chevron-up"></i></a>





        </>




    )
}

export default RecipeDetail