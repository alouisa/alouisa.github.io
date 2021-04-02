function randomInt(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
export function createRandomList(listLength, min, max) {
    let randomList = [];
    for (let i = 0; i < listLength;) {
        let num = randomInt(min, max);
        if (!randomList.includes(num)) {
            randomList.push(num);
            i++;
        }
    }
    return randomList;
}

export function hide(element) {
    element.classList.add('hide');
}

export function show(element) {
    element.classList.remove('hide');
}