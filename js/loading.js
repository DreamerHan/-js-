loadingFn()

function loadingFn() {
    let loading = getById('loading')
    let loadingCell = loading.getElementsByTagName('div')
    let loadingBar = loading.getElementsByTagName('span')[0]

    //实现图片预加载
    let imgArr = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'about1.jpg', 'about2.jpg', 'about3.jpg',
        'about4.jpg', 'worksimg1.jpg', 'worksimg2.jpg', 'worksimg3.jpg', 'worksimg4.jpg', 'team.png', 'greenLine.png'
    ]

    let iNow = 0; //用来记录已经加载结束的图片数量

    //图片预加载
    for (let i = 0; i < imgArr.length; i++) {
        let imgObj = new Image()
        imgObj.src = `img/${imgArr[i]}`

        imgObj.onload = function() {
            iNow++
            //进度条根据iNow的变化改变
            loadingBar.style.width = iNow / imgArr.length * 100 + '%'
        }
    }
    //transition的结束回到函数transitionend,可以做过渡回掉
    loadingBar.addEventListener('webkitTransitionend', loadingEnd, false)
    loadingBar.addEventListener('transitionend', loadingEnd, false)

    function loadingEnd() { //图片预加载结束事件
        if (loadingBar.style.width === '100%') {
            loadingBar.style.display = 'none'
            loadingCell[0].style.height = 0
            loadingCell[0].style.opacity = 0
            loadingCell[1].style.height = 0
            loadingCell[1].style.opacity = 0
        }
    }

    loadingCell[1].addEventListener('webkitTransitionend', loadingCellEnd, false)
    loadingCell[1].addEventListener('transitionend', loadingCellEnd, false)

    function loadingCellEnd() { //蒙版层加载结束
        if (loading.parentNode) {
            loading.parentNode.removeChild(loading)
        }
        audio.play()
        entryExitAnimation[0].animationIn()
    }
}