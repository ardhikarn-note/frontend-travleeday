import React, { Component } from "react";
// import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/PageDetailFeaturedImage";
// import PageDetailDescription from "parts/PageDetailDescription";
// import BookingForm from "parts/PageDetailBookingForm";
// import Activities from "parts/PageDetailActivities";
// import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

// import { checkoutBooking } from "store/actions/checkout";
// import { fetchPage } from "store/actions/page";
import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
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
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        {/* <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section> */}

        {/* <Activities data={page[match.params.id].activityId} /> */}
        {/* <Testimony data={page[match.params.id].testimonial} /> */}

        <Footer />
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   page: state.page,
// });

// export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
//   DetailsPage
// );