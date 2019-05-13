let oNav = getById('nav')
let navList = oNav.getElementsByTagName('li')
let arrow = getById('arrow')

let oHeader = getById('header')
let oContent = getById('content')
let contentBox = getById('content-box')
let boxList = contentBox.querySelectorAll('.box-list')
let listContent = contentBox.querySelectorAll('.list-content')

let worksContent = document.getElementById('works-content')


let contentHeight = 0 //内容部分的初始高度
let nowNav = 2 //当前所在导航的初始值