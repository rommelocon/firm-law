import React from 'react';
import '../styles/home.css';
import video from '../assets/videos/mp4/section-vid.mp4';

function Home() {
	return (
		<div className='section-container'>
			{/* Inputs*/}
			<input type='radio' name='item' defaultChecked='checked' id='section1' />
			<input type='radio' name='item' id='section2' />
			<input type='radio' name='item' id='section3' />
			<input type='radio' name='item' id='section4' />
			{/* Navigation*/}
			<nav className='nav'>
				<label className='nav__item' htmlFor='section1' />
				<label className='nav__item' htmlFor='section2' />
				<label className='nav__item' htmlFor='section3' />
				<label className='nav__item' htmlFor='section4' />
			</nav>
			{/* Sections*/}
			<section>
				<div className='fullscreen-section video-section'>
					<video
						autoPlay
						loop
						muted
						className='video-background'
						src={video}
						type='video/mp4'
					></video>
					<div className='overlay'></div>

					<div className='content centered-text'>
						<h1></h1>
					</div>
				</div>
			</section>
			<section>
				<h1>Pure CSS</h1>
			</section>
			<section>
				<h1>Full Screen</h1>
			</section>
			<section>
				<h1>@Ver_Qn</h1>
			</section>
			{/* Fix the white space when scrolling two sections at the time*/}
			<div className='cover' />
		</div>
	);
}

export default Home;
