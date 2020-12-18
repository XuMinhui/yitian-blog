(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{607:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("现在网络上的资料越来越丰富，我们每个人都免不了需要去一些平台查找一些资料信息。但是查询到的内容我们往往会很头疼，因为平台会限制你的复制功能，除非你充值网站会员，但是我们需要复制的次数较少的情况下，大多数人都不会选择去花钱去开会员的，这就让人非常的头疼了。")]),t._v(" "),a("p",[t._v("今天分享一下本人收集的几种很常用也很实用的内容提取方法")])]),t._v(" "),a("h2",{attrs:{id:"禁止复制的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止复制的原理"}},[t._v("#")]),t._v(" 禁止复制的原理")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("温馨提示")]),t._v(" "),a("p",[t._v("本节内容需要有javascript 编程基础，可选择直接跳过")])]),t._v(" "),a("p",[t._v("复制和粘贴操作是网民日常的一些基本操作，但有些网站为了保护版权（如小说类、图片类），禁止用户执行这些操作，这样就可以防止用户将正在浏览的文本，通过复制、粘贴的方式进行传播了。")]),t._v(" "),a("p",[t._v("这里主要涉及到两个DOM 事件")]),t._v(" "),a("h3",{attrs:{id:"oncopy-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oncopy-事件"}},[t._v("#")]),t._v(" "),a("strong",[t._v("oncopy 事件")])]),t._v(" "),a("p",[a("strong",[t._v("定义")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("oncopy 事件在用户拷贝元素上的内容时触发。")]),t._v(" "),a("li",[t._v("oncopy 事件在用户拷贝元素时也会触发，例如， 拷贝 "),a("code",[t._v("<img>")]),t._v(" 元素。")]),t._v(" "),a("li",[t._v('oncopy 事件通常用于 type="text" 的 '),a("code",[t._v("<input>")]),t._v("元素。")])]),t._v(" "),a("p",[a("strong",[t._v("拷贝方式")]),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("按下 CTRL + C")]),t._v(" "),a("li",[t._v('在你的浏览器的 Edit(编辑) 菜单中选择 "Copy（复制）"')]),t._v(" "),a("li",[t._v('右键鼠标按钮，在上下文菜单中选择 "Copy（复制）" 命令。')])]),t._v(" "),a("p",[a("strong",[t._v("浏览器支持")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617084025664.png",alt:"image-20200617084025664"}})]),t._v(" "),a("p",[t._v("使用方法：")]),t._v(" "),a("ol",[a("li",[t._v("HTML 中利用绑定方法")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("oncopy")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Javascript 中利用对象身上的方法")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("oncopy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//操作  ")]),t._v("\n    myScript  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Javascript 中利用事件监听的方式")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'copy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("myScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//IE8及更早的IE版本不支持addEventListener()方法")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"onpaste-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onpaste-事件"}},[t._v("#")]),t._v(" onpaste 事件")]),t._v(" "),a("p",[a("strong",[t._v("定义")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("onpaste 事件在用户向元素中粘贴文本时触发。")])]),t._v(" "),a("li",[a("p",[t._v("虽然使用的 HTML 元素都支持 onpaste 事件，但实际上并非支持所有元素，例如 "),a("code",[t._v("<p>")]),t._v('元素， 除非设置了 contenteditable 为 "true" 。')])]),t._v(" "),a("li",[a("p",[t._v('onpaste 事件通常用于 type="text" 的 '),a("code",[t._v("<input>")]),t._v(" 元素。")])])]),t._v(" "),a("p",[a("strong",[t._v("粘贴方式")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("按下 CTRL + V")]),t._v(" "),a("li",[t._v('从浏览器的编辑菜单中选择 "Paste（粘贴）"')]),t._v(" "),a("li",[t._v('右击鼠标按钮在上下文菜单中选择 "Paste（粘贴）" 命令。')])]),t._v(" "),a("p",[a("strong",[t._v("浏览器支持")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617085404343.png",alt:"image-20200617085404343"}})]),t._v(" "),a("p",[a("strong",[t._v("语法")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("HTML 中利用绑定方法")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onpaste")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Javascript 中利用对象身上的方法")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onpaste")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//操作")]),t._v("\n  myScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Javascript 中利用事件监听的方式")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paste'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("myScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Internet Explorer 8 及更早 IE 版本不支持 addEventListener() 方法。")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),a("p",[t._v("执行复制与粘贴事件，并在事件中返回false。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bodyMain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bodyMain'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//禁止复制")]),t._v("\n                 bodyMain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("oncopy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//禁止粘贴")]),t._v("\n                 bodyMain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onpaste")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"百度文库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百度文库"}},[t._v("#")]),t._v(" 百度文库")]),t._v(" "),a("h3",{attrs:{id:"一、用一行代码提取内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、用一行代码提取内容"}},[t._v("#")]),t._v(" 一、用一行代码提取内容")]),t._v(" "),a("p",[t._v("话不多说，直接上代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".reader-word-layer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在需要提取的内容页面按F12 调出控制台，切换到Console 栏，粘贴以下代码到控制台中，敲击回车")]),t._v(" "),a("p",[t._v("强行一行代码提取所有文字信息，但是看起来有点奇怪，原因是仅仅简单的做了下内容拼接，并未实现换行，所有内容挤在了一行")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617090900451.png",alt:"image-20200617090900451"}})]),t._v(" "),a("p",[t._v("可以如下改良一下代码，手动添加换行")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" topDiff "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".reader-word-layer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \ntarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" topDiff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        topDiff "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("使用方法也是一样的，复制代码粘贴到控制台")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617091452463.png",alt:"image-20200617091452463"}})]),t._v(" "),a("p",[t._v("上面代码就实现了跟文档一样的内容换行了，看起来舒服多了")]),t._v(" "),a("p",[t._v("其实市面上很多所谓的"),a("code",[t._v("百度文库提取器")]),t._v("，各种牛逼的大佬APP，只要是光内容提取，却丢了文档样式的，无非就是包装了以下上面这几行代码的产物而已")]),t._v(" "),a("p",[t._v("有了这方法，有个浏览器，会粘贴复制就行，压根不用去下载什么第三方")]),t._v(" "),a("h3",{attrs:{id:"二、油猴插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、油猴插件"}},[t._v("#")]),t._v(" 二、油猴插件")]),t._v(" "),a("p",[t._v("油猴插件是个非常牛叉的工具，里面集成的js 脚本可以大大增强我们的浏览器体验及操作便利性。如果圈内人不去接触使用一下就真太可惜了。")]),t._v(" "),a("p",[t._v("具体安装方法就不在这讲了，特别简单，本质上就是个浏览器的扩展插件（chrome内核的可以，firefox好像也行，其他的没试过）。就是下面这个黑黑的东西")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617092422656.png",alt:"image-20200617092422656"}})]),t._v(" "),a("p",[t._v("油猴安装好了之后，我们可以在他的脚本网站（我一般用的是这个"),a("a",{attrs:{href:"https://greasyfork.org/zh-CN/scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("greasyfork"),a("OutboundLink")],1),t._v("）下载各种符合我们需求的插件")]),t._v(" "),a("p",[t._v("而我们需要提取百度文库或其他文库的文字内容时，我们只要在greasyfork中找合适的脚本 或直接点击【"),a("a",{attrs:{href:"https://greasyfork.org/zh-CN/scripts/398195-%E7%99%BE%E5%BA%A6%E6%96%87%E5%BA%93%E7%A0%B4%E8%A7%A3%E5%8A%A0%E5%BC%BA-csdn%E9%98%85%E8%AF%BB%E5%A2%9E%E5%BC%BA-%E7%9F%A5%E4%B9%8E%E4%BD%BF%E7%94%A8%E5%A2%9E%E5%BC%BA-%E6%8A%96%E9%9F%B3%E5%8E%BB%E6%B0%B4%E5%8D%B0%E5%8E%9F%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E7%A0%B4%E8%A7%A3-%E5%8E%BB%E5%B9%BF%E5%91%8A",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("】，就能找到百度文库的脚本主页")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617093315913.png",alt:"image-20200617093315913"}})]),t._v(" "),a("p",[t._v("只要点击安装就行了（我之前装过所以提示的是更新），在这说一下，看一个脚本好不好也跟github 看star 一样，看一眼他的安装量可以判定")]),t._v(" "),a("p",[t._v("安装好之后就可以直接浪了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617093642101.png",alt:"image-20200617093642101"}})]),t._v(" "),a("p",[t._v("进入百度文库后啥都不用干，你就能看到以下两个不同点")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617093827292.png",alt:"image-20200617093827292"}})]),t._v(" "),a("p",[t._v("右上角油猴的图标会直接亮，会自动启动刚安装的脚本（如果没启动的，点击油猴菜单倒数第二个‘管理面板’，去里面看下脚本启动了没）")]),t._v(" "),a("p",[t._v("同时，左侧会多出下载和复制两个小按钮，点击复制你会发现")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617094146365.png",alt:"image-20200617094146365"}})]),t._v(" "),a("p",[t._v("文章直接提取到页面了，这时候尽情复制就可以了")]),t._v(" "),a("p",[t._v("下载按钮顾名思义，就是将文章下载，但是下载下来的一样也没样式。")]),t._v(" "),a("p",[t._v("如果有兴趣的同学也可以观察一下，脚本提取内容的核心原理其实也是上面说的那几行js 代码")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617094515160.png",alt:"image-20200617094515160"}})]),t._v(" "),a("p",[t._v("油猴插件的功能还有非常之多，比如可以自动解析各大付费视频，自动提取百度网盘密码，生成各大网盘下载直链等等，欢迎大家探索交流")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"哔哩哔哩动态内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哔哩哔哩动态内容"}},[t._v("#")]),t._v(" 哔哩哔哩动态内容")]),t._v(" "),a("p",[t._v("哔哩哔哩不仅可以刷视频看鬼畜和学习，同时也有个类似朋友圈也类似各大文章平台的功能，可以在里面发布动态或文章。")]),t._v(" "),a("p",[t._v("但是他却有个很大的限制，就是不能复制")]),t._v(" "),a("p",[t._v("昨天就遇到这个情况，在B站看到一篇不错的知识分享【】，通过作者授权后想转载一下，无奈不能复制，确实愁了一下")]),t._v(" "),a("p",[t._v("后面想到简历使用PDF格式的可以通过浏览器打开，也能复制粘贴，所以就考虑能不能将网页HTML转化为PDF")]),t._v(" "),a("p",[t._v("上网上找了下工具，无果，最终在一篇文章中看到了，其实非常简单，压根不用工具")]),t._v(" "),a("p",[t._v("只需要在需要复制的B站动态页面里，右键选择打印，或者直接按CTRL + P")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617100426888.png",alt:"image-20200617100426888"}})]),t._v(" "),a("p",[t._v("便能调出打印界面，这个时候点击目标打印机更换为“另存为PDF”，选择保存路径保存即可")]),t._v(" "),a("p",[t._v("这个时候就在保存路径的目录下生成了一个PDF文件")]),t._v(" "),a("p",[t._v("右键选择打开方式，再选择浏览器打开就可以进入到另一个网页中了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oss.yitian2019.cn/img/image-20200617100826125.png",alt:"image-20200617100826125"}})]),t._v(" "),a("p",[t._v("在这里，你就可以随意复制了")]),t._v(" "),a("p",{attrs:{align:"right"}},[t._v("—— 未经本人允许不得私自转载")])])}),[],!1,null,null,null);s.default=e.exports}}]);