import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";

import Header from "parts/Header";
import Title from "parts/DetailPage/Title";
import FeaturedImage from "parts/DetailPage/FeaturedImage";
import Description from "parts/DetailPage/Description";
import BookingForm from "parts/DetailPage/BookingForm";
import Activities from "parts/DetailPage/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

// Data Dummy
import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    document.title = "Travleeday | Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <Title breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <Description data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={ItemDetails.activities} />
        <Testimony data={ItemDetails.testimonial} />

        <Footer />
      </>
    );
  }
}
