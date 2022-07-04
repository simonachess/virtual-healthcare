import Button from "../styledComponents/Button";
import articles from "../mocks/articles"


function Articles() {

	return (
		<div className="flex flex-col items-center justify-center w-full py-14">
			<h3 className="font-bold text-4xl mb-6 text-center">Our Services</h3>
			<p className="font-light text-lg text-default-100 mb-6 px-32 text-center">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
			<div className="w-full grid grid-cols-3 my-10">
				{articles.map((x, i) => 
						<div key={i} className="rounded-lg shadow-[0_10px_40px_50px_rgba(229,233,246,0.4)] m-4 pb-8">
							<div className="h-60">
								<img src={x.img} alt={x.title}></img>
							</div>
							<div className="px-8">
								<h4 className="text-2xl font-bold my-5">{x.title}</h4>
								<p className="text-base font-light mb-5">{x.desc}</p>
								<span className="text-primary">Read more...</span>
							</div>
						</div>
				 )}
			</div>
			<Button variant="secondary">View all</Button>
		</div>
	);
}

export default Articles;