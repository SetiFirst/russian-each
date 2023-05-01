import React from "react";
import s from "./Header.module.css";
import Slider from "./Slider"
import Slider2 from "./Slider2.jsx/Slider2";

export default class Header extends React.Component{
	constructor(prop){
		super(prop);
		this.state = {};
	}

	render() {
		return(
			<div className={s.header_block}>
				<div className={s.header}>
					<div className={s.slider}>
						<Slider />
					</div>
					<div className={s.description}>
						Игра о том, как русские люди покоряли Сибирь и какие трудности их ждали на своем пути. Из этой игры вы сможете познакомиться с бытом покорителей Сибири, их вооружением и зданиями. Сможешь ли ты покорить Её подобно нашим предкам или падешь ниц перед трудностями первопроходческих будней?
					</div>
					<div className={s.buttonBox}>
						<div className={s.downloadButton}>
							<a  href="./files/pesnya.png" download={'./components/files/pesnya.png'} className={s.downloadButton} id="downloadButton" > Скачать </a>
						</div>
					</div>
				</div>
				<div className={s.Slider2Area}> 
					<div className={s.slider2}>
							<Slider2/>
					</div>
				</div>
			</div>
		)
	}
}