function CountChapter(data) {
    var maxValue = 0;
    data.map((el) => {
        if (el.chapter > maxValue) maxValue = el.chapter;
        return el;
    });
    return maxValue;
}
export default CountChapter;
