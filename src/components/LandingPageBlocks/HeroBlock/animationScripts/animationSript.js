let title_index = 0;
let codeFlag = 0;
let titleFlag = 0;
let codeSpeed = 12;
let titleSpeed = 35;
const codeSnippets = [
	{
		title: "Microservice",
		snippet: 
`componentDidMount() { 
  this.setState({ isLoading: true});
			
  fetch(PRACTIQ_API_BASE + WIZARD)
    .then(response => {
	 if (response.ok) {
	   return buildWizard(response.json());
	 } else {`,
	},
	{
		title: "Design",
		snippet: 
`const UI_Component = props => { 
  return(
	<div>It all starts here!<div>
	<p>Your first steps in programming</p>
	<p>Supervised by specialists</p>
  )`,
	},
	{
		title: "React SPA",
		snippet: 
`This.State.Property = "New Array,
  This.State.Default = "New Obj,
  This.State.Value = {[e.target.name]:e.target.value}
		 
  Show Default Settings: true`,
	},
];


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
		setTimeout(() => animationLogic(), 50);
	}
};

const writeTitle = (txt) => {
	if (titleFlag === 0) {
		writeCode(codeSnippets[title_index].snippet);
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
		if(title_index === codeSnippets.length-1){
			title_index = 0;
		} else {
			title_index++
		}
		setTimeout(() => animationLogic(), 10);
	}
};

const animationLogic = () => {
	if (titleFlag < codeSnippets[title_index].title.length) {
		setTimeout(() => writeTitle(codeSnippets[title_index].title), 10);
	} else if (titleFlag === codeSnippets[title_index].title.length) {
		setTimeout(() => removeTitle(codeSnippets[title_index].title), 50);
	}
};

export const startAnimation = () => {
	animationLogic();
};