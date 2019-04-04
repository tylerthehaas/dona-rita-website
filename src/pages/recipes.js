import React from "react";

import { TitleAndMetaTags } from "../components/TitleAndMetaTags/TitleAndMetaTags";
import { Section } from "../components/Section/Section";
import { Contact } from "../components/Contact/Contact";
import { Banner } from "../components/Banner/Banner";

import Recipe from "../components/Recipe/Recipe";

import bbqImg from "../images/bbqcaribbean.jpg";
import jerkPork from "../images/bbqjerkchicgrill.jpg";
import jerkRibs from "../images/jerk-ribs.jpg";
import sauce from "../images/sauce-mild.jpg";
import pulledJerkChicken from "../images/pulled-jerk-chicken.jpg";
import grillAssortment from "../images/grill-assortment.jpg";

function PressPage() {
  return (
    <div className="main">
      <TitleAndMetaTags title="Press" pathname="press" />
      <Section>
        <div className="grid">
          <h1 className="col -block md-push-1 lg-push-2 title">
            Recipes.
            <br />
            <span className="sub-title">How to Prepare Jerk!</span>
          </h1>
        </div>
      </Section>

      <Banner img={bbqImg} mobileImg={bbqImg} />

      <Section>
        <Recipe title="Jerk Chicken" img={sauce}>
          <blockquote>
            I had never even heard of jerk chicken until I tried your jerk
            chicken with Caybana Moon’s Mild Jerk Sauce and Marinade! The
            chicken was so moist and flavorful. I love how the smokiness from
            the barbecued chicken blended so nicely with the Caribbean jerk
            spices! It was positively addictive! I do like spicy foods as well,
            so I couldn’t wait to try your Caybana Moon Spicy Jerk Sauce and
            Marinade. It was spot-on! I loved the heat and flavor it gave to my
            jerk chicken, and when I make jerk ribs, they are so moist,
            flavorful and spicy! I have served jerk chicken and pork, using
            Caybana Moon’s Jerk Sauce and Marinade, to many of our friends, and
            they love it too! Just can’t get enough of it!!!
            <span> &#8212; Barb W, Lynden, WA</span>
          </blockquote>
          <p>
            Typically, jerk chicken is prepared by using dark meat pieces such
            as thighs and legs, and it is traditionally prepared and served,
            bone-in, skin-on. You can also jerk chicken breasts as well. During
            the cooking process, the bones and skin help to keep the chicken
            moist, and add lots of flavor and nutrition!
          </p>
          <p>
            <span className="bold">Directions:</span> Place chicken in either a
            zip-top bag, or in an airtight and liquid-tight container. Add a
            liberal amount of Caybana Moon Jerk Sauce and Marinade to the
            chicken. Remove as much air from your bag or container as you can,
            and then squish or shake the marinade around the chicken to coat it
            well. If using a bag, put the bag of chicken in a dish or pan with
            sides to catch any leaks while in the refrigerator! Place in the
            refrigerator for 4 to 24 hours, or longer for a richer flavor.
            Squish or shake the container of chicken a couple times a day while
            it is marinating. Discard any marinade that contacted raw meat. You
            can cook your chicken in the oven, a slow cooker, an electric
            pressure cooker, a smoker, or on the BBQ grill. Be creative and cook
            it almost anyway you like!{" "}
          </p>
          <p>
            Some words of advice! If cooking on a BBQ grill, you can help
            prevent burning by baking or microwaving the chicken a little first,
            then place the partially cooked chicken on the grill to finish
            cooking it, and to get that delicious BBQ flavor! Serve with some
            fresh Caybana Moon Jerk Sauce and Marinade in dipping bowls, or just
            spoon some sauce over the top of your cooked chicken. Dip each bite
            of your chicken into the sauce to enjoy the best chicken you have
            ever eaten!!!
          </p>
        </Recipe>
        <Recipe title="Pulled Jerk Chicken" img={pulledJerkChicken}>
          <p>
            You can also remove the skin and bones and shred or pull the chicken
            and toss it with lots of Caybana Moon Jerk Sauce and Marinade. You
            can then make the tastiest Jerk Chicken sandwiches, by serving the
            pulled Jerk Chicken on rolls with some spicy, crisp coleslaw!
            Caybana Moon Jerk Chicken tastes great on top of a fresh, crispy
            tossed salad too! Use your imagination and try it any way you like!
          </p>
        </Recipe>
        <Recipe title="Jerk Wings and Drumettes">
          <blockquote>
            Talk about a flavor explosion in your mouth!!! I love your Caybana
            Moon Spicy Jerk Sauce and Marinade!!! I was looking for a new,
            flavorful sauce to use on chicken thighs and chicken Wings. I made a
            batch of jerk chicken using Caybana Moon’s Spicy Jerk Sauce and
            Marinade. I marinated the chicken thighs in your sauce for about 8
            hours, and then cooked them in my smoker, and they turned-out so
            well, that I decided to serve-up some spicy jerk wings at my Super
            Bowl party. Man, your Caybana Moon Spicy Jerk Sauce and Marinade is
            like having a party in a bottle!!!
            <span> &#8212; John W, Bellingham, WA</span>
          </blockquote>
          <p>
            Caybana Moon Jerk Sauce and Marinade is the perfect choice for
            making the best wings you’ve ever had!
          </p>

          <p>
            <span className="bold">Directions:</span> Place chicken wings or
            drumettes in either a zip-top bag, or in an airtight and
            liquid-tight container. Did you know that drumettes are the meatiest
            portion of the wing, and have lots of flavor, so give them a try!
            Add a liberal amount of Caybana Moon Jerk Sauce and Marinade to the
            chicken. Remove as much air from your bag or container as you can,
            and then squish or shake the marinade around the chicken to coat it
            well. Put the bag of chicken in a dish or pan with sides to catch
            any leaks while in the refrigerator! Place in the refrigerator for 4
            to 24 hours, or longer for a richer flavor. Squish or shake the
            container of chicken a couple times a day while it is marinating.
            Discard any marinade that contacted raw meat. Preheat oven to 450
            degrees F (230 degrees C). Line a baking sheet with aluminum foil
            and spray with cooking spray. Place chicken wings or drumettes on
            prepared baking sheet, and bake in the preheated oven for 25
            minutes. Juices should run clear when meat is cooked properly. Serve
            with fresh Caybana Moon Jerk Sauce and Marinade, and dip each bite
            into the sauce and enjoy!
          </p>
        </Recipe>
        <Recipe title="Jerk Pork" img={jerkPork}>
          <p>
            There is nothing more tender, flavorful and tasty in the pork world
            than a pork butt. It is sometimes called a shoulder butt.
          </p>
          <p>
            To smoke it, rub some Caybana Moon Jerk Sauce and Marinade all over
            the meat. Place it in your smoker, and follow the manufactures
            directions for smoking that cut and weight of meat. When it is
            finished cooking, cut-off nice chunks of the butt, and serve it with
            fresh Caybana Moon Jerk Sauce and Marinade. Dip each bite into the
            sauce.
          </p>
        </Recipe>
        <Recipe title="Pulled Jerk Pork">
          <blockquote>
            I’m a Southern Girl, so naturally, I had to make some pulled pork
            sandwiches with your Caybana Moon Mild Jerk Sauce and Marinade at
            our cook out. I don’t like spicy-hot foods, so I decided to try your
            Caybana Moon Mild Jerk Sauce and Marinade. I marinated a pork butt,
            that I cut-up into smaller chunks, in a large zip-top bag with lots
            of Caybana Moon Mild Jerk Sauce and Marinade. I put it in the fridge
            for around 24 hours, and then I cooked it in my smoker in the back
            yard. The meat just fell apart. I then mixed-in some fresh Caybana
            Moon Mild Jerk Sauce and Marinade, and put the jerked pork on some
            nice, soft potato bread rolls. I made my favorite Carolina coleslaw,
            and served it beside the pulled pork sandwiches. My oh my was it
            ever good!!! I served this to my aunt, uncle and cousins, and they
            had to have seconds they liked it so much!!!
            <span> &#8212; Shelby H., Charlotte, NC</span>
          </blockquote>
          <p>
            You can also pull and shred the pork butt, after you’ve smoked it,
            and toss it with lots of Caybana Moon Jerk Sauce and Marinade. It is
            great served as a Po’ Boy with some spicy, crisp coleslaw on the
            bun, or served on top of a fresh, crispy tossed salad. Of course,
            you can eat the pulled pork straight-up, tossed with Caybana Moon
            Jerk Sauce and Marinade!
          </p>
        </Recipe>
        <Recipe title="Jerk Ribs" img={jerkRibs}>
          <p>
            We recommend using baby back ribs as they are meaty, tender and
            flavorful. Remove the membrane from the underside of the ribs. Line
            a cookie sheet with foil. Place ribs on top of foil lined cookie
            sheet, and rub Caybana Moon Jerk Sauce and Marinade all over the
            ribs, both top and bottom. Cover with plastic wrap or foil, and
            place in the refrigerator overnight. Follow your manufacturer’s
            directions for smoking the ribs. When done, serve with fresh Caybana
            Moon Jerk Sauce and Marinade, and dip each bite into the sauce. You
            can also bake your ribs in the oven, tightly wrapped in foil, at a
            low temperature, or cook them in a slow cooker. Follow the
            manufacturer’s directions for baking, or slow cooking them.
          </p>
        </Recipe>
        <Recipe title="Jerk Seafood, Vegetables, Jackfruit and Tofu">
          <p>
            <strong>Directions:</strong> Place seafood, vegetables, jackfruit or
            tofu in either a zip-top bag, or in an airtight and liquid-tight
            container. Add a liberal amount of Caybana Moon Jerk Sauce and
            Marinade to your seafood, vegetables, jackfruit or tofu. Remove as
            much air from your bag or container as you can, and then gently
            squish or shake the marinade around the food to coat it well. Put
            the bag of food in a pan with sides to catch any leaks while in the
            refrigerator! Place in the refrigerator for 1 to 2 hours, or longer
            for a richer flavor. Squish or shake the container of food halfway
            through the marinating cycle, but handle carefully when marinating
            tofu as it is fragile. Discard any marinade that contacted raw meat
            or seafood. Bake or simmer tofu in Caybana Moon Jerk Sauce and
            Marinade until hot, and serve with extra dipping sauce. Place
            vegetables or jackfruit on the BBQ grill, or indoor grill, and cook
            until done. The grill marks make a nice presentation, and we
            especially recommend grilling squashes like yellow summer squash or
            zucchini! You can also sauté your vegetables in the jerk sauce in a
            frying pan. For seafood and fish, place on a BBQ grill, indoor
            grill, in the oven, or frying pan, and cook until just done. Do not
            overcook! Serve with fresh Caybana Moon Jerk Sauce and Marinade, or
            simply ladle some sauce on top of your food. Dip each bite into the
            sauce.
          </p>
        </Recipe>
        <Recipe title="Be Creative!" img={grillAssortment}>
          <p>
            Caybana Moon Jerk Sauce and Marinade is great on hamburgers, grilled
            chicken breast fillets and patties, sausages, potatoes such as tater
            tots or French Fries, or as a dipping sauce for chicken nuggets,
            fish sticks, fried mozzarella sticks or for fresh vegetables. You
            can mix it with sour cream or mayonnaise to make the dipping sauce
            creamy! Use it like you would ketchup, mayonnaise, mustard or your
            favorite condiment.
          </p>
        </Recipe>
      </Section>
      <Contact />
    </div>
  );
}

export default PressPage;
