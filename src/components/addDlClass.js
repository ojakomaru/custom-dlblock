export function addDlClass(
	className,
	{ isFaq, isPanelOpen, isQaBalloon, iconDesign }
) {
	//Q&Aの形式Classを付与する
	let dlClassName;
	if (isFaq) {
		dlClassName = className + " faq";
	} else {
		dlClassName = className;
	}
	if (isPanelOpen) {
		//質問の開閉を行うClassを付与する
		dlClassName += " panelOpen";
	}
	if (isQaBalloon) {
		//Q&Aを吹き出しで表示するClass
		dlClassName += " qaBalloon";
	} else if (iconDesign) {
		//Q&A形式のデザインを変更する
		dlClassName += " " + iconDesign;
	}

	return dlClassName;
}