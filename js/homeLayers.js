/** 和getElementById一样只能获取已经存在的Html标签
 *  通过js后续添加的不能获取，getElementsByTagName是动态的
 * let aLayersNav = oLayersNav.querySelectorAll('li')
 * let aLayers = oLayers.querySelectorAll('li')
 * */
let aLayersNav = oLayersNav.getElementsByTagName('li')
let aLayers = oLayers.getElementsByTagName('li')

let lastLayer = 0;
let iNowLayer = 0;
let layersTimer = null;

let layersInfo = [
    { text: 'One Layers' },
    { text: 'Two Layers' },
    { text: 'Three Layers' },
    { text: 'Four Layers' },
]

//动态创建数据
create()

function create() {
    for (let i = 0; i < layersInfo.length; i++) {
        let layersLi = document.createElement('li')
        layersLi.innerHTML = `<h2 class="common-title">${layersInfo[i].text}</h2>`

        let layersNavLi = document.createElement('li')
        if (i == 0) {
            layersLi.className = 'active'
            layersNavLi.className = 'active'
        }
        oLayers.appendChild(layersLi)
        oLayersNav.appendChild(layersNavLi)
    }
}


//弹层切换
layersChange()

function layersChange() {
    for (let i = 0; i < aLayersNav.length; i++) {
        aLayersNav[i].index = i;

        aLayersNav[i].onclick = function() {
            //点击当前显示，直接返回
            if (lastLayer == this.index) return

            for (let j = 0; j < aLayersNav.length; j++) {
                aLayersNav[j].className = ''
            }
            this.className = 'active'

            if (this.index > lastLayer) { //向右切换 模式：左隐藏右显示
                aLayers[lastLayer].className = 'leftHide'
                aLayers[this.index].className = 'rightShow'
            } else { //向左切换 模式：左显示右隐藏
                aLayers[this.index].className = 'leftShow'
                aLayers[lastLayer].className = 'rightHide'
            }
            //同时更新lastLayer 和 iNowLayer
            lastLayer = this.index
            iNowLayer = this.index
        }
    }
}

//自动播放 默认只是一开始播放
layersTimer = setInterval(autoPlayLayers, 2000);

oLayersNav.onmouseover = function() {
    clearInterval(layersTimer)
}


function autoPlayLayers() {
    iNowLayer++
    if (iNowLayer === aLayersNav.length) {
        iNowLayer = 0
    }
    for (let j = 0; j < aLayersNav.length; j++) {
        aLayersNav[j].className = ''
    }
    aLayersNav[iNowLayer].className = 'active'
        //切换模式：左隐藏右显示
    aLayers[lastLayer].className = 'leftHide'
    aLayers[iNowLayer].className = 'rightShow'

    lastLayer = iNowLayer
}