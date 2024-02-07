export default function getLineChartMaxValue (dataArray) {
    if (!dataArray || dataArray.length === 0) {
        return null
    }
    
    let maxPrice = parseFloat(dataArray[0].current_price)
    
    for (let i = 0; i < dataArray.length; i++) {
        const currentPrice = parseFloat(dataArray[i].current_price)
        
        if (currentPrice > maxPrice) {
            maxPrice = currentPrice
        }
    }
    
    return Math.ceil(maxPrice) + 25
}