/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let pid = document.querySelector("[data-id-page]").getAttribute("data-id-page");
let nid = document.querySelector(`[data-id-nav='${pid}']`);

console.log(pid);
console.log(nid);

if(pid == nid.getAttribute("data-id-nav")) {
    console.log(111);
    nid.classList.add("active");
}
