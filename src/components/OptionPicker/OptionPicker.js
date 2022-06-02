import { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, OptionButton, OptionList, OptionName, Wrapper } from './OptionPicker.styled';

class OptionPicker extends Component {
    renderOptionButtonList = () => {
        const { option: { items , type}, disabled, selected } = this.props;
        const normalizedType = type.toLowerCase();
        const isText = normalizedType === 'text';

        return items.map(({ value, displayValue }, idx) => (
            <ListItem
                key={idx}
            >
                <OptionButton
                    id={idx}
                    optionType={normalizedType}
                    value={displayValue}
                    disabled={disabled}
                    selected={idx === selected}
                    {...this.props.optionButton}
                >
                    {isText && value}
                </OptionButton>
            </ListItem>
        ));
    };
    render () {
        const { option: { name } } = this.props;
        const { wrapper, optionName, optionList, id, onClick } = this.props;

        return (
            <Wrapper {...wrapper}
                onClick={onClick}
                id={id}
            >
                <OptionName {...optionName}>
                    {name + ':'}
                </OptionName>
                <OptionList {...optionList}>
                    {this.renderOptionButtonList()}
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