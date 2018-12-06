import React from 'react';

export function Contact() {
	return (
		<div>
			<div className="grid">
				<h1 className="col md-push-1 lg-push-2">Contact us</h1>
			</div>

			<div className="grid">
				<p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
					Call Emily at
					<span className="contact-phone">NEED PHONE NUMBER</span>
					<span>
						ALSO NEED TO KNOW WHAT YOUR INSTAGRAM, TWITTER AND FACEBOOK ACCOUNTS ARE
					</span>
					<span className="contact-or">
						<span>or</span>
					</span>
					drop us a line at
					<a href="mailto:carolinapacific@protonmail.com" className="contact-link">
						carolinapacific@protonmail.com
					</a>
				</p>

				<div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
					<a href="https://instagram.com/OiDonaRita" className="button -block">
						Instagram
					</a>
					<a href="https://twitter.com/OiDonaRita" className="button -block">
						Twitter
					</a>
					<a href="https://facebook.com/OiDonaRita" className="button -block">
						Facebook
					</a>
				</div>
			</div>
		</div>
	);
}
