const strToOpts  = (str) => {
	return typeof str === 'string' ? str.split(',').reduce((o, key) => {o[key] = true; return o;}, {}) : {};
};

export default (v1, v2) => {
	return {...strToOpts(v1), ...strToOpts(v2)};
};