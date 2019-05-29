//出场入场动画数组集合
const entryExitAnimation = [{
        animationIn: function() { //入场->运动到标准位置透明度为1
            setStyle(oLayers, 'transform', 'translateY(0)')
            setStyle(oLayersNav, 'transform', 'translateY(0)')
            oLayers.style.opacity = 1
            oLayersNav.style.opacity = 1
        },
        animationOut: function() { //出场->分别反向运动透明度为0
            setStyle(oLayers, 'transform', 'translateY(-150px)')
            setStyle(oLayersNav, 'transform', 'translateY(100px)')
            oLayers.style.opacity = 0
            oLayersNav.style.opacity = 0
        }
    },
    {
        animationIn: function() {
            setStyle(coursePlane1, 'transform', 'translate(0, 0)')
            setStyle(coursePlane2, 'transform', 'translate(0, 0)')
            setStyle(coursePlane3, 'transform', 'translate(0, 0)')
        },
        animationOut: function() {
            setStyle(coursePlane1, 'transform', 'translate(-200px, -200px)')
            setStyle(coursePlane2, 'transform', 'translate(-200px, 200px)')
            setStyle(coursePlane3, 'transform', 'translate(200px, -200px)')
        }
    },
    {
        animationIn: function() {
            setStyle(worksPencil1, 'transform', 'translateY(0)')
            setStyle(worksPencil3, 'transform', 'translateY(0)')
            setStyle(worksPencil2, 'transform', 'translateY(0)')
        },
        animationOut: function() {
            setStyle(worksPencil1, 'transform', 'translateY(-100px)')
            setStyle(worksPencil2, 'transform', 'translateY(100px)')
            setStyle(worksPencil3, 'transform', 'translateY(100px)')
        }
    },
    {
        animationIn: function() {
            setStyle(spiderImgBox[0], 'transform', 'rotate(0)')
            setStyle(spiderImgBox[1], 'transform', 'rotate(0)')
        },
        animationOut: function() {
            setStyle(spiderImgBox[0], 'transform', 'rotate(180deg)')
            setStyle(spiderImgBox[1], 'transform', 'rotate(-180deg)')
        }
    },
    {
        animationIn: function() {
            teamTitleBox.style.opacity = 1
            teamIntroBox.style.opacity = 1
            setStyle(teamTitleBox, 'transform', 'translateX(0)')
            setStyle(teamIntroBox, 'transform', 'translateX(0)')
        },
        animationOut: function() {
            teamTitleBox.style.opacity = 0
            teamIntroBox.style.opacity = 0
            setStyle(teamTitleBox, 'transform', 'translateX(-200px)')
            setStyle(teamIntroBox, 'transform', 'translateX(200px)')
        }
    }
]

//进入界面会统一调用出场
everyOut()

function everyOut() {
    entryExitAnimation.forEach(item => item.animationOut())
}