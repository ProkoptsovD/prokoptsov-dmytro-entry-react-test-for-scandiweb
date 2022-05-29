import { Component } from 'react';
import PropTypes from 'prop-types';
import Icons from '../../common/Icons';
import { Wrapper, IncreaseButton, DecreaseButton, DisplayedQuantaty } from './QuantatyPanel.styled';

class QuantatyPanel extends Component {
  static defaultProps = {
    quantaty: '0',
  }
  render() {
    const { quantaty } = this.props;

    return (
      <Wrapper {...this.props}>
          <IncreaseButton {...this.props}>
              <Icons id={'plus'}/>
          </IncreaseButton>
          <DisplayedQuantaty {...this.props}>
              {quantaty}
          </DisplayedQuantaty>
          <DecreaseButton {...this.props}>
              <Icons id={'minus'}/>
          </DecreaseButton>
      </Wrapper>
    );
  };
};

QuantatyPanel.propTypes = {
    quantaty: PropTypes.string.isRequired,
}

export default QuantatyPanel;