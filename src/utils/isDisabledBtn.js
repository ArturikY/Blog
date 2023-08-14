export const isDisabledBtn = (quantity, page) => {
	const result = Math.ceil(quantity / 4)
	if (page >= result) {
		return true
	} else {
		return false
	}
}
