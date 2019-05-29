createConNav() //内容导航点的创建

function createConNav() {
    for (let i = 0; i < conNavNum; i++) {
        let oNav = document.createElement('li')
        if (i == nowNav) {
            oNav.className = 'active'
        }
        contentNav.appendChild(oNav)
    }
}

conNavClick() //点导航的点击切换

function conNavClick() {
    for (let i = 0; i < conNavNum; i++) {
        aNavs[i].index = i
        aNavs[i].onclick = function() {
            initNav(this.index)
            nowNav = this.index
        }
    }
}

initNav(nowNav)
clickTab()

function initNav(now) { //导航初始化
    //顶层导航的样式统一还原，当前添加
    for (let j = 0; j < navList.length; j++) {
        let oUp = navList[j].getElementsByTagName('p')[0]
        oUp.style.width = ''
    }

    let nowUp = navList[now].getElementsByTagName('p')[0]
    nowUp.style.width = '100%'

    arrow.style.left = navList[now].offsetLeft + navList[now].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'

    contentBox.style.top = -now * contentHeight + 'px'

    //侧边点导航样式的统一还原，当前添加
    for (let i = 0; i < conNavNum; i++) {
        aNavs[i].className = ''
    }
    aNavs[now].className = 'active'

    //进入每一屏开启对用的动画
    if (entryExitAnimation[now].animationIn) {
        entryExitAnimation[now].animationIn()
    }
    //上一屏的动画退出
    if (entryExitAnimation[lastNowNav].animationOut) {
        entryExitAnimation[lastNowNav].animationOut()
    }
}

function clickTab() { //点击切换
    for (let i = 0; i < navList.length; i++) {
        navList[i].index = i;

        navList[i].onclick = function() {
            this.index = this.index !== undefined ? this.index : 0

            lastNowNav = nowNav
            nowNav = this.index
            initNav(this.index)
        }
    }
}

initContent()
window.onresize = initContent

function initContent() { //内容高度初始化
    contentHeight = viewHeight() - oHeader.offsetHeight
    oContent.style.height = contentHeight + 'px'

    for (let i = 0; i < boxList.length; i++) {
        boxList[i].style.height = contentHeight + 'px'
    }
    contentBox.style.top = -nowNav * contentHeight + 'px'
}

listContenPos() //内容显示区域的动态margin-top值
function listContenPos() {
    //marginTop值等于（内容的实际高度-内容的固定高度520）/ 2
    let mt = (contentHeight - 520) / 2

    for (let i = 0; i < listContent.length; i++) {
        listContent[i].style.marginTop = `${mt}px`
    }
}

mouseWheel() //滚动拖动板块切换
function mouseWheel() {
    let bBtn = true
    let timer = null
        //火狐 DOMMouseScroll DOM事件必须用绑定的方式去写addEventListener
        //IE chrome 直接用mousewheel
    if (oContent.addEventListener) {
        oContent.addEventListener('DOMMouseScroll', function(ev) {
            var ev = ev || window.event

            clearTimeout(timer)
            timer = setTimeout(function() {
                scrollFn(ev)
            }, 200)

        }, false)
    }

    oContent.onmousewheel = function(ev) {
        var ev = ev || window.event

        //通过定时器来延迟鼠标滚动的灵活性，达到每次之切换一屏
        clearTimeout(timer)
        timer = setTimeout(function() {
            scrollFn(ev)
        }, 200)
    }

    function scrollFn(ev) {
        /**
         *  火狐滚轮事件 ev.detail 向下->正数   向上->负数  在chrome下始终为0
         *  chrome事件 ev.wheelDelta 向下->负数  向上->正数  在火狐下始终未undefined
         */
        //规范方向，向下为true 向上为false
        if (ev.detail) {
            bBtn = ev.detail > 0 ? true : false
        } else {
            bBtn = ev.wheelDelta < 0 ? true : false
        }
        //在滚动前记录上一次的导航值
        lastNowNav = nowNav;

        if (bBtn) { //向下
            nowNav++
            if (nowNav > boxList.length - 1) {
                nowNav = boxList.length - 1
            }
            initNav(nowNav)
        } else { //向上
            nowNav--
            if (nowNav < 0) {
                nowNav = 0
            }
            initNav(nowNav)
        }


        if (ev.preventDefault) {
            ev.preventDefault()
        } else {
            return false
        }
    }

}