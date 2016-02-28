<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "site-content" div and all content after.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
<div class="tool-reset"></div>
<iframe class="preview-frame tablet-preview-frame" id="tablet-preview-frame"></iframe>
<iframe class="preview-frame mobile-preview-frame" id="mobile-preview-frame"></iframe>
<div class="gray-background"><div class="glyphicon-remove" id="preview-frame-close"></div></div>
<div class="code-viewer"><div class="glyphicon-remove"></div></div>
<div class="psd-viewer"><div class="glyphicon-remove"></div><?php if(is_single() and in_category('web')){ echo get_the_post_thumbnail($post->ID, array('class' => 'flattened-psd-image')); }?></div>
<?php if(is_single()){?>
		<script type="text/javascript">
			jQuery('#highlights').slippry();
		</script>
<?php }?>
<script type= "text/javascript" charset = "utf-8">
  //initialize custom scroll bars when conditions are met
  <?php if(is_single()){?>
  
  <?php }?>

</script>
		<?php wp_footer(); ?>
	</body>
</html>