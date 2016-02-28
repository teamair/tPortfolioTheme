<?php
/**
 * The sidebar containing the main widget area
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */?>
		<div class ="sidebar">
			<div class="sidebar-inside-wrapper">
				<ul class="sidebar-list">
				<?php
				//category arguments
				if(is_home()){
					$args = array('child_of' => 18); 
				}elseif(is_page('about') or $post->post_parent == "37"){
					$args = array('child_of' => 9);
				}elseif(is_page('photo') or $post->post_parent == "39"){
					$args = array('child_of' => 10);
				}elseif(is_page('web') or $post->post_parent == "41"){
					$args = array('child_of' => 11, 'include' => '12, 13');
				}elseif(is_page('contact')){
					$args = array('include' => '17');
				}elseif(is_single() && in_category(12)){
					$args = array('child_of' => 12); 
				}elseif(is_page('featured-photos') or is_page('featured-blog') or is_page('featured-web')){
					$args = array('child_of' => 18); 
				}else {
					$args = array();
				}
				
				//image attributes for category images
				$attr = array(
				'class' => 'mini-img',
				'alt' => "$cat_name"
				);
				$categories = get_categories($args);
					foreach($categories as $category) {
						$cat_name = $category->name;
						$cat_slug = $category->slug;
						$cat_desc = $category->description;
						if(is_single() && in_category(12)){?>
								<li class="sidebar-listItem first-sidebar-item" draggable="true">
									<a href="<?php echo "/wordpress2/" . $cat_slug ?>">
										<div class="item-wrap">
											<div class="item-txt"><?php echo $cat_name;?></div>
								    			<img class="item-thumb" id="<?php echo $cat_desc;?>" src="<?php echo z_taxonomy_image_url($category->term_id);?>" alt="<?php echo $cat_name;?>"/>
											<div class="item-cover"></div>
										</div>
									</a>
			    				</li>
							<?php }
						else {?>
							<li class="sidebar-listItem first-sidebar-item" draggable="true">
								<div class="item-wrap">
									<div class="item-txt"><?php echo $cat_name;?></div>
						    			<img class="item-thumb" id="<?php echo $cat_desc;?>" src="<?php echo z_taxonomy_image_url($category->term_id);?>" alt="<?php echo $cat_slug;?>"/>
									<div class="item-cover"></div>
								</div>
		    				</li>
					<?php }	
					}?>
		    		</ul>
	 		</div><!-- end .sidebar-inside-wrapper-->
	 	</div><!-- end .sidebar-->
 		<button class="sidebar-toggle"></button>
 