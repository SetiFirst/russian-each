import React from "react";
import s from "./Navbar.module.css";
import FAQ from "./FAQ";
import News from "./News";
import { Route, Link, BrowserRouter, Routes} from "react-router-dom";

export default function Navbar() {

	return(
		<div>
			<nav>
				<BrowserRouter>
					<div className={s.navbar}>
						<div className={s.logo}> logo </div>
						<div></div>
						<div className={s.menu}>
							<Link to="/news" click="news" className={s.link}> Новости </Link>
							<Link to="/FAQ" click="FAQ" className={s.link}> FAQ </Link>
						</div>
						<div className={s.downloadButtonBlock}>
							<a href="./files/pesnya.mp3" download={'./files/pesnya.mp3'} className={s.downloadButton} id="downloadButton"> Скачать </a>
						</div>
						<div className={s.burgerBlock}>
							<span className={s.burger}></span>
						</div>
					</div>
				
				<Routes>
					<Route path="/News" component={<News />}/>
					<Route path="/FAQ" component={<FAQ/>}/>
				</Routes>
				</BrowserRouter>
			</nav>
		</div>
	);
} 