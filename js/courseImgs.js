courseContent()

function courseContent() {
    //创建节点碎片，用来节约更新html时的性能问题
    let fragment = document.createDocumentFragment();

    let courseImgs = [
        { url: 'img/bks', text: '测试文字的内容测试文字的内容' },
        { url: 'img/gu', text: '测试文字的内容' },
        { url: 'img/hlx', text: '测试文字的内容' },
        { url: 'img/lbs', text: '测试文字的内容' },
        { url: 'img/leonberg', text: '测试文字的内容' },
        { url: 'img/pcwelt', text: '测试文字的内容' },
        { url: 'img/tata', text: '测试文字的内容' },
        { url: 'img/binoli', text: '测试文字的内容' },
        { url: 'img/apcoa', text: '测试文字的内容' },
        { url: 'img/bks', text: '测试文字的内容' },
        { url: 'img/bks', text: '测试文字的内容' },
        { url: 'img/bks', text: '测试文字的内容' },
    ]

    createCourseInfo()

    function createCourseInfo() {

        createImgBg()
        createImgList()

        courseRotateImg.appendChild(fragment)
    }
    //加号背景创建
    function createImgBg() {
        let plusBgLeft = 120; //加号左偏移的阶梯值
        for (let i = 0; i < 5; i++) {
            let imgBg = document.createElement('div')
            imgBg.className = 'img-bg'
            imgBg.style.left = i * plusBgLeft + 'px'
            fragment.appendChild(imgBg)
        }
    }

    function createImgList() {
        for (let i = 0; i < courseImgs.length; i++) {

            let imgBox = document.createElement('div')
            imgBox.className = 'img-box'

            imgBox.innerHTML = `
                <div class="box-before" style="background-image:url(${courseImgs[i].url}.png);"></div>
                <div class="box-after">${courseImgs[i].text}</div>
            `
            fragment.appendChild(imgBox)
        }

    }
}