export default function getMonthFromTimestamp (timestamp) {
    return new Date(timestamp).getMonth()+1
}