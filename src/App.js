import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import Btn from "./components/Btn";
import ModeToggler from "./components/ModeToggler";
import Game from "./components/Game";

function App() {
	return (
		<main className='App'>
			<div>
				<Game />
				<ModeToggler />
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo'></img>
					<Nav />
				</header>
				<section>
					<Btn />
					<Promo name='Michelle' lastName='Ordaz' />
				</section>
				<section>
					<Intro1 />
					<Intro2 />
					<Intro3 />
				</section>
				<footer>
					<Footer />
				</footer>
			</div>
		</main>
	);
}

export default App;
