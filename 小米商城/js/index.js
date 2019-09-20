//菜单栏的切换
var tabs = document.getElementById('tabs').getElementsByTagName('li');
//商品切换
var goods = document.getElementById('lists').getElementsByTagName('ul');
console.log(goods[0])
for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}

function showlist() {
    for (let j = 0; j < tabs.length; j++) {
        if (tabs[j] === this) {
            tabs[j].className = 'active'
            goods[j].className = 'clearfix show'
        } else {
            tabs[j].className = ''
            goods[j].className = 'clearfix'
        }
    }
}

var seckillNav = document.getElementById('seckillNav')
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 260) {
        seckillNav.className = 'seckill-nav fixed';
    } else {
        this.seckillNav.className = 'seckill-nav'
    }
    console.log(scrollTop)
}