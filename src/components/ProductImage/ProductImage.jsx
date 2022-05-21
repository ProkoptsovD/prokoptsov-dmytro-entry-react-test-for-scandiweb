import React from "react";
import PrevNextButtons from '../ButtonSvgOnly/PrevNextButtons/PrevNextButtons.jsx';
import './ProductImage.scss';

class ProductImage extends React.Component {
    constructor(props) {
        super(props);

        this.image = this.slide(this.props.gallery.length);
        this.state = {
            count: 0
        }
    }
    slide = () => {
        const imagesInGallery = this.props.gallery.length;
        let counter = 0;
        return {
            next: () => {
                if (counter >= imagesInGallery) {
                    this.setState({
                        count: counter,
                    });
                    return;
                }

                counter += 1;
                this.setState({
                    count: counter += 1,
                })
            },
            prev: () => {
                if (counter < 0) {
                    this.setState({
                        count: 0,
                    });
                    return;
                }

                counter -= 1;
                this.setState({
                    count: counter -= 1,
                })
            },
        }
    }
    render() {
        return (
            <>
                <div className="product-image__wrapper">
                    <img
                        src={this.props.gallery[this.state.count]}
                        alt="product"
                        className="product-image"
                    />
                    <PrevNextButtons 
                        count={this.count}
                        slide={this.slide}/>
                </div>
            </>
        )
    }
}

export default ProductImage;