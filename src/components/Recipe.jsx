const { useState } = require("react");

const testingRecipe ={
	leat: 1,
	testl: 3,
	ccb: 2
}

const newRecipe= {
	...testingRecipe,
	leather: 1,
	testl: 4
}

console.log(testingRecipe);
console.log(newRecipe);

const Recipe = () =>{
	const [recipe, setRecipe] = useState([]);
	return(
		<div>
			<h3>Current Recipe</h3>
			<button onClick={()=> setRecipe(testingRecipe)}>Testing Recipe</button>
			<button onClick={()=> setRecipe(newRecipe)}>New Recipe</button>
			<ul>
				{Object.keys(recipe).map((material) => (
					<li keys={material}>
						{material} : {recipe[material]}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Recipe;