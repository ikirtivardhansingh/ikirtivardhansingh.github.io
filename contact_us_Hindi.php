<?php 
if(isset($_POST['contact'])){
    $to = "info@shriramlalasadan.com";
    $from = $_POST['email'];
	$subject = $_POST['subject'];
    $message = $_POST['name']." says to you :\n".$_POST['message']."\n".$_POST['name']."'s Contact Number : ".$_POST['phone'];
	$headers = "From: ".$from."\r\n";
	mail($to,$subject,$message,$headers);
echo '<script type="text/javascript">
    window.onload = setTimeout(function(){
   alert("Thank You! Your message has been sent.");
}, 5000);
          
</script>';

}
?>

<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>Shri Ramlala Devsthanam Trust, Ayodhya</title>

<!-- Stylesheets -->
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/responsive.css" rel="stylesheet">

<!-- Color Switcher Mockup -->
<link href="css/color-switcher-design.css" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&amp;family=Open+Sans:wght@300;400;600;700;800&amp;display=swap" rel="stylesheet">

<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
<link rel="icon" href="images/favicon.png" type="image/x-icon">

<!-- Responsive -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
<!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->

</head>

<body>

<div class="page-wrapper">
 	
    
 	
    <!-- Main Header -->
    <header class="main-header header-style-one">
    
        <!--Header Top-->
        <div class="header-top">
            <div class="auto-container">
                <div class="clearfix">
                    	
                    <!--Top Right-->
                    <div class="top-right pull-right">
						<ul class="nav-list">
							<li style="color: white">Language:  <a href="https://www.shriramlalasadan.com/contact_us_Hindi.php">Hindi</a></li>
							<li><a href="https://www.shriramlalasadan.com/contact_us.php">English</a></li>
						</ul>
						<!-- Social Nav -->
						<ul class="social-nav">

							<li><a href="https://www.facebook.com/SwamiRaghvacharya/" target="_blank"><span class="fa fa-facebook-f"></span></a></li>
							<li><a href="https://www.youtube.com/channel/UCyIkg79GpPVF77qYKoAINtw" target="_blank"><span class="fa fa-youtube"></span></a></li>
							<li><a href="https://twitter.com/raghvacharya?lang=en" target="_blank"><span class="fa fa-twitter"></span></a></li>
						
						</ul>
                    </div>
                </div>
            </div>
        </div>
    
        <!--Header-Upper-->
        <div class="header-upper">
            <div class="auto-container">
                <div class="clearfix">
                    
                    <div class="pull-left logo-box">
                        <div class="logo"><a href="https://shriramlalasadan.com/"><img src="images/logo.png" alt="" ></a></div>
                    </div>
                    
                    <div class="pull-right upper-right clearfix">
                        
                         <!--Info Box-->
                        <div class="upper-column info-box">
                            <div class="icon-box"><span class="fa fa-phone"></span></div>
                            <ul>
                                <li><strong>संपर्क करें</strong></li>
                                <li>+९१ ९६१६ ७०३ २०९</li>
                            </ul>
                        </div>
                        
                        <!--Info Box-->
                        <div class="upper-column info-box">
                            <div class="icon-box"><span class="fa fa-map-marker"></span></div>
                            <ul>
                                <li><strong>पता</strong></li>
                                <li>रामलला सदन मंदिर, अयोध्या</li>
                            </ul>
                        </div>
                        
                        <!--Info Box-->
                        <div class="upper-column info-box">
                            <div class="icon-box"><span class="fa fa-envelope-o"></span></div>
                            <ul>
								<li><strong>
