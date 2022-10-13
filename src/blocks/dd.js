const { RichText } = wp.editor;
export default {
	name: "custom-block/dd",
	title: "回答（definition description）",
	icon: "editor-alignleft",
	category: "common",
	parent: ["ojako/custom-dlblock"],
	attributes: {
		ddText: {
			type: "string",
			default: "",
			source: "text",
			selector: "dd.accordion__content",
		},
	},
	edit({ attributes, setAttributes, className }) {
		return (
			<RichText
				className={className}
				tagName="dd"
				value={attributes.ddText}
				onChange={(content) => setAttributes({ ddText: content })}
			/>
		);
	},

	save({ attributes }) {
		return <dd className="accordion__content">{attributes.ddText}</dd>;
	},
};
