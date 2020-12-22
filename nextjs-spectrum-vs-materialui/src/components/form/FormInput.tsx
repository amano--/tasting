/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import React, { FC, ReactNode } from 'react'

// export type ChoiceItem = { label: ReactNode; value: string }

export type FormInputTag = 'text' | 'textArea' | 'select' | 'radio' | 'checkbox' | 'custom'

type FormInputBaseProps = {
  tag: FormInputTag
}
// FIXME とりあえず個々の型が構造的部分型的に別であることを識別できるようにするため、ユニークなプロパティを付加している。
export type TextProps = FormInputBaseProps & { tag: 'text'; text?: string }
export type TextAreaProps = FormInputBaseProps & { tag: 'textArea'; textArea?: string }
export type SelectProps = FormInputBaseProps & { tag: 'select'; select?: string }
export type RadioProps = FormInputBaseProps & { tag: 'radio'; radio?: string }
export type CheckboxProps = FormInputBaseProps & { tag: 'checkbox'; checkbox?: string }

export type CustomInputProps = FormInputBaseProps & { tag: 'custom'; ctag: string }

export type FormInputPropsType = TextProps | TextAreaProps | SelectProps | RadioProps | CheckboxProps | CustomInputProps

export const FormInput: FC<FormInputPropsType> = ({ tag, ...props }) => {
  //   const [selected, setSelected] = React.useState(props.initValue)
  switch (tag) {
    case 'text':
      return <div>text</div>
    case 'textArea':
      return <div>textArea</div>
    case 'select':
      return <div>select</div>
    case 'checkbox':
      return <div>checkbox</div>
    case 'radio':
      return <div>radio</div>

    case 'custom':
      return <div>custom</div>

    default:
      // tagged union 使っているので、網羅されていればここに到達することはない。
      // 仮に到達してしまった場合コンパイルエラーになるようにこの行を設定している。
      const exhaustiveCheck: never = tag
      return <></>
  }
}
