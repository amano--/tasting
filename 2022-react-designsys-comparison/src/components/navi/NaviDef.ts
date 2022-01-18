import { isString } from 'lodash'

type Bc1FeatureType = 'bc1/hoge' | 'bc1/fuga'
type Bc2FeatureType = 'bc2/hoge' | 'bc2/fuga'
type FeatureType = Bc1FeatureType | Bc2FeatureType

type FeatureDef = { type: FeatureType; name: string; label: string }

type NaviDef = {}

type NaviEvent = {}

type PageNaviEvent = {}

type NaviEventHandler<T = Record<string, unknown>> = (data: T) => NaviEvent
