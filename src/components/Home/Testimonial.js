import React from 'react';
import "./Tm.css"
import $ from "jquery"

const Testimonial = () => {
    window.onload=function(){
            var feedbackSlider = $(".feedback-slider");
            feedbackSlider.owlCarousel({
                items: 1,
                nav: true,
                dots: true,
                autoplay: true,
                loop: true,
                mouseDrag: true,
                touchDrag: true,
                navText: [
                    "<i class='fa fa-long-arrow-left'></i>",
                    "<i class='fa fa-long-arrow-right'></i>"
                ],
                responsive: {
                    // breakpoint from 767 up
                    767: {
                        nav: true,
                        dots: false
                    }
                }
            });
            feedbackSlider.on("translate.owl.carousel", function () {
                $(".feedback-slider-item h3")
                    .removeClass("animated fadeIn")
                    .css("opacity", "0");
                $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
                    .removeClass("animated zoomIn")
                    .css("opacity", "0");
            });
        
            feedbackSlider.on("translated.owl.carousel", function () {
                $(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
                $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
                    .addClass("animated zoomIn")
                    .css("opacity", "1");
            });
            feedbackSlider.on("changed.owl.carousel", function (property) {
                var current = property.item.index;
                var prevThumb = $(property.target)
                    .find(".owl-item")
                    .eq(current)
                    .prev()
                    .find("img")
                    .attr("src");
                var nextThumb = $(property.target)
                    .find(".owl-item")
                    .eq(current)
                    .next()
                    .find("img")
                    .attr("src");
                var prevRating = $(property.target)
                    .find(".owl-item")
                    .eq(current)
                    .prev()
                    .find("span")
                    .attr("data-rating");
                var nextRating = $(property.target)
                    .find(".owl-item")
                    .eq(current)
                    .next()
                    .find("span")
                    .attr("data-rating");
                $(".thumb-prev").find("img").attr("src", prevThumb);
                $(".thumb-next").find("img").attr("src", nextThumb);
                $(".thumb-prev")
                    .find("span")
                    .next()
                    .html(prevRating + '<i class="fa fa-star"></i>');
                $(".thumb-next")
                    .find("span")
                    .next()
                    .html(nextRating + '<i class="fa fa-star"></i>');
            });
            $(".thumb-next").on("click", function () {
                feedbackSlider.trigger("next.owl.carousel", [300]);
                return false;
            });
            $(".thumb-prev").on("click", function () {
                feedbackSlider.trigger("prev.owl.carousel", [300]);
                return false;
            });
        //end ready
    }

  return (
    <section>
	<div class="customer-feedback">
		<div class="container text-center">
			<div class="row">
				<div class="col-sm-offset-2 col-sm-8">
					<div>
						<h2 class="section-title">What Clients Say</h2>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
					<div class="owl-carousel feedback-slider">

						{/* <!-- slider item --> */}
						<div class="feedback-slider-item">
							<img src="//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg" class="center-block img-circle" alt="Customer Feedback"/>
							<h3 class="customer-name">Lisa Redfern</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
							<span class="light-bg customer-rating" data-rating="5">
								5
								<i class="fa fa-star"></i>
							</span>
						</div>

						{/* <!-- slider item --> */}
						<div class="feedback-slider-item">
							<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg" class="center-block img-circle" alt="Customer Feedback"/>
							<h3 class="customer-name">Cassi</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
							<span class="light-bg customer-rating" data-rating="4">
								4
								<i class="fa fa-star"></i>
							</span>
						</div>

						{/* <!-- slider item --> */}
						<div class="feedback-slider-item">
							<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg" class="center-block img-circle" alt="Customer Feedback"/>
							<h3 class="customer-name">Md Nahidul</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
							<span class="light-bg customer-rating" data-rating="5">
								5
								<i class="fa fa-star"></i>
							</span>
						</div>

					</div>

					{/* <!-- side thumbnail --> */}
					<div class="feedback-slider-thumb hidden-xs">
						<div class="thumb-prev">
							<span>
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg" alt="Customer Feedback"/>
							</span>
							<span class="light-bg customer-rating">
								5
								<i class="fa fa-star"></i>
							</span>
						</div>

						<div class="thumb-next">
							<span>
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg" alt="Customer Feedback"/>
							</span>
							<span class="light-bg customer-rating">
								4
								<i class="fa fa-star"></i>
							</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</section>
  );
};

export default Testimonial;
