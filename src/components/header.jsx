import myImg from "../images/Learning languages-bro 1.png";

function Header() {
	return (
		<>
			<div className="header flex gap-[30px] items-center mt-[100px]">
				<div className="left flex flex-col items-start gap-[40px]">
					<h1 className="text-[black] text-[64px] font-[600] leading-[80px]">
						<p className="text-black"> Learn </p>Any Foreign Language
					</h1>
					<p className="text-[24px] font-[400] w-[500px]">
						With our teachers who write a program for each student, you will be able to make your
						first sketch after the first lesson.
					</p>
					<button className="w-[438px] h-[118px] rounded-[15px] bg-[#263238] text-white text-[36px] font-[400]">
						Get started
					</button>
				</div>
				<div className="right">
					<img src={myImg} alt="img not found" />
				</div>
			</div>
		</>
	);
}

export default Header;
