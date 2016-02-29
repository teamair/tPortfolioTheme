
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */
jQuery(function() {
    jQuery(document).ready(function(){
						
        //initialize fancy box
            jQuery(".fancybox").attr('rel', 'gallery').fancybox({
                padding: 0,
                
            });
    });
    
    if(Modernizr.touch){
    	jQuery(".fancybox").touchwipe({
    		wipeLeft: function(){ jQuery.fancybox.next(); },
    		wipeRight: function(){ jQuery.fancybox.prev(); },
    		min_move_x: 20,
    		min_move_y: 20,
    		preventDefaultEvents: true
    	}); 
    }
				
			
							
								
							
							
				
    jQuery(function(){
        jQuery('.sidebar-toggle').on("click", function(){
            jQuery('.sidebar').toggle();
            jQuery('.sidebar-toggle').toggleClass("sidebar-off");
            jQuery('.mainContent').toggleClass("content-sidebar-off");
            jQuery('.header').toggle();
            jQuery('.header-toggle').toggleClass("header-off");
            jQuery('.mainContent').toggleClass("content-header-off");
            jQuery('.nav-strikeThrough').toggle();
        });
        jQuery('.header-toggle').on("click", function(){
            jQuery('.header').toggle();
            jQuery('.header-toggle').toggleClass("header-off");
            jQuery('.mainContent').toggleClass("content-header-off");
            jQuery('.nav-strikeThrough').toggle();
						
            jQuery('.sidebar').toggle();
            jQuery('.sidebar-toggle').toggleClass("sidebar-off");
            jQuery('.mainContent').toggleClass("content-sidebar-off");
        });
    });
				
    jQuery(function(){
        function removeNavClass(){
            jQuery(".nav-item").removeClass("selected");
            jQuery(".nav-item").children(".medium-circle").removeClass("nav-enlarge");
        }
        if(jQuery('body').hasClass("page-id-41")){
            removeNavClass();
            jQuery(".web-nav-item").addClass("selected");
            jQuery(".web-nav-item").children(".medium-circle").addClass("nav-enlarge");
        } else if(jQuery('body').hasClass("page-id-37")){
            removeNavClass();
            jQuery(".about-nav-item").addClass("selected");
            jQuery(".about-nav-item").children(".medium-circle").addClass("nav-enlarge");
        } else if(jQuery('body').hasClass("page-id-39")){
            removeNavClass();
            jQuery(".photo-nav-item").addClass("selected");
            jQuery(".photo-nav-item").children(".medium-circle").addClass("nav-enlarge");
        } else if(jQuery('body').hasClass("page-id-43")){
            removeNavClass();
            jQuery(".contact-nav-item").addClass("selected");
            jQuery(".contact-nav-item").children(".medium-circle").addClass("nav-enlarge");
        }
    });
    jQuery(function(){
        //history object attached to window
        var History = window.History;
					
        var dragItems = jQuery('.sidebar-listItem');
        var dropArea = jQuery('.drop');
        var postPreview = jQuery('.post-preview-wrap');
        var body = jQuery("body");
        var $appendToEl = jQuery(".main-content-list");
        function getClassList(el) {
            return jQuery(el).attr('class').split(/\s+/);
        }
        var bodyClassList = getClassList(body);
        /* pageId is set to the second class on the body of a wordpress page, which by default is the pageId. (Wordpress Version 4.2.2) */
        if(bodyClassList[0] == "home"){
            var pageID = bodyClassList[0];
        }
            //if page child,
        else if(bodyClassList[2] == "page-child"){
            //perform anonymous function that:
						
            console.log(bodyClassList);
            //takes sets pagesClass equal to the 4th element in the page body's class,
            var pageClass = String(bodyClassList[3]);
            console.log(pageClass);
            //pulls the integer out of the pageClass,
            var pageIDnumber = pageClass.match(/\d+$/)[0];
            //console log to check that pageIDnumber is an int,
            console.log(pageIDnumber);
            //concantonate the the integer to a string,
            var pageID = "page-id-" + pageIDnumber;
            //console log out the pageID to make sure pageID is a string in the format "page-id-Int",
            console.log(pageID);
            //return the page number 
        }
        else{
            var pageID = bodyClassList[1];
        }
				
        //displayTemplate function that returns a content template based on page id with included json content
					
				
        function displayTemplate(currentDraggable, pageID, contentArray){
            console.log("displayTemplate fired");
            var pageUrl = window.location.href;
            var currentState = History.getState();
            var stateTitle = currentState.title;
            console.log(stateTitle);
            console.log(pageID);						
            var template = {
                'page-id-37':function(){
                    console.log("Using about template");
                    var html = '<li class="main-content-listItem about-listItem"><img class="about-img" src=' + contentArray["featured_imageLink"] + ' alt=' + contentArray["featured_imageTitle"] + '/><div class="content">' + contentArray["content"] + '</div></li>';
                    return html;
                },
                'page-id-94':function(){
                    console.log("Using about template");
                    var html = '<li class="main-content-listItem about-listItem"><img class="about-img" src=' + contentArray["featured_imageLink"] + ' alt=' + contentArray["featured_imageTitle"] + '/><p class="content">' + contentArray["content"] + '</p></li>';
                    return html;
                },
                'page-id-39':function(){
                    console.log("Using photo template");
                    var html = '<li class="main-content-listItem">' + '<a class="fancybox" href=' + contentArray["featured_imageLink"] +' rel=' + currentDraggable + ' data-thumbnail=' + contentArray["featured_imageLink"]  + ' >' +
                    '<img class="main-img" src=' + contentArray["featured_imageLink"] + ' alt='+ contentArray["featured_imageTitle"] + '/></a>' + '</li>';
                    return html;
                },
                'page-id-96':function(){
                    console.log("Using photo template");
                    var html = '<li class="main-content-listItem">' + '<a class="fancybox" href=' + contentArray["featured_imageLink"] +' rel=' + currentDraggable + ' data-thumbnail=' + contentArray["featured_imageLink"]  + ' >' +
                    '<img class="main-img" src=' + contentArray["featured_imageLink"] + ' alt='+ contentArray["featured_imageTitle"] + '/></a>' + '</li>';
                    return html;
                },
                'page-id-41':function(){
                    console.log("Using web template");
                    var html = '<li class="main-content-listItem"><div class="post-divider"><div class="divider-title-background"><div class="divider-title">' + contentArray["postTitle"] + '</div></div></div><ul class="post-preview"><li class="deskMock">' + 
                    '<a class="post-preview-link desktop-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img" src=' + contentArray["desktopImgSrc"] + '></a></li><li class="tabletMock safari_only">' + 
                    '<a class="post-preview-link tablet-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img tablet-preview-img" src=' + contentArray["tabletImgSrc"] + '></a></li><li class="mobileMock"><a class="post-preview-link mobile-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img mobile-preview-img" src=' + contentArray["mobileImgSrc"] + '>' +
                    '</a></li></ul><ul class="code-view-list"><li class="view-list-item view-psd"><a class=" view-list-item-link view-psd-link" href=' + contentArray["postLink"] + '>view psd</a></li><li class="view-list-item view-source">' + 
                    '<a class=" view-list-item-link view-source-link" href=' + contentArray["postLink"] + '>view source</a></li><li class="view-list-item view-css"><a class=" view-list-item-link view-css-link" href=' + contentArray["postLink"] + '>view css</a></li>' + 
                    '<li class="view-list-item view-js"><a class=" view-list-item-link view-js-link" href=' + contentArray["postLink"] + '>view js</a></li></ul></li>';
                    return html;
                },
                'page-id-98':function(){
                    console.log("Using web template");
                    var html = '<li class="main-content-listItem"><div class="post-divider"><div class="divider-title-background"><div class="divider-title">' + contentArray["postTitle"] + '</div></div></div><ul class="post-preview"><li class="deskMock">' + 
                    '<a class="post-preview-link desktop-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img" src=' + contentArray["desktopImgSrc"] + '></a></li><li class="tabletMock safari_only">' + 
                    '<a class="post-preview-link tablet-preview-link" href=' + contentArray["postLink"] + '></a></li><li class="mobileMock"><a class="post-preview-link mobile-preview-link" href=' + contentArray["postLink"] + '>' + 
                    '</a></li></ul><ul class="code-view-list"><li class="view-list-item view-psd"><a class=" view-list-item-link view-psd-link" href=' + contentArray["postLink"] + '>view psd</a></li><li class="view-list-item view-source">' + 
                    '<a class=" view-list-item-link view-source-link" href=' + contentArray["postLink"] + '>view source</a></li><li class="view-list-item view-css"><a class=" view-list-item-link view-css-link" href=' + contentArray["postLink"] + '>view css</a></li>' + 
                    '<li class="view-list-item view-js"><a class=" view-list-item-link view-js-link" href=' + contentArray["postLink"] + '>view js</a></li></ul></li>';
                    return html;
                },
                'page-id-100':function(){
                    console.log("Using web template");
                    var html = '<li class="main-content-listItem"><div class="post-divider"><div class="divider-title-background"><div class="divider-title">' + contentArray["postTitle"] + '</div></div></div><ul class="post-preview"><li class="deskMock">' + 
                    '<a class="post-preview-link desktop-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img" src=' + contentArray["desktopImgSrc"] + '></a></li><li class="tabletMock">' + 
                    '<a class="post-preview-link tablet-preview-link" href=' + contentArray["postLink"] + '></a></li><li class="mobileMock"><a class="post-preview-link mobile-preview-link" href=' + contentArray["postLink"] + '>' + 
                    '</a></li></ul><ul class="code-view-list"><li class="view-list-item view-psd"><a class=" view-list-item-link view-psd-link" href=' + contentArray["postLink"] + '>view psd</a></li><li class="view-list-item view-source">' + 
                    '<a class=" view-list-item-link view-source-link" href=' + contentArray["postLink"] + '>view source</a></li><li class="view-list-item view-css"><a class=" view-list-item-link view-css-link" href=' + contentArray["postLink"] + '>view css</a></li>' + 
                    '<li class="view-list-item view-js"><a class=" view-list-item-link view-js-link" href=' + contentArray["postLink"] + '>view js</a></li></ul></li>';
                    return html;
                },
                'page-id-115':function(){
								
                    if(stateTitle == "Featured Web"){
                        console.log("using featured photo template");
                        var html = '<li class="main-content-listItem"><div class="post-divider"><div class="divider-title-background"><div class="divider-title">' + contentArray["postTitle"] + '</div></div></div><ul class="post-preview"><li class="deskMock">' + 
                    '<a class="post-preview-link desktop-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img" src=' + contentArray["desktopImgSrc"] + '></a></li><li class="tabletMock">' + 
                    '<a class="post-preview-link tablet-preview-link" href=' + contentArray["postLink"] + '></a></li><li class="mobileMock"><a class="post-preview-link mobile-preview-link" href=' + contentArray["postLink"] + '>' + 
                    '</a></li></ul><ul class="code-view-list"><li class="view-list-item view-psd"><a class=" view-list-item-link view-psd-link" href=' + contentArray["postLink"] + '>view psd</a></li><li class="view-list-item view-source">' + 
                    '<a class=" view-list-item-link view-source-link" href=' + contentArray["postLink"] + '>view source</a></li><li class="view-list-item view-css"><a class=" view-list-item-link view-css-link" href=' + contentArray["postLink"] + '>view css</a></li>' + 
                    '<li class="view-list-item view-js"><a class=" view-list-item-link view-js-link" href=' + contentArray["postLink"] + '>view js</a></li></ul></li>';
                        return html;
								
                    }else{
                        console.log("using featured photo template");
                        var html = '<li class="main-content-listItem">' + '<a class="fancybox" href=' + contentArray["featured_imageLink"] +' rel=' + currentDraggable + ' data-thumbnail=' + contentArray["featured_imageLink"]  + ' >' +
                        '<img class="main-img" src=' + contentArray["featured_imageLink"] + ' alt='+ contentArray["featured_imageTitle"] + '/></a>' + '</li>';
                        return html;
                    }
                },
                'page-id-117':function(){
                    if(stateTitle == "Featured Web"){
                         console.log("Using web template");
                    var html = '<li class="main-content-listItem"><div class="post-divider"><div class="divider-title-background"><div class="divider-title">' + contentArray["postTitle"] + '</div></div></div><ul class="post-preview"><li class="deskMock">' + 
                    '<a class="post-preview-link desktop-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img" src=' + contentArray["desktopImgSrc"] + '></a></li><li class="tabletMock safari_only">' + 
                    '<a class="post-preview-link tablet-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img tablet-preview-img" src=' + contentArray["tabletImgSrc"] + '></a></li><li class="mobileMock"><a class="post-preview-link mobile-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img mobile-preview-img" src=' + contentArray["mobileImgSrc"] + '>' +
                    '</a></li></ul><ul class="code-view-list"><li class="view-list-item view-psd"><a class=" view-list-item-link view-psd-link" href=' + contentArray["postLink"] + '>view psd</a></li><li class="view-list-item view-source">' + 
                    '<a class=" view-list-item-link view-source-link" href=' + contentArray["postLink"] + '>view source</a></li><li class="view-list-item view-css"><a class=" view-list-item-link view-css-link" href=' + contentArray["postLink"] + '>view css</a></li>' + 
                    '<li class="view-list-item view-js"><a class=" view-list-item-link view-js-link" href=' + contentArray["postLink"] + '>view js</a></li></ul></li>';
                    return html;
								
                    }else{
                        console.log("using featured photo template");
                        var html = '<li class="main-content-listItem">' + '<a class="fancybox" href=' + contentArray["featured_imageLink"] +' rel=' + currentDraggable + ' data-thumbnail=' + contentArray["featured_imageLink"]  + ' >' +
                        '<img class="main-img" src=' + contentArray["featured_imageLink"] + ' alt='+ contentArray["featured_imageTitle"] + '/></a>' + '</li>';
                        return html;
                    }
                },
                'home': function(){
                    console.log("Using home template");
                    console.log(currentDraggable);
								
                    switch (currentDraggable) {
                        case "featured-web":
                             console.log("Using web template");
                    		var html = '<li class="main-content-listItem"><div class="post-divider"><div class="divider-title-background"><div class="divider-title">' + contentArray["postTitle"] + '</div></div></div><ul class="post-preview"><li class="deskMock">' + 
                    		'<a class="post-preview-link desktop-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img" src=' + contentArray["desktopImgSrc"] + '></a></li><li class="tabletMock safari_only">' + 
                    		'<a class="post-preview-link tablet-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img tablet-preview-img" src=' + contentArray["tabletImgSrc"] + '></a></li><li class="mobileMock"><a class="post-preview-link mobile-preview-link" href=' + contentArray["postLink"] + '><img class="post-preview-img mobile-preview-img" src=' + contentArray["mobileImgSrc"] + '>' +
                    		'</a></li></ul><ul class="code-view-list"><li class="view-list-item view-psd"><a class=" view-list-item-link view-psd-link" href=' + contentArray["postLink"] + '>view psd</a></li><li class="view-list-item view-source">' + 
                    		'<a class=" view-list-item-link view-source-link" href=' + contentArray["postLink"] + '>view source</a></li><li class="view-list-item view-css"><a class=" view-list-item-link view-css-link" href=' + contentArray["postLink"] + '>view css</a></li>' + 
                    		'<li class="view-list-item view-js"><a class=" view-list-item-link view-js-link" href=' + contentArray["postLink"] + '>view js</a></li></ul></li>';
                   			break;
                        case "featured-photos":
                            console.log("gonna use the featured photo");
                            var html = '<li class="main-content-listItem">' + '<a class="fancybox" href=' + contentArray["featured_imageLink"] +' rel=' + currentDraggable + ' data-thumbnail=' + contentArray["featured_imageLink"]  + ' >' +
                            '<img class="main-img" src=' + contentArray["featured_imageLink"] + ' alt='+ contentArray["featured_imageTitle"] + '/></a>' + '</li>';
                            break;
                        case "featured-blog-post":
                            var html = '<li class="main-content-listItem about-listItem"><img class="about-img" src=' + contentArray["featured_imageLink"] + ' alt=' + contentArray["featured_imageTitle"] + '/><p class="content">' + contentArray["textContent"] + '</p></li>';
                            break;
                        default: 
                    }
                    return html;
                },
                'default':function(){
                    console.log("Using default template");
                    var html = '<li class="main-content-listItem dndIntro"><div class="dnd-text"> Sorry we have encountered an error loading the content :/ </div></li>'
                    return html;
                }	
            };
            jQuery(".main-content-list").mCustomScrollbar("destroy");
            window.setTimeout(function(){
                jQuery(".main-content-list").mCustomScrollbar({theme:"minimal-dark"});
							
							
            }, 1 * 10);
						
						
						
            return (template[pageID] || template['default'])();
        };
        //checks url to determine if it should push a new state or keep the url unchanged
        function checkOrReplaceUrl(res, currentDraggable, currentDraggableTitle){
            console.log("checking and replacing or pushing new url");
            console.log(currentDraggable);
            var currentState = History.getState();
            console.log(currentState);
            var currentStateHash = currentState.hash;
            console.log(currentStateHash);
            /*
            var currentStateUrl = currentState.url;
            console.log(currentStateUrl);
            var urlFragments = currentStateUrl.split("/");
            */
            var hashFragments = currentStateHash.split("/");
            console.log(hashFragments);
            //strip out root folder from hash until launch
							
            /*console.log(urlFragments);
            */
            var currentDraggableString = String(currentDraggable);
							
            console.log(currentDraggableString);
            console.log(hashFragments);
							
            //if currentDraggable is found in the Url fragments then replace the currentStateUrl otherwise set it equal to currentDraggable and push the new state
            if((jQuery.inArray(currentDraggableString, hashFragments/*urlFragments*/)) !== -1) {
                //there is repetitive state in the url so no state is pushed and the url remains unchanged 
                console.log(newStateUrl);
            }
                //if urlFragments has a length of greater than 5 
                /*
                else if(urlFragments.length >= 7){
                    //then delete the 1,2,8th element
                    urlFragments.splice(0,1);
                    urlFragments.splice(1,1);
                    urlFragments.splice(7,1);
                    //and replace the fifth element with currentDraggable
                    urlFragments[3] = currentDraggableString;
                    console.log(urlFragments)
                    //stitch url back together
                    var newStateUrl = "";
                    for (var i = 0; i < urlFragments.length; i++){
                        newStateUrl +="/";
                        newStateUrl += urlFragments[i];
                    }
                    
                    console.log(newStateUrl);
                    //set newStateUrl
                    window.stateChangeIsLocal = true; 
                    History.pushState(res, currentDraggableTitle, "" + newStateUrl + "");
                }*/
            else if(hashFragments.length >= 4){
                //delete elements of hashFragments
                hashFragments.splice(0,0);
                //replace necessary hashFragments
                hashFragments[3] = currentDraggableString;
                hashFragments.splice(2, 1);
                hashFragments.splice(4, 1);
                console.log(hashFragments);
                //stitch url 
                var newStateHash ="";
                for(var i =0; i < hashFragments.length; i++){
                    newStateHash +="/";
                    newStateHash += hashFragments[i];
                }
                console.log(hashFragments);
								
                console.log(newStateHash);
                //push new state
                window.stateChangeIsLocal = true;
                History.pushState(res, currentDraggableTitle, "" + newStateHash + "");
								
            }
            else if((jQuery("body").hasClass("page-id-117") || jQuery("body").hasClass("page-id-115") || jQuery("body").hasClass("home")) && (hashFragments.length >= 3)){
                //delete elements of hashFragments
               
                hashFragments.splice(0,1);
                
                //replace necessary hashFragments
                hashFragments[0] = currentDraggableString;
                hashFragments.splice(1, 1);
                console.log(hashFragments);
                //stitch url 
                var newStateHash ="";
                for(var i =0; i < hashFragments.length; i++){
                    newStateHash +="/";
                    newStateHash += hashFragments[i];
                }
                console.log(hashFragments);
								
                console.log(newStateHash);
                //push new state
                window.stateChangeIsLocal = true;
                History.pushState(res, currentDraggableTitle, "" + newStateHash + "");
            }
							
                /*
                else if((jQuery("body").hasClass("page-id-117") || jQuery("body").hasClass("page-id-115") || jQuery("body").hasClass("home")) && (urlFragments.length >= 4)){
                    console.log("hey there's too many url elements");
                    //then delete the 1,2,8th element
                    urlFragments.splice(0,1);
                    urlFragments.splice(1,1);
                    
                    //and replace the fifth element with currentDraggable
                    urlFragments[2] = currentDraggableString;
                    console.log(urlFragments);
                    //stitch url back together
                    var newStateUrl = "";
                    for (var i = 0; i < urlFragments.length; i++){
                        newStateUrl +="/";
                        newStateUrl += urlFragments[i];
                    }
                    console.log(urlFragments);
                    console.log(newStateUrl);
                    //set newStateUrl
                    window.stateChangeIsLocal = true; 
                    History.pushState(res, currentDraggableTitle, "" + newStateUrl + "");
                    
                }*/
            else{
                var newStateUrl = currentDraggable;
                console.log(newStateUrl);
                window.stateChangeIsLocal = true;
                // push state using a variable to represent the state url fragment
                History.pushState(res, currentDraggableTitle, "" + newStateUrl + "/");
            }
							
        };
        //success function
        function success(json, contentRequest, currentDraggable, currentDraggableTitle) {
            console.log("success function fired");
            console.log(currentDraggableTitle);
            jQuery(".main-content-listItem").remove();
            //results of json stored in res global variable
            res = json;
            //checkOrReplaceUrl to determine Url and push the new state
            checkOrReplaceUrl(res, currentDraggable, currentDraggableTitle); 
						
            console.log(currentDraggableTitle);
            jQuery.each(res,function(index, res) {
                //associative array of content to be passed as an argument to displayTemplate
                var contentArray = {
                    'featured_imageLink': res.featured_image.guid, 
                    'featured_imageTitle': res.featured_image.title, 
                    'postTitle':res.title,
                    'postLink':res.link,
                    'content':res.content,
                    'textContent': jQuery(res.content).text(),
                    'desktopImgSrc': jQuery(res.content).find('img').attr('src'),
                    'tabletImgSrc': jQuery(res.content).find('img:nth-of-type(2)').attr('src'),
                    'mobileImgSrc': jQuery(res.content).find('img:nth-of-type(3)').attr('src'),
                };
                console.log(contentArray['tabletImgSrc']);
                console.log("Yay formatting the response object and its values as well as appending main with the content");
                $appendToEl.append(function(index) {
                    return displayTemplate(currentDraggable, pageID, contentArray);
												
                });	
            });
        }
		        	
        //This ajax request get wordpress posts filtered depending on what .sideItem is clicked or dragged. 
        //The json object is created via wp-JSON plugin
        function requestContent(currentDraggable, currentDraggableTitle) {
            console.log("requestContent fired");
            console.log(currentDraggableTitle);
            //global contentRequest
            contentRequest = jQuery.ajax({
            	cache: false,
                dataType: 'json',
                success: function(json) {
                    console.log(currentDraggable);
                    success(json, contentRequest, currentDraggable, currentDraggableTitle);
                },
                type: 'GET',
                url:"/wp-json/posts?filter[category_name]=" + currentDraggable
            });	
        }		
        //default loadContent function for displaying posts after clicking || dnd'ing 
        function loadContent(event, ui) {
            jQuery(".main-content-list").mCustomScrollbar("destroy");
						
            //element to append to
            if(event.type == "drop"){
                var currentDraggable = ui.draggable.find("img").attr("alt");
                var currentDraggableID = ui.draggable.find("img").attr("id");
                var currentDraggableLink = ui.draggable.find("a").attr("href");
                var currentDraggableTitle = ui.draggable.find(".item-txt").text();
            }else if(event.type == "click"){
                //sets current draggable as the value of alt attribute on sideItem img
                var currentDraggable = jQuery(event.target).parent().find("img").attr("alt");
                var currentDraggableID = jQuery(event.target).parent().find("img").attr("id");
                var currentDraggableTitle = jQuery(event.target).parent().find(".item-txt").text();
                console.log(currentDraggableTitle);
            }; 
            //single page loads
            if(
            	(body.hasClass("single")) && (event.type =="drop" || event.type =="click")){
                location.assign(currentDraggableLink);
            }else{
                //ajax request for content
                requestContent(currentDraggable, currentDraggableTitle);
                console.log(contentRequest);
            }
        }
        function reloadContent() {
		        		
            console.log("reloadContent function fired");
            var currentState = History.getState();
            var stateData = currentState.data;
            console.log(currentState);
            if((jQuery.isArray(stateData))) {
                jQuery(".main-content-listItem").remove();
                jQuery.each(stateData, function(index, stateData) {
                    console.log("Yay formatting the stateData");
                    var contentArray = {
                        'featured_imageLink': stateData.featured_image.guid, 
                        'featured_imageTitle': stateData.featured_image.title, 
                        'postTitle':stateData.title,
                        'postLink':stateData.link,
                        'content':stateData.content,
                        'textContent': jQuery(stateData.content).text(),
                        'desktopImgSrc': jQuery(stateData.content).find('img').attr('src'),
                    	'tabletImgSrc': jQuery(stateData.content).find('img:nth-of-type(2)').attr('src'),
                    	'mobileImgSrc': jQuery(stateData.content).find('img:nth-of-type(3)').attr('src'),
                    };
                    console.log(stateData.featured_image.guid);
                    $appendToEl.append(function(index) {
                        console.log("returning the displayTemplate with the content formatted");
                        return displayTemplate("currentDraggable", pageID, contentArray);
                    });	
                });
            }else{
                jQuery(".main-content-listItem").remove();
                console.log("butt loads of cats");
                $appendToEl.append(function() {
                    var html = '<li class="main-content-listItem dndIntro"><div class="dnd-text"> << Drag and Drop Here or Click a Category</div></li>';
                    return html;
                });	
            }
        }
        //initiate dnd draggable handler on sidebar items	
        dragItems.draggable({
            cursor: "move",
            cursorAt: {top:60, left:45},
            helper: 'clone',
            revert: "invalid",
            scroll: false,
            appendTo: 'body'
        });
	        		
        console.log("Going to use loadContent function");
        //sideItem click handler 
        dragItems.on("click", loadContent);
        //initiate dnd droppable handler on mainContent
        dropArea.droppable({
            accept: ".sidebar-listItem",
            activeClass: "main-dropzone",
            hoverClass: "dogs",
            drop: loadContent
        });
        //on pageload load content 
        jQuery(document).ready(function(){
            console.log("more Cats");
            reloadContent();
        }); 
        //initialize window.stateChangeIsLocal
        window.stateChangeIsLocal = false;
        jQuery(window).on('statechange', function(){
            if(!window.stateChangeIsLocal) {
	        				
                jQuery(".main-content-listItem").remove();
                jQuery(".main-content-list").mCustomScrollbar("destroy");
                console.log("harrow");
                reloadContent();
	        				
            }
            else {
                window.stateChangeIsLocal = false;
            }
        });
    });
    //toolTip handlers
    function showToolTip(){
        console.log("hey");
        jQuery(event.target).siblings().css("visibility", "visible");
    }
    function hideToolTip(){
        jQuery(event.target).siblings().css("visibility", "hidden");
    }
    function resetToolTip(){
        toolPointWrap.siblings().css("visibility", "hidden");	
    }
    var toolPointWrap = jQuery('.tool-point-wrap');
    jQuery('body').hover(resetToolTip);
    toolPointWrap.hover(showToolTip, hideToolTip);
		
    /*
    //post preview link handler
function postPreviewLinkHandler(linkUrl, windowSize){	
    
    var iframe = jQuery('<iframe class="preview-frame" id="preview-frame" frameborder="0" marginwidth="0" marginheight="0" width=' + windowSize[0] + '</iframe>');
    
    var pageHead = linkUrl + " .head";
    var pageFragment = linkUrl + " #wrapper";
    /*
    var dialog = jQuery("<div></div>").load(pageFragment).appendTo("body").dialog({
        autoOpen: false,
        modal: true,
        resizable: true,
        width: windowSize[0],
        height: "auto",
    });
    
    function appendIframe(){
        console.log(linkUrl);
        console.log(pageFragment);
        console.log(jQuery(".preview-frame"));
        var iframeBody = jQuery("#preview-frame").contents().find('body');
        var iframeHead = jQuery("#preview-frame").contents().find('head');
        console.log(iframeHead);
        console.log(iframeBody);
        console.log(pageHead);
        iframeHead.load(pageHead);
        iframeBody.load(pageFragment);
        
    }
    
    /*
    
    
    var dialog = jQuery("<div></div>").append(iframe).appendTo("body").dialog({
        autoOpen: false,
        modal: true,
        resizable: true,
        width: windowSize[0],
        height: "auto",
    });
    
    dialog.dialog("open");
}
*/
    jQuery(document).on("click", '.post-preview-link', function(event){
		
        event.preventDefault();
        console.log("hi");
        var link = jQuery(this);
        console.log(link);
        var linkUrl = this.href;
        console.log(linkUrl);
        var singlePageStyle = linkUrl + " #FrameStyle-css";
        var singlePageFragment = linkUrl + " #wrapper";

        function setAttributes(el, attrs) {
            for (var key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        }
        if (link.hasClass("mobile-preview-link") && (jQuery("body").width() >= 768)){
            jQuery(".mobile-preview-frame").toggleClass("display--block");
            var previewFrameDoc = jQuery("#mobile-preview-frame").contents();
            var previewFrameBody = jQuery('body', jQuery("#mobile-preview-frame"));
            previewFrameDoc.find("head").load(singlePageStyle);
            previewFrameDoc.find("body").load(singlePageFragment);
            jQuery(".gray-background").toggle();

            var jquery = document.createElement("script");
            var slipprySliderStyle = document.createElement("link");
            var slippry = document.createElement("script");
            var docReady = document.createElement("script");
            var wgteScript = document.createElement("script");
            var scrollbarStyle = document.createElement("link");
            var scrollbar = document.createElement("script");


            setAttributes(jquery, { "type": "text/javascript", "src": "/wp-includes/js/jquery/jquery.js" });
            setAttributes(slipprySliderStyle, { "rel": "stylesheet", "href": "/wp-content/themes/portTwentyfifteen/js/slippry-1.3.1/dist/slippry.css" });
            setAttributes(slippry, { "type": "text/javascript", "src": "/wp-content/themes/portTwentyfifteen/js/slippry-1.3.1/src/slippry.js" });
            setAttributes(docReady, { "type": "text/javascript", "id": "docReady" });
            setAttributes(scrollbarStyle, { "rel": "stylesheet", "href": "/wp-content/themes/portTwentyfifteen/js/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.css" });
            setAttributes(scrollbar, { "type": "text/javascript", "src": "/wp-content/themes/portTwentyfifteen/js/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.concat.min.js" });
            setAttributes(wgteScript, {"type":"text/javascript", "src": "/wp-content/themes/portTwentyfifteen/js/wgte.js"});
            

            docReady.text = 'jQuery(document).ready(function(){ window.setTimeout(function(){ jQuery("#highlights").slippry(); }, 1 * 100); });';

            jQuery("#mobile-preview-frame").contents().find("head")[0].appendChild(jquery);

            window.setTimeout(function () {
            	
                jQuery("#mobile-preview-frame").contents().find("head")[0].appendChild(slippry);
                jQuery("#mobile-preview-frame").contents().find("head")[0].appendChild(slipprySliderStyle);
             /*
                jQuery("#mobile-preview-frame").contents().find("head")[0].appendChild(scrollbarStyle);
                jQuery("#mobile-preview-frame").contents().find("head")[0].appendChild(scrollbar);
               */
                jQuery("#mobile-preview-frame").contents().find("head")[0].appendChild(wgteScript);
               
                window.setTimeout(function () {
                    jQuery("#mobile-preview-frame").contents().find("body")[0].appendChild(docReady);
                }, 1 * 1000);
            }, 2 * 1000);
        } 
        else if(link.hasClass("tablet-preview-link") && (jQuery("body").width() >= 1024)){
            jQuery(".tablet-preview-frame").toggleClass("display--block");
            var previewFrameDoc = jQuery("#tablet-preview-frame").contents();
            var previewFrameBody = jQuery('body', jQuery("#tablet-preview-frame"));
            previewFrameDoc.find("head").load(singlePageStyle);
            previewFrameDoc.find("body").load(singlePageFragment);
            jQuery(".gray-background").toggle();
           
            var jquery = document.createElement("script");
            var slipprySliderStyle = document.createElement("link");
            var slippry = document.createElement("script");
            var docReady = document.createElement("script");
            var mouseHold = document.createElement("script");
            var wgteScript = document.createElement("script");

            var scrollbarStyle = document.createElement("link");
            var scrollbar = document.createElement("script");
            setAttributes(jquery, { "type": "text/javascript", "src": "/wp-includes/js/jquery/jquery.js" });
            setAttributes(mouseHold, { "type": "text/javascript", "src": "/wp-content/themes/portTwentyfifteen/js/mousehold.js" });
            setAttributes(slipprySliderStyle, { "rel": "stylesheet", "href": "/wp-content/themes/portTwentyfifteen/js/slippry-1.3.1/dist/slippry.css" });
            setAttributes(slippry, { "type": "text/javascript", "src": "/wp-content/themes/portTwentyfifteen/js/slippry-1.3.1/src/slippry.js" });
            setAttributes(docReady, { "type": "text/javascript", "id": "docReady" });
            setAttributes(scrollbarStyle, { "rel": "stylesheet", "href": "/wp-content/themes/portTwentyfifteen/js/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.css" });
            setAttributes(scrollbar, { "type": "text/javascript", "src": "/wp-content/themes/portTwentyfifteen/js/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.concat.min.js" });

            docReady.text = 'jQuery(document).ready(function(){  window.setTimeout(function(){ jQuery("#highlights").slippry(); }, 1 * 100); });';
            setAttributes(wgteScript, { "type": "text/javascript", "src": "/wp-content/themes/portTwentyfifteen/js/wgte.js" });
            jQuery("#tablet-preview-frame").contents().find("head")[0].appendChild(jquery);

            window.setTimeout(function () {
                /*jQuery(sliderInlineScript).innerHTML("var ms_grabbing_curosr = 'http://localhost/wp-content/plugins/master-slider/public/assets/css/common/grabbing.cur', ms_grab_curosr = 'http://localhost/wp-content/plugins/master-slider/public/assets/css/common/grab.cur';");*/
                jQuery("#tablet-preview-frame").contents().find("head")[0].appendChild(mouseHold);
                
                jQuery("#tablet-preview-frame").contents().find("head")[0].appendChild(slippry);
                jQuery("#tablet-preview-frame").contents().find("head")[0].appendChild(slipprySliderStyle);
                /*
                jQuery("#tablet-preview-frame").contents().find("head")[0].appendChild(scrollbarStyle);
                jQuery("#tablet-preview-frame").contents().find("head")[0].appendChild(scrollbar);
                */
                jQuery("#tablet-preview-frame").contents().find("head")[0].appendChild(wgteScript);
                window.setTimeout(function () {
                    jQuery("#tablet-preview-frame").contents().find("body")[0].appendChild(docReady);
                }, 1 * 1000);
            }, 2 * 1000);
        }
        else {
            console.log("yay")
            window.location.href = this.href;
        }
    });
	
	
	
	
    jQuery(".glyphicon-remove").on("click", function(){
        jQuery(".gray-background").hide();
        jQuery(".preview-frame").removeClass("display--block");
        jQuery(".code-viewer").hide();
        jQuery(".psd-viewer").hide();
    });


    var menuClose = jQuery("#menu_close");
    var menuWrapper = jQuery("#menu_wrapper");
    var navWrapper = jQuery("#nav_wrapper");
    var navWrapWidth = navWrapper.width();
    /* to "x" or close out of the nav menu*/
    menuClose.click(function () {
        menuWrapper.hide();
    });
    /* handles clicking on the nav menu*/
    jQuery(document).on("click", "#nav_wrapper", function () {
        menuWrapper.toggle();
        console.log("wtf");
    });
    jQuery(window).on("resize",  function () {
        menuWrapper.hide();
       
    });
	
    jQuery(document).on("click", ".view-list-item-link", function(event){
        event.preventDefault();
        jQuery(".prettyprint").remove();
        if(!(jQuery(event.target).hasClass("view-psd-link") || jQuery(event.target).hasClass("view-js-link"))){
        	jQuery(".gray-background").toggle();
        }
        console.log(" view source clicked yo!"); 
        var pageUrl = jQuery(".view-list-item-link").attr("href");
        var pageCss = pageUrl + " #designSingleStyle-css";
        var pageJs = pageUrl + " #designSingleScript";
        var pagePsd = pageUrl + " #designSinglePsd";
		
        var htmlString = '';
		
        var cats = jQuery(event.target);
        console.log(cats);
		
		
		
        console.log("source link clicked");
        jQuery.ajax({
            url: pageUrl,
            datatype: "html",
            success: function(html){
                htmlString = html;
                console.log(htmlString);
                var source = jQuery(htmlString);
                //using the index of elements in dom to locate link to stylesheet and script
                var css = jQuery(source.get(55)).attr("href");
                var js = jQuery(source.get(77)).attr("src");
                var psd = pageUrl + " .attachment-flattened-psd-image";
                if(jQuery(event.target).hasClass("view-source-link")){
                    jQuery(".code-viewer").toggle();
                    jQuery("<pre/>", {
                        "class": "prettyprint",
                        "html":   '&lt;!DOCTYPE html>\n&lt;html>\n&lt;head>\n&lt;/head>\n' +
                        '&lt;body>\n' +
                        '&lt;div class="wrapper">' + 
                        source.find("#wrapper")
                        .html()
                        .replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})
                        .replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>') + 
                        '\n&lt;/div>\n&lt;/body>\n&lt;/html>'
                    }).appendTo(".code-viewer");
                    prettyPrint();
                }
                else if(jQuery(event.target).hasClass("view-css-link")){
                    console.log("css link clicked");
                    jQuery(".code-viewer").toggle();
                    jQuery("<pre/>", {
                        "class": "prettyprint",
                        "html": ''   
                    }).load('' + css + '', function(){
                        prettyPrint();
                    }).appendTo(".code-viewer"); 
                }
                else if(jQuery(event.target).hasClass("view-js-link")){
                    console.log("js link clicked");
                    /*
                    jQuery(".code-viewer").toggle();
                    jQuery("<pre/>", {
                        "class": "prettyprint",
                        "html": ''   
                    }).load('' + js + '', function(){
                        prettyPrint();
                    }).appendTo(".code-viewer"); 
                    */
                }
                else if(jQuery(event.target).hasClass("view-psd-link")){
						/*
                    console.log("psd link clicked");
						
                    jQuery(".psd-viewer").toggle();
                    jQuery(".psd-viewer").load(psd);
                    */
                }
					
            }
        });
    });
    
    
});




	