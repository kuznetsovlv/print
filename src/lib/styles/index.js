import * as _common	from "./common";
import colors		from "./colors";

function toFormat (obj = {}, pref = '') {
	const res = {};

	for (let key in obj)
		res[`${pref}${key}`] = `\x1b[${obj[key]}m`;

	return res;
}

function setColors (colors = [], shift = 0) {
	const colorList = {};

	colors.forEach((color, i) => {
		colorList[color] = i + shift;
	});

	return colorList;
}

const styles = {...toFormat(_common), ...toFormat(setColors(colors, 30), 'f'), ...toFormat(setColors(colors, 40), 'bg')};

export default styles;
