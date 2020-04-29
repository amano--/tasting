/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import styled from 'styled-components'
// Types層
export type PairRowProps = { one: React.FC; two: React.FC; children?: never }
// DOM層
// const Component: React.FC<PairRowProps> = props => (//   <>//     <props.one />//     <props.two />//   </>// );
// Style層
// TODO ベンダープレフィックスの扱い
const StyledComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px;
  grid-template-areas: 'pair1 pair2';
  display: -ms-grid;
  -ms-grid-columns: 1fr 1fr;
  -ms-grid-rows: 60px;
`
const StyledOne = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: -ms-grid;
  -ms-grid-row: 1;
  -ms-grid-column: 1;
`
const StyledTwo = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: -ms-grid;
  -ms-grid-row: 1;
  -ms-grid-column: 2;
`
// Container層
const PairRow: React.FC<PairRowProps> = (props) => {
  return (
    <StyledComponent>
      {' '}
      <StyledOne>
        {' '}
        <props.one {...props} />{' '}
      </StyledOne>{' '}
      <StyledTwo>
        {' '}
        <props.two {...props} />{' '}
      </StyledTwo>{' '}
    </StyledComponent>
  )
}
export default PairRow
