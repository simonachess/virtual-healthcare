import Button from "../styledComponents/Button";

function Home() {
	return (
		<div className="flex items-center justify-center w-full py-14">
			<div className="w-full pr-32">
				<h2 className="font-bold text-5xl mb-6">Virtual healthcare for you</h2>
				<p className="font-light text-xl text-default-100 mb-6">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
				<Button variant="primary">Consult today</Button>
			</div>
			<div className="w-full">
				<img src="/img/img-two-people.png" height="598" width="693" alt="two-people"></img>
			</div>
		</div>
	);
}

export default Home;