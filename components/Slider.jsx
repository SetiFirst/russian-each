import React from "react";
import s from "./Slider.module.css"
import img1 from "./files/photo1.png";
import img2 from "./files/photo2.png";
import img3 from "./files/photo4.png";
import img4 from "./files/photo3.png";

export default class Slider extends React.Component{
	constructor(prop){
		super(prop);

		this.state = {
			arrayImg: [
				img1,
				img2,
				img3,
				img4,
			],

			distanceFirstSlider: -660,
			distanceSecondSlider: 0,
		};

		this.handleClickOnLeftButton = this.handleClickOnLeftButton.bind(this);
		this.handleClickOnRightButton = this.handleClickOnRightButton.bind(this);
	}

	handleClickOnRightButton() {
		const elem = document.getElementsByClassName(s.row);
		if(this.state.distanceFirstSlider <= -660){
			let a = 0;
		let int;
			int = setInterval(() => {
				a+=10; 
				this.state.distanceFirstSlider += 10;
				elem[0].style.right = this.state.distanceFirstSlider +"px";
				if(a>=660){
					clearInterval(int)
				}
			},1)
		} else{

		}
	}

	handleClickOnLeftButton() {
		
		const elem = document.getElementsByClassName(s.row);
		if(this.state.distanceFirstSlider >= -(this.state.arrayImg.length-2)*660){
			let a = 0;
		let int;
			int = setInterval(() => {
				a-=10;
				this.state.distanceFirstSlider -= 10;
				elem[0].style.right = this.state.distanceFirstSlider +"px";
				if(a<=-660){
					clearInterval(int)
				}
			},1)
			
		} else{
			console.log("A")
		}
		
	}

	render() {

		return(
			<div className={s.slider} >
				<button onClick={this.handleClickOnLeftButton} className={s.leftButton} type="button"></button>
				<div className={s.row} id="row" style={{right:"-660px"}}>
				{
					this.state.arrayImg.map(x => 
					<div style={{backgroundImage: "url(" + this.state.arrayImg[this.state.arrayImg.indexOf(x)] + ")", width: "660px", height: "423px",backgroundRepeat: "no-repeat", backgroundSize: "cover"}} > </div>)
				}
				</div>
				<button onClick={this.handleClickOnRightButton} className={s.rightButton} type="button"></button>
			</div>
		)
	}
}