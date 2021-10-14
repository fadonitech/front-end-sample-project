const WhoWeAre = () => (
	<div className='homepage--section homepage__who-we-are'>
		<div className='homepage__what--title'>
			<h1 className='source-sans-bold title-6'>Who We Are?</h1>
			<h3 className='open-sans-light title-26'>
				We are a team of passionated people aimed to improve the ways we do
				business online
			</h3>
		</div>
		<div className='homepage__who-we-are--content'>
			<div className='homepage__who-we-are--image'>
				<img src='./image/henrique-fadoni.png' />
				<div className='homepage__who-we-are--image--text'>
					<h3 className='open-sans-light title-26'>Henry Fadoni</h3>
					<h3 className='open-sans-light title-26'>CEO / Founder</h3>
				</div>
			</div>
			<div className='homepage__who-we-are--image'>
				<img src='./image/aqib-hussain.jpg' />
				<div className='homepage__who-we-are--image--text'>
					<h3 className='open-sans-light title-26'>Aqib Hussain</h3>
					<h3 className='open-sans-light title-26'>Software Developer</h3>
				</div>
			</div>
		</div>
	</div>
);

export default WhoWeAre;
