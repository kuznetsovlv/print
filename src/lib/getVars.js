const isObj = (v) => {
	return typeof v === 'object' ? v : undefined;
};

export default (v1, v2) => isObj(v1) || isObj(v2) || {};