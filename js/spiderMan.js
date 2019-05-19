let oAbout = getById('about')
let spiderManImgs = oAbout.querySelector('.spider-man-imgs')

changeImg()

function changeImg() { //分割被隐藏的图片

    let aUl = spiderManImgs.querySelectorAll('ul')
    let imgSpan = spiderManImgs.querySelectorAll('span')

    for (let i = 0; i < aUl.length; i++) {
        aUl[i].index = i
        divideImg(aUl[i], imgSpan[aUl[i].index])
    }

}

function divideImg(oUl, imgSpan) {
    let w = oUl.offsetWidth / 2;
    let h = oUl.offsetHeight / 2;
    let src = oUl.dataset.src; //h5中统一设置data-src这种形式的自定义属性时的获取方法

    for (let i = 0; i < 4; i++) {
        let oLi = document.createElement('li')
        oLi.style.width = w + 'px'
        oLi.style.height = h + 'px'

        let oImg = document.createElement('img')
        oImg.src = src

        oImg.style.left = -i % 2 * w + 'px'
        oImg.style.top = -Math.floor(i / 2) * h + 'px'
            //存储每一块的初始位置
        oImg.oldleft = -i % 2 * w
        oImg.oldtop = -Math.floor(i / 2) * h

        oLi.appendChild(oImg)
        oUl.appendChild(oLi)
    }


    let data = [
        { name: 'top', value: h },
        { name: 'left', value: -w * 2 },
        { name: 'left', value: w },
        { name: 'top', value: -h * 2 }
    ]

    let aImg = oUl.getElementsByTagName('img')

    oUl.onmouseover = function() {
        setStyle(imgSpan, 'transform', 'scale(1)')
        for (let i = 0; i < aImg.length; i++) {
            aImg[i].style[data[i].name] = data[i].value + 'px'
        }
    }

    oUl.onmouseout = function() {
        setStyle(imgSpan, 'transform', 'scale(1.3)')
        for (let i = 0; i < aImg.length; i++) {
            aImg[i].style[data[i].name] = aImg[i][`old${data[i].name}`] + 'px'
        }
    }

}