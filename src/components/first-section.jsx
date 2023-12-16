import first_img from "../images/Shared goals-bro 1.png";
import second_img from "../images/Typewriter-bro 1.png";
import third_img from "../images/House bookshelves-bro 1.png";
import fourth_img from "../images/Podcast audience-bro 1.png";
function FirstSection() {
	return (
		<>
			<div className="first_section  mt-[100px]">
				<div className="title text-[48px] leading-[80px] font-[600] text-center">
					<h2 className="">Skills</h2>
				</div>

				<div className="boxes mt-[100px] grid grid-cols-[repeat(3,400px)]  gap-[10px]">
					<div className="first flex flex-col gap-[30px] w-[400px] h-[890px] rounded-[10px] bg-[#F5F5F5] p-[40px] ">
						<img className="w-[390px] h-[390px]" src={first_img} alt="" />
						<h4>Speaking</h4>
						<p>
							Improve your English skills and confidence. Live classes and interactive lessons
							online. 20% extra free for a limited time only
						</p>
						<p>
							Learn English online and improve your skills through our high-quality courses and
							resources – all designed for adult language learners.
						</p>
						<button className="w-[230px] h-[60px] rounded-[5px] bg-[#263238] text-white text-[18px] font-[500]">
							Learn more
						</button>
					</div>
					<div className="second flex flex-col gap-[10px] rounded-[10px]  bg-[#F5F5F5] p-[20px]  w-[400px] h-[531px]">
						<img className="w-[290px] h-[290px]" src={second_img} alt="" />
						<h4 className="text-[30px] font-[600]">Writing</h4>
						<p>
							One of the most important and extensive areas of natural science, the science that
							studies substances, also their composition{" "}
						</p>
						<button className="w-[230px] h-[60px] rounded-[5px] bg-[#263238] text-white text-[18px] font-[500]">
							Learn more
						</button>
					</div>
					<div className="third  flex flex-col gap-[10px] rounded-[10px]  bg-[#F5F5F5] p-[20px]  w-[400px] h-[531px] ">
						<img className="w-[371px] h-[247px]" src={third_img} alt="" />
						<h4 className="text-[30px] font-[600] mt-[40px]">Reading</h4>
						<p>
							perception and response actions of the user resulting from the use and/or upcoming use
							of the product, system or service
						</p>
						<button className="w-[230px] h-[60px] rounded-[5px] bg-[#263238] text-white text-[18px] font-[500]">
							Learn more
						</button>
					</div>
					<div className="fourth w-[810px] h-[343px] flex items-center justify-between gap-[30px] rounded-[10px]  bg-[#F5F5F5] p-[20px] col-start-2 col-end-4 mt-[-355px]">
						<div className="text flex flex-col gap-[30px]">
							<h4 className="text-[30px] font-[600]">Listening</h4>
							<p className="w-[360px]">
								Here you can find activities to practise your listening skills. Listening will help
								you to improve your understanding{" "}
							</p>
							<button className="w-[230px] h-[60px] rounded-[5px] bg-[#263238] text-white text-[18px] font-[500]">
								Learn more
							</button>
						</div>
						<div className="">
							<img className="w-[382px] h-[255px]" src={fourth_img} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FirstSection;
