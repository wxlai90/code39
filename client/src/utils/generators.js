export const nricFactory = (() => {

    const _randomNumber = () => {
        return Math.floor(Math.random() * 10);
    }

    const _buildDigits = () => {
        let nric = '';
        while (nric.length < 7) {
            nric += _randomNumber()
        }
        return nric
    }

    const _calculatePrefix = (digits) => {
        const weights = [
            2,
            7,
            6,
            5,
            4,
            3,
            2
        ]

        const checksum = digits.split('').reduce((a, b, index) => a + b * weights[index], 0)

        return String.fromCharCode(75 - checksum % 11 === 74 ? 90 : 75 - checksum % 11 === 75 ? 74 : 75 - checksum % 11)
    }

    const newNric = () => {
        const digits = _buildDigits()
        const prefix = _calculatePrefix(digits)
        return `S${digits}${prefix}`
    }

    return {
        newNric
    }
})()