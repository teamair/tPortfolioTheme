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
?>
<!DOCTYPE html>
<html class="archive" style="width: 100%; height: 100%; margin-top: 0 !important;">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>t</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
	
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head();?>
	
</head>
	<body <?php body_class(); ?>style="width: 100%; height:100%;">
		<div class="wrapper">
			<div class="ie--shadow">
			<div class="header">
	    			<div class="nav">
	    				<div class="nav-strikeThrough-mobile"></div>
		    			<ul class="nav-list">
		    				<li class="nav-item home-nav-item <?php if((is_home() or is_page('featured-photos') or is_page('featured-web')) and !(is_page('about'))){ echo " selected"; } ?>">
				    			<div class="medium-circle <?php if((is_home()  or is_page('featured-photos') or is_page('featured-web')) and !(is_page('about'))){ echo " nav-enlarge"; } ?>">
				    				<a class="nav-item-link" id="home-link" href="<?php echo get_home_url(); ?>">Home</a>
				   				</div>
		    				</li>
		    				<li class="nav-item about-nav-item <?php if((is_page('about') or in_category('about') or is_page('me') or ($post->post_parent == "37")) and !(is_home())){ echo " selected"; } ?>">
		   						<div class="medium-circle <?php if((is_page('about') or in_category('about') or is_page('me') or ($post->post_parent == "37")) and !(is_home())){ echo " nav-enlarge"; } ?>">
			    					<a class="nav-item-link" id="about-link" href="<?php echo get_permalink(37); ?>">About</a>
			    				</div>
	    					</li>
	    					<li class="nav-item photo-nav-item <?php if(is_page('photo') or $post->post_parent=="39" or in_category('photo')){ echo " selected"; } ?>">
				    			<div class="medium-circle <?php if(is_page('photo') or $post->post_parent=="39" or in_category('photo')){ echo " nav-enlarge"; } ?>">
				    				<a class="nav-item-link" id="photo-link" href="<?php echo get_permalink(39); ?>">Photo</a>
				   				</div>
		    				</li>
		    				<li class="nav-item web-nav-item <?php if(is_page('web') or $post->post_parent=="41" or is_page('design') or is_page('development') or in_category('web')){ echo " selected"; } ?>">
			    				<div class="medium-circle <?php if(is_page('web') or $post->post_parent=="41" or is_page('design') or is_page('development') or in_category('web')){ echo " nav-enlarge"; } ?>">
			    					<a class="nav-item-link webD-link" href="<?php echo get_permalink(41); ?>">Web</a>
			    				</div>	
	    					</li>
	    					<li class="nav-item contact-nav-item <?php if(is_page('contact')){ echo " selected"; } ?>">
		    					<div class="medium-circle <?php if(is_page('contact')){ echo " nav-enlarge"; } ?>">
		    						<a class="nav-item-link contact-link" href="<?php echo get_permalink(43); ?>">Contact</a>
		    					</div>
		    				</li>
		    			</ul>
	    			</div>
	  </div><!--end .header #top-nav-->
	  </div>
	  <div class="nav-strikeThrough"></div> 
	  <?php if((is_page_template('single-wgteShopRedesign')) or (is_page_template('single-wgteSiteRedesign')) or (is_single())) { ?>
	  	
	  <button class="header-toggle"></button>
	 <?php }?>