ईमेल</strong></li>
                                <li>info@ramlalasadan.com</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        <!--End Header Upper-->
        
        <!--Header Lower-->
        <div class="header-lower">
            
            <div class="auto-container">
                <div class="nav-outer clearfix">
					<!-- Mobile Navigation Toggler -->
					<div class="mobile-nav-toggler"><span class="icon flaticon-menu-2"></span></div>
					<!-- Main Menu -->
					<nav class="main-menu show navbar-expand-md">
						<div class="navbar-header">
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						
						<div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
							<ul class="navigation clearfix">
								<li ><a href="https://www.shriramlalasadan.com/index_Hindi.html">होम</a></li>
								<li class="dropdown"><a href="#">संस्थायें</a>
											<ul>
												
												<li class="dropdown"><a href="#">श्री रामलला देवस्थानम</a>
												<ul>
													<li><a href="https://www.shriramlalasadan.com/ShriRamlalaMandir_Hindi.html">श्री रामलला मंदिर</a></li>
													<li><a href="https://www.shriramlalasadan.com/NandaniGoshala_Hindi.html">श्री नंदनी गोशाला</a></li>
												</ul>
												</li>
												<li class="dropdown"><a href="#">श्रीधाममठ, अयोध्या</a>
												<ul>
													<li><a href="https://www.shriramlalasadan.com/ShridhamMath_Hindi.html">रामानुज वेदविदयालय और अन्नक्षेत्र</a></li>
												</ul>
												</li>
												<li><a href="https://www.shriramlalasadan.com/ShriRamJanakiMandir_Hindi.html">श्री राम जानकी मंदिर</a></li>
												<li><a href="https://www.shriramlalasadan.com/ShriBhaktaHunumanMandir_Hindi.html">श्री भक्त हनुमान मंदिर</a></li>
											</ul>
								</li>
								<li class="dropdown"><a href="#">श्री  स्वामी राघवाचार्यजी</a>
									<ul>
										<li><a href="https://www.shriramlalasadan.com/SwamiRaghavacharyaJi_Hindi.html">जीवनी</a></li>
										<li><a href="https://www.youtube.com/channel/UCyIkg79GpPVF77qYKoAINtw" target="blank">कथायें</a></li>
										<li><a href="https://www.shriramlalasadan.com/Publications_Hindi.html">प्रकाशन</a></li>
								
									</ul>
								</li>
								<li class="dropdown"><a href="#">आयोजनायें</a>
									<ul>
										<li><a href="https://www.shriramlalasadan.com/UpcommingEvents_Hindi.html">आने वाले कार्यक्रम</a></li>

									</ul>
								</li><li class="dropdown"><a href="#">गैलरी</a>
									<ul>
										<li><a href="https://www.shriramlalasadan.com/photogallery_Hindi.html">फोटोगैलरी</a></li><li><a href="https://www.shriramlalasadan.com/UpcommingEvents_Hindi.html">आने वाले कार्यक्रम</a></li>
										<li><a href="https://www.shriramlalasadan.com/Videos_Hindi.html">विडीओज्</a></li>
									</ul>
								</li>
								<li><a href="https://www.shriramlalasadan.com/contribute_Hindi.html">योगदान करें</a></li>
								<li class="current"><a href="https://www.shriramlalasadan.com/contact_us_Hindi.php">संपर्क करें</a></li>
								
							</ul>
						</div>
					</nav>
					<!-- Main Menu End-->

					<!-- Options Box -->
                    <div class="options-box clearfix">
                        
                        
						
						<div class="button-box">
							<a href="https://www.shriramlalasadan.com/Donatenow_Hindi.html" class="theme-btn btn-style-one"><span class="txt">डोनेट करें  <i class="fa fa-long-arrow-right"></i></span></a>
						</div>
						
						<!-- Nav Btn -->
						<div class="nav-btn navSidebar-button"><span class="icon flaticon-menu"></span></div>
                        
                    </div>
					
                </div>
            </div>
        </div>
        <!-- End Header Lower -->
        
        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-multiply"></span></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="#"><img src="images/logo.png" alt="" ></a></div>
                <div class="menu-outer">
					<!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
				</div>
            </nav>
        </div><!-- End Mobile Menu -->
    
    </header>
    <!-- End Main Header -->
	
	
	
    <!-- Page Title -->
    <section class="page-title" style="background-image: url(images/background/12.jpg)">
    	<div class="auto-container">
			<h1>संपर्क करें</h1>
			
        </div>
    </section>
    <!-- End Page Title -->
	
	
		<!-- Contact Info Section -->
	<section class="contact-info-section">
		<div class="auto-container">
			<div class="row clearfix">
                
				<!-- Info Column -->
				<div class="info-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="row clearfix">
						<!-- Contact Column -->
							<div class="contact-column ">
								<div class="inner">
									<div class="icon flaticon-placeholder"></div>
									<ul>
										<li><strong>पता</strong></li>
										<li>रामलला सदन मंदिर, <br>
राम जन्मभूमि के पास, <br>
अयोध्या: २२४१२३</li>
									</ul>
								</div>
								
								
							</div>
							
							
						</div>
					</div>
				</div>
				<!-- Info Column -->
				<div class="info-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="row clearfix">
						<!-- Contact Column -->
							<div class="contact-column ">
								<div class="inner">
									<div class="icon flaticon-call"></div>
									<ul>
										<li><strong>फोन: </strong></li>
										<li><b>निदेशक<br>
