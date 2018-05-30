export default {
	colWidth: 71,
	rowHeight: 19,
	initRowNum: 40,
	initColNum: 26,
	maxRowNum: 500,
	maxColNum: 52,
	/**
	 * 页面左侧距离
	 * @property {int} outerLeft
	 */
	cornerWidth: 37,
	/**
	 * 页面顶部距离
	 * @property {int} outerTop
	 */
	cornerHeight: 20,
	/**
	 * 请求预加载区域宽度,单位px
	 */
	prestrainWidth: 100,
	prestrainHeight: 50,
	/**
	 * 请求区域缓存宽度
	 * @type {Number}
	 */
	scrollBufferWidth: 500,
	scrollBufferHeight: 200,
	/**
	 * 工具栏宽度
	 * @type {Number}
	 */
	toolbarHeight: 130,
	operUrl: {
		'family': 'cell/font-family',
		'size': 'cell/font-size',
		'weight': 'cell/font-weight',
		'italic': 'cell/font-italic',
		'color': 'cell/font-color',
		'underline': 'cell/font-underline',
		'background': 'cell/bg',
		'alignRow': 'cell/align-landscape',
		'alignCol': 'cell/align-portrait',
		'frozen': 'sheet/frozen',
		'unfrozen': 'sheet/unfrozen',
		'rowadjust': 'row/adjust',
		'coladjust': 'col/adjust',
		'border': 'cell/border',
		'texts': 'cell/data-set',
		'merge': 'cell/merge',
		'split': 'cell/split',
		'adjustrow': 'row/adjust',
		'adjustcol': 'col/adjust',
		'deleterow': 'row/reduce',
		'deletecol': 'col/reduce',
		'insertrow': 'row/plus',
		'insertcol': 'col/plus',
		'hiderow': 'row/hide',
		'hidecol': 'col/hide',
		'showrow': 'row/show',
		'showcol': 'col/show'
	},
	operSendPropName: {
		'alignRow': 'align',
		'alignCol': 'align',
		'background': 'color',
		'texts': 'content'
	},
	/**
	 * 请求地址根路径
	 * @type {String}
	 */
	// rootPath: 'http://192.168.1.173:8080/sunbeam/'
	rootPath: 'http://localhost:8080/'
};