import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import axios from "axios";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = async (ingredient) => {

    await axios.post("https://react-hooks-update-ecb52-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json", ingredient).then(response =>


      setUserIngredients([
        ...userIngredients,
        { id: response.name, ...ingredient },
      ])
    )
  };

  const removeIngredientHandler = (id) => {
    const remove = userIngredients.filter((ele) => ele.id !== id);
    setUserIngredients(remove);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
