let oNav = getById('nav')
let navList = oNav.getElementsByTagName('li')
let arrow = getById('arrow')

let oHeader = getById('header')
let oContent = getById('content')
let contentBox = getById('content-box')
let boxList = contentBox.querySelectorAll('.box-list')
let listContent = contentBox.querySelectorAll('.list-content')


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

//导航点部分
let contentNav = getById('content-nav')
let aNavs = contentNav.getElementsByTagName('li')

let contentHeight = 0 //内容部分的初始高度
let nowNav = 3 //当前所在导航的初始值 最大4
let conNavNum = 5 //点导航的数量和内容最大值一样