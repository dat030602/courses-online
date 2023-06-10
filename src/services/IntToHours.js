function IntToHours (time) {
    var hour = parseInt(time / 60);
    var minute = time - hour * 60;
    return `${hour}:${minute}`;
};
export default IntToHours;
