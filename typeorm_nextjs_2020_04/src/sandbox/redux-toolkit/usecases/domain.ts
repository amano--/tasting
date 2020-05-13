type ZipCode = {
  zipCode: string
}

export type PrefDiv = {
  divType: 'PrefDiv'
  divCode: number
  prefName: string
}

export const PrefDivs = {
  tokyo: {
    divType: 'PrefDiv',
    divCode: 10,
    prefName: '東京都'
  },
  ohsaka: {
    divType: 'PrefDiv',
    divCode: 20,
    prefName: '大阪府'
  }
} as const

export type PrefDivType = typeof PrefDivs[keyof typeof PrefDivs]

// 〒100-8111 東京都千代田区千代田１−１
// 〒105-0011 東京都港区芝公園４丁目２−８
// 〒556-0002 大阪府大阪市浪速区恵美須東１丁目１８−６
export const TdAddress = {
  blank: {
    zipCode: '',
    pref: PrefDivs.tokyo,
    address1: ''
  },
  koukyo: {
    zipCode: '1008111',
    pref: PrefDivs.tokyo,
    address1: '東京都千代田区千代田１−１'
  },
  tokyoTower: {
    zipCode: '1050011',
    pref: PrefDivs.tokyo,
    address1: '東京都港区芝公園４丁目２−８'
  },
  tuhtenkaku: {
    zipCode: '5560002',
    pref: PrefDivs.ohsaka,
    address1: '大阪府大阪市浪速区恵美須東１丁目１８−６'
  }
} as const

export type Address = {
  zipCode: string
  pref: PrefDiv
  address1: string
}

export type Profile = Partial<{
  name: string
  address: Address
}>
