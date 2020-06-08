// let title_index = 0;
// let codeFlag = 0;
// let titleFlag = 0;
// let commentFlag = 0;
// let codeSpeed = 12;
// let titleSpeed = 35;
// const codeSnippets = [
// 	{
// 		title: "React SPA",
// 		comment: "position one",
// 		snippet: 
// `componentDidMount() { 
//   this.setState({ isLoading: true});
			
//   fetch(PRACTIQ_API_BASE + WIZARD)
//     .then(response => {
// 	 if (response.ok) {
// 	   return buildWizard(response.json());
// 	 } else {`,
// 	},
// 	{
// 		title: "Library",
// 		comment: "position one",
// 		snippet: 
// `final Request createUserRequest = CreateUserRequest
	
// 	.newBuilder()
// 	.withRequestId(UUID.randomUUID())
// 	.withUser(User.of(username))
// 	.build();

// final ApiAsyncClient = ApiAsyncClients`,
// 	},
// 	{
// 		title: "API",
// 		comment: "position one",
// 		snippet: 
// `@Controller("/taskWizard") 
// class TaskWizardController {
  
//     @Get(produces = [MediaType.APPLICATION_JSON]) 
//     fun index(): TaskWizard {
//         return TaskWizard.default().build(); 
//     }
// }`,
// 	},
// ];

// const writeComment = (txt) => {
// 	if (titleFlag === 0) {
// 		writeCode(codeSnippets[title_index].snippet);
// 	}
// 	if (titleFlag < txt.length) {
// 		document.getElementById(
// 			"comment_block-animation-txt"
// 		).innerHTML += txt.charAt(titleFlag);
// 		titleFlag++;
// 		setTimeout(() => writeTitle(txt), titleSpeed);
// 	}
// };

// const removeComment = (txt) => {
// 	if (titleFlag === txt.length) {
// 		document.getElementById(
// 			"code_block-animation-title"
// 		).innerHTML = txt = txt.slice(0, titleFlag - 1);
// 		titleFlag--;
// 		setTimeout(() => removeTitle(txt), 35);
// 	} else {
// 		if(title_index === codeSnippets.length-1){
// 			title_index = 0;
// 		} else {
// 			title_index++
// 		}
// 		setTimeout(() => animationLogic(), 10);
// 	}
// };


// const writeCode = (txt) => {
// 	if (codeFlag < txt.length) {
// 		document.getElementById("code_block-animation-txt").innerHTML += txt.charAt(
// 			codeFlag
// 		);
// 		codeFlag++;
// 		setTimeout(() => writeCode(txt), codeSpeed);
// 	} else if (codeFlag === txt.length) {
// 		setTimeout(() => removeCode(txt), 5000);
// 	}
// };

// const removeCode = (txt) => {
// 	if (codeFlag === txt.length && txt.length !== 0) {
// 		txt = txt.replace(/</g, "&lt;");
// 		codeFlag = txt.length;
// 		document.getElementById(
// 			"code_block-animation-txt"
// 		).innerHTML = txt = txt.slice(0, codeFlag - 1);
// 		codeFlag--;
// 		setTimeout(() => removeCode(txt), 10);
// 	} else {
// 		setTimeout(() => animationLogic(), 50);
// 	}
// };

// const writeTitle = (txt) => {
// 	if (titleFlag === 0) {
// 		writeCode(codeSnippets[title_index].snippet);
// 	}
// 	if (titleFlag < txt.length) {
// 		document.getElementById(
// 			"code_block-animation-title"
// 		).innerHTML += txt.charAt(titleFlag);
// 		titleFlag++;
// 		setTimeout(() => writeTitle(txt), titleSpeed);
// 	}
// };

// const removeTitle = (txt) => {
// 	if (titleFlag === txt.length) {
// 		document.getElementById(
// 			"code_block-animation-title"
// 		).innerHTML = txt = txt.slice(0, titleFlag - 1);
// 		titleFlag--;
// 		setTimeout(() => removeTitle(txt), 35);
// 	} else {
// 		if(title_index === codeSnippets.length-1){
// 			title_index = 0;
// 		} else {
// 			title_index++
// 		}
// 		setTimeout(() => animationLogic(), 10);
// 	}
// };

// const animationLogic = () => {
// 	if (titleFlag < codeSnippets[title_index].title.length) {
// 		setTimeout(() => writeTitle(codeSnippets[title_index].title), 10);
// 	} else if (titleFlag === codeSnippets[title_index].title.length) {
// 		setTimeout(() => removeTitle(codeSnippets[title_index].title), 50);
// 	}
// };

// export const startAnimation = () => {
// 	animationLogic();
// };

let title_index = 0;
let codeFlag = 0;
let titleFlag = 0;
let commentFlag = 0;
let codeSpeed = 12;
let titleSpeed = 35;
let commentSpeed = 12;
const codeSnippets = [
	{
		title: "React SPA",
		comment: " Fetch wizard structure and pass for mounting",
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
		title: "Library",
		comment: " Proxy requests for user creation to the Users API",
		snippet: 
`final Request createUserRequest = CreateUserRequest
  .newBuilder()
  .withRequestId(UUID.randomUUID())
  .withUser(User.of(username))
  .isTest()
  .build();
  
  client.send(createUserRequest);`,
	},
	{
		title: "API",
		comment: " Initialize task API controller",
		snippet: 
`@Controller("/taskWizard") 
class TaskWizardController {
  
    @Get(produces = [MediaType.APPLICATION_JSON]) 
    fun index(): TaskWizard {
        return TaskWizard.default().build(); 
    }
}`,
	},
];

const writeComment = (txt) => {
	if (commentFlag === 0) {
		writeCode(codeSnippets[title_index].snippet);
	}
	if (commentFlag < txt.length) {
		document.getElementById(
			"comment_block-animation-txt"
		).innerHTML += txt.charAt(commentFlag);
		commentFlag++;
		setTimeout(() => writeComment(txt), commentSpeed);
	}
};

const removeComment = (txt) => {
	if (commentFlag === txt.length) {
		document.getElementById(
			"comment_block-animation-txt"
		).innerHTML = txt = txt.slice(0, commentFlag - 1);
		commentFlag--;
		setTimeout(() => removeComment(txt), 10);
	} else {
		setTimeout(() => animationLogic(), 10);
	}
};


const writeCode = (txt) => {
	if (codeFlag < txt.length) {
		document.getElementById("code_block-animation-txt").innerHTML += txt.charAt(
			codeFlag
		);
		codeFlag++;
		setTimeout(() => writeCode(txt), codeSpeed);
	} else if (codeFlag === txt.length) {
		setTimeout(() => removeCode(txt), 2500);
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
		setTimeout(() => removeComment(codeSnippets[title_index].comment), 50);
	}
};

const writeTitle = (txt, comment) => {
	if(titleFlag === 0){
		setTimeout(() => writeComment(codeSnippets[title_index].comment), commentSpeed);
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