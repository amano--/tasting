/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from 'react'
import styled from 'styled-components'
import { LabeledRowProps } from './LabeledRow'
// import settings from '../../components/settings/settings';

// Types層
export type GroupingRowProps = {
  label: React.FC
  nodeList: React.ReactElement<LabeledRowProps>[]
  // TODO children を特定の型のみ許可する方法の調査
  // children?: Array<GridRowType>;
}

const StyledLabel = styled.div<GroupingRowProps>`
  grid-area: groupingLabel;
  background: rgb(237, 132, 247);
  display: -ms-grid;
  -ms-grid-row: 1;
  -ms-grid-row-span: ${(props) => props.nodeList.length - 1};
  -ms-grid-column: 1;
`
// DOM層
// Style層
// nodeList のサイズにしたがって伸び縮み
// TODO ベンダープレフィックスの扱い
const StyledComponent = styled.div<GroupingRowProps>`
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-template-rows: repeat(${(props) => props.nodeList.length - 1}, 50px);
  grid-template-areas: ${(props) =>
    props.nodeList.map(() => "'groupingLabel ...'\n")};
  display: -ms-grid;
  -ms-grid-columns: 130px 1fr;
  -ms-grid-rows: (50px) [ ${(props) => props.nodeList.length - 1}];
`
// Container層
const GroupingRow: React.FC<GroupingRowProps> = (props) => {
  return (
    <StyledComponent {...props}>
      <StyledLabel {...props}>
        <props.label {...props} />
      </StyledLabel>
      {props.nodeList}
    </StyledComponent>
  )
}
export default GroupingRow
