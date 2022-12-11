import { RichText, useBlockProps} from '@wordpress/block-editor';
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
	edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
			className: "accordion__title",
			tagName: "dt",
			value: attributes.dtText,
			onChange: (content) => setAttributes({ dtText: content }),
		});
		return (
			<RichText {...blockProps}	/>
		);
	},

	save({ attributes }) {
    const blockProps = useBlockProps.save({
			className: "accordion__title",
			tagName: "dt",
			value: attributes.dtText,
		});
		return <RichText.Content {...blockProps} />
	},
};
