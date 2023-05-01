import React from "react";
import Modal from "../../Modal";
import s from "./Slider2.module.css";
import img1 from "../files/photo1.png";
import img2 from "../files/photo2.png";
import img3 from "../files/photo3.png";
import img4 from "../files/photo4.png";

export default class Slider extends React.Component{
	constructor(prop){
		super(prop);

		this.state = {
			arrayImg: [
				img4,
				img2,
				img3,
				img1,
			],

			distanceFirstSlider: 0,
			distanceSecondSlider: 0,
			sliderNumber: 2,

			setModalActive: false,
			modalActive: false,
			modal: "",
			x: 0,
		};

		this.handleClickOnLeftButton = this.handleClickOnLeftButton.bind(this);
		this.handleClickOnRightButton = this.handleClickOnRightButton.bind(this);
		this.handleClickOnModal = this.handleClickOnModal.bind(this);
	}

	handleClickOnRightButton() {	
		const elem = document.getElementsByClassName(s.row);
		if(this.state.distanceFirstSlider <= 316){
		let a = 0;
		let int;
			int = setInterval(() => {
				a+=10; 
				this.setState({distanceFirstSlider: this.state.distanceFirstSlider + 10})
				elem[0].style.right = this.state.distanceFirstSlider +"px";
				if(a>=316){
					clearInterval(int);
				};
			},1);
			const dotsArray = document.getElementsByClassName(s.divDots)[0].children;
			console.log(dotsArray);
			dotsArray[this.state.sliderNumber].classList.remove(s.active)
			this.state.sliderNumber += 1;
			dotsArray[this.state.sliderNumber].classList.add(s.active)
			

		}
	}

	handleClickOnLeftButton() {
		
		const elem = document.getElementsByClassName(s.row);
		if(this.state.distanceFirstSlider >= -(this.state.arrayImg.length-2)*316){
			let a = 0;
			let int;
			int = setInterval(() => {
				a-=10;
				this.setState({distanceFirstSlider: this.state.distanceFirstSlider - 10})
				elem[0].style.right = this.state.distanceFirstSlider +"px";
				if(a<=-316){
					clearInterval(int)
				}
			},1)

			const dotsArray = document.getElementsByClassName(s.divDots)[0].children;
			console.log(dotsArray);
			dotsArray[this.state.sliderNumber].classList.remove(s.active)
			this.state.sliderNumber -= 1;
			dotsArray[this.state.sliderNumber].classList.add(s.active)
			
		} else{
			console.log("A")
		}
		
	}

	componentDidMount() {
		const dotsArray = document.getElementsByClassName(s.divDots)[0].children;
		dotsArray[2].classList.add(s.active);
	}

	handleClickOnModal(x) {
		this.setState({setModalActive: true});
		this.setState({x: x});
	}

	render() {
		return(
			<div className={s.slider} >
				<button onClick={this.handleClickOnLeftButton} className={s.leftButton} type="button"></button>
				<div className={s.row} id="row" style={{right:"0px"}}>
				{
					this.state.arrayImg.map(x => 
					<div onClick={() => this.handleClickOnModal(x)} style={{backgroundImage: "url(" + this.state.arrayImg[this.state.arrayImg.indexOf(x)] + ")", width: "285px", height: "189px", marginLeft: "31px",backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
						{this.state.modal}
					</div>)
				}
				</div>
				<button onClick={this.handleClickOnRightButton} className={s.rightButton} type="button"></button>
				<div className={s.divDots}>
				{
					this.state.arrayImg.map(() => <div className={s.dot}> </div>)
				}
				</div>
				<Modal active={this.state.modalActive} setActive={this.state.setModalActive}> 
		<div style={{backgroundImage: "url(" + this.state.arrayImg[this.state.arrayImg.indexOf(this.state.x)] + ")", width: "300px", height: "100px"}}></div> 
	</Modal> 
			</div>
		)
	}
}