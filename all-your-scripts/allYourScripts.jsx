console.log("all your scripts are belong to us");

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
    }

    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value });


        console.log(this.state);
    };

    render(){
        return (
            <div>
                <div>My Form</div>
                <div onChange={this.handleChange}>
                    <div>
                        Name:{" "}
                        <input
                            name="username"
                            type="text"
                            id="inputUsername"
                            placeholder="Enter username"
                            value={this.state.username}
                        />
                    </div>
                    <div>
                        Password:{" "}
                        <input
                            name="password"
                            type="password"
                            id="inputPassword"
                            placeholder="Enter password"
                            value={this.state.password}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById("root"));
