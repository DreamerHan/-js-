let oNav = getById('nav')
let navList = oNav.getElementsByTagName('li')
let arrow = getById('arrow')

let oHeader = getById('header')
let oContent = getById('content')
let contentBox = getById('content-box')
let boxList = contentBox.querySelectorAll('.box-list')
let listContent = contentBox.querySelectorAll('.list-content')

let worksContent = document.getElementById('works-content')


let contentNav = getById('content-nav')
let aNavs = contentNav.getElementsByTagName('li')

let contentHeight = 0 //内容部分的初始高度
let nowNav = 3 //当前所在导航的初始值 最大4
let conNavNum = 5 //点导航的数量和内容最大值一样