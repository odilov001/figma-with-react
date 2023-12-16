import boy from "../images/Ресурс 1 1.png";

function Footer() {
	return (
		<>
			<div className="footer flex items-center justify-between mt-[150px]">
				<div className="left">
					<img src={boy} alt="" />
				</div>
				<div className="right flex flex-col gap-[50px]">
					<h2 className="text-[48px] font-[600] leading-[80px]">Contact Us</h2>
					<p>
						Discover your current English level by taking our free online English test.Sign <br />{" "}
						up to our newsletter for learning tips and free resources
					</p>
					<div className="input flex gap-[10px]">
						<input
							className="w-[400px] h-[80px] rounded-[10px] border-[1px] border-[#8F95A5] pl-[20px]"
							type="text"
							placeholder="Enter Your E-mail"
						/>
						<button className="w-[250px] h-[80px] rounded-[10px] bg-[#263238] text-white">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
