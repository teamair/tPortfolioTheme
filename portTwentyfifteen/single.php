<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

<?php
//wp_query
$post = $wp_query->post;
//use specific templates for each category
if ( in_category('14')) {
	include(STYLESHEETPATH . '/single-wgteShopRedesign.php'); 
	}
elseif(in_category('15')) {
		include(STYLESHEETPATH . '/single-wgteSiteRedesign.php'); 	
	}
	else {
		include(STYLESHEETPATH . '/single-default.php');
	}
?>

<?php get_footer(); ?>