जगतगुरु स्वामी डॉ। राघवाचार्यजी</b><br>
- ९४१५३७०६५१, ९७९२०६१००८
</li>
										<!--<li><b>श्री सतीशजी मालू</b><br>
- ९८२३१०७४२४
</li> -->

<li><b>श्री संत कुमार</b><br>
- ९७९२०६१००८
</li>

<li><b>श्री राघवेन्द्रजी मिश्रा</b><br>
- ९४१५१५२६२४
</li>

<li><b>श्री मनोज कुमार तिवारी</b><br>
- ९६१६७०३२०९
</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Info Column -->
				<div class="info-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="row clearfix">
						<!-- Contact Column -->
							<div class="contact-column ">
								<div class="inner">
									<div class="icon flaticon-email-3"></div>
									<ul>
										<li><strong>ईमेल: </strong></li>
										<li>info@ramlalasadan.com</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
				
			</div>
		</div>
	</section>
	<!-- End Contact Info Section -->
	<!-- Map Section -->
	<section class="contact-map-section">
		<div class="outer-container">
			<!-- Map Boxed -->
			<div class="map-boxed">
				<!--Map Outer-->
				<div class="map-outer">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28490.54007352982!2d82.199216!3d26.798017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadc6b1e4536b9a6a!2sRam%20Mandir%20Ayodhya!5e0!3m2!1sen!2sus!4v1611335092922!5m2!1sen!2sus" allowfullscreen=""></iframe>
				</div>
			</div>
		</div>
	</section>
	<!-- End Map Section -->
	<!-- Quote Section Two -->
	<section class="quote-section-two" style="background-image:url(images/0.jpg)">
		<div class="color-layer"></div>
		<div class="color-layer-two"></div>
		<div class="patttern-layer"></div>
		<div class="auto-container">
			<div class="row clearfix">

				<!-- Form Column -->
				<div class="form-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="title-box">
							<div class="title">
								<span class="separater"></span>
								कोई प्रश्न ?
							</div>
							<h3>संपर्क करें</h3>
							<div class="text">अधिक जानकारी के लिए या हमारे विश्वास गतिविधियों के बारे में किसी भी प्रश्न के लिए हमारे साथ जुड़ें।</div>
						</div>

						<!-- Quote Form -->
						<div class="quote-form">
							<form method="post" action="">
								<div class="row clearfix">
									<div class="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="text" name="username" placeholder="नाम" required="">
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="email" name="email" id="email" placeholder="ईमेल" required="">
									</div>
									<div class="col-lg-12 col-md-12 col-sm-12 form-group">
										<input type="tel" name="tel"  id="phone" placeholder="फ़ोन नंबर दर्ज करें" required="">
									</div>
									<div class="col-lg-12 col-md-12 col-sm-12 form-group">
										<textarea name="message" id="message" placeholder="संदेश"></textarea>
									</div>
									<div class="col-lg-12 col-md-12 col-sm-12 form-group">
										<input type="text" name="subject" id="subject" placeholder="विषय" required="">
									</div>
									<div class="col-lg-12 col-md-12 col-sm-12 form-group">
										<input type="submit" class="theme-btn btn-style-six" name="contact" value="संदेश भेजें">
									</div>
								</div>
							</form>
						</div>
                        
					</div>
				</div>



			</div>
		</div>
	</section>
	<!-- End Quote Section Two -->

	
	<!-- Main Footer -->
    <footer class="main-footer">
		<div class="pattern-layer-one" style="background-image: url(images/background/pattern-6.png)"></div>
		<div class="pattern-layer-two" style="background-image: url(images/background/pattern-7.png)"></div>
		<!--Waves end-->
    	<div class="auto-container">
        	<!--Widgets Section-->
            <div class="widgets-section">
            	<div class="row clearfix">
                	
                    <!-- Column -->
                    <div class="big-column col-lg-6 col-md-12 col-sm-12">
						<div class="row clearfix">
						<!-- Footer Column -->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h4>वेबसाईट मैप</h4>
									<div class="row clearfix">
										
											<ul class="list-link">
												<li><a href="https://www.shriramlalasadan.com/Hindi-index.html ">होम</a></li>
												
												<li><a href="https://www.shriramlalasadan.com/Hindi-SwamiRaghavacharyaJi.html" >श्री  स्वामी राघवाचार्यजी</a></li>
												
												<li><a href="https://www.shriramlalasadan.com/contribute_Hindi.html">योगदान करें</a></li><li><a href="https://www.shriramlalasadan.com/contact_us_Hindi.php">संपर्क करें</a></li>
								</ul>
									
										
									</div>
								</div>
							</div>
                        	
							
							<!-- Footer Column -->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h4>गतिविधियाँ</h4>
									<div class="row clearfix">
										
											<ul class="list-link">
												
												<li><a href="https://www.shriramlalasadan.com/ShriRamlalaMandir_Hindi.html">श्री रामलला मंदिर</a></li>
												<li><a href="https://www.shriramlalasadan.com/NandaniGoshala_Hindi.html">श्री नंदनी गोशाला</a></li>
												<li><a href="https://www.shriramlalasadan.com/ShridhamMath_Hindi.html">रामानुज वेदविदयालय और अन्नक्षेत्र</a></li>
												<li><a href="https://www.shriramlalasadan.com/ShriRamJanakiMandir_Hindi.html">श्री राम जानकी मंदिर</a></li>
												<li><a href="https://www.shriramlalasadan.com/ShriBhaktaHunumanMandir_Hindi.html">श्री भक्त हनुमान मंदिर</a></li>
								</ul>
									
										
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
					<!-- Column -->
                    <div class="big-column col-lg-6 col-md-12 col-sm-12">
						<div class="row clearfix">
							
							<!-- Footer Column -->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h4>मीडिया गैलरी</h4>
									<div class="row clearfix">
										<div class="column">
											<ul class="list-link">
												<li><a href="https://www.youtube.com/channel/UCyIkg79GpPVF77qYKoAINtw" target="_blank">यूट्यूब</a></li>
												<li><a href="https://www.facebook.com/SwamiRaghvacharya/" target="_blank">फेसबुक</a></li><li><a href="https://twitter.com/raghvacharya?lang=en" target="_blank">ट्विटर</a></li>
												<li><a href="https://www.shriramlalasadan.com/photogallery_Hindi.html">फोटोगैलरी</a></li><li><a href="https://www.shriramlalasadan.com/UpcommingEvents_Hindi.html">आने वाले कार्यक्रम</a></li>

												
								</ul>
										</div>
										
									</div>
								</div>
							</div>
							
							<!-- Footer Column -->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget contact-widget">
									<h4>संपर्क विवरण</h4>
									<ul>
										<li>
											<span class="icon flaticon-maps-and-flags"></span>
											रामलला सदन मंदिर, <br>
