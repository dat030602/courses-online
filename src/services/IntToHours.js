function IntToHours(time, colon = true) {
    var hour = parseInt(time / 60);
    var minute = time - hour * 60;
    if (colon) return `${hour}:${minute}`;
    else {
        if (hour === 0) return `${minute} phút`;
        else return `${hour} giờ ${minute} phút`;
    }
}
export default IntToHours;
