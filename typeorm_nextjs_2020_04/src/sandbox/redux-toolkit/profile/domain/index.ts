import { Label, DisplayProfile } from '../../common/domain'

export type ZipCode = {
  zipCode: string
}

export type PrefDiv = {
  divType: 'PrefDiv'
  divCode: number
  uname: string
  label: Label
}

export const PrefDivs = {
  tokyo: {
    divType: 'PrefDiv',
    divCode: 10,
    uname: 'tokyo',
    label: { lang: 'ja', text: '東京都' }
  },
  ohsaka: {
    divType: 'PrefDiv',
    divCode: 20,
    uname: 'ohsaka',
    label: { lang: 'ja', text: '大阪府' }
  }
} as const

export type PrefDivType = typeof PrefDivs[keyof typeof PrefDivs]

export type GenderDiv = {
  divType: 'GenderDiv'
  divCode: number
  uname: string
}

export const GenderDivs = {
  man: {
    divType: 'GenderDiv',
    divCode: 10,
    uname: 'man',
    label: { lang: 'ja', text: '男' }
  },
  woman: {
    divType: 'GenderDiv',
    divCode: 20,
    uname: 'woman',
    label: { lang: 'ja', text: '女' }
  }
} as const

export type GenderDivType = typeof GenderDivs[keyof typeof GenderDivs]

export type Address = {
  zipCode: string
  pref: PrefDiv
  address1: string
}

export type Profile = DisplayProfile & {
  name: string
  address: Address
}
