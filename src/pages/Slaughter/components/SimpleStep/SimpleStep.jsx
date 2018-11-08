import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Step, Button } from '@icedesign/base';

const { Item: StepItem } = Step;
const { Group: ButtonGroup } = Button;

export default class SimpleStep extends Component {
  static displayName = 'SimpleStep';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
    };
  }

  next = () => {
    const s = this.state.currentStep + 1;

    this.setState({
      currentStep: s > 10 ? 10 : s,
    });
  };

  prev = () => {
    const s = this.state.currentStep - 1;

    this.setState({
      currentStep: s < 0 ? 0 : s,
    });
  };

  onClick = (currentStep) => {
    console.log(currentStep);

    this.setState({
      currentStep,
    });
  };

  render() {
    const { currentStep } = this.state;

    return (
      <IceContainer title="屠宰流程">
        <Step current={currentStep}>
          <StepItem title="击晕" onClick={this.onClick} />
          <StepItem title="刺杀放血" onClick={this.onClick} />
          <StepItem title="洗猪" onClick={this.onClick} />
          <StepItem title="浸烫、褪毛/剥皮" onClick={this.onClick} />
          <StepItem title="开膛取内脏 " onClick={this.onClick} />
          <StepItem title="劈半、胴体修整" onClick={this.onClick} />
          <StepItem title="检验、盖印" onClick={this.onClick} />
          <StepItem title="称重" onClick={this.onClick} />
          <StepItem title="冷却排酸" onClick={this.onClick} />
          <StepItem title="包装出厂" onClick={this.onClick} />
        </Step>
        <div style={styles.buttonGroup}>
          <ButtonGroup>
            <Button
              onClick={this.prev}
              type="primary"
              disabled={currentStep === 0}
            >
              上一步
            </Button>
            <Button
              onClick={this.next}
              type="primary"
              disabled={currentStep === 9}
            >
              下一步
            </Button>
          </ButtonGroup>
        </div>
      </IceContainer>
    );
  }
}

const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0 20px',
  },
};
