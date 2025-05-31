<div class="box">
	<div class="content">
		<header class="align-center">
			<p><?= $kce["realisations"][$_SESSION["lang"]]; ?></a></p><br>
		</header>
	</div>
	<div class="Recent-wroks"><!-- start services -->
		<div class="wrap">

			<div class="Recent-wrok">
				<!----start-img-cursual---->
				<div id="owl-demo" class="owl-carousel align-center">



					<?php foreach ($files['img'] as $img): ?>
					<div class="item">
						<div class="cau_left">
							<div id="nivo-lightbox-demo"> <p> <a href="images/<?= $img['src'] ?>" data-lightbox-gallery="gallery1" id="nivo-lightbox-demo"> <span class="rollover"> <?= $img['alt'] ?> </span></a> </></div>
							<div class="my_img">
								<img src="images/<?= $img['src'] ?>" alt="<?= $img['alt'] ?>" > 
							</div>
						</div>
					</div>
					<?php endforeach ?>


				</div>
				<!----//End-img-cursual---->
			</div>
			 <script type="text/javascript" src="js/nivo-lightbox.min.js"></script>
			<script type="text/javascript">
			$(document).ready(function(){
			    $('#nivo-lightbox-demo a').nivoLightbox({ effect: 'fade' });
			});
			</script>

		</div>
	</div>
</div>
