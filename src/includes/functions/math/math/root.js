root(n, base) {
	if (typeof n != 'object' || n.isBigNumber) {
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(new BigNumber(Math.pow(new BigNumber(n[i]).toNumber(), new BigNumber(1).div(base).toNumber())))
    }
	return result.length == 1 ? result[0] : result
}