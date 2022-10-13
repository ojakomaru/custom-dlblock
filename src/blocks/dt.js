const { RichText } = wp.editor;
export default {
	name: "custom-block/dt",
	title: "質問（definition term）",
	icon: "editor-alignleft",
	category: "common",
	parent: ["ojako/custom-dlblock"],
	attributes: {
		dtText: {
			type: "string",
			default: "",
			source: "text",
			selector: "dt.accordion__title",
		},
	},
	edit({ attributes, setAttributes, className }) {
		return (
			<RichText
				className={className}
				tagName="dt"
				value={attributes.dtText}
				onChange={(content) => setAttributes({ dtText: content })}
			/>
		);
	},

	save({ attributes }) {
		return <dt className="accordion__title">{attributes.dtText}</dt>;
	},
};
