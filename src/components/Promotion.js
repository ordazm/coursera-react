/** 
 *! Opcion  
function Promotion() {
	return (
		<div>
			<PromoHeading />
		</div>
	);
}

export default Promotion;
*/

/**
 * !Opcion 2 Parent-child data flow
 * *Week 2
 */

const data = {
	heading: "99 off all items",
	callToAction: "Everything must go!",
};

function Promo() {
	return (
		<div>
			<PromoHeading heading={data.heading} callToAction={data.callToAction} />
		</div>
	);
}

export default Promotion;
