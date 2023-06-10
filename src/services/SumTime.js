import IntToHours from './IntToHours';

function SumTime(data) {
    var sum = 0;
    data.map((el) => {
        sum += el.timeVideo;
        return el;
    });
    return IntToHours(sum);
}
export default SumTime;
