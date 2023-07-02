import Link from 'next/link';

export default function Aside() {
	const asideItems = ['Бренды', 'Бестселлереы', 'Скидки', 'Уход за кожей', 'Сезонные'];
	const asideItemsEng = ['Brands', 'Bestsellers', '50% Discounts', 'Skincare', 'Seasonal'];

	return (
		<aside className={`aside`} data-aos="fade-right" data-aos-offset="300">
			<div className="aside__container">
				<h3 className="aside__title">Catalog</h3>
				<ul className="aside__menu">
					{asideItemsEng.map((item, index) => {
						return (
							<li className="aside__item" key={item} data-aos="fade-right" data-aos-delay={+`${index + 5}00`}>
								<button className={`aside__btn btn`} type="button">
									{item}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
}
