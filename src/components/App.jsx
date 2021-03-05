import '../styles/index.scss';
import Recipe from './Recipe';
import sword from '../images/bbb.jpg';

const App = () =>{
	return(
		<>
			<section className="hero"></section>
			<main>
				<h1>Hello, ccff</h1>
			</main>
			{/* <img src={sword} alt="Icon Sword"/> */}
			<Recipe/>
			<h3>cc</h3>
		</>
	)
}

export default App;