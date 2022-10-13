import {ColorPicker} from "@wordpress/components";
// このコンポーネントのメモ化はうまく行かなかったため、保留
import { memo, useCallback, useMemo } from "react";

const OjaColorPicker = memo((props) => {
  const { attributes, setAttributes, colorReset, initialValue, label } = props;

  const CopyedColor = memo(() => {
    return (
			<div
				className="copyedColor"
				style={{ backgroundColor: attributes }}
			></div>
		);
  });

  return [
    <div className="ojaColorPicker">
      <p>{label}</p>
      <ColorPicker
      color={attributes}
      onChangeComplete={setAttributes}
      defaultValue={initialValue}
      enableAlpha={true}
      />
      <button onClick={colorReset}>resetする</button>
      <CopyedColor />
    </div>
  ];
});

export default OjaColorPicker;