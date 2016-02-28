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
	<div class="drop mainContent" id="main">
			<div class="web-wrap content-wrap">
				<h1 class="primary--font">Web</h1>
				<!--need breadcrumbs on same line as title-->
				<div class="pageBreak"><!-- 1px border-top --></div>
				<ul class="main-content-list web-content-list">
					<li class="main-content-listItem dndIntro">
						<div class="dnd-text"> &#60;&#60; Drag and Drop Here </div>
					</li>
				</ul><!--end .main-content-list-->
			</div>	
	</div><!--end .drop area-->
</div><!-- .content-area -->
<?php get_footer(); ?>