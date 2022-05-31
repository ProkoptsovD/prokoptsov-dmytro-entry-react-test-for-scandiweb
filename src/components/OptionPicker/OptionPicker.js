import { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, OptionButton, OptionList, OptionName, Wrapper } from './OptionPicker.styled';

class OptionPicker extends Component {
    renderOptionButtonList = () => {
        const { option: { items , type}, disabled, selected } = this.props;
        const normalizedType = type.toLowerCase();
        const isText = normalizedType === 'text';

        return items.map(({ value }, idx) => (
            <ListItem
                key={idx}
                id={idx}
            >
                <OptionButton
                    onClick={() => {}}
                    optionType={normalizedType}
                    value={value}
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
        const { wrapper, optionName, optionList } = this.props;

        return (
            <Wrapper {...wrapper}>
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