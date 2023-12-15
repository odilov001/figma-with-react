function Navbar() {
	return (
		<>
			<div className="navbar flex items-center justify-between">
				<div className="logo">
					<h2 className="text-[36px] font-[400]">Britlex</h2>
				</div>
				<div className="links text-[20px] flex gap-[30px] ">
					<a href="##">Home</a>
					<a href="##">Skills</a>
					<a href="##">About Us </a>
					<a href="##">Pricing</a>
					<a href="##">Contacts</a>
				</div>
				<div className="btn">
					<button className=" w-[220px] h-[70px] border-[2px] border-[#263238] text-[24px]">
						Let’s Talk
					</button>
				</div>
			</div>
		</>
	);
}

export default Navbar;
