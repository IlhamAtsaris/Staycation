import React, {Component} from 'react';
import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimonials from 'parts/Testimony'
import Footer from 'parts/footer';

import ItemDetails from 'json/itemDetails.json';
import Fade from 'react-reveal/Fade';


class DetailPage extends Component{

    componentDidMount() {
        window.title= "Details Page";
        window.scrollTo(0,0)
    }
    render(){
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" },
          ];
      
        return(
            <>
            <Header {...this.props}/>
            <PageDetailTitle
                breadcrumb={breadcrumb}
                data={ItemDetails}
            >
            </PageDetailTitle>
            <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
            <section className="container">
                <div className="row">
                    <Fade left>
                    <div className="col-7 pr-5 mt-2">
                        <PageDetailDescription data={ItemDetails}></PageDetailDescription>
                    </div>
                    </Fade>
                    <Fade right delay = {1000}>
                    <div className="col-5 mt-2">
                        <BookingForm itemDetails={ItemDetails}></BookingForm>
                    </div>
                    </Fade>
                </div>
            </section>
            <Categories data={ItemDetails.categories}/>
            <Testimonials data={ItemDetails.testimonial}/>
            <Footer/>
            </>
        )
    }   
}

export default DetailPage;