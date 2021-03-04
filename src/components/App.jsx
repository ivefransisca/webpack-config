import '../styles/index.scss';
import Recipe from './Recipe';
import sword from '../images/bbb.jpg';

const App = () =>{
	return(
		<>
			<section className="hero"></section>
			<main>
				<h1>Hello, kkk</h1>
			</main>
			<img src={sword} alt="Icon Sword"/>
			<Recipe/>
		</>
	)
}

export default App;