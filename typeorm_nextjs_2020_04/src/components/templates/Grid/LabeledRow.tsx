/*  eslint-disable  react/destructuring-assignment  */
/*  eslint-disable  react/jsx-props-no-spreading  */
/*  eslint-disable  import/prefer-default-export  */
/*  eslint-disable  react/button-has-type  */
/*  eslint-disable  jsx-a11y/label-has-associated-control  */
/*  eslint-disable  @typescript-eslint/no-unused-vars  */
/*  eslint-disable  no-console  */
/*  eslint-disable  @typescript-eslint/explicit-function-return-type  */

import React from 'react'
import styled from 'styled-components'
//  import  settings  from  '../../components/settings/settings';
//  Types層

export type LabeledRowProps = {
  required?: boolean
  label: React.FC
  value: React.FC
}
//  TBD  span  タグが適切かどうか？

const StyledLabel = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: -ms-grid;
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  background: #f88;
`

const StyledValue = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: -ms-grid;
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  background: #8f8;
`
//  DOM層
//  const  Component:  React.FC<LabeledRowProps>  =  props  =>  (//      <>//          <StyledLabel>//              <props.label  />//          </StyledLabel>//          <StyledValue>//              <props.value  />//          </StyledValue>//      </>//  );
//  Style層
const StyledComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px;
  display: -ms-grid;
  -ms-grid-columns: 200px 200px;
  -ms-grid-rows: 50px;
`
//  Container層
const LabeledRow: React.FC<LabeledRowProps> = (props) => {
  return (
    <StyledComponent>
      <StyledLabel>
        <props.label {...props} />
      </StyledLabel>
      <StyledValue>
        <props.value {...props} />
      </StyledValue>
    </StyledComponent>
  )
}
export default LabeledRow
