import * as common from '../common'
import { numberLike } from './numberLike'

export type isEqual<T extends numberLike, R extends numberLike> = common.isEqual<T, R>