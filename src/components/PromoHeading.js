/**
 *! Opcion 1 
function PromoHeading() {
	return <h1>80% off sale!</h1>;
}

export default PromoHeading;
*/

/**
 *! Opcion 2 Parent-child data flow
 **Week 2
 */

function PromoHeading() {
	return (
		<>
			<h1>{props.heading}</h1>
			<h2>{props.callToAction}</h2>
		</>
	);
}

export default PromoHeading;
