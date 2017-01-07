// import Lego from 'lego-core';
import Lego from '../../dist/lego';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

Lego.init({
    alias: 'HBY', //框架实例别名
    version: '20161202', //版本号
    pageEl: '#container', //页面渲染容器
    defaultApp: 'home', //默认应用
    rootUri: '/example/dist/', //根目录
})
Lego.startApp('index');