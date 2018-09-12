import actions from './actions'
import mutations from './mutations'
import getters from './getters'

/**
 * 状态值
 * 结构为 state = {'sheetAlias' : list []}
 * list为cell对象数组
 * @type {Object}
 */
const state = {
    list: [],
    rowMap: new Map(),
    colMap: new Map(),
    activeComment: false
}

export default {
    state,
    actions,
    mutations,
    getters
}