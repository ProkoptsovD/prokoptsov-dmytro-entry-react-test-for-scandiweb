import {Component} from 'react';
import PropTypes from 'prop-types';
import { ListItem, OptionButton, OptionList, OptionName, Wrapper } from './OptionPicker.styled';

class OptionPicker extends Component {
    renderOptionButtonList = (optionList) => {
        return optionList.map(({ value }, idx) => (
            <ListItem
                key={idx}
                id={idx}
            >
                <OptionButton {...this.props}>
                    {value}
                </OptionButton>
            </ListItem>
        ));
    };
    render () {
        const { option: { name, items } } = this.props;

        return (
            <Wrapper>
                <OptionName>
                    {name + ':'}
                </OptionName>
                <OptionList>
                    {this.renderOptionButtonList(items)}
                </OptionList>
            </Wrapper>
        );
    }
}

OptionPicker.propTypes = {
    option: PropTypes.object.isRequired,
}

export default OptionPicker;