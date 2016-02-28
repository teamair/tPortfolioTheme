<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
get_header();?>
<?php get_sidebar();?>

	<div class="drop mainContent" id="main">
		<div class="home-wrapper" id="wrapper">
			<div id="header">
				<div id="logo_area">
					<div id="logo">
						<img id="logo_image" src="/wp-content/themes/portTwentyfifteen/img/logos/wgte_logo.png" alt="wgte public media"/> 
						<div id="slogan">
							<span>Where You Belong!</span>
						</div>
					</div><!-- #logo close-->
					<div id="first">
						<div id="npr_logo">
							<img id="npr_image" src="/wp-content/themes/portTwentyfifteen/img/logos/npr_pbs_logo.png" alt="npr and pbs"/>
						</div>
						<div id="heart_container">
							<img id="heart_image" src="/wp-content/themes/portTwentyfifteen/img/ui/donate_heart.png" alt="donate here"/> <span>Donate</span>
						</div>
						<div id="social">
							<span>Follow Us:</span> <img id="social_image" src="/wp-content/themes/portTwentyfifteen/img/social/social.png" alt="follow us"/>
						</div>
					</div>
				</div><!-- #logo_area close-->
				<div id="nav_wrapper">
					<div id="main_nav">
							<ul class="nav_list">
								<li class="menu" id="menu"><h4 class="hamburger">Secondary Nav</h4><h3 class="secondary_nav_text">Menu</h3></li>
								<li class="nav_item" id="first_nav"><a href="index.html">Home</a></li>
								<li class="nav_item" id="schedule"><a href="index.html">Schedule</a></li>
								<li class="nav_item" id="listen_live2"><a href="index.html">Listen Live</a></li>
								<li class="nav_item" id="radio"><a href="http://www.wgte.org/wgte/listen">Radio</a></li>
								<li class="nav_item" id="television"><a href="http://www.wgte.org/wgte/watch">Television</a></li>
								<li class="nav_item" id="Education"><a href="http://www.wgte.org/wgte/learn">Education</a></li>
								<li class="nav_item" id="kids"><a href="http://www.wgte.org/wgtekids">Kids</a></li>
								<li class="nav_item" id="support"><a href="http://www.wgte.org/wgte/support">Support</a></li>
								<li class="nav_item" id="shop"><a href="http://www.wgte.org/wgte/shop/">Shop</a></li>
								<li class="search_box">
									<form method="get" action="http://www.wgte.org/wgte/search.asp" name="siteSearch"  style="padding-top:0%;">
										<input type="text" class="searchInput" type="text" value="Search" placeholder="Search">
										<input type="image" class="searchButton" src="/wp-content/themes/portTwentyfifteen/img/ui/search.png" alt="submit">
									</form>
								</li>
							</ul>
						</div><!-- #main_nav close-->	
				</div><!-- #nav_wrapper close-->
				<div id="menu_wrapper">
					<div id="nav_menu">
						<div id="menu_left_column" class="menu_column">
							<ul>
								<li class="menu_nav_item"><a href="">Home</a></li>
								<li class="menu_nav_item"><a href="">TV</a></li>
					            <li class="menu_nav_item"><a href="">Radio</a></li>
					        </ul>
						</div><!-- #menu_left_column-->
					    <div id="menu_middle_column" class="menu_column">
					    	<ul>
					    		<li class="menu_nav_item"><a href="">Shop</a></li>
					    		<li class="menu_nav_item"><a href="">Education</a></li>
					    		<li class="menu_nav_item"><a href="">Kids</a></li>
					        </ul>
					    </div><!-- #menu_middle_column-->
					    <div id="menu_right_column" class="menu_column">
					    	<ul>
					    		<li class="menu_nav_item"><a href="">Support</a></li>
					    		<li class="menu_nav_item"><a href="">About</a></li>
					    		<li class="menu_nav_item"><a href="">Donate</a></li>
					    	</ul>
					    </div><!-- #menu_right_column-->
					 </div><!-- #nav_menu-->
					 <div class="line_break"></div>
					 <div id="search_container">
					 	<div id="searchForm_container">
					 		<form>
					 			<input id="menu_searchInput" type="text" value="Search" placeholder="search">
					 			<div id="blue_box">
					 				<input type="image" id="menu_searchButton" src="/wp-content/themes/portTwentyfifteen/img/ui/search_white.png" alt="S">
					 			</div>
						    </form>
					    </div>
					    <button id="menu_close">X</button>
					 </div>	
				</div><!-- #menu_wrapper close-->
			</div><!-- #header close -->	
			<div id="main_content_wrapper">
				<div id="highlights">
					
					<div class="mobile_section_head" id="mobile_highlights_section_head">Highlights</div>
						
						<ul id="highlight_slider">	
							<li class="slide" id="slide1">
								<img id="highlight_image1" class="highlight_image" title="Catch Chair tonight on Create" src="/wp-content/uploads/2012/10/9.jpg" alt="Shank enim proident quis ut, beef ribs hamburger strip steak pancetta pastrami sausage tongue pork chop short ribs consequat."/> 
								<!-- <div class="highlights_text_area">						
									<span class="highlights_section_head">Highlights</span>
									<p class="highlight_headline"></p>
									<div class="highlight_body_text"></div>
								</div> -->
							</li>
							<li class="slide" id="slide2">
								<img id="highlight_image2" class="highlight_image" title="Awesome Photographers on Create" src="/wp-content/uploads/2012/10/8.jpg" alt="Bacon ipsum dolor sit amet shankle ribeye in spare ribs swine do tempor ball tip. Shank enim proident quis ut, beef ribs hamburger strip steak pancetta pastrami sausage tongue pork chop short ribs consequat."/> 
								<!-- <div class="highlights_text_area">						
									<span class="highlights_section_head">Highlights</span>
									<p class="highlight_headline"></p>
									<div class="highlight_body_text"></div>
								</div> -->
							</li>
							
						</ul>
						
						
						
				
				</div><!-- #highlights-->
				<div id="highlights_caption_wrap">
					<p id="caption-head">Highlights</p>
					<p id="highlights_caption"></p>
				</div>
				
				
				
				<div id="sidebar">
					<div id="schedule_container" class="schedule_container">
							<button id="listen_live_button" type="button">Listen Live!</button>
							<button id="radio_button" type="button" style="border-bottom: 1px solid #B9B9B9; border-left: 1px solid #B9B9B9;">Radio</button>
							<button id="tv_button" type="button">TV</button>
						<div id="abbreviated_schedule">
							
							
							
							
							<div class="time_slot">
								<div class="time">
									<strong>11</strong><span class="min_abbrv"> <strong>30</strong> PM</span>
								</div>
								<ul class="programs_list">
									<li class="program"><p><strong>TV30:</strong> Earthflight, A Nature Special Presentation</p></li>
									<li class="program"><p><strong>Create:</strong> Cook's Country from America's Test Kitchen</p></li>
									<li class="program"><p><strong>Family:</strong> Song of the Mountains</p></li>
								</ul>
							</div><!-- .time_slot close-->
							<div class="time_slot">
								<div class="time">
									<strong>11</strong><span class="min_abbrv"> <strong>30</strong> PM</span>
								</div>
								<ul class="programs_list">
									<li class="program"><p><strong>TV30:</strong> Earthflight, A Nature Special Presentation</p></li>
									<li class="program"><p><strong>Create:</strong> Cook's Country from America's Test Kitchen</p></li>
									<li class="program"><p><strong>Family:</strong> Song of the Mountains</p></li>
								</ul>
							</div><!-- .time_slot close-->
							
							
							
							
							
						</div><!-- #appreviated_schedule-->					
							<a id="full_schedule_button" href="schedule.html">Full Schedule</a>
							<a id="prog_button"  href="programs.html" style="border-left: 1px solid #FFF;">Programs</a>
						
					</div><!-- #schedule_container-->
					<div id="sponsor_section">
						<div id="column-l">
							<div class="ad">
								<p class="ad-text">This is a sponsor spot!</p>
							</div>
							<div class="ad">
								<p class="ad-text">This is a sponsor spot!</p>
							</div>
						</div>
						<div id="column-r">
							<div class="ad">
								<p class="ad-text">This is a sponsor spot!</p>
							</div>
							<div class="ad">
								<p class="ad-text">This is a sponsor spot!</p>
							</div>
						</div><!-- #column-r-->
					</div><!-- #sponsor_section-->
				</div><!--#sidebar -->
				<div id="articles">
						<div id="left_column">
							<div class="mobile_section_head" id="mobile_tv_section_head">Television</div>
							<div class="article" id="first_article">
								<img class="article_image" id="image1" src="/wp-content/themes/portTwentyfifteen/img/dummyContent/chair_1.png" alt="image1"/>
								<span class="article_headline" id="article_headline1">Heading</span>
								<p class="article_text" id="article_text1">Bacon ipsum dolor sit amet shankle ribeye in spare ribs swine do tempor ball tip. Shank enim proident quis ut, beef ribs hamburger strip steak pancetta pastrami sausage tongue pork chop short ribs consequat.</p>						
							</div>
							<div class="article" id="second_article">
								<img class="article_image" id="image3" src="/wp-content/themes/portTwentyfifteen/img/dummyContent/chair_3.png" alt="image3"/>
								<span class="article_headline" id="article_headline3">Heading</span>
								<p class="article_text" id="article_text3">Bacon ipsum dolor sit amet shankle ribeye in spare ribs swine do tempor ball tip. Shank enim proident quis ut, beef ribs hamburger strip steak pancetta pastrami sausage tongue pork chop short ribs consequat.</p>										
							</div>
							<div class="mobile_section_head" id="mobile_radio_section_head">Radio</div>
							
						</div><!-- #left_column-->
						<div id="right_column">
							<div class="article" id="fourth_article">
								<img class="article_image" id="image2" src="/wp-content/themes/portTwentyfifteen/img/dummyContent/chair_2.png" alt="image2"/>
								<span class="article_headline" id="article_headline2">Heading</span>
								<p class="article_text" id="article_text2">Bacon ipsum dolor sit amet shankle ribeye in spare ribs swine do tempor ball tip. Shank enim proident quis ut, beef ribs hamburger strip steak pancetta pastrami sausage tongue pork chop short ribs consequat.</p>									
							</div>	
							<div class="mobile_section_head" id="mobile_edu_section_head">Education</div>									
							<div class="article" id="fifth_article">
								<img class="article_image" id="image4" src="/wp-content/themes/portTwentyfifteen/img/dummyContent/chair_4.png" alt="image4"/>
								<span class="article_headline" id="article_headline4">Heading</span>
								<p class="article_text" id="article_text4">Bacon ipsum dolor sit amet shankle ribeye in spare ribs swine do tempor ball tip. Shank enim proident quis ut, beef ribs hamburger strip steak pancetta pastrami sausage tongue pork chop short ribs consequat.</p>									
							</div>											
											
						</div><!-- #right_column-->
				</div><!-- #articles-->
			</div><!-- #main_content_wrapper-->
			<div class="footer">
				<div class="footer_content">
					<div class="footer_logo_area" id="footer_logo_area">
						<img id="footer_logo_image" src="/wp-content/themes/portTwentyfifteen/img/logos/wgte_reverse_logo.png" alt="wgte">
					</div>
					<ul id="footer_links">
						<li class="link_item" id="first_link_item">Copyright &#169; 2013 WGTE Public Media</li>
						<li class="link_item"><a href="">Contact Us</a></li>
						<li class="link_item"><a href="http://www.wgte.org/wgte/wgte_services/">WGTE Services</a></li>
						<li class="link_item" id="last_link_item"><a href="http://www.wgte.org/wgte/base/download.php?file=http://media.aeoned.org/wgte/content/items/digital/15796_201309121506.pdf">Local Content and Service Report</a></li>
					</ul>
				</div>
			</div><!-- .footer close-->		   	
		</div><!-- #wrapper close-->
		
	</div> <!-- main_content close-->
	
</div><!-- #content-area close-->

<?php get_footer();?>

	

