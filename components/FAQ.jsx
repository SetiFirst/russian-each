import React from "react";
import s from "./FAQ.module.css";

export default class FAQ extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		};

		this.handleOnBlock = this.handleOnBlock.bind(this);
		this.handleOnPopUp = this.handleOnPopUp.bind(this);
	}

	handleOnPopUp() {
		alert("you click on area");
	}

	handleOnBlock(e) {
		alert("You click on block");
		e.stopPropagation()
	}

	render() {
		return(
			<div className={s.popUp} onClick={this.handleOnPopUp}>
				<div className={s.popUp_block} onClick={this.handleOnBlock}>
					<div className={s.discordLogo}></div>
					<div className={s.link}>
						<a href="https://discord.gg/jbQYsYu8">https://discord.gg/jbQYsYu8</a>
					</div>
				</div>
			</div>
		)
	}
	
}