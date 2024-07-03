// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    console.log('BURGERprops', props)
    console.log("PROPS LENGTH", props.stacks.length)
    return (
        <div className ="BurgerStack">
            <h1>Your Burger:</h1>
            
            {
                props.stacks.length == "undefined" ? (
                    
                    <ul className="chosenIndgredients" >
                    <div style={{backgroundColor: props.stacks.color}}>
                        {props.stacks.name}
                        <button style={{backgroundColor: props.stacks.color}} onClick={()=>props.removeFromBurger(props.stacks)}>X</button>
                    </div>
                </ul>
                ) : (
                props.stacks.map((stack, index)=>(
                    <ul className="chosenIndgredients" key={index}>
                        <div style={{backgroundColor: stack.color}}>
                            {stack.name}
                            <button style={{backgroundColor: stack.color}} onClick={()=>props.removeFromBurger(stack)}>X</button>
                        </div>
                    </ul>
                )))
            }

        </div>
    )
  }
  
  export default BurgerStack;
  