!function(){"use strict";var e,t={142:function(){var e=window.wp.blocks,t=window.wp.element,l=window.wp.data,a=window.wp.blockEditor,o=window.wp.components,n=window.React;const r=(0,n.memo)((e=>{const{isEditMode:l,setAttributes:n}=e;return(0,t.createElement)(a.BlockControls,null,(0,t.createElement)(o.Toolbar,null,(0,t.createElement)(o.Button,{label:l?"Preview":"Edit",icon:l?"format-image":"edit",className:"preview-button",onClick:()=>n({isEditMode:!l})})))}));function i(e,t){let l,{isFaq:a,isPanelOpen:o,isQaBalloon:n,iconDesign:r}=t;return l=a?e+" faq":e,o&&(l+=" panelOpen"),n?l+=" qaBalloon":r&&(l+=" "+r),l}const c=e=>{let{attributes:l,innerBlockProps:a,className:o}=e;return(0,t.createElement)("div",{className:"oja_dl_wrap",style:{backgroundColor:l.themeColor}},l.dlTitle?(0,t.createElement)("h1",{className:"oja-dl-head",style:{backgroundColor:l.headTitleColor}},l.dlTitle):null,(0,t.createElement)("dl",{className:i(o,l)},(e=>{const l=e.filter((e=>e.attributes.dtText)),a=e.filter((e=>e.attributes.ddText));return a.map(((e,o)=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)("dt",{className:"accordion__title"},l[o].attributes.dtText),(0,t.createElement)("dd",{className:"accordion__content"},a[o].attributes.ddText))))})(a)))};var s=(0,n.memo)((e=>{const{checked:l,setAttributes:a}=e;return(0,t.createElement)(o.RadioControl,{className:"oja-fap-icon",label:"アイコンデザイン",selected:l,options:[{label:"シンプル",value:"sinple"},{label:"ステッチ",value:"border"},{label:"白黒",value:"blackwhite"},{label:"モダン",value:"modan"}],onChange:e=>a({iconDesign:e})})})),d=(0,n.memo)((e=>{const{attributes:l,setAttributes:a,colorReset:r,initialValue:i,label:c}=e,s=(0,n.memo)((()=>(0,t.createElement)("div",{className:"copyedColor",style:{backgroundColor:l}})));return[(0,t.createElement)("div",{className:"ojaColorPicker"},(0,t.createElement)("p",null,c),(0,t.createElement)(o.ColorPicker,{color:l,onChangeComplete:a,defaultValue:i,enableAlpha:!0}),(0,t.createElement)("button",{onClick:r},"resetする"),(0,t.createElement)(s,null))]}));const u=e=>{let{attributes:l,setAttributes:n}=e;return(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:"リストデザイン設定",initialOpen:!1},(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(d,{label:"リストタイトル背景色",attributes:l.headTitleColor,initialValue:"#0b048f",setAttributes:e=>n({headTitleColor:e.hex}),colorReset:()=>n({headTitleColor:"#0b048f"})})),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(d,{label:"リスト背景色",attributes:l.themeColor,initialValue:"#e1f5fe",setAttributes:e=>n({themeColor:e.hex}),colorReset:()=>n({themeColor:"#e1f5fe"})}))),(0,t.createElement)(o.PanelBody,{title:"定義リストの使用変更",initialOpen:!0},(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.ToggleControl,{label:l.isFaq?"Q&A形式":"定義説明形式",help:"リストの形式を選択します",checked:l.isFaq,onChange:e=>n({isFaq:e})})),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.ToggleControl,{label:l.isPanelOpen?"クリックでオープン":"最初から回答を表示",help:"※プレビューでは動作しません",checked:l.isPanelOpen,onChange:e=>n({isPanelOpen:e})})),l.isFaq&&(0,t.createElement)(o.PanelBody,{title:"Q&Aデザイン設定",initialOpen:!1},(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.CheckboxControl,{label:"Q&Aを吹き出しにする",checked:l.isQaBalloon,onChange:e=>n({isQaBalloon:e})})),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(s,{checked:l.iconDesign,setAttributes:n})))))};var m={name:"ojako/custom-dlblock",title:"定義リスト（definition list）",description:"「質問〜回答」 や 「名称〜説明」 などの定義リストを追加します",icon:"editor-alignleft",category:"common",keywords:["dl","oja","list"],supports:{customClassName:!1,anchor:!1},attributes:{isEditMode:{type:"boolean",default:!0},themeColor:{type:"string",default:"#e1f5fe"},headTitleColor:{type:"string",default:"#0b048f"},dlTitle:{type:"string",default:"",selector:"h1"},isFaq:{type:"boolean",default:!1},isQaBalloon:{type:"boolean",default:!1},isPanelOpen:{type:"boolean",default:!0},iconDesign:{type:"string",default:"sinple"}},edit:(0,l.withSelect)(((e,t)=>({innerBlockProps:e("core/block-editor").getBlocks(t.clientId)})))((n=>{const{attributes:i,className:s,setAttributes:d,clientId:m}=n,b=["custom-block/dt","custom-block/dd"],p=b.map((e=>[e,{}]));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r,{isEditMode:i.isEditMode,setAttributes:d}),(0,t.createElement)(u,{attributes:i,setAttributes:d}),i.isEditMode&&(0,t.createElement)("div",{className:"oja_dl_wrap"},(0,t.createElement)(o.TextControl,{label:"リストのタイトル",value:i.dlTitle,onChange:e=>d({dlTitle:e})}),(0,t.createElement)("dl",{className:s},(0,t.createElement)(a.InnerBlocks,{allowedBlocks:b,templateLock:!1,template:p,renderAppender:()=>(0,t.createElement)("button",{type:"button",onClick:()=>{b.forEach((t=>{(0,l.dispatch)("core/block-editor").insertBlocks((0,e.createBlock)(t),9999,m)}))}},"リストを追加する")}))),!i.isEditMode&&[(0,t.createElement)(o.Button,{onClick:()=>d({isEditMode:!0}),isLink:!0,icon:"edit"},"編集モード"),c(n)])})),save(e){let{className:l,attributes:o}=e;return(0,t.createElement)("div",{className:"oja_dl_wrap",style:{backgroundColor:o.themeColor}},o.dlTitle?(0,t.createElement)("h1",{className:"oja-dl-head",style:{backgroundColor:o.headTitleColor}},o.dlTitle):null,(0,t.createElement)("dl",{className:i(l,o)},(0,t.createElement)(a.InnerBlocks.Content,null)))}};const{RichText:b}=wp.editor;var p={name:"custom-block/dt",title:"質問（definition term）",icon:"editor-alignleft",category:"common",parent:["ojako/custom-dlblock"],attributes:{dtText:{type:"string",default:"",source:"text",selector:"dt.accordion__title"}},edit(e){let{attributes:l,setAttributes:a,className:o}=e;return(0,t.createElement)(b,{className:o,tagName:"dt",value:l.dtText,onChange:e=>a({dtText:e})})},save(e){let{attributes:l}=e;return(0,t.createElement)("dt",{className:"accordion__title"},l.dtText)}};const{RichText:E}=wp.editor;var f={name:"custom-block/dd",title:"回答（definition description）",icon:"editor-alignleft",category:"common",parent:["ojako/custom-dlblock"],attributes:{ddText:{type:"string",default:"",source:"text",selector:"dd.accordion__content"}},edit(e){let{attributes:l,setAttributes:a,className:o}=e;return(0,t.createElement)(E,{className:o,tagName:"dd",value:l.ddText,onChange:e=>a({ddText:e})})},save(e){let{attributes:l}=e;return(0,t.createElement)("dd",{className:"accordion__content"},l.ddText)}};(0,e.registerBlockType)(m.name,m),(0,e.registerBlockType)(p.name,p),(0,e.registerBlockType)(f.name,f)}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=function(t,l,o,n){if(!l){var r=1/0;for(d=0;d<e.length;d++){l=e[d][0],o=e[d][1],n=e[d][2];for(var i=!0,c=0;c<l.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[c])}))?l.splice(c--,1):(i=!1,n<r&&(r=n));if(i){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,o,n]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,n,r=l[0],i=l[1],c=l[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var d=c(a)}for(t&&t(l);s<r.length;s++)n=r[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},l=self.webpackChunkcustom_dlblock=self.webpackChunkcustom_dlblock||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var o=a.O(void 0,[431],(function(){return a(142)}));o=a.O(o)}();