import {Component} from "react";
import PropTypes from 'prop-types';
import Controls from './Controls/';
import { ListItem, PictureList, GalleryWrapper, Picture, ViewPort, InnerWrapper } from "./Gallery.styled";
import {ReactComponent as ImagePlaceholder} from '../../icons/image-placeholder.svg';

class Gallery extends Component {
    static defaultProps = {
        imageAlt: 'product example',
    };
    state = {
        currentPic: 0,
        totalPics: 0,
    };
    componentDidMount() {
        const { imageList } = this.props;

        this.setState({
            totalPics: imageList.length - 1,
        });
    };
    shouldComponentUpdate(_, nextState) {
       return nextState.currentPic !== this.state.currentPic
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
                    ? <Picture id={idx} src={url} alt={imageAlt} />
                    : <ImagePlaceholder />
                }
            </ListItem>
        ));   
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
    onPicClick = (e) => {
        const { id } = e.target;

        this.setState({
            currentPic: id,
        });
    };
    render() {
        const { imageList, imageAlt, small } = this.props;
        const { totalPics, currentPic } = this.state;

        return (
            <GalleryWrapper {...this.props} >
                <InnerWrapper {...this.props} >
                    <PictureList 
                        onClick={this.onPicClick}
                        {...this.props} >
                            {this.renderImages(imageList, imageAlt)}
                    </PictureList>
                    <ViewPort {...this.props}>
                        <Picture src={imageList[currentPic]}/>
                    </ViewPort>
                    {
                        totalPics > 0 && small && <Controls
                                                    prev={this.prev}
                                                    next={this.next} 
                                                />
                    }
                </InnerWrapper>
            </GalleryWrapper>
    );
    };
};

Gallery.propTypes = {
    imageList: PropTypes.arrayOf(PropTypes.string.isRequired),
    imageAlt: PropTypes.string,
};

export default Gallery;