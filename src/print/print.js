import {writeSync}	from 'fs';

function print (str) {
	return writeSync(1, str, 'utf-8');
}

export default print;