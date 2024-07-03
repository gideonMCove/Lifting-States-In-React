// src/components/IngredientList.jsx
const IngredientList = (props) => {
    console.log("props", props)
    return(
        <div className="IndgredientList">
            <h1>Available Indgredients:</h1>
            {
                props.ingredients.map((indgredient, index) => (
                    <ul className="availableIngredients" key={index}>
                        <div style={{backgroundColor: indgredient.color}}>
                        {indgredient.name}
                        <button style={{backgroundColor: indgredient.color}} onClick={()=>props.addToBurger(indgredient)}>+</button>
                        </div>
                        
                    </ul>
                ))
            }

        </div>
    )
}
  
  export default IngredientList;
  