(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1463:function(module,exports,__webpack_require__){var is=__webpack_require__(75)((function is(Ctor,val){return null!=val&&val.constructor===Ctor||val instanceof Ctor}));module.exports=is},858:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var pipe=__webpack_require__(654),pipe_default=__webpack_require__.n(pipe),emotion_styled_base_browser_esm=(__webpack_require__(18),__webpack_require__(36),__webpack_require__(269),__webpack_require__(5)),react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_router=__webpack_require__(62),spacings=__webpack_require__(3),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),breakpoints=__webpack_require__(4),esm=__webpack_require__(34),utilities=__webpack_require__(133),ChartbeatAnalytics=__webpack_require__(120),ComscoreAnalytics=__webpack_require__(122),ATIAnalytics=__webpack_require__(119),Grid=__webpack_require__(17),LinkedData=__webpack_require__(121),Metadata=__webpack_require__(123),ServiceContext=__webpack_require__(7),RequestContext=__webpack_require__(13),OnDemandHeading=__webpack_require__(1457),OnDemandHeading_StyledTvHeadingContainer=Object(emotion_styled_base_browser_esm.a)(OnDemandHeading.a,{target:"e13e5rz60"})("@media (max-width: ",breakpoints.f,"){padding:",spacings.e," 0;}@media (min-width: ",breakpoints.i,"){padding:",spacings.f," 0;}"),OnDemandParagraph=__webpack_require__(1458),is=(__webpack_require__(106),__webpack_require__(1463)),is_default=__webpack_require__.n(is),FALLBACK_PLACEHOLDER_IMAGE_URL="".concat(Object({NODE_ENV:"production",NODE_PATH:"",STORYBOOK:"true",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_ORIGIN).concat(Object({NODE_ENV:"production",NODE_PATH:"",STORYBOOK:"true",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_PATH,"images/media_placeholder.png"),utils_getPlaceholderImageUrl=function getPlaceholderImageUrl(imageUrl){return imageUrl&&is_default()(String,imageUrl)?"https://".concat(imageUrl.replace("$recipe","1024x576")):FALLBACK_PLACEHOLDER_IMAGE_URL},getEmbedUrl=__webpack_require__(653),AVPlayer=__webpack_require__(1454),helpers_extends=(__webpack_require__(58),__webpack_require__(41),__webpack_require__(107),__webpack_require__(31),__webpack_require__(59),__webpack_require__(21)),extends_default=__webpack_require__.n(helpers_extends),psammead_episode_list_esm=__webpack_require__(1461),psammead_timestamp_container_esm=__webpack_require__(170),psammead_section_label_esm=__webpack_require__(146),colours=__webpack_require__(2),StyledSectionLabel=Object(emotion_styled_base_browser_esm.a)(psammead_section_label_esm.a,{target:"e5nlwwm0"})("color:",colours.y,";margin-bottom:0;@media (min-width: ",breakpoints.e,"){margin-bottom:",spacings.f,";}@media (min-width: ",breakpoints.g,"){margin-bottom:",spacings.l,";}"),RecentVideoEpisodes_RecentVideoEpisodes=function RecentVideoEpisodes(_ref){var masterBrand=_ref.masterBrand,episodes=_ref.episodes,_useContext=Object(react.useContext)(ServiceContext.a),script=_useContext.script,service=_useContext.service,dir=_useContext.dir,timezone=_useContext.timezone,datetimeLocale=_useContext.datetimeLocale,translations=_useContext.translations,_useContext2=Object(react.useContext)(RequestContext.a),isAmp=_useContext2.isAmp,variant=_useContext2.variant;if(!episodes.length)return null;var recentEpisodesTranslation=pathOr_default()("Recent Episodes",["media","recentEpisodes"],translations),durationLabel=pathOr_default()("Duration",["media","duration"],translations),videoLabel=pathOr_default()("Video",["media","video"],translations),getUrl=function getUrl(episodeId){return"/".concat([service,variant,masterBrand,"tv",episodeId].filter(Boolean).join("/"))};return react_default.a.createElement("aside",{role:"complimentary","aria-labelledby":"recent-episodes"},react_default.a.createElement(StyledSectionLabel,{script:script,service:service,dir:dir,backgroundColor:colours.n,labelId:"recent-episodes"},recentEpisodesTranslation),react_default.a.createElement(psammead_episode_list_esm.a,{script:script,service:service,dir:dir,darkMode:!0,ulProps:{"data-e2e":"recent-episodes-list"},liProps:{"data-e2e":"recent-episodes-list-item"}},episodes.map((function(episode){return react_default.a.createElement(psammead_episode_list_esm.a.Episode,{key:episode.id,dir:dir},react_default.a.createElement(psammead_episode_list_esm.a.Image,extends_default()({dir:dir,src:episode.image,alt:episode.altText,duration:Object(utilities.a)({duration:episode.duration,locale:datetimeLocale})},isAmp&&{as:function as(){return react_default.a.createElement("amp-img",{layout:"responsive",width:"16",height:"9",src:episode.image,alt:episode.altText})}})),react_default.a.createElement(psammead_episode_list_esm.a.Link,{href:getUrl(episode.id)},react_default.a.createElement(esm.a,null,"".concat(videoLabel,", ")),react_default.a.createElement(psammead_episode_list_esm.a.Title,{className:"episode-list__title--hover episode-list__title--visited"},episode.brandTitle),react_default.a.createElement(esm.a,null,", "),react_default.a.createElement(psammead_episode_list_esm.a.Description,{className:"episode-list__description--hover episode-list__description--visited"},episode.episodeTitle||function formatDate(timestamp){return Object(utilities.b)({timestamp:timestamp,format:"D MMMM YYYY",timezone:timezone,locale:datetimeLocale,isRelative:!1})}(episode.timestamp)),react_default.a.createElement(esm.a,null,", "),react_default.a.createElement(esm.a,null,"".concat(durationLabel," ").concat(Object(utilities.a)({duration:episode.duration,format:episode.duration.includes("H")?"h,mm,ss":"mm,ss",locale:datetimeLocale})," "))),episode.episodeTitle&&react_default.a.createElement("div",null,react_default.a.createElement(psammead_episode_list_esm.a.Metadata,{as:psammead_timestamp_container_esm.a,timestamp:episode.timestamp,format:"D MMMM YYYY",dateTimeFormat:"YYYY-MM-DD",padding:!1,script:script,locale:datetimeLocale,service:service,timezone:timezone})))}))))};RecentVideoEpisodes_RecentVideoEpisodes.__docgenInfo={description:"",methods:[],displayName:"RecentVideoEpisodes",props:{masterBrand:{type:{name:"string"},required:!0,description:""},episodes:{type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},url:{name:"string",required:!0},brandTitle:{name:"string",required:!0},episodeTitle:{name:"string",required:!1},timestamp:{name:"number",required:!0},duration:{name:"string",required:!0},image:{name:"string",required:!0},altText:{name:"string",required:!0}}}},required:!0,description:""}}};var containers_RecentVideoEpisodes=RecentVideoEpisodes_RecentVideoEpisodes;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/RecentVideoEpisodes/index.jsx"]={name:"RecentVideoEpisodes",docgenInfo:RecentVideoEpisodes_RecentVideoEpisodes.__docgenInfo,path:"src/app/containers/RecentVideoEpisodes/index.jsx"});var OnDemandFooterTimestamp=__webpack_require__(1459),getGroups=function getGroups(zero,one,two,three,four,five){return{group0:zero,group1:one,group2:two,group3:three,group4:four,group5:five}},StyledGelPageGrid=Object(emotion_styled_base_browser_esm.a)(Grid.b,{target:"e1im45se1"})("padding-bottom:",spacings.h,";@media (min-width: ",breakpoints.i,"){width:100%;}"),StyledVideoPlayer=Object(emotion_styled_base_browser_esm.a)(AVPlayer.a,{target:"e1im45se0"})("@media (min-width: ",breakpoints.i,"){margin:",spacings.i," 0 0;}@media (max-width: ",breakpoints.f,"){margin-top:",spacings.f,";}@media (max-width: ",breakpoints.d,"){margin:",spacings.f," -",spacings.f," 0;}@media (max-width: ",breakpoints.b,"){margin:",spacings.e," -",spacings.e," 0;}"),OnDemandTvPage_OnDemandTvPage=function OnDemandTvPage(_ref){var pageData=_ref.pageData,mediaIsAvailable=_ref.mediaIsAvailable,MediaError=_ref.MediaError,language=pageData.language,headline=pageData.headline,shortSynopsis=pageData.shortSynopsis,brandTitle=pageData.brandTitle,releaseDateTimeStamp=pageData.releaseDateTimeStamp,masterBrand=pageData.masterBrand,episodeId=pageData.episodeId,imageUrl=pageData.imageUrl,promoBrandTitle=pageData.promoBrandTitle,thumbnailImageUrl=pageData.thumbnailImageUrl,durationISO8601=pageData.durationISO8601,recentEpisodes=pageData.recentEpisodes,episodeTitle=pageData.episodeTitle,mediumSynopsis=pageData.mediumSynopsis,_useContext=Object(react.useContext)(ServiceContext.a),lang=_useContext.lang,timezone=_useContext.timezone,datetimeLocale=_useContext.datetimeLocale,service=_useContext.service,translations=_useContext.translations,brandName=_useContext.brandName,isAmp=Object(react.useContext)(RequestContext.a).isAmp,location=Object(react_router.e)(),formattedTimestamp=Object(utilities.b)({timestamp:releaseDateTimeStamp,format:"LL",timezone:timezone,locale:datetimeLocale,isRelative:!1}),mediaId="".concat(service,"/").concat(masterBrand,"/").concat(episodeId,"/").concat(lang),embedUrl=Object(getEmbedUrl.a)({mediaId:mediaId,type:"media",isAmp:isAmp,queryString:location.search}),iframeTitle=pathOr_default()("Video player",["mediaAssetPage","videoPlayer"],translations),hasRecentEpisodes=recentEpisodes&&Boolean(recentEpisodes.length),metadataTitle=episodeTitle?"".concat(brandTitle," - ").concat(episodeTitle," - ").concat(brandName):headline;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(ChartbeatAnalytics.a,{data:pageData}),react_default.a.createElement(ATIAnalytics.a,{data:pageData}),react_default.a.createElement(ComscoreAnalytics.a,null),react_default.a.createElement(Metadata.a,{title:metadataTitle,lang:language,description:shortSynopsis,openGraphType:"website"}),react_default.a.createElement(LinkedData.a,{type:"WebPage",seoTitle:metadataTitle,entities:mediaIsAvailable?[{"@type":"VideoObject",name:promoBrandTitle,description:shortSynopsis,thumbnailUrl:thumbnailImageUrl,duration:durationISO8601,uploadDate:new Date(releaseDateTimeStamp).toISOString(),embedURL:embedUrl}]:[]}),react_default.a.createElement(StyledGelPageGrid,{as:"main",role:"main",columns:getGroups(6,6,6,6,8,20),enableGelGutters:!0},react_default.a.createElement(Grid.j,{item:!0,startOffset:getGroups(1,1,1,1,2,5),columns:getGroups(6,6,6,6,6,12),margins:getGroups(!0,!0,!0,!0,!1,!1)},react_default.a.createElement(esm.a,{as:"h1",tabIndex:"-1",id:"content"},"".concat(brandTitle,", ").concat(formattedTimestamp)),mediaIsAvailable?react_default.a.createElement(StyledVideoPlayer,{embedUrl:embedUrl,assetId:episodeId,placeholderSrc:utils_getPlaceholderImageUrl(imageUrl),type:"video",title:"On-demand TV",iframeTitle:iframeTitle,hasBottomPadding:!1,skin:"classic",showLoadingImage:!0,darkMode:!0}):react_default.a.createElement(MediaError,{skin:"video"}),react_default.a.createElement(OnDemandHeading_StyledTvHeadingContainer,{brandTitle:brandTitle,releaseDateTimeStamp:releaseDateTimeStamp,episodeTitle:episodeTitle,darkMode:!0,ariaHidden:!0})),react_default.a.createElement(Grid.j,{item:!0,columns:getGroups(6,6,6,6,5,10),startOffset:getGroups(1,1,1,1,2,5),margins:getGroups(!0,!0,!0,!0,!1,!1)},react_default.a.createElement(OnDemandParagraph.a,{text:episodeTitle?mediumSynopsis:shortSynopsis,darkMode:!0}),episodeTitle&&react_default.a.createElement(OnDemandFooterTimestamp.a,{releaseDateTimeStamp:releaseDateTimeStamp,darkMode:!0}))),hasRecentEpisodes&&react_default.a.createElement(StyledGelPageGrid,{columns:getGroups(6,6,6,6,8,20),enableGelGutters:!0},react_default.a.createElement(Grid.j,{item:!0,startOffset:getGroups(1,1,1,1,2,5),columns:getGroups(6,6,6,6,6,12),margins:getGroups(!0,!0,!0,!0,!1,!1)},react_default.a.createElement(containers_RecentVideoEpisodes,{masterBrand:masterBrand,episodes:recentEpisodes}))))};OnDemandTvPage_OnDemandTvPage.__docgenInfo={description:"",methods:[],displayName:"OnDemandTvPage",props:{MediaError:{type:{name:"func"},required:!0,description:""},mediaIsAvailable:{type:{name:"bool"},required:!0,description:""},pageData:{type:{name:"shape",value:{language:{name:"string",required:!1},headline:{name:"string",required:!1},shortSynopsis:{name:"string",required:!1},mediumSynopsis:{name:"string",required:!1},brandTitle:{name:"string",required:!1},releaseDateTimeStamp:{name:"number",required:!1},masterBrand:{name:"string",required:!1},episodeId:{name:"string",required:!1},imageUrl:{name:"string",required:!1},promoBrandTitle:{name:"string",required:!1},thumbnailImageUrl:{name:"string",required:!1},durationISO8601:{name:"string",required:!1},episodeTitle:{name:"string",required:!1}}},required:!0,description:""}}};var pages_OnDemandTvPage_OnDemandTvPage=OnDemandTvPage_OnDemandTvPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/pages/OnDemandTvPage/OnDemandTvPage.jsx"]={name:"OnDemandTvPage",docgenInfo:OnDemandTvPage_OnDemandTvPage.__docgenInfo,path:"src/app/pages/OnDemandTvPage/OnDemandTvPage.jsx"});var applyBasicPageHandlers=__webpack_require__(179),withMediaError=__webpack_require__(1462);__webpack_exports__.default=pipe_default()(withMediaError.a,Object(applyBasicPageHandlers.a)({addVariantHandling:!1}))(pages_OnDemandTvPage_OnDemandTvPage)}}]);
//# sourceMappingURL=OnDemandTvPage.eaddc2f6663def9c1927.bundle.js.map