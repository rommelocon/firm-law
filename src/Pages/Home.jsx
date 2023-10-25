import { Element, Link } from 'react-scroll';
import backgroundVideo from '../assets/videos/mp4/section-vid.mp4';

export default function Home() {
	const sectionId = [
		{ text: 'Home', id: 'Home' },
		{ text: 'Section', id: 'Second' },
		{ text: 'Section', id: 'Third' },
		{ text: 'Section', id: 'Forth' },
	];

	return (
		<>
			<div className='scroll-indicator'>
				{sectionId.map((section, index) => (
					<Link
						key={index}
						to={section.id}
						activeClass='active'
						spy={true}
						smooth={true}
						offset={-30}
						duration={300}
						className='scroll-indicator-button'
						data-section={section.id}
					></Link>
				))}
			</div>

			<div className='fullscreen'>
				<div className='scroll-container'>
					<Element name='Home' className='scroll-section'>
						<div className='wrapper'>
							<div className='background-video-container'>
								<video autoPlay loop muted className='background-video'>
									<source src={backgroundVideo} type='video/mp4' />
								</video>
								<div className='overlay'></div>
							</div>
							<div className='centered-text'>
								<h1>Lorem ipsum dolor sit amet</h1>
								<p>Nullam commodo metus ipsum.</p>
							</div>
						</div>
					</Element>

					<Element name='Second' className='scroll-section'>
						<div className='wrapper'></div>
					</Element>

					<Element name='Third' className='scroll-section'>
						<div className='wrapper'></div>
					</Element>

					<Element name='Forth' className='scroll-section'>
						<div className='wrapper'></div>
					</Element>
				</div>
			</div>
		</>
	);
}
