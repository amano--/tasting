/* eslint-disable import/no-cycle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import styled from 'styled-components'

// ユーザ定義のコンポーネントの名前は大文字で始めること [ React 公式 / JSX を深く理解する ]( https://ja.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized )
// JSX.IntrinsicElements の説明
// Props の型の説明
//   <form action="xxx.php" method="post"/>
//    ↓
//   props = {action:"",method:"post"}
// 複数タグは return できないことの説明

export type RedProps = { red: string }
// FC (FunctionComponentのショートハンド) 定義の基本形。
// React.FC の 型注釈は必ずつける。
const RedNode: React.FC<RedProps> = (props) => (
  // <> は <React.Fragment> のショートハンド
  <>
    {/* <hoge /> */}
    <p> I am {props.red} </p> {props.children}
  </>
)

// デフォルト値の設定方法
RedNode.defaultProps = { red: 'default red' }
// スタイルの追加方法 HoC(Higher-Order Component) の説明
const StyledRedNode = styled(RedNode)`
  background: red;
`

export type BlueProps = { blue: string }
const BlueNode: React.FC<BlueProps> = (props) => {
  // { 記法だと処理が挟めてしまうので、上記の記法が基本。
  // hooks を使いたい、等の場合に限りこの記法にする。
  console.log(`BlueNode : props=${props}`)
  return (
    <>
      <p> I am {props.blue} </p> {props.children}
    </>
  )
}
const StyledBlueNode = styled(BlueNode)`
  background: blue;
`
export type PanelProps = RedProps & BlueProps
export const Panel: React.FC<PanelProps> = (props) => (
  <>
    <StyledRedNode {...props}>
      {/* 属性の上書き方法 */}
      <StyledBlueNode {...props} blue="bluee" />
    </StyledRedNode>
  </>
)

// 上記JSXは 下記 JavaScriptに置き換えられる。
export const RawPanel: React.FC<PanelProps> = (props) =>
  React.createElement(
    React.Fragment,
    props,
    React.createElement(
      StyledRedNode,
      props,
      React.createElement(StyledBlueNode, { ...props, blue: 'bluee' })
    )
  )
