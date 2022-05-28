import { Component } from 'react'
import Icons from '../../common/Icons';
import { Wrapper, IncreaseButton, DecreaseButton } from './QuantatyPanel.styled';

class QuantatyPanel extends Component {
  render() {
    return (
      <Wrapper>
          <IncreaseButton>
              <Icons id={'plus'}/>
          </IncreaseButton>
          <DecreaseButton>
              <Icons id={'minus'}/>
          </DecreaseButton>
      </Wrapper>
    );
  };
};


export default QuantatyPanel;