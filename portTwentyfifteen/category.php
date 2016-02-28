<?php
/**
 * The template for displaying Category pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

	<div class="drop mainContent">
		<div class="about-wrap content-wrap">
			<h1 class="primary--font"><?php echo get_the_title();?></h1>
			<!--need breadcrumbs on same line as title-->
			<div class="pageBreak"><!-- 1px border-top --></div>
			<!--get about post-->
			<ul class="main-content-list">
				<li class="main-content-listItem dndIntro">
					<div class="dnd-text"> &#60;&#60; Drag and Drop Here </div>
				</li>	
			</ul><!--end .main-content-list-->
		</div>	
		
	</div><!--end .drop area-->
</div><!-- .content-area -->
get_sidebar();
get_footer();
