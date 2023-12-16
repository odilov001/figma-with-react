import men from "../images/Business competition-bro 1.png";

function SecondSection() {
	return (
		<>
			<div className="second_section flex items-center justify-between mt-[100px]">
				<div className="left flex flex-col gap-[30px]">
					<h2 className="text-[48px] font-[600] leading-[80px]">About Us</h2>
					<p className="w-[510px] text-[20px] font-[400]">
						The model offers a framework for discussing problems related to the user's experience,
						as well as possible ways and means of solving them. Application development begins at
						the top level (strategy), where the future software product is described quite
						abstractly from the point of view of the expectations of both users and the customer.
					</p>
					<div className="pupils flex gap-[100px]">
						<div className="flex flex-col gap-[10px] items-center">
							<h2 className="text-[48px] font-[600] leading-[80px]">800</h2>
							<p>Pupils</p>
						</div>
						<div className="flex flex-col gap-[10px] items-center">
							<h2 className="text-[48px] font-[600] leading-[80px]">18</h2>
							<p>Teacher</p>
						</div>
						<div className="flex flex-col gap-[10px] items-center">
							<h2 className="text-[48px] font-[600] leading-[80px]">6</h2>
							<p>Foreign languages</p>
						</div>
					</div>
				</div>
				<div className="right">
					<img src={men} alt="" />
				</div>
			</div>
		</>
	);
}

export default SecondSection;
