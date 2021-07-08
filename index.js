let index, colsOption;

const createBox = (number) => {
    let box = document.createElement('div'),
    closeBtn = document.createElement('button');
    box.classList.add('box')
    closeBtn.classList.add('closeBtn')
    closeBtn.innerHTML = 'x'
    closeBtn.addEventListener('click', function (e) {
        document.getElementById(number).outerHTML = "";
    })
    box.innerHTML = `<p>${number}</p>`
    box.setAttribute('id', number)
    box.appendChild(closeBtn)
    return box
}

const getColString = (containerWidth, gap) => {
    let width = (containerWidth - (colsOption.value - 1) * gap) / colsOption.value
    let str = '';
    for(let i = 0; i < colsOption.value; i++) {
        str += ` ${width}px`
    }
    return str.trim();
}

const init = () => {
    index = 1;
    colsOption = document.querySelector('#colsOption')
    let resetBtn = document.querySelector('.resetbtn')
    let addMoreBtn = document.querySelector('.addbtn')
    let grid = document.querySelector('.grid')

    addMoreBtn.addEventListener('click', function (e) {
        grid.appendChild(createBox(index++));
    })
    resetBtn.addEventListener('click', function (e) {
        index = 1;
        colsOption.value = 1;
        changeCols();
        grid.innerHTML = '';
    })
}

const changeCols = () => {
    document.querySelector('.grid').style.gridTemplateColumns = getColString(1000, 10);
}

init();