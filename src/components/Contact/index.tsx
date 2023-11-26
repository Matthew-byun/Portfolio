import { useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();
	return (
		<div className="b-container">
			<div className="row gap-2">
				<div className="w-3 bg-black"></div>
				<div className="font-bold title">
					Looking for a custom website or Defi solutions?
				</div>
			</div>
			<div className="col lg:flex-row lg:items-start lg:justify-between gap-4">
				<div className="text-11px">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
					maiores quia expedita, perferendis doloremque fugiat corporis cum fuga
				</div>
				<div className="text-xs bg-black text-white pointer w-fit">
					<p
						className="px-3 py-2"
						id="contact"
						onClick={() => navigate("/contact")}
					>
						CONTACT
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
