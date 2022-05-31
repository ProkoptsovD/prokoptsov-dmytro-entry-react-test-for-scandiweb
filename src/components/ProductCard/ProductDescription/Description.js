import { Component } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

class Description extends Component {
    static defaultProps = {
        descr: 'description',
    };
    regExp = /^(<.+>)|(<\/.+>)$/gm;
    styles = {
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '1.12',
    }
    render () {
        const { descr } = this.props;
        const isHTMLString = this.regExp.test(descr);
        console.log(isHTMLString)

        return (
            isHTMLString
                ? parse(descr, {
                    replace: domNode => {
                        if (domNode.name === 'h1') {
                            const content = domNode.children[0].data;

                            return <h2 style={this.styles}>{content}</h2>
                        }
                        if (domNode.name === 'h3') {
                            const content = domNode.children[0].data;

                            return <h2 style={this.styles}>{content}</h2>
                        }
                    }
                })
                : <p>{descr}</p>
        );
    }
}

Description.propTypes = {
    descr: PropTypes.string.isRequired,
}

export default Description;