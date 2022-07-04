function Footer() {

	return (
		<div className="flex flex-col items-center justify-center py-14 bg-gradient-to-tr from-[#67C3F3] to-[#5A98F2]">
			<div className="flex text-default-50 w-full px-16">
					<div className="1/3 pr-28 flex flex-col">
						<span className="font-bold text-xl mb-4">Trafalgar</span>
						<p className="font-light text-lg mb-8">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
						<p className="font-light text-lg">©Trafalgar PTY LTD 2020. All rights reserved</p>
					</div>
					<div className="flex w-2/3 justify-between">
						<div className="flex flex-col">
							<span className="font-bold text-xl mb-4">Company</span>
							<p className="font-light text-lg py-1">About</p>
							<p className="font-light text-lg py-1">Testimonials</p>
							<p className="font-light text-lg py-1">Find a doctor</p>
							<p className="font-light text-lg py-1">Apps</p>
						</div>
						<div className="flex flex-col">
							<span className="font-bold text-xl mb-4">Region</span>
							<p className="font-light text-lg py-1">Indonesia</p>
							<p className="font-light text-lg py-1">Singapure</p>
							<p className="font-light text-lg py-1">Hongkong</p>
							<p className="font-light text-lg py-1">Canada</p>
						</div>
						<div className="flex flex-col">
							<span className="font-bold text-xl mb-4">Help</span>
							<p className="font-light text-lg py-1">Contact support</p>
							<p className="font-light text-lg py-1">Instructions</p>
							<p className="font-light text-lg py-1">Help center</p>
							<p className="font-light text-lg py-1">How it works</p>
						</div>
					</div>
			</div>
		</div>
	);
}

export default Footer;