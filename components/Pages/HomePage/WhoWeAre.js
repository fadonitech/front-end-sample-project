const WhoWeAre = () => (
	<div className='about-us--section about-us__who-we-are'>
		<div className='about-us__who-we-are--title'>
			<h1 className='source-sans-bold'>Who We Are?</h1>
			<h3 className='open-sans-light title-2'>
				We are a team of passionated people aimed to improve the ways we do
				business online
			</h3>
		</div>
		<div className='about-us__who-we-are--content'>
			<div className='about-us__who-we-are--image'>
				<img src='./image/henrique-fadoni.png' />
				<div className='about-us__who-we-are--image--text'>
					<h3 className='open-sans-light title-2'>Henry Fadoni</h3>
					<h3 className='open-sans-light title-2'>CEO / Founder</h3>
				</div>
			</div>
			{/* <div className='about-us__who-we-are--image'>
				<img src='./image/aqib-hussain.jpg' />
				<div className='about-us__who-we-are--image--text'>
					<h3 className='open-sans-light title-2'>Aqib Hussain</h3>
					<h3 className='open-sans-light title-2'>Software Developer</h3>
				</div>
			</div> */}
		</div>
	</div>
);

export default WhoWeAre;
