/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/dd.js":
/*!**************************!*\
  !*** ./src/blocks/dd.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "custom-block/dd",
  title: "回答（definition description）",
  icon: "editor-alignleft",
  category: "common",
  parent: ["ojako/custom-dlblock"],
  attributes: {
    ddText: {
      type: "string",
      default: "",
      source: "text",
      selector: "dd.accordion__content"
    }
  },

  edit(_ref) {
    let {
      attributes,
      setAttributes
    } = _ref;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "accordion__content",
      tagName: "dd",
      value: attributes.ddText,
      onChange: content => setAttributes({
        ddText: content
      })
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, blockProps);
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: "accordion__content",
      tagName: "dd",
      value: attributes.ddText
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, blockProps);
  }

});

/***/ }),

/***/ "./src/blocks/dl.js":
/*!**************************!*\
  !*** ./src/blocks/dl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_GetViewMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GetViewMode */ "./src/components/GetViewMode.js");
/* harmony import */ var _components_getPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/getPreview */ "./src/components/getPreview.js");
/* harmony import */ var _components_addDlClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/addDlClass */ "./src/components/addDlClass.js");
/* harmony import */ var _components_OjaInspector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/OjaInspector */ "./src/components/OjaInspector.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









 // 一旦メモ化の勉強し直し、そして他のインナーブロックでインスペクターを表示できないか模索する予定


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ojako/custom-dlblock",
  title: "定義リスト（definition list）",
  description: "「質問〜回答」 や 「名称〜説明」 などの定義リストを追加します",
  icon: "editor-alignleft",
  category: "common",
  keywords: ["dl", "dllist", "ojadl", "oja", "list"],
  supports: {
    customClassName: false,
    anchor: false
  },
  attributes: {
    isEditMode: {
      type: "boolean",
      default: true
    },
    themeColor: {
      type: "string",
      default: "#e1f5fe"
    },
    headTitleColor: {
      type: "string",
      default: "#0b048f"
    },
    dlTitle: {
      type: "string",
      default: "",
      selector: "h1"
    },
    isFaq: {
      type: "boolean",
      default: false
    },
    isQaBalloon: {
      type: "boolean",
      default: false
    },
    isPanelOpen: {
      type: "boolean",
      default: true
    },
    iconDesign: {
      type: "string",
      default: "sinple"
    }
  },
  // Editメソッド
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, ownProps) => {
    return {
      innerBlockProps: select("core/block-editor").getBlocks(ownProps.clientId)
    };
  })(props => {
    const {
      attributes,
      className,
      setAttributes,
      clientId
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: "oja_dl_wrap"
    }); // 許可されるブロックを登録

    const allowedBlocks = ["custom-block/dt", "custom-block/dd"];
    const blockTemplate = allowedBlocks.map(block => [block, {}]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_GetViewMode__WEBPACK_IMPORTED_MODULE_5__.GetViewMode, {
      isEditMode: attributes.isEditMode,
      setAttributes: setAttributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_OjaInspector__WEBPACK_IMPORTED_MODULE_8__.OjaInspector, {
      attributes: attributes,
      setAttributes: setAttributes
    }), attributes.isEditMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "\u30EA\u30B9\u30C8\u306E\u30BF\u30A4\u30C8\u30EB(\u30BF\u30A4\u30C8\u30EB\u304C\u306A\u3044\u5834\u5408\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093)",
      value: attributes.dlTitle,
      onChange: newText => setAttributes({
        dlTitle: newText
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      allowedBlocks: allowedBlocks,
      templateLock: false,
      template: blockTemplate,
      renderAppender: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        type: "button",
        onClick: () => {
          allowedBlocks.forEach(block => {
            (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)("core/block-editor").insertBlocks((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)(block), 9999, clientId);
          });
        }
      }, "リストを追加する")
    }))), !attributes.isEditMode && [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: () => setAttributes({
        isEditMode: true
      }),
      Link: true,
      icon: "edit"
    }, "\u7DE8\u96C6\u30E2\u30FC\u30C9"), (0,_components_getPreview__WEBPACK_IMPORTED_MODULE_6__.getPreview)(props)]);
  }),

  // Seveメソッド
  save(_ref) {
    let {
      className,
      attributes
    } = _ref;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: "oja_dl_wrap",
      style: {
        backgroundColor: attributes.themeColor || null
      }
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, attributes.dlTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
      className: "oja-dl-head",
      style: {
        backgroundColor: attributes.headTitleColor
      }
    }, attributes.dlTitle) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", {
      className: (0,_components_addDlClass__WEBPACK_IMPORTED_MODULE_7__.addDlClass)(className, attributes)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }

});

