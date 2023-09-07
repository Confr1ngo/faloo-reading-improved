// ==UserScript==
// @name            飞卢小说阅读页面净化
// @description     用于删除飞卢小说网页端阅读页面的无关元素
// @version         0.1
// @author          Confringo
// @namespace       https://github.com/gonghengjie/faloo-reading-improved/
// @match           *://b.faloo.com/*_*.html
// @match           *://wap.faloo.com/*_*.html
// @license         AGPL-3.0-or-later
// ==/UserScript==

(function() {
    'use strict';
    try{
        let wapEle = document.evaluate("/html/body/section/div[1]/div[3]/div[1]/a/img", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        wapEle.singleNodeValue.remove();

    }
    catch(k){}
    try{
        let bEle = document.evaluate("/html/body/div[6]/div/div[1]/div[6]/a/img", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[5]/div/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[5]/div/div[1]/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[5]/div/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[1]/div[6]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[1]/div[5]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[1]/div[4]/p", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[1]/div[5]/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[5]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[1]/div[5]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[4]/div/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
        bEle = document.evaluate("/html/body/div[1]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        bEle.singleNodeValue.remove();
    }
    catch(k){}
})();
