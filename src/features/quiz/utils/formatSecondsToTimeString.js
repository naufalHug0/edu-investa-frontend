const formatSecondsToTimeString = (seconds) => {
    const minute = Math.floor(seconds / 60)
    const second = seconds % 60

    return minute > 0 ? `${minute} menit `:'' + second > 0 ? `${second} detik `:''
}

export default formatSecondsToTimeString