const date = new Date()

const validMonth = () => {
	if (date.getMonth() === 1) {
		return 'January'
	} else if (date.getMonth() === 2) {
		return 'Febrary'
	} else if (date.getMonth() === 3) {
		return 'March'
	} else if (date.getMonth() === 4) {
		return 'April'
	} else if (date.getMonth() === 5) {
		return 'May'
	} else if (date.getMonth() === 6) {
		return 'June'
	} else if (date.getMonth() === 7) {
		return 'July'
	} else if (date.getMonth() === 8) {
		return 'August'
	} else if (date.getMonth() === 9) {
		return 'September'
	} else if (date.getMonth() === 10) {
		return 'October'
	} else if (date.getMonth() === 11) {
		return 'November'
	} else if (date.getMonth() === 12) {
		return 'December'
	}
}

export const dateNow = () => {
	return `${validMonth()} ${date.getDate()}, ${date.getFullYear()}`
}
