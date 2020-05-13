export type SupportLang = 'en' | 'ja'

export type Label = {
  lang: SupportLang
  text: string
}

export type Account = {
  loginId: string
  email: string
}
