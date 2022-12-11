import { dispatch, withSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { Button, TextControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { GetViewMode } from "../components/GetViewMode";
import { getPreview } from "../components/getPreview";
import { addDlClass } from "../components/addDlClass";
import { OjaInspector } from "../components/OjaInspector";
// 一旦メモ化の勉強し直し、そして他のインナーブロックでインスペクターを表示できないか模索する予定
import { memo, useCallback, useMemo } from "react";

export default {
	name: "ojako/custom-dlblock",
	title: "定義リスト（definition list）",
	description: "「質問〜回答」 や 「名称〜説明」 などの定義リストを追加します",
	icon: "editor-alignleft",
	category: "common",
	keywords: ["dl", "dllist", "ojadl", "oja", "list"],
	supports: {
		customClassName: false,
		anchor: false,
	},
	attributes: {
		isEditMode: {
			type: "boolean",
			default: true,
		},
		themeColor: {
			type: "string",
			default: "#e1f5fe",
		},
		headTitleColor: {
			type: "string",
			default: "#0b048f",
		},
		dlTitle: {
			type: "string",
			default: "",
			selector: "h1",
		},
		isFaq: {
			type: "boolean",
			default: false,
		},
		isQaBalloon: {
			type: "boolean",
			default: false,
		},
		isPanelOpen: {
			type: "boolean",
			default: true,
		},
		iconDesign: {
			type: "string",
			default: "sinple",
		},
	},

	// Editメソッド
	edit: withSelect((select, ownProps) => {
		return {
			innerBlockProps: select("core/block-editor").getBlocks(ownProps.clientId),
		};
	})((props) => {
		const { attributes, className, setAttributes, clientId } = props;
    const blockProps = useBlockProps({ className: "oja_dl_wrap" });
		// 許可されるブロックを登録
		const allowedBlocks = ["custom-block/dt", "custom-block/dd"];
    const blockTemplate = allowedBlocks.map((block) => [block, {}]);

		return (
			<Fragment>
				<GetViewMode
					isEditMode={attributes.isEditMode}
					setAttributes={setAttributes}
				/>
				<OjaInspector attributes={attributes} setAttributes={setAttributes} />
				{attributes.isEditMode && (
					<div {...blockProps}>
						<TextControl
							label="リストのタイトル(タイトルがない場合は表示されません)"
							value={attributes.dlTitle}
							onChange={(newText) => setAttributes({ dlTitle: newText })}
						/>
						<dl className={className}>
							<InnerBlocks
								allowedBlocks={allowedBlocks}
								templateLock={false}
								template={blockTemplate}
								renderAppender={() => (
									<button
										type="button"
										onClick={() => {
											allowedBlocks.forEach((block) => {
                        dispatch("core/block-editor").insertBlocks(
                          createBlock(block),
                          9999,
                          clientId
                        );
                      });
										}}
									>
										{"リストを追加する"}
									</button>
								)}
							/>
						</dl>
					</div>
				)}
				{!attributes.isEditMode && [
					<Button
						onClick={() => setAttributes({ isEditMode: true })}
						Link
						icon="edit"
					>
						編集モード
					</Button>,
					getPreview(props),
				]}
			</Fragment>
		);
	}),

	// Seveメソッド
	save({ className, attributes }) {
    const blockProps = useBlockProps.save({
      className: "oja_dl_wrap",
      style: { backgroundColor: attributes.themeColor || null }
    });
		return (
			<div {...blockProps}>
				{attributes.dlTitle ? (
					<h1
						className="oja-dl-head"
						style={{ backgroundColor: attributes.headTitleColor }}
					>
						{attributes.dlTitle}
					</h1>
				) : null}
				<dl className={addDlClass(className, attributes)}>
					<InnerBlocks.Content />
				</dl>
			</div>
		);
	},
};
