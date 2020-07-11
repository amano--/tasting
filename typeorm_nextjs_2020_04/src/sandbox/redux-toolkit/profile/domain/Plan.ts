import { Label } from '../../common/domain'

export type PlanDiv = {
  divType: 'PlanDiv'
  divCode: number
  uname: string
  label: Label
}

export const PlanDivs = {
  bronze: {
    divType: 'PlanDiv',
    divCode: 10,
    uname: 'bronze',
    label: { lang: 'ja', text: 'ブロンズ' }
  },
  gold: {
    divType: 'PlanDiv',
    divCode: 20,
    uname: 'gold',
    label: { lang: 'ja', text: 'ゴールド' }
  }
} as const

export type PlanDivType = typeof PlanDivs[keyof typeof PlanDivs]

export interface Plan {
  div: PlanDiv
}

abstract class PlanBase {
  constructor(public readonly div: PlanDiv) {
    //
  }
}

class BronzePlan extends PlanBase {
  constructor(public readonly div: PlanDiv) {
    super(div)
  }
}
const bronzePlan = new BronzePlan(PlanDivs.bronze)

export namespace Plan {
  export function of(divCode: number): Plan {
    // TODO code から Div 変換ロジックの実装
    return bronzePlan
  }
}
