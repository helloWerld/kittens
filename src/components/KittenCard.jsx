import React from 'react';

const KittenCard = ({
	kitten,
	cardOne,
	cardTwo,
	setCardOne,
	setCardTwo,
	solvedKittensArray,
	setSolvedKittensArray,
}) => {
	return (
		<div className="flex h-80 w-80 items-center justify-center bg-secondary rounded-lg overflow-clip">
			{/* Click Me */}
			<img src={kitten.url} className="object-cover w-full h-full" />
		</div>
	);
};

export default KittenCard;
