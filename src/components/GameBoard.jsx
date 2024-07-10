'use client';

import React, { useState, useEffect } from 'react';
import KittenCard from './KittenCard';
import { getRandomKittens } from '@/services';

const GameBoard = () => {
	const [numOfKittens, setNumOfKittens] = useState(6);
	const [kittens, setKittens] = useState([]);
	const [cardOne, setCardOne] = useState();
	const [cardTwo, setCardTwo] = useState();
	const [solvedKittensArray, setSolvedKittensArray] = useState([]);

	// Function to fetch kittens
	const fetchKittens = async () => {
		const response = await getRandomKittens(numOfKittens);
		if (response.isError) {
			alert(response.error);
		} else {
			console.log('API Reponse:', response.images);
			setKittens(response.images);
		}
	};

	useEffect(() => {
		fetchKittens();
	}, []);

	return (
		<div className="flex flex-wrap flex-row gap-4 w-full justify-center">
			{kittens.map((kitten) => (
				<KittenCard
					key={kitten?.id}
					kitten={kitten}
					cardOne={cardOne}
					setCardOne={setCardOne}
					cardTwo={cardTwo}
					setCardTwo={setCardTwo}
					solvedKittensArray={solvedKittensArray}
					setSolvedKittensArray={setSolvedKittensArray}
				/>
			))}
		</div>
	);
};

export default GameBoard;
