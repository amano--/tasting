import { PrefDivs } from '../domain'

// 〒100-8111 東京都千代田区千代田１−１
// 〒105-0011 東京都港区芝公園４丁目２−８
// 〒556-0002 大阪府大阪市浪速区恵美須東１丁目１８−６
export const SampleAddress = {
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
