import Button from "../styledComponents/Button";

function Providers() {
	return (
		<div className="flex items-center justify-center w-full py-14">
			<div className="w-full">
				<img src="/img/img-two-people-2.png" height="598" width="693" alt="two-people"></img>
			</div>
			<div className="w-full pl-32">
			<h3 className="font-bold text-4xl mb-6">Leading healthcare providers</h3>
				<p className="font-light text-xl text-default-100 mb-6">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
				<Button variant="secondary">Learn more</Button>
			</div>
		</div>
	);
}

export default Providers;