window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"6SkBsSXbJCP","lmsId":"Slide5","width":1000,"height":562,"resume":false,"background":{"type":"swf","imagedata":{"assetId":83,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5WHhmFzsj5g","actionGroups":{"ReviewInt_6SPdyaQ1BYE":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6rBtxBfz3Yn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6S3Qh78VfXK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5zc4yi23zuU"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"64YYzYIX8lv"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5rMgHktY715.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6SPdyaQ1BYE_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6SPdyaQ1BYE_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_6SPdyaQ1BYE":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6rBtxBfz3Yn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6S3Qh78VfXK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5zc4yi23zuU"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"64YYzYIX8lv"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6SPdyaQ1BYE":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6SPdyaQ1BYE"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6SPdyaQ1BYE":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6rBtxBfz3Yn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6S3Qh78VfXK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5zc4yi23zuU"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"64YYzYIX8lv"},"enabled":{"type":"boolean","value":false}}]},"6SPdyaQ1BYE_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5u0fEDeVXB0","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5rMgHktY715.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6SPdyaQ1BYE"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5rMgHktY715.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5rMgHktY715.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6SPdyaQ1BYE"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5WHhmFzsj5g":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_5WHhmFzsj5g":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5kCTC6e41Kp","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5kCTC6e41Kp","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5u0fEDeVXB0","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6SPdyaQ1BYE"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5u0fEDeVXB0","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6SPdyaQ1BYE"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6SPdyaQ1BYE"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6SPdyaQ1BYE_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6SPdyaQ1BYE","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5VpnkkQ8zEn"},"completed_slide_ref":{"type":"string","value":"_player.5jA50EdyyUg.6WgbmenaWYA"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6SPdyaQ1BYE","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5VpnkkQ8zEn"},"completed_slide_ref":{"type":"string","value":"_player.5jA50EdyyUg.6WgbmenaWYA"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5WHhmFzsj5g"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5WHhmFzsj5g"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":192000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6rBtxBfz3Yn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6S3Qh78VfXK"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zc4yi23zuU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"64YYzYIX8lv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5lgfeE2nQMN"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VFYj4nfZ6f"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5d2oGSHsQUw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6MDTtEDWA5G"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/5dUIUlzStLH_DX1998_DY1998.swf","type":"normal","altText":"LINE.png","width":1920,"height":25,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":549,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":499.5,"rotateYPos":6.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":999,"bottom":13,"altText":"LINE.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":999,"height":13,"strokewidth":0}},"width":999,"height":13,"resume":false,"useHandCursor":true,"id":"6MDTtEDWA5G"},{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5yJo6RHWikj_1984547158","id":"01","linkId":"txt__default_6rBtxBfz3Yn","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":259,"height":59,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"1","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":28.125,"fontIsBold":false,"ascent":35.1,"descent":10.5,"leading":0,"underlinePosition":-2.813,"underlineThickness":1.875,"xHeight":18.563}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":143,"bottom":54,"pngfb":false,"pr":{"l":"Lib","i":555}}}],"shapemaskId":"","xPos":364,"yPos":218,"tabIndex":4,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":131.5,"rotateYPos":30.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":61,"altText":"1","pngfb":false,"pr":{"l":"Lib","i":554}},"html5data":{"xPos":0,"yPos":0,"width":264,"height":61,"strokewidth":0}},"width":263,"height":61,"resume":true,"useHandCursor":true,"id":"6rBtxBfz3Yn","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6S3Qh78VfXK.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6S3Qh78VfXK._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5zc4yi23zuU.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5zc4yi23zuU._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.64YYzYIX8lv.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.64YYzYIX8lv._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6S3Qh78VfXK.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.5zc4yi23zuU.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.64YYzYIX8lv.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5rMgHktY715"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6OjhT1bSFNF_1090290572","id":"01","linkId":"txt__default_6S3Qh78VfXK","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":259,"height":59,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"2","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":28.125,"fontIsBold":false,"ascent":35.1,"descent":10.5,"leading":0,"underlinePosition":-2.813,"underlineThickness":1.875,"xHeight":18.563}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":143,"bottom":54,"pngfb":false,"pr":{"l":"Lib","i":556}}}],"shapemaskId":"","xPos":364,"yPos":289,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":131.5,"rotateYPos":30.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":61,"altText":"2","pngfb":false,"pr":{"l":"Lib","i":554}},"html5data":{"xPos":0,"yPos":0,"width":264,"height":61,"strokewidth":0}},"width":263,"height":61,"resume":true,"useHandCursor":true,"id":"6S3Qh78VfXK","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6rBtxBfz3Yn.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6rBtxBfz3Yn._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5zc4yi23zuU.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5zc4yi23zuU._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.64YYzYIX8lv.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.64YYzYIX8lv._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6rBtxBfz3Yn.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.5zc4yi23zuU.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.64YYzYIX8lv.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5rMgHktY715"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6ZNZgEpcn9k_-1650367288","id":"01","linkId":"txt__default_5zc4yi23zuU","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":259,"height":59,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"3","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":28.125,"fontIsBold":false,"ascent":35.1,"descent":10.5,"leading":0,"underlinePosition":-2.813,"underlineThickness":1.875,"xHeight":18.563}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":143,"bottom":54,"pngfb":false,"pr":{"l":"Lib","i":557}}}],"shapemaskId":"","xPos":364,"yPos":360,"tabIndex":6,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":131.5,"rotateYPos":30.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":61,"altText":"3","pngfb":false,"pr":{"l":"Lib","i":554}},"html5data":{"xPos":0,"yPos":0,"width":264,"height":61,"strokewidth":0}},"width":263,"height":61,"resume":true,"useHandCursor":true,"id":"5zc4yi23zuU","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6rBtxBfz3Yn.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6rBtxBfz3Yn._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6S3Qh78VfXK.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6S3Qh78VfXK._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.64YYzYIX8lv.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.64YYzYIX8lv._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6rBtxBfz3Yn.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6S3Qh78VfXK.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.64YYzYIX8lv.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5rMgHktY715"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5Y7O7O4OnIC_-885058032","id":"01","linkId":"txt__default_64YYzYIX8lv","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":259,"height":59,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"4","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":28.125,"fontIsBold":false,"ascent":35.1,"descent":10.5,"leading":0,"underlinePosition":-2.813,"underlineThickness":1.875,"xHeight":18.563}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":143,"bottom":54,"pngfb":false,"pr":{"l":"Lib","i":558}}}],"shapemaskId":"","xPos":364,"yPos":431,"tabIndex":7,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":131.5,"rotateYPos":30.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":61,"altText":"4","pngfb":false,"pr":{"l":"Lib","i":554}},"html5data":{"xPos":0,"yPos":0,"width":264,"height":61,"strokewidth":0}},"width":263,"height":61,"resume":true,"useHandCursor":true,"id":"64YYzYIX8lv","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6rBtxBfz3Yn.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6rBtxBfz3Yn._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6S3Qh78VfXK.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6S3Qh78VfXK._checked","operator":"set","value":{"type":"boolean","value":false}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5zc4yi23zuU.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5zc4yi23zuU._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6rBtxBfz3Yn.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6S3Qh78VfXK.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.5zc4yi23zuU.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5rMgHktY715"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":true,"depth":2,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5lgfeE2nQMN_1790790864","id":"01","linkId":"txt__default_5lgfeE2nQMN","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":370,"height":57,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Multiple Choice","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":25,"foregroundColor":"#030303","linkColor":"#030303","ascent":31.2,"descent":9.333,"leading":0,"underlinePosition":-2.5,"underlineThickness":1.667,"xHeight":16.5}}],"style":{"justification":"center","lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":15,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":312,"bottom":50,"pngfb":false,"pr":{"l":"Lib","i":553}}}],"shapemaskId":"","xPos":313,"yPos":37,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":187,"rotateYPos":29.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":374,"bottom":59,"altText":"Multiple Choice","pngfb":false,"pr":{"l":"Lib","i":543}},"html5data":{"xPos":0,"yPos":0,"width":374,"height":59,"strokewidth":0}},"width":374,"height":59,"resume":false,"useHandCursor":true,"id":"5lgfeE2nQMN"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5VFYj4nfZ6f_-514065882","id":"01","linkId":"txt__default_5VFYj4nfZ6f","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":830,"height":65,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Ilang feet ang clearance ","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":25,"fontIsBold":false,"foregroundColor":"#0070C0","linkColor":"#0070C0","ascent":31.2,"descent":9.333,"leading":0,"underlinePosition":-2.5,"underlineThickness":1.667,"xHeight":16.5}},{"text":"ang dapat sundin\\rfor customer power drop?","style":{"fontFamily":"\\"FS Elliot ProBold CBold80F95DDD\\",\\"FS Elliot Pro\\"","fontSize":25,"fontIsBold":false,"foregroundColor":"#262626","linkColor":"#262626","ascent":31.2,"descent":9.333,"leading":0,"underlinePosition":-2.5,"underlineThickness":1.667,"xHeight":16.333}}],"style":{"justification":"center","lineSpacing":16,"tagType":"P"},"runs":[{"idx":0,"len":66,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":-6,"right":746,"bottom":68,"pngfb":false,"pr":{"l":"Lib","i":560}}}],"shapemaskId":"","xPos":83,"yPos":124,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":417,"rotateYPos":33.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-6,"right":834,"bottom":68,"altText":"Ilang feet ang clearance ang dapat sundin\\rfor customer power drop?","pngfb":false,"pr":{"l":"Lib","i":559}},"html5data":{"xPos":0,"yPos":0,"width":834,"height":67,"strokewidth":0}},"width":834,"height":67,"resume":false,"useHandCursor":true,"id":"5VFYj4nfZ6f"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":81,"id":"01","url":"story_content/5pVN08Pg2mm_DX214_DY214.swf","type":"normal","altText":"Group 1.png","width":204,"height":188,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":893,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":53.5,"rotateYPos":49.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":107,"bottom":99,"altText":"Group 1.png","pngfb":false,"pr":{"l":"Lib","i":495}},"html5data":{"xPos":0,"yPos":0,"width":107,"height":99,"strokewidth":0}},"width":107,"height":99,"resume":false,"useHandCursor":true,"id":"5d2oGSHsQUw"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6SPdyaQ1BYE_CorrectReview","id":"01","linkId":"6SPdyaQ1BYE_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":542,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":528}}}],"shapemaskId":"","xPos":0,"yPos":522,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1000,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":527}},"html5data":{"xPos":1,"yPos":1,"width":997,"height":37,"strokewidth":2}},"width":1000,"height":40,"resume":false,"useHandCursor":true,"id":"6SPdyaQ1BYE_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6SPdyaQ1BYE_IncorrectReview","id":"01","linkId":"6SPdyaQ1BYE_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":551,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":530}}}],"shapemaskId":"","xPos":0,"yPos":522,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1000,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":529}},"html5data":{"xPos":1,"yPos":1,"width":997,"height":37,"strokewidth":2}},"width":1000,"height":40,"resume":false,"useHandCursor":true,"id":"6SPdyaQ1BYE_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"6SkBsSXbJCP","duration":1000,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1000,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"1000","y":"0","dx":"0","dy":"0"},"anchorb":{"x":"0","y":"0","dx":"0","dy":"0"}}],"duration":1000,"easing":"exponetial","easingdir":"easein"}}]}],"useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}');