
import React from 'react';
import { TextInput } from '../textInput/textInput';
import { DateInput } from '../dateInput/dateInput';
import { Button } from '../button/button';
import { Switch } from '../switch/switch';
import { Result } from '../result/result';

import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 310px;
  background-color: #FFFEFE;
  border-radius: 6px;
  padding: 45px;
`

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCalculateByTotalAmont: true,
      totalAmount: '',
      monthlyAmount: '',
      selectedDate: '2022-01-01',
      differenceInMonth: ''
    }
  }

  hangeChange = (e) => {

    let currDate = new Date();
    let selectedDate = new Date(this.state.selectedDate);
    var difference = selectedDate - currDate;
    var differenceInMonth = parseInt(difference * 0.00000000038);
    if (this.state.isCalculateByTotalAmont) {
      this.setState({ monthlyAmount: e.target.value / differenceInMonth, differenceInMonth });
    } else {
      this.setState({ totalAmount: e.target.value * differenceInMonth, differenceInMonth });
    }

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleisCalculateByTotalAmont = () => {
    this.setState({
      isCalculateByTotalAmont: !this.state.isCalculateByTotalAmont,
      totalAmount: '',
      monthlyAmount: '',
      selectedDate: '2022-01-01',
      differenceInMonth: ''
    })
  }

  render() {

    return (
      <StyledContainer>
        <h2>
          Savings
          calculator
        </h2>

        <Switch isCalculateByTotalAmont={this.state.isCalculateByTotalAmont} onChange={this.toggleisCalculateByTotalAmont} />

        <TextInput
          onChange={this.hangeChange}
          isCalculateByTotalAmont={this.state.isCalculateByTotalAmont}
          totalAmount={this.state.totalAmount}
          monthlyAmount={this.state.monthlyAmount}
        />

        <DateInput onChange={this.hangeChange} />
        <Result
          isCalculateByTotalAmont={this.state.isCalculateByTotalAmont}
          totalAmount={this.state.totalAmount}
          monthlyAmount={this.state.monthlyAmount}
          selectedDate={this.state.selectedDate}
          differenceInMonth={this.state.differenceInMonth}
        />

        <Button title='Finish' />
      </StyledContainer>

    )
  }
}


export default Container;