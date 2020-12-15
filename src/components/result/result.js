import styled from 'styled-components';

const StyledResult = styled.div`
  position: block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #102C51;
`

export function Result(props) {
    console.log(props);
    const messageCalculateByMonthlyAmont =  `You are planning ${props.monthlyAmount} monthly deposits to reach your $${props.totalAmount} goal by ${props.selectedDate}.`
    const messageCalculateByTotalAmont = `You are saving ${props.monthlyAmount} monthly to save $${props.totalAmount} by ${props.selectedDate}.`

    return (
        <StyledResult>
            <h3>{(!props.isCalculateByTotalAmont) ? 'Total amount' : 'Monthly amount'}</h3>
            <p>
                {(props.isCalculateByTotalAmont) ? messageCalculateByTotalAmont : messageCalculateByMonthlyAmont}
            </p>
        </StyledResult>
    );
}
