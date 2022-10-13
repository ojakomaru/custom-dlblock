import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	CheckboxControl,
} from "@wordpress/components";
import IconDesign from "./IconDesign";
import OjaColorPicker from "./OjaColorPicker";

//インスペクター表示関数
export const OjaInspector = ({ attributes, setAttributes }) => {
	return (
		<InspectorControls>
			<PanelBody title="リストデザイン設定" initialOpen={false}>
				<PanelRow>
					<OjaColorPicker
						label="リストタイトル背景色"
						attributes={attributes.headTitleColor}
						initialValue="#0b048f"
						setAttributes={(val) => setAttributes({ headTitleColor: val.hex })}
						colorReset={() => setAttributes({ headTitleColor: "#0b048f" })}
					/>
				</PanelRow>
				<PanelRow>
					<OjaColorPicker
						label="リスト背景色"
						attributes={attributes.themeColor}
						initialValue="#e1f5fe"
						setAttributes={(val) => setAttributes({ themeColor: val.hex })}
						colorReset={() => setAttributes({ themeColor: "#e1f5fe" })}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title="定義リストの使用変更" initialOpen={true}>
				<PanelRow>
					<ToggleControl
						label={attributes.isFaq ? "Q&A形式" : "定義説明形式"}
						help="リストの形式を選択します"
						checked={attributes.isFaq}
						onChange={(val) => setAttributes({ isFaq: val })}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={
							attributes.isPanelOpen
								? "クリックでオープン"
								: "最初から回答を表示"
						}
						help="※プレビューでは動作しません"
						checked={attributes.isPanelOpen}
						onChange={(val) => setAttributes({ isPanelOpen: val })}
					/>
				</PanelRow>
				{attributes.isFaq && (
					<PanelBody title="Q&Aデザイン設定" initialOpen={false}>
						<PanelRow>
							<CheckboxControl
								label="Q&Aを吹き出しにする"
								checked={attributes.isQaBalloon}
								onChange={(val) => setAttributes({ isQaBalloon: val })}
							/>
						</PanelRow>
						<PanelRow>
							<IconDesign
								checked={attributes.iconDesign}
								setAttributes={setAttributes}
							/>
						</PanelRow>
					</PanelBody>
				)}
			</PanelBody>
		</InspectorControls>
	);
};
