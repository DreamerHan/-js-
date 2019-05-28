worksImgsJs()

function worksImgsJs() {
    let imgs = [
        { url: 'img/worksimg1.jpg', text: '测试文字内容显示效果测试文字内容显示效果' },
        { url: 'img/worksimg2.jpg', text: '测试文字内容显示效果' },
        { url: 'img/worksimg3.jpg', text: '测试文字内容显示效果' },
        { url: 'img/worksimg4.jpg', text: '测试文字内容显示效果' }
    ]

    worksImgs()

    function worksImgs() {
        let worksImgs = worksContent.querySelector('.works-imgs')
        for (let i = 0; i < imgs.length; i++) {
            worksImgs.innerHTML +=
                `<div class="imgs-box">
                    <img src=${imgs[i].url} alt="">
                    <div class="img-mark">
                        <span class="img-info">${imgs[i].text}</span>
                        <div class="show-icon"></div>
                    </div>
                </div>`
        }
        worksContent.appendChild(worksImgs)
    }
}