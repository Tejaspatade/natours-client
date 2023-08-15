type ErrorProps = {
	children: React.ReactNode;
};

const Error = ({ children }: ErrorProps) => {
	return (
		<div
			style={{
				color: "#ff5959",
				fontSize: "22px",
				textTransform: "uppercase",
				display: "flex",
				justifyContent: "center",
				padding: "135px",
			}}
		>
			{children}
		</div>
	);
};

export default Error;
