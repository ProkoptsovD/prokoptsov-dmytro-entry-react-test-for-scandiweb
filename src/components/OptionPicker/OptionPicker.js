import {Component} from 'react';
import PropTypes from 'prop-types';
import { ListItem, OptionButton, OptionList, OptionName, Wrapper } from './OptionPicker.styled';

class OptionPicker extends Component {
    renderOptionButtonList = (optionList, type) => {
        const normalizedType = type.toLowerCase();
        const isText = normalizedType === 'text';
        console.log(this.props.optionButton);
        return optionList.map(({ value }, idx) => (
            <ListItem
                key={idx}
                id={idx}
            >
                <OptionButton
                    optionType={normalizedType}
                    value={value}
                    {...this.props.optionButton}
                >
                    {isText && value}
                </OptionButton>
            </ListItem>
        ));
    };
    render () {
        const { option: { name, items, type } } = this.props;
        const { wrapper, optionName, optionList } = this.props;

        return (
            <Wrapper {...wrapper}>
                <OptionName {...optionName}>
                    {name + ':'}
                </OptionName>
                <OptionList {...optionList}>
                    {this.renderOptionButtonList(items, type)}
                </OptionList>
            </Wrapper>
        );
    }
}

OptionPicker.propTypes = {
    option: PropTypes.object.isRequired,
    wrapper: PropTypes.object,
    optionName: PropTypes.object,
    OptionList: PropTypes.object,
}

export default OptionPicker;