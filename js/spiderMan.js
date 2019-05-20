let oAbout = getById('about')
let spiderManImgs = oAbout.querySelector('.spider-man-imgs')

createSpiderImg()

function createSpiderImg() {
    let dividedUl = spiderManImgs.querySelectorAll('ul')
    let hiddenSpider = spiderManImgs.querySelectorAll('.hidden-spider')

    for (let i = 0; i < dividedUl.length; i++) {
        dividedUl[i].index = i
        divideImg(dividedUl[i], hiddenSpider[dividedUl[i].index]) //分割图片
    }
}

function divideImg(targetUl, hiddenSpider) {
    let w = targetUl.offsetWidth / 2;
    let h = targetUl.offsetHeight / 2;
    let src = targetUl.dataset.src; //h5中统一设置data-src这种形式的自定义属性时的获取方法

    for (let i = 0; i < 4; i++) {
        let oLi = document.createElement('li')
        oLi.style.width = w + 'px'
        oLi.style.height = h + 'px'

        let oImg = document.createElement('img')
        oImg.src = src

        oImg.style.left = -i % 2 * w + 'px'
        oImg.style.top = -Math.floor(i / 2) * h + 'px';
        //存储每一块的初始位置
        oImg.oldleft = -i % 2 * w
        oImg.oldtop = -Math.floor(i / 2) * h

        oLi.appendChild(oImg)
        targetUl.appendChild(oLi)
    }

    moveImg(targetUl, hiddenSpider, w, h) //分割的图片移动效果

}

function moveImg(targetUl, hiddenSpider, w, h) {
    let moveData = [
        { name: 'top', value: h },
        { name: 'left', value: -w * 2 },
        { name: 'left', value: w },
        { name: 'top', value: -h * 2 }
    ]

    let aImg = targetUl.getElementsByTagName('img')

    targetUl.onmouseover = function() {
        setStyle(hiddenSpider, 'transform', 'scale(1)')
        for (let i = 0; i < aImg.length; i++) {
            aImg[i].style[moveData[i].name] = moveData[i].value + 'px'
        }
    }

    targetUl.onmouseout = function() {
        setStyle(hiddenSpider, 'transform', 'scale(1.3)')
        for (let i = 0; i < aImg.length; i++) {
            aImg[i].style[moveData[i].name] = aImg[i][`old${moveData[i].name}`] + 'px'
        }
    }
}