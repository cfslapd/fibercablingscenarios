window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"6bjcI0KK7Zf","lmsId":"Slide3","width":1000,"height":562,"resume":false,"background":{"type":"swf","imagedata":{"assetId":83,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6URUXoiMMCB","actionGroups":{"ReviewInt_6bMWGEZqQEB":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6amP4uWbZHV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6jhkOCC119s"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6oMdrnYrnXj"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6PkUunxUX5N.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6bMWGEZqQEB_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6bMWGEZqQEB_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_6bMWGEZqQEB":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6amP4uWbZHV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6jhkOCC119s"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6oMdrnYrnXj"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6bMWGEZqQEB":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6bMWGEZqQEB"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6bMWGEZqQEB":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6amP4uWbZHV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6jhkOCC119s"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6oMdrnYrnXj"},"enabled":{"type":"boolean","value":false}}]},"6bMWGEZqQEB_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5u0fEDeVXB0","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6PkUunxUX5N.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6bMWGEZqQEB"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6PkUunxUX5N.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6PkUunxUX5N.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6bMWGEZqQEB"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6URUXoiMMCB":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_6URUXoiMMCB":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5kCTC6e41Kp","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5kCTC6e41Kp","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5u0fEDeVXB0","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6bMWGEZqQEB"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5u0fEDeVXB0","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6bMWGEZqQEB"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6bMWGEZqQEB"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6bMWGEZqQEB_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6bMWGEZqQEB","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5VpnkkQ8zEn"},"completed_slide_ref":{"type":"string","value":"_player.5jA50EdyyUg.6WgbmenaWYA"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6bMWGEZqQEB","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5VpnkkQ8zEn"},"completed_slide_ref":{"type":"string","value":"_player.5jA50EdyyUg.6WgbmenaWYA"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6URUXoiMMCB"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6URUXoiMMCB"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":192000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6amP4uWbZHV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XL3au6LC4G"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6jhkOCC119s"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Vwxw3Qg731"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6oMdrnYrnXj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ihV1JiMSQW"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6MDTtEDWA5G"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/5dUIUlzStLH_DX1998_DY1998.swf","type":"normal","altText":"LINE.png","width":1920,"height":25,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":549,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":499.5,"rotateYPos":6.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":999,"bottom":13,"altText":"LINE.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":999,"height":13,"strokewidth":0}},"width":999,"height":13,"resume":false,"useHandCursor":true,"id":"6MDTtEDWA5G"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Y5IbzLG3VI_1198807880","id":"01","linkId":"txt__default_6amP4uWbZHV","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":780,"height":73,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Customer to request for tree cutting activity sa barangay","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":18.75,"fontIsBold":false,"ascent":23.4,"descent":7,"leading":0,"underlinePosition":-1.875,"underlineThickness":1.25,"xHeight":12.375}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":57,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":732,"bottom":53,"pngfb":false,"pr":{"l":"Lib","i":533}}}],"shapemaskId":"","xPos":100,"yPos":238,"tabIndex":4,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":392,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":785,"bottom":75,"altText":"Customer to request for tree cutting activity sa barangay","pngfb":false,"pr":{"l":"Lib","i":532}},"html5data":{"xPos":0,"yPos":0,"width":785,"height":75,"strokewidth":0}},"width":784,"height":75,"resume":true,"useHandCursor":true,"id":"6amP4uWbZHV","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6jhkOCC119s.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6jhkOCC119s._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6oMdrnYrnXj.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6oMdrnYrnXj._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6jhkOCC119s.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6oMdrnYrnXj.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6PkUunxUX5N"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5XL3au6LC4G_-1898006207","id":"01","linkId":"txt__default_5XL3au6LC4G","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":845,"height":73,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Alin sa mga sumusunod ng DiskarTech ang hindi kasama sa ","style":{"fontFamily":"\\"FS Elliot ProBold CBold80F95DDD\\",\\"FS Elliot Pro\\"","fontSize":28.125,"fontIsBold":false,"foregroundColor":"#262626","linkColor":"#262626","ascent":35.1,"descent":10.5,"leading":0,"underlinePosition":-2.813,"underlineThickness":1.875,"xHeight":18.375}},{"text":"Scenario 2: Prone to Cable Cut?","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":28.125,"fontIsBold":false,"foregroundColor":"#0070C0","linkColor":"#0070C0","ascent":35.1,"descent":10.5,"leading":0,"underlinePosition":-2.813,"underlineThickness":1.875,"xHeight":18.563}}],"style":{"justification":"center","lineSpacing":16,"tagType":"P"},"runs":[{"idx":0,"len":87,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":-7,"right":855,"bottom":77,"pngfb":false,"pr":{"l":"Lib","i":535}}}],"shapemaskId":"","xPos":81,"yPos":132,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":424.5,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-7,"right":855,"bottom":77,"altText":"Alin sa mga sumusunod ng DiskarTech ang hindi kasama sa Scenario 2: Prone to Cable Cut?","pngfb":false,"pr":{"l":"Lib","i":534}},"html5data":{"xPos":0,"yPos":0,"width":849,"height":75,"strokewidth":0}},"width":849,"height":75,"resume":false,"useHandCursor":true,"id":"5XL3au6LC4G"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6gKfAas9B5T_-1050096034","id":"01","linkId":"txt__default_6jhkOCC119s","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":780,"height":69,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Check for other route","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":18.75,"fontIsBold":false,"ascent":23.4,"descent":7,"leading":0,"underlinePosition":-1.875,"underlineThickness":1.25,"xHeight":12.375}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":21,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":520,"bottom":51,"pngfb":false,"pr":{"l":"Lib","i":537}}}],"shapemaskId":"","xPos":98,"yPos":328,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":392,"rotateYPos":35.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":785,"bottom":72,"altText":"Check for other route","pngfb":false,"pr":{"l":"Lib","i":536}},"html5data":{"xPos":0,"yPos":0,"width":785,"height":72,"strokewidth":0}},"width":784,"height":71,"resume":true,"useHandCursor":true,"id":"6jhkOCC119s","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6amP4uWbZHV.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6amP4uWbZHV._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6oMdrnYrnXj.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6oMdrnYrnXj._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6amP4uWbZHV.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6oMdrnYrnXj.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6PkUunxUX5N"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Vwxw3Qg731_-970674570","id":"01","linkId":"txt__default_6Vwxw3Qg731","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":370,"height":57,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Multiple Choice","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":28.125,"foregroundColor":"#030303","linkColor":"#030303","ascent":35.1,"descent":10.5,"leading":0,"underlinePosition":-2.813,"underlineThickness":1.875,"xHeight":18.563}}],"style":{"justification":"center","lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":15,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":328,"bottom":53,"pngfb":false,"pr":{"l":"Lib","i":539}}}],"shapemaskId":"","xPos":320,"yPos":54,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":187,"rotateYPos":29.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":374,"bottom":59,"altText":"Multiple Choice","pngfb":false,"pr":{"l":"Lib","i":538}},"html5data":{"xPos":0,"yPos":0,"width":374,"height":59,"strokewidth":0}},"width":374,"height":59,"resume":false,"useHandCursor":true,"id":"6Vwxw3Qg731"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5qv7zu5KHvD_-307837054","id":"01","linkId":"txt__default_6oMdrnYrnXj","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":780,"height":69,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Check for available facility","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":18.75,"fontIsBold":false,"ascent":23.4,"descent":7,"leading":0,"underlinePosition":-1.875,"underlineThickness":1.25,"xHeight":12.375}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":28,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":550,"bottom":51,"pngfb":false,"pr":{"l":"Lib","i":540}}}],"shapemaskId":"","xPos":98,"yPos":417,"tabIndex":6,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":392,"rotateYPos":35.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":785,"bottom":72,"altText":"Check for available facility","pngfb":false,"pr":{"l":"Lib","i":536}},"html5data":{"xPos":0,"yPos":0,"width":785,"height":72,"strokewidth":0}},"width":784,"height":71,"resume":true,"useHandCursor":true,"id":"6oMdrnYrnXj","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6amP4uWbZHV.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6amP4uWbZHV._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6jhkOCC119s.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6jhkOCC119s._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6amP4uWbZHV.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6jhkOCC119s.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6PkUunxUX5N"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":81,"id":"01","url":"story_content/5pVN08Pg2mm_DX214_DY214.swf","type":"normal","altText":"Group 1.png","width":204,"height":188,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":893,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":53.5,"rotateYPos":49.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":107,"bottom":99,"altText":"Group 1.png","pngfb":false,"pr":{"l":"Lib","i":490}},"html5data":{"xPos":0,"yPos":0,"width":107,"height":99,"strokewidth":0}},"width":107,"height":99,"resume":false,"useHandCursor":true,"id":"5ihV1JiMSQW"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6bMWGEZqQEB_CorrectReview","id":"01","linkId":"6bMWGEZqQEB_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":542,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":523}}}],"shapemaskId":"","xPos":0,"yPos":522,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1000,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":522}},"html5data":{"xPos":1,"yPos":1,"width":997,"height":37,"strokewidth":2}},"width":1000,"height":40,"resume":false,"useHandCursor":true,"id":"6bMWGEZqQEB_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6bMWGEZqQEB_IncorrectReview","id":"01","linkId":"6bMWGEZqQEB_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":551,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":525}}}],"shapemaskId":"","xPos":0,"yPos":522,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1000,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":524}},"html5data":{"xPos":1,"yPos":1,"width":997,"height":37,"strokewidth":2}},"width":1000,"height":40,"resume":false,"useHandCursor":true,"id":"6bMWGEZqQEB_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"6bjcI0KK7Zf","duration":1000,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1000,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"1000","y":"0","dx":"0","dy":"0"},"anchorb":{"x":"0","y":"0","dx":"0","dy":"0"}}],"duration":1000,"easing":"exponetial","easingdir":"easein"}}]}],"useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}');