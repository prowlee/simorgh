(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{865:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var helpers_extends=__webpack_require__(21),extends_default=__webpack_require__.n(helpers_extends),emotion_styled_base_browser_esm=__webpack_require__(5),react=__webpack_require__(0),react_default=__webpack_require__.n(react),spacings=__webpack_require__(3),breakpoints=__webpack_require__(4),path=__webpack_require__(11),path_default=__webpack_require__.n(path),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),Grid=__webpack_require__(17),helpers=__webpack_require__(661),CpsMetadata=__webpack_require__(662),LinkedData=__webpack_require__(121),Headings=__webpack_require__(189),ArticleTimestamp=__webpack_require__(281),CpsText=__webpack_require__(663),Image=__webpack_require__(171),CpsAssetMediaPlayer=__webpack_require__(284),Blocks=__webpack_require__(50),CpsRelatedContent=__webpack_require__(407),ATIAnalytics=__webpack_require__(119),ChartbeatAnalytics=__webpack_require__(120),ComscoreAnalytics=__webpack_require__(122),FauxHeadline=(__webpack_require__(459),__webpack_require__(408)),VisuallyHiddenHeadline=__webpack_require__(412),parseAssetData=__webpack_require__(90),PhotoGalleryPage_PhotoGalleryPage=function PhotoGalleryPage(_ref){var pageData=_ref.pageData,title=path_default()(["promo","headlines","headline"],pageData),shortHeadline=path_default()(["promo","headlines","shortHeadline"],pageData),summary=path_default()(["promo","summary"],pageData),metadata=path_default()(["metadata"],pageData),allowDateStamp=path_default()(["options","allowDateStamp"],metadata),assetUri=path_default()(["locators","assetUri"],metadata),blocks=pathOr_default()([],["content","model","blocks"],pageData),relatedContent=pathOr_default()([],["relatedContent","groups",0,"promos"],pageData),indexImagePath=path_default()(["promo","indexImage","path"],pageData),indexImageLocator=indexImagePath?Object(helpers.a)(indexImagePath)[1]:null,indexImageAltText=path_default()(["promo","indexImage","altText"],pageData),firstPublished=Object(parseAssetData.d)(pageData),lastPublished=Object(parseAssetData.g)(pageData),aboutTags=Object(parseAssetData.a)(pageData),componentsToRender={fauxHeadline:FauxHeadline.a,visuallyHiddenHeadline:VisuallyHiddenHeadline.a,headline:Headings.a,subheadline:Headings.a,text:CpsText.a,image:Image.a,timestamp:function timestamp(props){return allowDateStamp?react_default.a.createElement(StyledTimestamp,extends_default()({},props,{popOut:!1,minutesTolerance:1})):null},video:function video(props){return react_default.a.createElement(CpsAssetMediaPlayer.a,extends_default()({},props,{assetUri:assetUri}))},version:function version(props){return react_default.a.createElement(CpsAssetMediaPlayer.a,extends_default()({},props,{assetUri:assetUri}))}},StyledGelPageGrid=Object(emotion_styled_base_browser_esm.a)(Grid.b,{target:"e1x85euw1",label:"StyledGelPageGrid"})("padding-bottom:",spacings.l,";@media (min-width: ",breakpoints.i,"){padding-bottom:",spacings.h,";}"),StyledTimestamp=Object(emotion_styled_base_browser_esm.a)(ArticleTimestamp.a,{target:"e1x85euw0",label:"StyledTimestamp"})("@media (max-width: ",breakpoints.f,"){padding-bottom:",spacings.f,";}@media (min-width: ",breakpoints.i,"){padding-bottom:",spacings.l,";}");return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(CpsMetadata.a,{title:title,shortHeadline:shortHeadline,language:metadata.language,description:summary,firstPublished:firstPublished,lastPublished:lastPublished,imageLocator:indexImageLocator,imageAltText:indexImageAltText,aboutTags:aboutTags}),react_default.a.createElement(LinkedData.a,{type:"Article",seoTitle:title,headline:title,description:summary,showAuthor:!0,datePublished:firstPublished,dateModified:lastPublished,aboutTags:aboutTags,imageLocator:indexImageLocator}),react_default.a.createElement(ATIAnalytics.a,{data:pageData}),react_default.a.createElement(ChartbeatAnalytics.a,{data:pageData}),react_default.a.createElement(ComscoreAnalytics.a,null),react_default.a.createElement(StyledGelPageGrid,{as:"main",role:"main",enableGelGutters:!0,columns:{group0:6,group1:6,group2:6,group3:6,group4:8,group5:20}},react_default.a.createElement(Blocks.a,{blocks:blocks,componentsToRender:componentsToRender}),react_default.a.createElement(CpsRelatedContent.a,{content:relatedContent,enableGridWrapper:!0})))};PhotoGalleryPage_PhotoGalleryPage.__docgenInfo={description:"",methods:[],displayName:"PhotoGalleryPage",composes:["../../models/propTypes/cpsAssetPage"]};var pages_PhotoGalleryPage_PhotoGalleryPage=PhotoGalleryPage_PhotoGalleryPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/pages/PhotoGalleryPage/PhotoGalleryPage.jsx"]={name:"PhotoGalleryPage",docgenInfo:PhotoGalleryPage_PhotoGalleryPage.__docgenInfo,path:"src/app/pages/PhotoGalleryPage/PhotoGalleryPage.jsx"});var applyBasicPageHandlers=__webpack_require__(178);__webpack_exports__.default=Object(applyBasicPageHandlers.a)({addVariantHandling:!1})(pages_PhotoGalleryPage_PhotoGalleryPage)}}]);
//# sourceMappingURL=PhotoGalleryPage.3febd06628796e056581.bundle.js.map