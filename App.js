import './App.css';
import Header from "./components/Header"
import React from "react";
import s from "./components/Navbar.module.css";
import News from "./components/News";
import "./animation.css"
import Footer from './components/footer/Foter'

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <nav>
					<div className={s.navbar}>
						<div></div>
						<div className={s.menu}>
							<a href="#news" className={s.link}> Новости </a>
							<a href="https://discord.gg/jbQYsYu8" className={s.link}> FAQ </a>
						</div>
						<div></div>
						<div className={s.downloadButtonBlock} >
							<a  href="./files/pesnya.png" download={'./components/files/pesnya.png'} className={s.downloadButton} id="downloadButton" > Скачать </a>
						</div>
						<div className={s.burgerBlock}>
							<span className={s.burger}></span>
						</div>
					</div>
			</nav>
        <Header />
      </header>
		<main>
			<a name="news"> <News /> </a> 
			
		</main>
		<footer>
			<Footer />
		</footer>
		
    </div>
  );
}

export default App;
