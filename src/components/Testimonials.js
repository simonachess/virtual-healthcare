import testimonials from "../mocks/testimonials";

function Testimonials() {
	return (
		<div className="flex items-center justify-center w-full py-14">
			<div className="w-full bg-gradient-to-tr from-[#67C3F3] to-[#5A98F2] rounded-2xl mx-16 py-20 px-28">
				<h3 className="font-bold text-default-50 text-4xl mb-6 text-center">Testimonials</h3>
				{testimonials.map((x, i) =>
					<div key={i} className="flex text-default-50">
						<div className="flex w-full">
							<img src={x.picture} alt={x.name} height="140" width="140"></img>
							<div className="flex flex-col pl-6 justify-center items-start">
								<p className="font-bold text-xl">{x.name}</p>
								<p className="font-normal text-lg">{x.desc}</p>
							</div>
						</div>
						<div className="w-full flex items-center">
							<p className="w-full font-normal text-lg">{x.testimonial}</p>
						</div>
					</div>	
				)}
			</div>
		</div>
	)
}

export default Testimonials;