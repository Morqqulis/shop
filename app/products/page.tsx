//----------------------------------------------

import Card from '../components/Card/Card';

export default function Product() {
	return (
		<div className="products">
		<div className='products__container'>
				<h1 className="products__title">Products</h1>
				<div className="products__items">
					<Card />
				</div>
		</div>
		</div>
	);
}
