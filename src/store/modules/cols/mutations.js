import Vue from 'vue';
import * as types from '../../mutation-types';
import {indexAttrBinary} from '../../../util/binary';

export default {
	[types.INSERT_SHEET](state, sheet) {
		Vue.set(state, sheet.alias, {
			list: [],
			map: new Map()
		});
	},
	[types.ADD_COL](state, payload) {
		let cols = payload.cols,
			colState = state[payload.currentSheet],
			list = colState.list,
			map = colState.map;	

		for (let i = 0, len = cols.length; i < len; i++) {
			let col = cols[i];
			list.push(col);
			map.set(col.alias, col);
		}
	},
	[types.INSERT_COL](state, payload) {
		let cols = payload.cols,
			colState = state[payload.currentSheet],
			list = colState.list,
			map = colState.map;	

		for (let i = 0, len = cols.length; i < len; i++) {
			let col = cols[i];
			let index = indexAttrBinary(col.sort, list, 'sort');
			list.splice(index, 0, col);
			map.set(col.alias, col);
		}
	},
	[types.CANCEL_ACTIVE_COL](state, {startIndex, endIndex, currentSheet}){
		let list = state[currentSheet].list;

		for (let i = startIndex; i <= endIndex; i++) {
			list[i].active = false;
		}
	},
	[types.ACTIVE_COL](state, {startIndex, endIndex = startIndex, currentSheet}){
		let list = state[currentSheet].list;

		for (let i = startIndex; i <= endIndex; i++) {
			list[i].active = true;
		}
	},
	[types.BATCH_UPDATE_COL](state, {currentSheet, info}){
		info.forEach(function({col, propName, value}){
			propName = propName.split('.');
			if (propName.length > 1) {
				col[propName[0]][propName[1]] = value;
			} else {
				col[propName[0]] = value;
			}
		});
	},
	[types.DELETE_COL](state, {currentSheet, index}){
		let list = state[currentSheet].list;
		list.splice(index, 1);
	}
};