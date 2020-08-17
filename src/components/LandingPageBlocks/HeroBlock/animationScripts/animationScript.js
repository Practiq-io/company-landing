let codeSnippetCounter = 0;
let codeFlag = 0;
let titleFlag = 0;
let commentFlag = 0;
let codeSpeed = 7;
let titleSpeed = 35;
let commentSpeed = 1;
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
		title: "Microservice",
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
		writeCode(codeSnippets[codeSnippetCounter].snippet);
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
		setTimeout(() => removeComment(txt), 7);
	} else {
		setTimeout(() => animationLogic(), 1);
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
		setTimeout(() => removeCode(txt), 1500);
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
		setTimeout(() => removeCode(txt), 1);
	} else {
		setTimeout(() => removeComment(codeSnippets[codeSnippetCounter].comment), 1);
	}
};

const writeTitle = (txt, comment) => {
	if(titleFlag === 0){
		setTimeout(() => writeComment(codeSnippets[codeSnippetCounter].comment), commentSpeed);
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
		if(codeSnippetCounter === codeSnippets.length-1){
			codeSnippetCounter = 0;
		} else {
			codeSnippetCounter++
		}
		setTimeout(() => animationLogic(), 1);
	}
};

const animationLogic = () => {
	if (titleFlag < codeSnippets[codeSnippetCounter].title.length) {
		setTimeout(() => writeTitle(codeSnippets[codeSnippetCounter].title), 1);
	} else if (titleFlag === codeSnippets[codeSnippetCounter].title.length) {
		setTimeout(() => removeTitle(codeSnippets[codeSnippetCounter].title), 1);
	}
};

export const startAnimation = () => {
	animationLogic();
};