class Form extends React.Component{
    constructor(){
        super()
        //we create an object with key value pair of word
        this.state ={
            word: " ",
        }
    }

    //this function will set state on anything except 'xyz'
    changeHandler(event){
        if (event.target.value != 'xyz'){
            this.setState({ word: event.target.value });
        }

        console.log("change", event.target.value);
    }

    render(){
        console.log("rendering forms component")
        return(
            <div className = "item">
                <span>{this.state.word}</span> <br/>
                <input
                onChange={(event)=>{this.changeHandler(event);
                }}
                value = {this.state.word.toUpperCase()
                }
                />
            </div>
        );
    }

}




ReactDOM.render(
    <div>
        <Form />
    </div>,
    document.getElementById('root')
);