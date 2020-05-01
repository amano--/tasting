/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice, CaseReducer } from '@reduxjs/toolkit'

const name = 'profile/resister'

type ZipCode = {
  zipCode: string
}

type PrefDiv = {
  divType: 'PrefDiv'
  divCode: number
  prefName: string
}

const PrefDivs = {
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

type Address = {
  zipCode: string
  pref: PrefDiv
  address1: string
}

type Profile = Partial<{
  name: string
  address: Address
}>

const initialState: State = {
  name: 'init',
  address: TdAddress.blank
}

type State = Partial<{ greetingMessage: string } & Profile>

function findAddressByZipcode(zipCode: string): Address {
  switch (zipCode) {
    case TdAddress.koukyo.zipCode:
      return TdAddress.koukyo

    case TdAddress.tokyoTower.zipCode:
      return TdAddress.tokyoTower

    default:
      return TdAddress.koukyo
  }
}

export const inputZipcode: CaseReducer<State, PayloadAction<State>> = (
  draft,
  action
) => {
  const address = findAddressByZipcode(action.payload.address.zipCode)
  draft = { ...action.payload, address }
  return draft
}

export const createGreetingMessage: CaseReducer<State, PayloadAction<State>> = (
  draft,
  action
) => {
  let greetingMessage
  switch (action.payload.address.pref) {
    case PrefDivs.tokyo:
      greetingMessage = 'ようこそ東京へ'
      break

    case PrefDivs.ohsaka:
      greetingMessage = 'でんがな、まんがな、大阪でっせ'
      break

    default:
      greetingMessage = 'ようこそ 世界'
  }

  draft = { ...action.payload, greetingMessage }
  return draft
}

export const profileResister = createSlice({
  name,
  initialState,
  reducers: {
    inputZipcode,
    createGreetingMessage
  }
})
