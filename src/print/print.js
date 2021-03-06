import {writeSync}	from 'fs';
import styles		from '../lib/styles';
import getVars		from '../lib/getVars';
import getOptions	from '../lib/getOptions';

/**
 * Method for formated printing.
 * @params {string} str - printed string with format marks.
 * @param {array} [...rest] - array of objects with variables and stringsof options.
 * @returns {number} - number of printed bites.
 */
function print (str = '', ...rest) {
	const vars = getVars(rest);
	const options = getOptions(rest);

	const {noStyles = false, noVars = false, final = false, encoding = 'utf8'} = options;

	str = `${str}`;

	if (!noStyles)
		str = str.replace(/\\?@\w+(?:,?\w*)*;/g, (v) => {
			return v.substr(0, 1) === '\\' ? v.substr(1) : v.substring(1, v.length - 1).split(',').map(v => styles[v] || '').join('')
		});

	if (!noVars)
		str = str.replace(/\\?\$\w+;/g, v => v.substr(0, 1) === '\\' ? v.substr(1) : (vars[v.substring(1, v.length - 1)] || v));

	if (final)
		str = `${str}${styles.Reset}\n`;

	return writeSync(1, str, encoding);
}

export default print;