/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import React, { FC, ReactNode } from 'react'
import { CustomInputProps } from '../FormInput'

export type CustomFormInputTag = 'featureName1/name' | 'featureName2/birthDay'

type CustomFormInputBaseProps = CustomInputProps & {
  ctag: CustomFormInputTag
}

// FIXME とりあえず個々の型が構造的部分型的に別であることを識別できるようにするため、ユニークなプロパティを付加している。
export type NameProps = CustomFormInputBaseProps & { ctag: 'featureName1/name'; name?: string }
export type BirthDayProps = CustomFormInputBaseProps & { ctag: 'featureName2/birthDay'; birthday?: string }

export type CustomFormInputPropsType = NameProps | BirthDayProps

export const CustomFormInput: FC<CustomFormInputPropsType> = ({ ctag, ...props }) => {
  //   const [selected, setSelected] = React.useState(props.initValue)
  switch (ctag) {
    case 'featureName1/name':
      return <div>CustomFormInput - featureName1/name</div>
    case 'featureName2/birthDay':
      return <div>CustomFormInput - featureName2/birthDay</div>

    default:
      const exhaustiveCheck: never = ctag
      return <></>
  }
}
