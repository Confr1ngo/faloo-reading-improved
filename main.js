// ==UserScript==
// @name            飞卢小说图片去除
// @name:en         Faloo Picture Remover
// @description     用于删除飞卢小说网页端阅读页面的图片
// @description:en  Used to delete images from the webpage reading page of faloo novel
// @version         0.0.2
// @author          Confringo
// @namespace       https://github.com/gonghengjie/faloo-picture-remover/
// @match           *://b.faloo.com/*_*.html
// @match           *://wap.faloo.com/*_*.html
// @license         AGPL-3.0-or-later
// ==/UserScript==

(function() {
    'use strict';
    try{
        let e = document.evaluate("/html/body/section/div[1]/div[3]/div[1]/a/img", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        e.singleNodeValue.remove();
    }
    catch(k){
        console.log("Script for wap.faloo.com ran into an error. Text will show below:");
        console.log(k.message);
    }
    try{
        let f = document.evaluate("/html/body/div[6]/div/div[1]/div[6]/a/img", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        f.singleNodeValue.remove();
    }
    catch(k){
        console.log("Script for b.faloo.com ran into an error. Text will show below:");
        console.log(k.message);
    }
})();
