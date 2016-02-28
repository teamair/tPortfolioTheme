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
	<div class="drop mainContent photo-content" id="main">
			<ul class="main-content-list photo-content-list">
				<!--begin post content via json and ajax-->
				<li class="main-content-listItem dndIntro">
					<div class="dnd-text"> &#60;&#60; Drag and Drop Here </div>
				</li>		
			</ul><!--end .main-content-list-->	
	</div><!--end .drop area-->
</div><!-- .content-area -->
<?php get_footer(); ?>