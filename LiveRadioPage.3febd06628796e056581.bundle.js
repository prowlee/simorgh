(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1457:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(41);var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(280),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6__),_contexts_RequestContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),Wrapper=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)("div",{target:"e1a3lole1",label:"Wrapper"})((function(props){return!props.hasBottomPadding&&"padding-bottom: ".concat(_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,";")}),"@media (min-width: ",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__.i,"){",(function(props){return!props.hasBottomPadding&&"padding-bottom: ".concat(_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.l,";")}),";}"),AVPlayer=function AVPlayer(_ref){var assetId=_ref.assetId,placeholderSrc=_ref.placeholderSrc,title=_ref.title,embedUrl=_ref.embedUrl,iframeTitle=_ref.iframeTitle,type=_ref.type,skin=_ref.skin,className=_ref.className,hasBottomPadding=_ref.hasBottomPadding,showLoadingImage=_ref.showLoadingImage,darkMode=_ref.darkMode,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__.a),translations=_useContext.translations,service=_useContext.service,_useContext2=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_RequestContext__WEBPACK_IMPORTED_MODULE_7__.a),isAmp=_useContext2.isAmp,platform=_useContext2.platform,isValidPlatform=["amp","canonical"].includes(platform),mediaInfo={title:title,type:type},noJsMessage=ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6___default()("This ".concat(mediaInfo.type," cannot play in your browser. Please enable JavaScript or try a different browser."),["media","noJs"],translations);return isValidPlatform&&assetId?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper,{hasBottomPadding:hasBottomPadding,className:className},isAmp?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__.a,{placeholderSrc:placeholderSrc,src:embedUrl,title:iframeTitle,skin:skin,noJsMessage:noJsMessage,service:service}):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__.b,{showPlaceholder:!1,showLoadingImage:showLoadingImage,darkMode:darkMode,src:embedUrl,title:iframeTitle,skin:skin,service:service,mediaInfo:mediaInfo,noJsMessage:noJsMessage,noJsClassName:"no-js"})):null},AudioPlayer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)(AVPlayer,{target:"e1a3lole0",label:"AudioPlayer"})("amp-iframe,div>iframe{width:calc(100% + ",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,");margin:0 -",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.e,";@media (min-width: ",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__.e,"){width:calc(100% + ",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.h,");margin:0 -",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,";}}");__webpack_exports__.a=function(props){return"audio"===props.skin?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AudioPlayer,props):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AVPlayer,props)},AVPlayer.defaultProps={embedUrl:"",assetId:"",placeholderSrc:"",type:"",title:"",iframeTitle:"",className:"",skin:"classic",hasBottomPadding:!0,showLoadingImage:!1,darkMode:!1}},1458:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18);__webpack_exports__.a=function getMediaId(_ref){var assetId=_ref.assetId,masterBrand=_ref.masterBrand,lang=_ref.lang,service=_ref.service;return function isLiveRadio(assetId){return"liveradio"===assetId}(assetId)?"".concat(masterBrand,"/").concat(assetId,"/").concat(lang):"".concat(service,"/").concat(masterBrand,"/").concat(assetId,"/").concat(lang)}},1459:function(module,__webpack_exports__,__webpack_require__){"use strict";var ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function getMasterBrand(externalId,liveRadioIdOverrides){return ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0___default()(externalId,["masterBrand",externalId],liveRadioIdOverrides)}},866:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(18),__webpack_require__(73),__webpack_require__(36),__webpack_require__(268);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(328),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),psammead_paragraph_esm=__webpack_require__(413),react_router=__webpack_require__(62),ATIAnalytics=__webpack_require__(119),Metadata=__webpack_require__(123),RadioSchedule=__webpack_require__(282),ChartbeatAnalytics=__webpack_require__(120),ComscoreAnalytics=__webpack_require__(122),Grid=__webpack_require__(17),LinkedData=__webpack_require__(121),AVPlayer=__webpack_require__(1457),ServiceContext=__webpack_require__(7),RequestContext=__webpack_require__(13),getMediaId=__webpack_require__(1458),getMasterbrand=__webpack_require__(1459),getEmbedUrl=__webpack_require__(658),staticAssetsPath="".concat(Object({NODE_ENV:"production",NODE_PATH:"",STORYBOOK:"true",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_ORIGIN).concat(Object({NODE_ENV:"production",NODE_PATH:"",STORYBOOK:"true",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_PATH),audioPlaceholderImageSrc="".concat(staticAssetsPath,"images/amp_audio_placeholder.png"),LiveRadioPage_LiveRadioPage=function LiveRadioPage(_ref){var pageData=_ref.pageData,language=pageData.language,name=pageData.name,summary=pageData.summary,heading=pageData.heading,bodySummary=pageData.bodySummary,masterBrand=pageData.masterBrand,radioScheduleData=pageData.radioScheduleData,_useContext=Object(react.useContext)(ServiceContext.a),script=_useContext.script,service=_useContext.service,lang=_useContext.lang,liveRadioOverrides=_useContext.liveRadioOverrides,translations=_useContext.translations,isAmp=Object(react.useContext)(RequestContext.a).isAmp,location=Object(react_router.e)(),mediaId=Object(getMediaId.a)({assetId:"liveradio",masterBrand:Object(getMasterbrand.a)(masterBrand,liveRadioOverrides),lang:lang,service:service}),embedUrl=Object(getEmbedUrl.a)({mediaId:mediaId,type:"media",isAmp:isAmp,queryString:location.search}),iframeTitle=pathOr_default()("Audio player",["mediaAssetPage","audioPlayer"],translations),hasRadioScheduleData=Boolean(radioScheduleData);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(ATIAnalytics.a,{data:pageData}),react_default.a.createElement(ChartbeatAnalytics.a,{data:pageData}),react_default.a.createElement(ComscoreAnalytics.a,null),react_default.a.createElement(Metadata.a,{title:name,lang:language,description:summary,openGraphType:"website"}),react_default.a.createElement(LinkedData.a,{type:"RadioChannel",seoTitle:name}),react_default.a.createElement(Grid.b,{as:"main",role:"main",columns:{group0:6,group1:6,group2:6,group3:6,group4:8,group5:20},enableGelGutters:!0},react_default.a.createElement(Grid.j,{item:!0,startOffset:{group0:1,group1:1,group2:1,group3:1,group4:2,group5:5},columns:{group0:6,group1:6,group2:6,group3:6,group4:6,group5:12},margins:{group0:!0,group1:!0,group2:!0,group3:!0}},react_default.a.createElement(esm.a,{script:script,service:service,id:"content",tabIndex:"-1"},heading),react_default.a.createElement(psammead_paragraph_esm.a,{script:script,service:service},bodySummary),react_default.a.createElement(AVPlayer.a,{assetId:"liveradio",embedUrl:embedUrl,iframeTitle:iframeTitle,title:"Live radio",type:"audio",skin:"audio",placeholderSrc:audioPlaceholderImageSrc}))),hasRadioScheduleData&&react_default.a.createElement(RadioSchedule.a,{initialData:radioScheduleData}))};LiveRadioPage_LiveRadioPage.__docgenInfo={description:"",methods:[],displayName:"LiveRadioPage",props:{pageData:{type:{name:"shape",value:{metadata:{name:"shape",value:{type:{name:"string",required:!1}},required:!1},language:{name:"string",required:!1},name:{name:"string",required:!1},summary:{name:"string",required:!1},heading:{name:"string",required:!1},bodySummary:{name:"string",required:!1},masterBrand:{name:"string",required:!1}}},required:!0,description:""}}};var pages_LiveRadioPage_LiveRadioPage=LiveRadioPage_LiveRadioPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/pages/LiveRadioPage/LiveRadioPage.jsx"]={name:"LiveRadioPage",docgenInfo:LiveRadioPage_LiveRadioPage.__docgenInfo,path:"src/app/pages/LiveRadioPage/LiveRadioPage.jsx"});var applyBasicPageHandlers=__webpack_require__(178);__webpack_exports__.default=Object(applyBasicPageHandlers.a)({addVariantHandling:!1})(pages_LiveRadioPage_LiveRadioPage)}}]);
//# sourceMappingURL=LiveRadioPage.3febd06628796e056581.bundle.js.map