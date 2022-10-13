import { addDlClass } from "./addDlClass";
import { memo, useCallback, useMemo } from "react";
// コンポーネントの最適化どころか、コンポーネントにするとブロックの値が取得できなかった為、一旦断念

//プレビュー表示関数
export const getPreview = ({ attributes, innerBlockProps, className }) => {

  const innerListContents = (innerBlockProps) => {

    const dtContents = innerBlockProps.filter((dt) => dt.attributes.dtText);
    const ddContents = innerBlockProps.filter((dd) => dd.attributes.ddText);

    const listContents = ddContents.map((block, i) => {
      return (
				<>
					<dt className="accordion__title">
						{dtContents[i].attributes.dtText}
					</dt>
					<dd className="accordion__content">
						{ddContents[i].attributes.ddText}
					</dd>
				</>
			);
    })
    return listContents;
  }

	return (
		<div
			className="oja_dl_wrap"
			style={{ backgroundColor: attributes["themeColor"] }}
		>
			{attributes.dlTitle ? (
				<h1
					className="oja-dl-head"
					style={{ backgroundColor: attributes.headTitleColor }}
				>
					{attributes["dlTitle"]}
				</h1>
			) : null}
			<dl className={addDlClass(className, attributes)}>
        {innerListContents(innerBlockProps)}
			</dl>
		</div>
	);
};
