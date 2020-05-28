export let code_first = 
`componentDidMount() { 
    this.setState({ isLoading: true});
    
    fetch(PRACTIQ_API_BASE + WIZARD)
         .then(response => {
              if (response.ok) {
                return buildWizard(response.json());
              } else {`

export let code_second = 
`const UI_Component = props => { 
    return(
        <div>It all starts here!<div>
        <p>Your first steps in programming</p>
        <p>Supervised by specialists</p>
    )`

export let code_third =
`This.State.Property = "New Array,
This.State.Default = "New Obj,
This.State.Value = {[e.target.name]: e.target.value}
 
Show Default Settings: true`