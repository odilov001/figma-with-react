import online from "../images/Online test-bro 1.png";
import live from "../images/Lesson-bro 1.png";
import personal from "../images/Webinar-bro 2.png";

function ThirdSection() {
	return (
		<>
			<div className="third_section mt-[100px]">
				<div className="title text-[48px] font-[600] text-center">
					<h2>Pricing</h2>
				</div>

				<div className="courses flex justify-between mt-[100px]">
					<div className="study flex flex-col gap-[10px] ">
						<img src={online} alt="" />
						<h4 className="text-[30px] font-[600]">Self-study online course</h4>
						<p className="w-[340px]">
							Start learning English online in live classes with qualified EC teachers and students
							from all over the world.
						</p>
						<h2 className="flex items-center gap-[5px] w-[240px] h-[50px] rounded-[5px] bg-[#EEE] pl-[10px]">
							<span className="text-[30px] font-[400] text-[#263238]"> £5.99</span>
							<span className="text-[#8f95a5]"> per month</span>
						</h2>
					</div>
					<div className="study flex flex-col gap-[10px] mt-[90px]">
						<img src={live} alt="" />
						<h4 className="text-[30px] font-[600]">Live online classes</h4>
						<p className="w-[340px]">
							Interactive group classes with expert teachers. Free 7-day trial
						</p>
						<h2 className="flex items-center gap-[5px] mt-[20px] w-[240px] h-[50px] rounded-[5px] bg-[#EEE] pl-[10px]">
							<span className="text-[30px] font-[400] text-[#263238]"> £5.99</span>
							<span className="text-[#8f95a5]"> per month</span>
						</h2>
					</div>
					<div className="study flex flex-col gap-[10px] mt-[30px]">
						<img src={personal} alt="" />
						<h4 className="text-[30px] font-[600]">Personal Tuition</h4>
						<p className="w-[340px]">
							Online one-to-one English tutoring – enjoy our first session for only $1
						</p>
						<h2 className="flex items-center gap-[5px] mt-[20px] w-[240px] h-[50px] rounded-[5px] bg-[#EEE] pl-[10px]">
							<span className="text-[30px] font-[400] text-[#263238]"> £5.99</span>
							<span className="text-[#8f95a5]"> per month</span>
						</h2>
					</div>
				</div>
			</div>
		</>
	);
}

export default ThirdSection;
