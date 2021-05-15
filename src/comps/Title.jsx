import React from 'react';

const Title = () => {
	return (
		<div className='title'>
			<h1>PhotoG > Gallery</h1>
			<h2>My Shots</h2>
			<p>
				A photographical stockpile of images by me with the aid of my trust
				Nikon-3200 and my assortment of relatively cheap lenses. For more
				details, visit{' '}
				<a
					href='https://bit.ly/dg-photog'
					rel='noreferrer noopener'
					target='_blank'>
					<span className='photog'>PhotoG</span>
				</a>{' '}
				to learn more about the gear and maybe 'pic' up some tips on making
				cheap look good.
			</p>
		</div>
	);
};

export default Title;
