export class Validation {
  /** 必須バリデーション */

  Required = { Message: '必須項目です' }
  /** 全角カタカナのバリデーション */

  ZenkakuKana = {
    Message: '全角カタカナで入力してください',
    Regex: /^([ァ-ン]|ー)+$/
  }

  /** 全角文字のバリデーション */

  Zenkaku = {
    Message: '全角文字で入力してください',
    // TODO 下記の正規表現で問題ないか？
    Regex: /^[ぁ-んァ-ン一-龥]/
  }
}
