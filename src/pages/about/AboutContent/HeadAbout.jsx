import React from 'react';
import headimg from "../../../img/post-img/about-me/img-1.jpg";
import headimg2 from "../../../img/post-img/about-me/img-2.jpg";

const HeadAbout = () => {
    return (<div className="col-md-8 col-sm-8">

            <div className="about-me-text">
                <img src={headimg} alt="image"/>
                <p className="abt-text">I get inspired when food is the purest form of itself. A
                    peach from a farmer’s market at the end of August tastes exactly like a peach
                    should. I’ve worked at a grocery store and two farms, and can attest to the fact
                    that eating seasonally will change your take on everyday cooking. My intention
                    is to make food taste good through using natural ingredients: whole grains,
                    healthy fats, natural sugar alternatives and the like. I would qualify salad as
                    my favorite food, but a bit of indulgence will certainly wiggle in amongst the
                    vegetables. I don't subscribe to one particular diet or foods that are labeled
                    as "good" or "bad." I try to eat a lot of produce... that's the short story.
                    What I can promise is that here, you will find recipes that use seasonal
                    ingredients, with an intention to not overcomplicate natural foods. I don’t
                    really measure, so the recipes are usually educated guesses that should work for
                    you. Alter my suggestions based on your own tastes- a little more of this, a
                    little less of that. This is art, not science, if you ask me.</p>

                <p className="abt-text">My love, Hugh, happens to be quite the talented
                    photographer. A completely self-taught, image-making mastermind. This blog is
                    our adventure together; for him to take photos, me to learn more about cooking,
                    and enjoy food in good company. We had a precious little boy, Curran, May of
                    2014 and are even more smitten than we assumed we'd be.</p>
                <img src={headimg2} alt="image"/>
                <p className="abt-text">We released our first cookbook with Ten Speed Press in
                    early fall of 2012 - Sprouted Kitchen: A Tastier Take on Whole Foods. It is
                    essentially an echo of the blog's style: a collection of breakfast, snacks,
                    appetizers, mains and treat ideas. The book is mostly vegetarian and produce
                    focused, and my goal is to bridge the gap between eating well and
                    entertaining. Our second book, Bowl + Spoon, was released April 2015 and is
                    a book full of recipes focused around a single vessel - the bowl. The
                    recipes are straight forward, adaptable and full of enough color and flavor
                    to warrant serving to company but comfortable enough for weeknight meals on
                    the couch.</p>

                <p className="abt-text"></p>
            </div>
            <div className="about-faq">
                <h4 className="faq-title">FAQ:</h4>
                <h4>What kind of camera equipment does Hugh use?</h4>
                <p>I make most of the images you see on Sprouted Kitchen with a Canon 5D Mark III +
                    Canon 50mm f/1.2L prime lens. For the tighter images, I'll use a Sigma 50mm f/2.8 EX
                    DG Macro prime lens.</p>
                <p className="for-clk">For a complete rundown on what's in my bag or on my desk, you
                    can <a href="#">click here</a>.</p>
                <h4>Do you do giveaways and product review?</h4>
                <p>We do not. We do sponsored posts and you may email me for a rate sheet.</p>
                <p>Yes! Both recipe development and food photography, respectively, are careers we
                    pursue outside of this space. You can find Hugh's food portfolio here. What you see
                    here on Sprouted Kitchen demonstrates our consistency of style, and if you like what
                    you see, we're up for new projects and opportunities.</p>

                <h4>My favorite foods?</h4>
                <p>Eggs. Leeks. Greens of any sort. Ice Cream. Toasted + Unsalted Pistachios. </p>
                <h4>Hugh's favorite foods?</h4>
                <p>Nutella. Cheeseburgers. Coffee. Bacon. Sara's Turkey Meatballs. </p>

            </div>
        </div>
    );
};

export default HeadAbout;