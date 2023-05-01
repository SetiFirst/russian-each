import React from "react";
import s from "./Footer.module.css";

export default function Footer(props){
	return(	
		<div className={s.footer}>
			<div className={s.el + " " + s.support}> Поддержка </div>
			<div className={s.el + " " + s.communication}> Связаться с нами </div>	
			<div className={s.el + " " + s.forum}> Форум </div>	
		</div>
	);
}