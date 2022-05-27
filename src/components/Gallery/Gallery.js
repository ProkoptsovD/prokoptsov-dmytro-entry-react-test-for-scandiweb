import React, {Component} from "react";
import PropTypes from 'prop-types';
import Controls from './Controls/';
import { ListItem, PictureList, Wrapper, Picture } from "./Gallery.styled";
import {ReactComponent as ImagePlaceholder} from '../../icons/image-placeholder.svg';

class Gallery extends Component {
    static defaultProps = {
        imageAlt: 'product example',
    };
    state = {
        currentPic: 0,
        totalPics: 0,
    };
    renderImages = (imageList, imageAlt) => {
        return imageList.map((url, idx) => (
            <ListItem
                {...this.props}
                key={idx}
                id={idx}
                isVisible={idx === this.state.currentPic}
            >
                {url
                    ? <Picture src={url} alt={imageAlt} />
                    : <ImagePlaceholder />
                }
            </ListItem>
        ));

        
    };
    componentDidMount() {
        const { imageList } = this.props;

        this.setState({
            totalPics: imageList.length - 1,
        });
    };
    next = () => {
        this.setState(({currentPic}) => {
            const isLastPic = currentPic >= this.state.totalPics;

            return {
                currentPic: isLastPic ? 0 : currentPic += 1,
            }
        });
    };
    prev = () => {
        this.setState(({currentPic}) => {
            const isFirstPic = currentPic <= 0;

            return {
                currentPic: isFirstPic ? this.state.totalPics : currentPic -= 1,
            }
        });
    };
    render() {
        const { imageList, imageAlt } = this.props;
        const { totalPics } = this.state;

        return (
            <Wrapper {...this.props}>
                <PictureList {...this.props}>
                    {this.renderImages(imageList, imageAlt)}
                </PictureList>
                {
                    totalPics > 0 && <Controls
                                        prev={this.prev}
                                        next={this.next} 
                                    />
                }
            </Wrapper>
    );
    };
}

Gallery.propTypes = {
    imageList: PropTypes.arrayOf(PropTypes.string.isRequired),
    imageAlt: PropTypes.string,
}

export default Gallery;