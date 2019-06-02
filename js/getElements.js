let oNav = getById('nav')
let navList = oNav.getElementsByTagName('li')
let arrow = getById('arrow')

let oHeader = getById('header')
let oContent = getById('content')
let contentBox = getById('content-box')
let boxList = contentBox.querySelectorAll('.box-list')
let listContent = contentBox.querySelectorAll('.list-content')
    //音乐部分
let main = getById('main')
let music = getById('music')
let audio = getById('page-audio')

//home部分
let oHome = getById('home')
let oLayers = oHome.querySelector('.layers')
let oLayersNav = oHome.querySelector('.layers-nav')

//course部分
let oCourse = getById('course')
let courseRotateImg = oCourse.querySelector('.course-rotate-img')
let coursePlane1 = oCourse.querySelector('.course-plane1')
let coursePlane2 = oCourse.querySelector('.course-plane2')
let coursePlane3 = oCourse.querySelector('.course-plane3')

//work部分DOM
let worksContent = getById('works-content')
let worksPencil1 = works.querySelector('.works-pencil1')
let worksPencil2 = works.querySelector('.works-pencil2')
let worksPencil3 = works.querySelector('.works-pencil3')

//about部分DOM
let oAbout = getById('about')
let spiderManImgs = oAbout.querySelector('.spider-man-imgs')
let spiderImgBox = spiderManImgs.querySelectorAll('.img-box')

//team部分DOM
let oTeam = getById('team')
let teamTitleBox = oTeam.querySelector('.team-title-box')
let teamIntroBox = oTeam.querySelector('.team-intro-box')

//导航点部分
let contentNav = getById('content-nav')
let aNavs = contentNav.getElementsByTagName('li')

let contentHeight = 0 //内容部分的初始高度
let nowNav = 0 //当前所在导航的初始值 最大4
let lastNowNav = 0 //用来记录上一次导航值
let conNavNum = 5 //点导航的数量和内容最大值一样