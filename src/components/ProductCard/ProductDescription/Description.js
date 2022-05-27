import { Component } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

class Description extends Component {
    static defaultProps = {
        descr: 'description',
    };

    regExp = /^<.+>.+<\/.+>$/;

    render () {
        const { descr } = this.props;
        const isHTMLString = this.regExp.test(descr);

        return (
            isHTMLString
                ? parse(descr)
                : <p>{descr}</p>
        );
    }
}

Description.propTypes = {
    descr: PropTypes.string.isRequired,
}

export default Description;