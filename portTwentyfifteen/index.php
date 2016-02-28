<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

<?php get_sidebar(); ?>
		<div class="drop mainContent" id="main">
			<ul class="main-content-list home-content-list">
				<li class="main-content-listItem dndIntro">
					<div class="dnd-text"> &#60;&#60; Drag and Drop Here </div>
				</li>
				<!--begin post content via json and ajax-->		
			</ul><!--end .main-content-list-->
		</div><!--end .drop area-->
	</div><!-- .content-area -->
<?php get_footer(); ?>		
