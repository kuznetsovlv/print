function parseStr (str = '') {
	switch (str) {
		case 'true': return true;
		case 'false': return false;
		case 'undefined': return undefined;
		case 'null': return null;
		case 'NaN': return NaN;
	}

	if (str && /^\d*\.?\d*$/.test(str))
		return parseFloat(str);

	return str;
}

function strToObj  (str = '') {
	return str.split(',').reduce((o, key) => {
		if (/^\w+=\w*$/.test(key)) {
			const [k, v] = key.split('=');
			o[k] = parseStr(v);
		} else {
			o[key] = true;
		}

		return o;
	}, {});
}

export default (params = []) => params.reduce((o = {}, p) => {return typeof p === 'string' ? {...o, ...strToObj(p)} : o}, {});