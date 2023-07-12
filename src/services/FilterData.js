function FilterData(data, typeFilter = '') {
    var filtered = [];
    var isRun = true;
    switch (typeFilter) {
        case 'home':
            data.sort(function (a, b) {
                return a.countsubscribe - b.countsubscribe;
            });
            var size = data.length;
            data.splice(8, size - 8);

            break;
        case 'grade':
            while (isRun) {
                let filtering = [];
                for (let index = 0; index < data.length; index++) {
                    const c_result = data[index];
                    for (let i = 0; i < filtered.length; i++) {
                        if (filtered[i].find((x) => x.id === c_result.id) != null) break;
                    }
                    if (filtering.length === 0) {
                        let isAdd = true;
                        for (let i = 0; i < filtered.length; i++) {
                            if (filtered[i].find((x) => x.grade === c_result.grade) != null) {
                                isAdd = false;
                                break;
                            }
                        }
                        if (isAdd) {
                            filtering.push(c_result);
                            continue;
                        }
                    } else if (filtering[0].grade === c_result.grade) filtering.push(c_result);
                }

                filtered.push(filtering);
                let sum = 0;
                for (let i = 0; i < filtered.length; i++) sum += filtered[i].length;
                if (sum === data.length) isRun = false;
            }
            break;
        default:
            while (isRun) {
                let filtering = [];
                for (let index = 0; index < data.length; index++) {
                    const c_result = data[index];
                    for (let i = 0; i < filtered.length; i++) {
                        if (filtered[i].find((x) => x.id === c_result.id) != null) break;
                    }
                    if (filtering.length === 0) {
                        let isAdd = true;
                        for (let i = 0; i < filtered.length; i++) {
                            if (filtered[i].find((x) => x.nameteacher === c_result.nameteacher) != null) {
                                isAdd = false;
                                break;
                            }
                        }
                        if (isAdd) {
                            filtering.push(c_result);
                            continue;
                        }
                    } else if (filtering[0].nameteacher === c_result.nameteacher) filtering.push(c_result);
                }

                filtered.push(filtering);
                let sum = 0;
                for (let i = 0; i < filtered.length; i++) sum += filtered[i].length;
                if (sum === data.length) isRun = false;
            }
            break;
    }
    while (isRun) {
        let filtering = [];
        for (let index = 0; index < data.length; index++) {
            const c_result = data[index];
            for (let i = 0; i < filtered.length; i++) {
                if (filtered[i].find((x) => x.id === c_result.id) != null) break;
            }
            if (filtering.length === 0) {
                let isAdd = true;
                for (let i = 0; i < filtered.length; i++) {
                    if (filtered[i].find((x) => x.nameteacher === c_result.nameteacher) != null) {
                        isAdd = false;
                        break;
                    }
                }
                if (isAdd) {
                    filtering.push(c_result);
                    continue;
                }
            } else if (filtering[0].nameteacher === c_result.nameteacher) filtering.push(c_result);
        }

        filtered.push(filtering);
        let sum = 0;
        for (let i = 0; i < filtered.length; i++) sum += filtered[i].length;
        if (sum === data.length) isRun = false;
        break;
    }
    return filtered;
}
export default FilterData;
