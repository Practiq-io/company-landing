import { code_first, code_second, code_third } from "./animationCodeText";
import { title_first, title_second, title_third } from "./animationTitleText";

const codeTextArr = [code_first, code_second, code_third];
const titleTextArr = [title_first, title_second, title_third];

var code_index = 0;
var title_index = 0;
var codeFlag = 0;
var titleFlag = 0;
var codeSpeed = 12;
var titleSpeed = 35;
var codeText = codeTextArr[code_index];
var titleText = titleTextArr[title_index];

const writeCode = (txt) => {
	if (codeFlag < txt.length) {
		document.getElementById("code_block-animation-txt").innerHTML += txt.charAt(
			codeFlag
		);
		codeFlag++;
		setTimeout(() => writeCode(txt), codeSpeed);
	} else if (codeFlag === txt.length) {
		setTimeout(() => removeCode(txt), 5000);
	}
};

const removeCode = (txt) => {
	if (codeFlag === txt.length && txt.length !== 0) {
		txt = txt.replace(/</g, "&lt;");
		codeFlag = txt.length;
		document.getElementById(
			"code_block-animation-txt"
		).innerHTML = txt = txt.slice(0, codeFlag - 1);
		codeFlag--;
		setTimeout(() => removeCode(txt), 10);
	} else {
		if (code_index === codeTextArr.length - 1) {
			code_index = 0;
			codeText = codeTextArr[code_index];
		} else {
			code_index++;
			codeText = codeTextArr[code_index];
		}
		setTimeout(() => animationLogic(), 50);
	}
};

const writeTitle = (txt) => {
	if (titleFlag === 0) {
		writeCode(codeText);
	}
	if (titleFlag < txt.length) {
		document.getElementById(
			"code_block-animation-title"
		).innerHTML += txt.charAt(titleFlag);
		titleFlag++;
		setTimeout(() => writeTitle(txt), titleSpeed);
	}
};

const removeTitle = (txt) => {
	if (titleFlag === txt.length) {
		document.getElementById(
			"code_block-animation-title"
		).innerHTML = txt = txt.slice(0, titleFlag - 1);
		titleFlag--;
		setTimeout(() => removeTitle(txt), 35);
	} else {
		if (title_index === titleTextArr.length - 1) {
			title_index = 0;
			titleText = titleTextArr[title_index];
		} else {
			title_index++;
			titleText = titleTextArr[title_index];
		}
		setTimeout(() => animationLogic(), 10);
	}
};

const animationLogic = () => {
	if (titleFlag < titleText.length) {
		setTimeout(() => writeTitle(titleText), 10);
	} else if (titleFlag === titleText.length) {
		setTimeout(() => removeTitle(titleText), 50);
	}
};

export const startAnimation = () => {
	animationLogic();
};