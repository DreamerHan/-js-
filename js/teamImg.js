teamContent()

function teamContent() {
    let oTeam = getById('team')
    let teamImg = oTeam.querySelector('.team-img')
    let aTeamLi = teamImg.getElementsByTagName('li')
    let oC = null
    let canvasTimer1 = null
    let canvasTimer2 = null

    createTeamLis()
    bindTeamLi()

    function createTeamLis() { //动态创建每个人的li空间
        let oUl = document.createElement('ul')

        for (let i = 0; i < 8; i++) {
            let oLi = document.createElement('li')

            oLi.style.backgroundPosition = `${- i * 118}px, 0`

            oUl.appendChild(oLi)
        }

        teamImg.appendChild(oUl)
    }

    function bindTeamLi() { //动态创建canvas        

        //不使用onmouseout的原因是担心移除子集Li时导致的冒泡会同样触发该事件
        //同时，由于canvas设置时的层级比li高，移入li时canvas出现就同样是移除了li,同样会冒泡
        teamImg.onmouseleave = function() {
            removeCanvas()
        }

        for (let i = 0; i < aTeamLi.length; i++) {
            aTeamLi[i].index = i
            aTeamLi[i].onmouseover = function() {
                createCanvas(aTeamLi[i].index)

                oC.style.left = this.index * aTeamLi[0].offsetWidth + 'px'
            }
        }
    }

    function createCanvas(index) { //动态创建canvas
        if (!oC) {
            oC = document.createElement('canvas')
            oC.id = 'canvasBubble'

            oC.width = `${aTeamLi[0].offsetWidth}`
            oC.height = `${aTeamLi[0].offsetHeight - 150}`

            teamImg.appendChild(oC)

            canvasMove()
        }
    }

    function removeCanvas() { //删除canvas
        clearInterval(canvasTimer1)
        clearInterval(canvasTimer2)
        teamImg.removeChild(oC)
        oC = null

    }

    function canvasMove() { //canvas冒泡效果

        let oGC = oC.getContext('2d')

        let setArr = []

        canvasTimer1 = setInterval(function() {
            oGC.clearRect(0, 0, oC.width, oC.height)

            for (let i = 0; i < setArr.length; i++) {

                setArr[i].num++;
                //左右的移动距离是来回循环的，就是 0 - 1的基本范围
                setArr[i].x = setArr[i].startX + Math.sin(setArr[i].num * Math.PI / 180) * setArr[i].stepX

                //上下移动距离是不断增加的弧度
                setArr[i].y = setArr[i].startY - (setArr[i].num * Math.PI / 180) * setArr[i].stepY

                if (setArr[i].y < 50) {
                    setArr.splice(i, 1)
                }
            }

            for (let i = 0; i < setArr.length; i++) {
                oGC.fillStyle = `rgba(${setArr[i].c1}, ${setArr[i].c2}, ${setArr[i].c3}, ${setArr[i].c4})`
                oGC.beginPath()
                oGC.moveTo(setArr[i].x, setArr[i].y)
                oGC.arc(setArr[i].x, setArr[i].y, setArr[i].r, 0, 2 * Math.PI)
                oGC.closePath()
                oGC.fill()
            }
        }, 1000 / 60)


        canvasTimer2 = setInterval(function() {
            let x = Math.random() * oC.width // 0-1的变化值
            let y = oC.height - 10 //sin原x轴的弧度移动距离
            let r = Math.random() * 6 + 2
            let c1 = Math.round(Math.random() * 255)
            let c2 = Math.round(Math.random() * 255)
            let c3 = Math.round(Math.random() * 255)
            let c4 = 1
            let num = 0
            let startX = x
            let startY = y
            let stepX = Math.random() * 20 + 10
            let stepY = Math.random() * 20 + 50

            setArr.push({
                x,
                y,
                r,
                c1,
                c2,
                c3,
                c4,
                num,
                startX,
                startY,
                stepX,
                stepY
            })


        }, 80)



    }
}