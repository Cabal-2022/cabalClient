import dynamic from "next/dynamic";

export default function AddWorldId() {
	const WorldIdComponent = dynamic(
		() => {
			return import("../../noSsr/addWorldId");
		},
		{ ssr: false }
	);
	return (
		<div className="page">
			<h2>Add World Id</h2>
			<WorldIdComponent />
		</div>
	);
}
