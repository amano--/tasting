/* eslint-disable no-param-reassign */
import {
  PayloadAction,
  createSlice,
  CaseReducer,
  configureStore
} from '@reduxjs/toolkit'
import { Profile, Address, PrefDivs } from '../domain/Profile'
import { SampleAddress } from './SampleData'

const name = 'profile/resister'
type State = Partial<{ greetingMessage: string } & Profile>

function findAddressByZipcode(zipCode: string): Address {
  switch (zipCode) {
    case SampleAddress.koukyo.zipCode:
      return SampleAddress.koukyo

    case SampleAddress.tokyoTower.zipCode:
      return SampleAddress.tokyoTower

    default:
      return SampleAddress.koukyo
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

const initialState: State = {
  name: 'init',
  address: SampleAddress.blank
}

export const profileResister = createSlice({
  name,
  initialState,
  reducers: {
    inputZipcode,
    createGreetingMessage
  }
})

// storeを作るヘルパーで、複数のreducerをまとめる
export const store = configureStore({
  reducer: profileResister.reducer
})
