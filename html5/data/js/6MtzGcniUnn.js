window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"6AKff9t0da3","lmsId":"Slide2","width":1000,"height":562,"resume":false,"background":{"type":"swf","imagedata":{"assetId":83,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6MtzGcniUnn","actionGroups":{"ReviewInt_5iUFxBIBZh3":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ycY24DVpqn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5g4iWaBXr1f"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6TVkkSETzsp.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iUFxBIBZh3_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iUFxBIBZh3_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_5iUFxBIBZh3":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ycY24DVpqn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5g4iWaBXr1f"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5iUFxBIBZh3":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5iUFxBIBZh3"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5iUFxBIBZh3":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ycY24DVpqn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5g4iWaBXr1f"},"enabled":{"type":"boolean","value":false}}]},"5iUFxBIBZh3_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5u0fEDeVXB0","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6TVkkSETzsp.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5iUFxBIBZh3"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6TVkkSETzsp.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6TVkkSETzsp.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5iUFxBIBZh3"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6MtzGcniUnn":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_6MtzGcniUnn":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5kCTC6e41Kp","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5kCTC6e41Kp","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5u0fEDeVXB0","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5iUFxBIBZh3"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5u0fEDeVXB0","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5iUFxBIBZh3"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5VpnkkQ8zEn.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5iUFxBIBZh3"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"5iUFxBIBZh3_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5iUFxBIBZh3","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5VpnkkQ8zEn"},"completed_slide_ref":{"type":"string","value":"_player.5jA50EdyyUg.6WgbmenaWYA"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5u0fEDeVXB0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5iUFxBIBZh3","typea":"var","valueb":"5VpnkkQ8zEn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5VpnkkQ8zEn"},"completed_slide_ref":{"type":"string","value":"_player.5jA50EdyyUg.6WgbmenaWYA"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6MtzGcniUnn"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6MtzGcniUnn"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":192000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ycY24DVpqn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KjiVrWtBRA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5g4iWaBXr1f"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6De5JSJAwKS"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xuHAFT9SUW"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6MDTtEDWA5G"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/5dUIUlzStLH_DX1998_DY1998.swf","type":"normal","altText":"LINE.png","width":1920,"height":25,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":549,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":499.5,"rotateYPos":6.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":999,"bottom":13,"altText":"LINE.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":999,"height":13,"strokewidth":0}},"width":999,"height":13,"resume":false,"useHandCursor":true,"id":"6MDTtEDWA5G"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5gzUNKf8UiI_1371222898","id":"01","linkId":"txt__default_5ycY24DVpqn","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":246,"height":80,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"TRUE","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":34.375,"fontIsBold":false,"ascent":42.9,"descent":12.833,"leading":0,"underlinePosition":-3.438,"underlineThickness":2.292,"xHeight":22.688}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":186,"bottom":69,"pngfb":false,"pr":{"l":"Lib","i":532}}}],"shapemaskId":"","xPos":375,"yPos":293,"tabIndex":4,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":125,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":250,"bottom":82,"altText":"TRUE","pngfb":false,"pr":{"l":"Lib","i":531}},"html5data":{"xPos":0,"yPos":0,"width":250,"height":82,"strokewidth":0}},"width":250,"height":82,"resume":true,"useHandCursor":true,"id":"5ycY24DVpqn","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5g4iWaBXr1f.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5g4iWaBXr1f._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.5g4iWaBXr1f.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6TVkkSETzsp"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6KjiVrWtBRA_747351454","id":"01","linkId":"txt__default_6KjiVrWtBRA","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":719,"height":98,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Gumamit ng bamboo pole ay isa sa mga DiskarTech ","style":{"fontFamily":"\\"FS Elliot ProBold CBold80F95DDD\\",\\"FS Elliot Pro\\"","fontSize":25,"fontIsBold":false,"foregroundColor":"#262626","linkColor":"#262626","ascent":31.2,"descent":9.333,"leading":0,"underlinePosition":-2.5,"underlineThickness":1.667,"xHeight":16.333}},{"text":"para mas mabilis malibre ang cable sa mga sanga ng puno","style":{"fontFamily":"\\"FS Elliot Pro HeavyBold22DF374B\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":25,"fontIsBold":false,"foregroundColor":"#0070C0","linkColor":"#0070C0","ascent":31.2,"descent":9.333,"leading":0,"underlinePosition":-2.5,"underlineThickness":1.667,"xHeight":16.5}}],"style":{"justification":"center","lineSpacing":16,"tagType":"P"},"runs":[{"idx":0,"len":103,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":-6,"right":693,"bottom":101,"pngfb":false,"pr":{"l":"Lib","i":534}}}],"shapemaskId":"","xPos":139,"yPos":160,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":361.5,"rotateYPos":50,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-6,"right":723,"bottom":101,"altText":"Gumamit ng bamboo pole ay isa sa mga DiskarTech para mas mabilis malibre ang cable sa mga sanga ng puno","pngfb":false,"pr":{"l":"Lib","i":533}},"html5data":{"xPos":0,"yPos":0,"width":723,"height":100,"strokewidth":0}},"width":723,"height":100,"resume":false,"useHandCursor":true,"id":"6KjiVrWtBRA"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Pocr6I1M0j_1241723026","id":"01","linkId":"txt__default_5g4iWaBXr1f","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":246,"height":77,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"FALSE","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":34.375,"ascent":42.9,"descent":12.833,"leading":0,"underlinePosition":-3.438,"underlineThickness":2.292,"xHeight":22.688}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":193,"bottom":68,"pngfb":false,"pr":{"l":"Lib","i":536}}}],"shapemaskId":"","xPos":373,"yPos":391,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":125,"rotateYPos":39.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":250,"bottom":79,"altText":"FALSE","pngfb":false,"pr":{"l":"Lib","i":535}},"html5data":{"xPos":0,"yPos":0,"width":250,"height":79,"strokewidth":0}},"width":250,"height":79,"resume":true,"useHandCursor":true,"id":"5g4iWaBXr1f","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]},"ActGrpUncheckGroup":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5ycY24DVpqn.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5ycY24DVpqn._checked","operator":"set","value":{"type":"boolean","value":false}}]}]},"ActGrpSetCheckedVar":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUncheckGroup"},{"kind":"exe_actiongroup","id":"ActGrpSetCheckedVar"},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.5ycY24DVpqn.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6TVkkSETzsp"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5kCTC6e41Kp.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6De5JSJAwKS_511389749","id":"01","linkId":"txt__default_6De5JSJAwKS","type":"acctext","xPos":2,"yPos":1,"xAccOffset":2,"yAccOffset":1,"width":282,"height":57,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"True or False","style":{"fontFamily":"\\"FS Elliot Pro Heavy ChaEB6F89A1\\",\\"FS Elliot Pro Heavy\\",\\"FS Elliot Pro\\"","fontSize":28.125,"foregroundColor":"#030303","linkColor":"#030303","ascent":35.1,"descent":10.5,"leading":0,"underlinePosition":-2.813,"underlineThickness":1.875,"xHeight":18.563}}],"style":{"justification":"center","lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":13,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":66.667,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":50,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":6.25,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":258,"bottom":53,"pngfb":false,"pr":{"l":"Lib","i":526}}}],"shapemaskId":"","xPos":357,"yPos":75,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":143,"rotateYPos":29.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":287,"bottom":59,"altText":"True or False","pngfb":false,"pr":{"l":"Lib","i":525}},"html5data":{"xPos":0,"yPos":0,"width":287,"height":59,"strokewidth":0}},"width":286,"height":59,"resume":false,"useHandCursor":true,"id":"6De5JSJAwKS"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":81,"id":"01","url":"story_content/5pVN08Pg2mm_DX214_DY214.swf","type":"normal","altText":"Group 1.png","width":204,"height":188,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":893,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":53.5,"rotateYPos":49.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":107,"bottom":99,"altText":"Group 1.png","pngfb":false,"pr":{"l":"Lib","i":495}},"html5data":{"xPos":0,"yPos":0,"width":107,"height":99,"strokewidth":0}},"width":107,"height":99,"resume":false,"useHandCursor":true,"id":"5xuHAFT9SUW"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5iUFxBIBZh3_CorrectReview","id":"01","linkId":"5iUFxBIBZh3_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":542,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":528}}}],"shapemaskId":"","xPos":0,"yPos":522,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1000,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":527}},"html5data":{"xPos":1,"yPos":1,"width":997,"height":37,"strokewidth":2}},"width":1000,"height":40,"resume":false,"useHandCursor":true,"id":"5iUFxBIBZh3_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5iUFxBIBZh3_IncorrectReview","id":"01","linkId":"5iUFxBIBZh3_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":551,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":530}}}],"shapemaskId":"","xPos":0,"yPos":522,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1000,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":529}},"html5data":{"xPos":1,"yPos":1,"width":997,"height":37,"strokewidth":2}},"width":1000,"height":40,"resume":false,"useHandCursor":true,"id":"5iUFxBIBZh3_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"6AKff9t0da3","duration":1000,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1000,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"1000","y":"0","dx":"0","dy":"0"},"anchorb":{"x":"0","y":"0","dx":"0","dy":"0"}}],"duration":1000,"easing":"exponetial","easingdir":"easein"}}]}],"useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}');