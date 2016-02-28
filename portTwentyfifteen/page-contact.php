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
		<div class="contact-wrap content-wrap">
			<h1 class="primary--font">Contact</h1>
			<!--need breadcrumbs on same line as title-->
			<div class="pageBreak"><!-- 1px border-top --></div>
			<div class="contact-content">
				<?php $args = array(
					'posts_per_page' => 1,
					'category' => '17'
				);?>
				<?php $posts = get_posts($args);
				foreach($posts as $post) : setup_postdata($post);
					$email_value = get_post_meta( get_the_ID(), 'Email', $single = true);
					$phone_value = get_post_meta( get_the_ID(), 'Phone', $single = true);
					$social_values = get_post_meta( get_the_ID(), 'Social Media');?>
					<p class="contact-content-paragraph"><b class="contact-content-paragraph-bold">Email: </b><?php echo $email_value; ?></p>
					<p class="contact-content-paragraph"><b class="contact-content-paragraph-bold">Phone: </b><?php echo $phone_value; ?></p>
					<?php if( $post->post_content ) { ?>
						<p class="contact-content-paragraph"><ul class="social-link-list no--liststyle"><?php echo the_content(); ?></ul></p> 
					<?php } 
				endforeach;
				wp_reset_postdata();?> 
			</div>	
		</div>	
	</div><!--end .drop area-->
</div><!-- .content-area -->
<?php get_footer(); ?>