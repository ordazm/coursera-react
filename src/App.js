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
import Child from "./components/Child";

/** ------week 2 - HOOKS */
import { useState } from "react";
/** ------week 2 - HOOKS */

function App() {
	/**---------------------------- week 2 Children and Data ----------------------------*/
	const date = new Date();

	return (
		<main className='App'>
			{/**------------ week 2 Children and Data ------------------- */}
			<div>
				<h1>Insert the Child component here.</h1>
				<Child message={date.toLocaleTimeString()} />
			</div>
			{/**-----------week 1-2-------------------------------------- */}
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
