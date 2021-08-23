import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Home.css";

import aboutimg from "../../assets/images/aboutimg.jpg";
import heroimg from "../../assets/images/heroimg.jpg";
import gallery1 from "../../assets/images/img13.jpg";
import gallery2 from "../../assets/images/img6.jpg";
import gallery3 from "../../assets/images/img2.jpg";

// function Home() {

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-introduction flex">
            <h2>Loan Do Cakes</h2>
            <p>
              A unique dessert to wow your guests at parties. <br /> A
              scrumptious treat for yourself and your family.
              <br />
              Bet you can't have just one bite.
            </p>
            <Link to="/ldcakes/gallery">
              <h4>Gallery</h4>
            </Link>
          </div>
          <div className="hero-images">
            <img
              className="hero-cake"
              src={heroimg}
              alt="koi pond jelly cake"
            />
          </div>
        </section>
        <section className="about" id="about">
          <div className="about-image">
            <img src={aboutimg} alt="pink rose jelly cake" />
          </div>
          <div className="about-text flex">
            <h2>ABOUT</h2>
            <div className="about-cakes">
              <h3>Natural ingredients</h3>
              <p>
                All colors and flavors in our cakes are naturally derived from
                fruits and vegetables, such as saffron, taro, butterfly pea
                flowers, and matcha—each with its own special health benefits.
              </p>
            </div>
            <div className="about-health">
              <h3>Health Conscious</h3>
              <p>
                Our jelly cakes is made from agar (rau câu). It is derived from
                seaweed which has zero fat, cholesterol, or sodium. Both our
                jelly and buttercream cakes are also low in sugar. If you are
                craving a healthy
                <em> and </em> tasty dessert, look no further.
              </p>
            </div>
            <div className="about-unique">
              <h3>Wow Factor</h3>
              <p>
                We don't do basic here. Each cake is an edible art piece made
                with love and care. Perfect for birthdays, family gatherings,
                and parties. Make your gatherings that much more memorable with
                our cakes.
              </p>
            </div>
          </div>
        </section>
        <header className="gallery-head">
          <h3>GALLERY</h3>
          <Link to="../Gallery/gallery">
            <p>See more styles</p>
          </Link>
        </header>
        <div className="galleryhome" id="gallery">
          <img className="gallery1" src={gallery1} alt="jelly succulent cake" />
          <img className="gallery2" src={gallery2} alt="rose cream cake" />
          <img className="gallery3" src={gallery3} alt="jelly sunflower cake" />
        </div>
      </div>
    );
    // }
  }
}
