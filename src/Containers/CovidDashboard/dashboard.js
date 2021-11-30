import React from 'react'
import cold from './icons/cold.png'
import cooking from './icons/cooking.png'
import fever from './icons/fever.png'
import firstAidKit from './icons/first-aid-kit.png'
import flight from './icons/flight.png'
import mask from './icons/medical-mask.png'
import washingHand from './icons/washing-hand.png'
import './dashboard.css'

const Dashboard = () => {
	return (
		<div className="container">
			<div className="box">
				<div className="content">
					<div className="imageContainer">
						<img src={washingHand} alt="1.png" />
					</div>
					<p>
						{
							'Wash hands with soap water after touching animal and animal products.'
						}
					</p>
				</div>
			</div>
			<div className="box">
				<div className="content">
					<div className="imageContainer">
						<img src={cold} alt="1.png" />
					</div>
					<p>
						{
							'When coughing and sneezing cover mouth and nose with flexed elbow or tissues.'
						}
					</p>
				</div>
			</div>
			<div className="box">
				<div className="content">
					<div className="imageContainer">
						<img src={flight} alt="1.png" />
					</div>
					<p>{'Avoid trave if you have fever and cough.'}</p>
				</div>
			</div>
			<div className="box">
				<div className="content">
					<div className="imageContainer">
						<img src={firstAidKit} alt="1.png" />
					</div>
					<p>
						{
							'If you have fever, cough and difficulty breathing seek meadical care early.'
						}
					</p>
				</div>
			</div>
			<div className="box">
				<div className="content">
					<div className="imageContainer">
						<img src={mask} alt="1.png" />
					</div>
					<p>
						{
							'If you are coughing or sneezing, wear a mask and must know how to use it and dispose of it properly.'
						}
					</p>
				</div>
			</div>
			<div className="box">
				<div className="content">
					<div className="imageContainer">
						<img src={cooking} alt="1.png" />
					</div>
					<p>{'Eat only well-cooked food.'}</p>
				</div>
			</div>
			<div className="box">
				<div className="content">
					<div className="imageContainer">
						<img src={fever} alt="1.png" />
					</div>
					<p>{'Avoid closed contact with animals that are sick.'}</p>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
