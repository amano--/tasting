
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import GridRow from './GridRow';
import LabeledRow from './LabeledRow';
import PairRow from './PairRow';import GroupingRow from './GroupingRow';
// TBD このフレームワークのトップレベルPropsの型の設定の検討が必要かも// const composeFunction = (//   fc: React.FC,//   addFunc: (p) => any// ): React.FC => props => fc(addFunc(props));
// const injectByFramework = props => {//   const newProps = { ...props, hoge: 'hogehoge' };//   return newProps;// };
const GridRows = {  Normal: GridRow,  // Hoge1: composeFunction(GridRowPanel, injectByFramework),  Labeled: LabeledRow,  Pair: PairRow,  Grouping: GroupingRow};
export type GridRowType = typeof GridRows[keyof typeof GridRows];
export default GridRows;
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import styled from 'styled-components';
// import settings from '../../components/settings/settings';

// 参考サイト [ 経年劣化に耐える ReactComponent の書き方 ]( https://qiita.com/Takepepe/items/41e3e7a2f612d7eb094a )
// Types層
export type GridRowProps = {};
export type GridRowPanelProps = {} & GridRowProps;
// DOM層
// Style層
const StyledComponent = styled.div`
  #label {    grid-area: label;  }
  #value {    grid-area: value;  }`;
// color: ${settings.theme.mainColor};

// Container層
const GridRowPanel: React.FC<GridRowPanelProps> = props => {  return <StyledComponent {...props} />;};
export default GridRowPanel;

/* eslint-disable react/jsx-props-no-spreading *//* eslint-disable import/prefer-default-export *//* eslint-disable react/button-has-type *//* eslint-disable jsx-a11y/label-has-associated-control *//* eslint-disable @typescript-eslint/no-unused-vars *//* eslint-disable no-console *//* eslint-disable @typescript-eslint/explicit-function-return-type */import React from 'react';
/*   グリッドレイアウト  948 / 6 = 158  948 / 9 = 105.3333  948 / 12 = 79*/export const GridSettings = {  ColumnMax: {    is6: { max: 6, cell: { columnSize: 158 } },    is9: { max: 9, cell: { columnSize: 105 } },    is12: { max: 12, cell: { columnSize: 79 } }  }};
// export type GridSettingsType = typeof GridSettings;export type GridSettingType = typeof GridSettings[keyof typeof GridSettings];
export default function Grid({ children }) {  return (    <>      <div>{children}</div>    </>  );}
