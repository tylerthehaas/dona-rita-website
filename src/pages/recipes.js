import React from 'react';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Banner } from '../components/Banner/Banner';
// import { FakeImg } from '../components/FakeImg/FakeImg';

import bbqImg from '../images/bbqcaribbean.jpg';
import Recipe from '../components/Recipe/recipe';

import jerkPork from '../images/bbqjerkchicgrill.jpg';
import sauce from '../images/sauce-1.jpg';

function PressPage() {
	return (
		<div className="main">
			<TitleAndMetaTags title="Press" pathname="press" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Recipes.
						<br />
						<span className="salmon">How to Prepare Jerk!</span>
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						{/* <p className="measure">
							We’ve only been trading since March but the media are already getting
							excited about Dona Rita. Here are some of the names that wrote an article
							about us.
						</p> */}
					</div>
				</div>
			</Section>

			<Banner img={bbqImg} />

			<div className="section -salmon testimonial">
				<div className="grid">
					<blockquote className="col md-9 md-push-1 lg-push-2">
						<h3 className="h1">
							Forget cronuts and duffins, there’s a new baked good in town.
						</h3>
						<p>Ben Norum — Evening standard</p>
					</blockquote>
				</div>
			</div>

			<Section>
				<Recipe title="Jerk Pork" img={jerkPork}>
					There is nothing more tender, flavorful and tasty in the pork world than a pork
					butt. It is sometimes called a shoulder butt. To smoke it, rub some Caybana Moon
					Jerk Sauce and Marinade all over the meat. Place it in your smoker, and follow
					the manufactures directions for smoking that cut and weight of meat. When it is
					finished cooking, cut-off nice chunks of the butt, and serve it with fresh
					Caybana Moon Jerk Sauce and Marinade. Dip each bite into the sauce.
				</Recipe>
				<Recipe title="Jerk Chicken" img={sauce}>
					<p>
						Typically, jerk chicken is prepared by using dark meat pieces such as thighs
						and legs, and it is traditionally prepared and served, bone-in, skin-on. You
						can also jerk chicken breasts as well. During the cooking process, the bones
						and skin help to keep the chicken moist, and add lots of flavor and nutrition!
					</p>
					<p>
						Directions: Place chicken in either a zip-top bag, or in an airtight and
						liquid-tight container. Add a liberal amount of Caybana Moon Jerk Sauce and
						Marinade to the chicken. Remove as much air from your bag or container as you
						can, and then squish or shake the marinade around the chicken to coat it well.
						If using a bag, put the bag of chicken in a dish or pan with sides to catch
						any leaks while in the refrigerator! Place in the refrigerator for 4 to 24
						hours, or longer for a richer flavor. Squish or shake the container of chicken
						a couple times a day while it is marinating. Discard any marinade that
						contacted raw meat. You can cook your chicken in the oven, a slow cooker, an
						electric pressure cooker, a smoker, or on the BBQ grill. Be creative and cook
						it almost anyway you like!{' '}
					</p>
					<p>
						Some words of advice! If cooking on a BBQ grill, you can help prevent burning
						by baking or microwaving the chicken a little first, then place the partially
						cooked chicken on the grill to finish cooking it, and to get that delicious
						BBQ flavor! Serve with some fresh Caybana Moon Jerk Sauce and Marinade in
						dipping bowls, or just spoon some sauce over the top of your cooked chicken.
						Dip each bite of your chicken into the sauce to enjoy the best chicken you
						have ever eaten!!!
					</p>
				</Recipe>
			</Section>
			<Contact />
		</div>
	);
}

export default PressPage;
