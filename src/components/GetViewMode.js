import { BlockControls } from "@wordpress/block-editor";
import {Button,	Toolbar} from "@wordpress/components";
import { memo } from "react";

// プレビューボタンの判定関数
export const GetViewMode = memo((props) => {
  const {isEditMode, setAttributes} = props;
	return (
		<BlockControls>
			<Toolbar>
				<Button
					label={isEditMode ? "Preview" : "Edit"}
					icon={isEditMode ? "format-image" : "edit"}
					className="preview-button"
					onClick={() => setAttributes({ isEditMode: !isEditMode })}
				/>
			</Toolbar>
		</BlockControls>
	);
});