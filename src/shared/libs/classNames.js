
export function classNames() {
	const classes = [];

	for (let i = 0; i < arguments.length; i++) {
		let arg = arguments[i];
		if (!arg) continue;

		let argType = typeof arg;

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			if (arg.length) {
				let inner = classNames(...arg);
				if (inner) {
					classes.push(inner);
				}
			}
		} else if (argType === 'object') {
			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				classes.push(arg.toString());
				continue;
			}

			for (let key in arg) {
				if (arg.hasOwnProperty(key) && arg[key]) {
					classes.push(key);
				}
			}
		}
	}

	return classes.join(' ');
}

classNames('list', '')