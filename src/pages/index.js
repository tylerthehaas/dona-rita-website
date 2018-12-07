import React from 'react';
import { Link, graphql } from 'gatsby';
import Script from 'react-load-script';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { Banner } from '../components/Banner/Banner';
import { FakeImg } from '../components/FakeImg/FakeImg';

import jerkChicken from '../images/jerk-chicken.jpg';
import sauce1 from '../images/sauce-1.jpg';
import jerkCookout from '../images/Jerk_chicken_july_05.jpg';
import jerkPork from '../images/bbqjerkchicgrill.jpg';

function handleScriptLoad() {
	if (typeof window !== `undefined` && window.netlifyIdentity) {
		window.netlifyIdentity.on('init', user => {
			if (!user) {
				window.netlifyIdentity.on('login', () => {
					document.location.href = '/admin/';
				});
			}
		});
	}
	window.netlifyIdentity.init();
}

function IndexPage({ data, location }) {
	return (
		<div className="main">
			<Script
				url="https://identity.netlify.com/v1/netlify-identity-widget.js"
				onLoad={() => handleScriptLoad()}
			/>
			<TitleAndMetaTags />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Carolina Pacific Foods Inc.
						<br />
						<span className="title-desc">Caybana Moon Sauces</span>
						<Typewriter className="title-desc" texts={['Exotic.', 'Bold.', 'Sauces.']} />
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							Carolina Pacific Foods strives to bring you quality, authentic and exotic,
							flavorful Caribbean and Latin American sauces under the brand name of
							Caybana Moon. Our sauces are made with clean &amp; simple ingredients, and
							have no artificial colors or flavors. Also, our sauces are gluten free,
							vegan, contain no high fructose corn syrup, and no trans fats. Most of our
							business is from happy and satisfied customers and their referrals. We would
							welcome the opportunity to earn your trust and provide you with healthy and
							flavorful sauces that easily transform meat, tofu or vegetables into
							authentic gourmet meals!
						</p>

						<p>
							<Link to="/story" className="button">
								Read our story
							</Link>
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="gallery fake-img-group">
						<div className="col fluid md-7 md-push-1 lg-6 lg-push-2 fake-img-wrapper">
							<FakeImg className="-three-x-two" img={jerkChicken} />
						</div>

						<div className="col fluid md-3 fake-img-wrapper">
							<FakeImg className="-two-x-three" img={sauce1} />
						</div>
					</div>
				</div>
			</Section>

			<Section className="-blue">
				<div className="grid">
					<h1 className="col md-push-1 lg-push-2">Eat it</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h3 className="measure-wider">Find a shop</h3>
						<p className="measure-wider">
							Buy our amazing sauces at your local retailers.
						</p>
						<p className="measure-wider">
							<Link to="/stockists" className="button">
								See Stores
							</Link>
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={jerkPork} />
					</div>
				</div>
			</Section>

			<Banner img={jerkCookout} mobileImg={jerkCookout} />

			<Section className="-salmon testimonial">
				<div className="grid">
					<blockquote className="col md-9 md-push-1 lg-push-2">
						<h3 className="h1">
							Emily: a review or some other wording that you really want to get noticed
							can go here.
						</h3>
						<p>Tyler Haas – Haas Development</p>
					</blockquote>
				</div>
			</Section>

			<Section>
				<Contact />
			</Section>
		</div>
	);
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query IndexPageQuery {
		allPostcodesJson {
			edges {
				node {
					allowed
				}
			}
		}
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						name
						address
						postcode
					}
				}
			}
		}
	}
`;

export default IndexPage;
