'use client';
//----------------------------------------------

import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import products from '@img/data/products.json';
//----------------------------------------------

interface IProduct {
	id: number;
	name: string;
	image: string;
	price: number;
	newPrice: number;
	discount: number;
	description: string;
	type: string;
	quantity: number;
	rating: number;
	category: string;
}

// const getCardData = async () => {
// 	try {
// 		const response = await axios.get(`/data/products.json`);
// 		setCardData(response.data);
// 	} catch (err) {
// 		console.error('Ошибка при получении данных о продуктах', err);
// 	}
// };

export default function Card() {
	//----------------------------------------------
	const [rating, setRating] = useState(0);
	// const [cardData, setCardData] = useState([]);
	const [product, setProduct] = useState(products);

	//----------------------------------------------
	const handleRating = (rate: number) => {
		setRating(rate);
		const updatedProduct = products.map((prod, i) => {
			if (prod.id === i + 1) {
				return {
					...prod,
					rating: rate,
				};
			}
			return prod;
		});
		
		setProduct(updatedProduct);
		// other logic
	};

	//----------------------------------------------
	// 	useEffect(() => {
	// 		const fetchData = async () => {
	// 			try {
	// 				const response = await axios.get('/data/products.json');
	// 				setCardData(response.data);
	// 				setRating(response.data.rating);
	// 			} catch (error) {
	// 				console.error(error);
	// 			}
	// 		};
	//
	// 		fetchData();
	// 	}, [rating]);

	//----------------------------------------------

	return products.map((data) => {
		return (
			<div className={`products__item card`} key={data.id} data-aos="flip-up">
				<h3 className="card__name">{data.name}</h3>
				<div className="card__image">
					<Image src={data.image} alt={data.name} width={320} height={300} priority={true} placeholder="blur" blurDataURL={data.image} />
					{+data.discount > 0 && <span className="card__discount">{`Скидка ${data.discount}%`}</span>}
					<span className="card__quantity">{`всего: - ${data.quantity}`}</span>
				</div>
				<Rating
					className="card__rating"
					onClick={handleRating}
					initialValue={data.rating}
					SVGclassName={`card__rating-star`}
					fillColor={`gold`}
					titleSeparator={'из'}
					tooltipArray={['card__rating']}
					tooltipDefaultText={'лалывлаывлаыл'}
					transition={true}
					size={35}
					/* Available Props */
				/>
				<div className="card__prices">
					{+data.discount > 0 ? (
						<span className="card__price" style={{ textDecoration: 'line-through', color: 'grey' }}>
							{data.price} azn
						</span>
					) : (
						<span className="card__price">{data.price} azn</span>
					)}
					{+data.discount > 0 && <span className="card__new-price">{`${(data.price - data.price * (data.discount / 100)).toFixed(2)} azn`}</span>}
				</div>

				<div className="card__description">{data.description}</div>
			</div>
		);
	});
}
