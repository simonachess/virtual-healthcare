function NavBar() {
	return (
		<div className="flex w-full justify-end">
			<ul className="flex text-default-200 opacity-50">
				<li className="py-2 px-5">
					<a href="/">Home</a>
				</li>
				<li className="py-2 px-5">
					<a href="/">Find a doctor</a>
				</li>
				<li className="py-2 px-5">
					<a href="/">Apps</a>
				</li>
				<li className="py-2 px-5">
					<a href="/">Testimonials</a>
				</li>
				<li className="py-2 px-5">
					<a href="/">About us</a>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;