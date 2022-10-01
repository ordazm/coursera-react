function Promo(props) {
	return (
		<div className='promo-section'>
			<div>
				<h1>
					Don't miss this deal! {props.name} {props.lastName}
				</h1>
			</div>
			<div>
				<h2>
					Suscribe to my newsletter and get all the shop items at 50%
				</h2>
			</div>
		</div>
	);
}

export default Promo;