/***/ }),

/***/ "./src/blocks/dt.js":
/*!**************************!*\
  !*** ./src/blocks/dt.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "custom-block/dt",
  title: "質問（definition term）",
  icon: "editor-alignleft",
  category: "common",
  parent: ["ojako/custom-dlblock"],
  attributes: {
    dtText: {
      type: "string",
      default: "",
      source: "text",
      selector: "dt.accordion__title"
    }
  },

  edit(_ref) {
    let {
      attributes,
      setAttributes
    } = _ref;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "accordion__title",
      tagName: "dt",
      value: attributes.dtText,
      onChange: content => setAttributes({
        dtText: content
      })
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, blockProps);
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: "accordion__title",
      tagName: "dt",
      value: attributes.dtText
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, blockProps);
  }

});

/***/ }),

/***/ "./src/components/GetViewMode.js":
/*!***************************************!*\
  !*** ./src/components/GetViewMode.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetViewMode": function() { return /* binding */ GetViewMode; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



 // プレビューボタンの判定関数

const GetViewMode = (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(props => {
  const {
    isEditMode,
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    label: isEditMode ? "Preview" : "Edit",
    icon: isEditMode ? "format-image" : "edit",
    className: "preview-button",
    onClick: () => setAttributes({
      isEditMode: !isEditMode
    })
  })));
});

/***/ }),

/***/ "./src/components/IconDesign.js":
/*!**************************************!*\
  !*** ./src/components/IconDesign.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const IconDesign = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(props => {
  const {
    checked,
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    className: "oja-fap-icon",
    label: "\u30A2\u30A4\u30B3\u30F3\u30C7\u30B6\u30A4\u30F3",
    selected: checked,
    options: [{
      label: "シンプル",
      value: "sinple"
    }, {
      label: "ステッチ",
      value: "border"
    }, {
      label: "白黒",
      value: "blackwhite"
    }, {
      label: "モダン",
      value: "modan"
    }],
    onChange: val => setAttributes({
      iconDesign: val
    })
  });
});
/* harmony default export */ __webpack_exports__["default"] = (IconDesign);

/***/ }),

/***/ "./src/components/OjaColorPicker.js":
/*!******************************************!*\
  !*** ./src/components/OjaColorPicker.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

 // このコンポーネントのメモ化はうまく行かなかったため、保留


const OjaColorPicker = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(props => {
  const {
    attributes,
    setAttributes,
    colorReset,
    initialValue,
    label
  } = props;
  const CopyedColor = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(() => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "copyedColor",
      style: {
        backgroundColor: attributes
      }
    });
  });
  return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ojaColorPicker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: attributes,
    onChangeComplete: setAttributes,
    defaultValue: initialValue,
    enableAlpha: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: colorReset
  }, "reset\u3059\u308B"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CopyedColor, null))];
});
/* harmony default export */ __webpack_exports__["default"] = (OjaColorPicker);

/***/ }),

/***/ "./src/components/OjaInspector.js":
/*!****************************************!*\
  !*** ./src/components/OjaInspector.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OjaInspector": function() { return /* binding */ OjaInspector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IconDesign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconDesign */ "./src/components/IconDesign.js");
/* harmony import */ var _OjaColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OjaColorPicker */ "./src/components/OjaColorPicker.js");




 //インスペクター表示関数

const OjaInspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "\u30EA\u30B9\u30C8\u30C7\u30B6\u30A4\u30F3\u8A2D\u5B9A",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_OjaColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\u30EA\u30B9\u30C8\u30BF\u30A4\u30C8\u30EB\u80CC\u666F\u8272",
    attributes: attributes.headTitleColor,
    initialValue: "#0b048f",
    setAttributes: val => setAttributes({
      headTitleColor: val.hex
    }),
    colorReset: () => setAttributes({
      headTitleColor: "#0b048f"
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_OjaColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\u30EA\u30B9\u30C8\u80CC\u666F\u8272",
    attributes: attributes.themeColor,
    initialValue: "#e1f5fe",
    setAttributes: val => setAttributes({
      themeColor: val.hex
    }),
    colorReset: () => setAttributes({
      themeColor: "#e1f5fe"
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "\u5B9A\u7FA9\u30EA\u30B9\u30C8\u306E\u4F7F\u7528\u5909\u66F4",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: attributes.isFaq ? "Q&A形式" : "定義説明形式",
    help: "\u30EA\u30B9\u30C8\u306E\u5F62\u5F0F\u3092\u9078\u629E\u3057\u307E\u3059",
    checked: attributes.isFaq,
    onChange: val => setAttributes({
      isFaq: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: attributes.isPanelOpen ? "クリックでオープン" : "最初から回答を表示",
    help: "\u203B\u30D7\u30EC\u30D3\u30E5\u30FC\u3067\u306F\u52D5\u4F5C\u3057\u307E\u305B\u3093",
    checked: attributes.isPanelOpen,
    onChange: val => setAttributes({
      isPanelOpen: val
    })
  })), attributes.isFaq && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Q&A\u30C7\u30B6\u30A4\u30F3\u8A2D\u5B9A",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Q&A\u3092\u5439\u304D\u51FA\u3057\u306B\u3059\u308B",
    checked: attributes.isQaBalloon,
    onChange: val => setAttributes({
      isQaBalloon: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_IconDesign__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: attributes.iconDesign,
    setAttributes: setAttributes
  })))));
};

/***/ }),

/***/ "./src/components/addDlClass.js":
/*!**************************************!*\
  !*** ./src/components/addDlClass.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDlClass": function() { return /* binding */ addDlClass; }
/* harmony export */ });
function addDlClass(className, _ref) {
  let {
    isFaq,
    isPanelOpen,
    isQaBalloon,
    iconDesign
  } = _ref;
  //Q&Aの形式Classを付与する
  let dlClassName;

  if (isFaq) {
    dlClassName = className + " faq";
  } else {
    dlClassName = className;
  }

  if (isPanelOpen) {
    //質問の開閉を行うClassを付与する
    dlClassName += " panelOpen";
  }

  if (isQaBalloon) {
    //Q&Aを吹き出しで表示するClass
    dlClassName += " qaBalloon";
  } else if (iconDesign) {
    //Q&A形式のデザインを変更する
    dlClassName += " " + iconDesign;
  }

  return dlClassName;
}

/***/ }),

/***/ "./src/components/getPreview.js":
/*!**************************************!*\
  !*** ./src/components/getPreview.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPreview": function() { return /* binding */ getPreview; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addDlClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDlClass */ "./src/components/addDlClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


 // コンポーネントの最適化どころか、コンポーネントにするとブロックの値が取得できなかった為、一旦断念
//プレビュー表示関数

const getPreview = _ref => {
  let {
    attributes,
    innerBlockProps,
    className
  } = _ref;

  const innerListContents = innerBlockProps => {
    const dtContents = innerBlockProps.filter(dt => dt.attributes.dtText);
    const ddContents = innerBlockProps.filter(dd => dd.attributes.ddText);
    const listContents = ddContents.map((block, i) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", {
        className: "accordion__title"
      }, dtContents[i].attributes.dtText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", {
        className: "accordion__content"
      }, ddContents[i].attributes.ddText));
    });
    return listContents;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "oja_dl_wrap",
    style: {
      backgroundColor: attributes["themeColor"]
    }
  }, attributes.dlTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "oja-dl-head",
    style: {
      backgroundColor: attributes.headTitleColor
    }
  }, attributes["dlTitle"]) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", {
    className: (0,_addDlClass__WEBPACK_IMPORTED_MODULE_1__.addDlClass)(className, attributes)
  }, innerListContents(innerBlockProps)));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _blocks_dl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/dl.js */ "./src/blocks/dl.js");
/* harmony import */ var _blocks_dt_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/dt.js */ "./src/blocks/dt.js");
/* harmony import */ var _blocks_dd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/dd.js */ "./src/blocks/dd.js");


 // definition list




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_blocks_dl_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _blocks_dl_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_blocks_dt_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, _blocks_dt_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_blocks_dd_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, _blocks_dd_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcustom_dlblock"] = self["webpackChunkcustom_dlblock"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map