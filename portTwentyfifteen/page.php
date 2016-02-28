<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

	<?php get_sidebar(); ?>
	<?php
	if($post->post_parent == "37") {
		include (TEMPLATEPATH . '/page-about.php' );
	}
	else if($post->post_parent == "39") {
		include (TEMPLATEPATH . '/page-photo.php' );
	}
	else if($post->post_parent == "41") {
		include (TEMPLATEPATH . '/page-web.php' );
	}
	else if($post->post_parent == "128"){
		include (TEMPLATEPATH . '/page-featured.php' );
	}
	else{ ?>
	
	<div class="drop mainContent" id="main">
		<ul class="main-content-list home-content-list">
			<li class="main-content-listItem dndIntro">
				<!--begin post content via json and ajax-->		
				
			</li>
		</ul><!--end .main-content-list-->
	</div><!--end .drop area-->
</div><!-- .content-area -->
	<?php }?>

<?php get_footer(); ?>
