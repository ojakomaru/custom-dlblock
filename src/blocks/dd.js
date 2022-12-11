import { RichText, useBlockProps } from "@wordpress/block-editor";
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
	edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
			className: "accordion__content",
			tagName: "dd",
			value: attributes.ddText,
			onChange: (content) => setAttributes({ ddText: content }),
		});
		return <RichText {...blockProps} />;
	},

	save({ attributes }) {
    const blockProps = useBlockProps.save({
			className: "accordion__content",
			tagName: "dd",
			value: attributes.ddText,
		});
    return <RichText.Content {...blockProps} />;
	},
};
