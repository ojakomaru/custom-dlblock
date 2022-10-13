import { RadioControl } from "@wordpress/components";
import { memo } from "react";

const IconDesign = memo((props) => {
	const { checked, setAttributes } = props;
	return (
		<RadioControl
			className="oja-fap-icon"
			label="アイコンデザイン"
			selected={checked}
			options={[
				{ label: "シンプル", value: "sinple" },
				{ label: "ステッチ", value: "border" },
				{ label: "白黒", value: "blackwhite" },
				{ label: "モダン", value: "modan" },
			]}
			onChange={(val) => setAttributes({ iconDesign: val })}
		/>
	);
});

export default IconDesign;
