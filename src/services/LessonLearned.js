function LessonLearned(data, index) {
    var count = 0;
    var sum = 0;
    data.map((el) => {
        if (el.chapter === index && el.islearned) count++;
        sum++;
        return el;
    });

    return `${count}/${sum}`;
}
export default LessonLearned;
