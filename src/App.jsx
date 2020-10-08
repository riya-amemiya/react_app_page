import React from "react";
import "./App.scss";
import noimg from "./img/svg/logo.svg";
import img0 from "./img/svg/1.svg";
import img1 from "./img/svg/2.svg";
import img2 from "./img/svg/3.svg";
import img3 from "./img/svg/4.svg";
import img4 from "./img/svg/5.svg";
const animate = [
	"animate__backInDown",
	"animate__backInUp",
	"animate__backInLeft",
	"animate__backInRight",
	"animate__bounceInDown",
	"animate__bounceInUp",
	"animate__bounceInLeft",
	"animate__bounceInRight",
	"animate__zoomInDown",
	"animate__zoomInLeft",
	"animate__zoomInRight",
	"animate__zoomInUp",
];
const imgs = [
	{
		url: img0,
		num: 0,
	},
	{
		url: img1,
		num: 1,
	},
	{
		url: img2,
		num: 2,
	},
	{
		url: img3,
		num: 3,
	},
	{
		url: img4,
		num: 4,
	},
];
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: 0,
			num: 0,
		};
	}
	random() {
		let num = Math.floor(Math.random() * animate.length);
		while (this.state.num == num) {
			num = Math.floor(Math.random() * animate.length);
		}
		this.setState({ num: num });
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>アルバム</h1>
					<img
						className={`animate__animated ${animate[this.state.num]}`}
						src={imgs[this.state.show].url}
						alt=""
						onError={(e) => (e.target.src = noimg)}
					/>
					<div className="div">
						{imgs.map((img) => {
							return (
								<img
									key={img.num}
									className={`img`}
									src={img.url}
									alt=""
									onError={(e) => (e.target.src = noimg)}
									onClick={() => {
										this.setState({ show: img.num });
										this.random();
									}}
								/>
							);
						})}
					</div>
				</header>
			</div>
		);
	}
}
export default App;
