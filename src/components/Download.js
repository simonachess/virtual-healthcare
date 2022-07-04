import Button from "../styledComponents/Button";

function Download() {
	return (
		<div className="flex items-center justify-center w-full py-14">
			<div className="w-full pr-32">
				<h3 className="font-bold text-4xl mb-6">Download our mobile apps</h3>
				<p className="font-light text-xl text-default-100 mb-6">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
				<Button variant="secondary">Download</Button>
			</div>
			<div className="w-full">
				<img src="/img/explaining.png" height="598" width="693" alt="two-people"></img>
			</div>
		</div>
	);
}

export default Download;