राम जन्मभूमि के पास, <br>
अयोध्या: २२४१२३
										</li>
										<li>
											<span class="icon flaticon-big-envelope"></span>
											ईमेल: info@ramlalasadan.com
										</li>
										<li>
											<span class="icon flaticon-time"></span>
											फोन: +९१ ९६१६७०३२०९
										</li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
			
			<!-- Lower Section -->
			<div class="lower-section">
				<div class="row clearfix">
					
					<!-- Newsletter Column -->
					<div class="newsletter-column col-lg-12 col-md-12 col-sm-12">
						<div class="inner-column">
							<div class="icon"><img src="images/icons/newsletter.png" alt="" /></div>
							<h3>आपका दान हमें हमारा मिशन पूरा करने देगा</h3>
							<div class="text">नवीनतम समाचार और अपडेट प्राप्त करने के लिए हमारे साथ संपर्क में रहें</div>
						</div>
					</div>
					
					
					
				</div>
			</div>
			
		</div>
		
		<!-- Footer Bottom -->
		<div class="footer-bottom">
			<div class="auto-container">
				<div class="row clearfix">
					<!-- Column -->
					<div class="column col-lg-12 col-md-12 col-sm-12">
						<div class="copyright">Copyright &copy; 2020 Ramlala Sadan Devsathanam. All rights reserved. Developed by <a rel="nofollow"  href="https://www.bitmantics.com/">Bitmantic Solutions</a> </div>
					</div>
					<!-- Column -->
					
				</div>
			</div>
		</div>
		
	</footer>
	<!-- End Main Footer -->
	
</div>
<!--End pagewrapper-->

<!-- Scroll To Top -->
<div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>



<script src="js/jquery.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="js/jquery.fancybox.js"></script>
<script src="js/appear.js"></script>
<script src="js/nav-tool.js"></script>
<script src="js/owl.js"></script>
<script src="js/wow.js"></script>
<script src="js/validate.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/script.js"></script>
<script src="js/color-settings.js"></script>

</body>

<!-- Mirrored from expert-themes.com/html/builder-expert/Hindi - contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 20 Sep 2020 17:13:56 GMT -->
</html>
