function getById(id) {
    return document.getElementById(id)
}

function viewWidth() { //可视宽
    return window.innerWidth || document.documentElement.clientWidth
}

function viewHeight() { //可视高
    return window.innerHeight || document.documentElement.clientHeight
}

function setStyle(obj, attr, value) { //js中需要加浏览器前缀的兼容
    obj.style[attr] = value
    obj.style[`webkit${attr.substring(0,1).toUpperCase()}ttr`] = value
}