class Title extends React.Component {
    render() {
        console.log('Title props', this.props);
        return (
            <h1>Title</h1>
        )
    }
}
class Fruit extends React.Component {
    isBanana(fruitName) {
        if (fruitName === 'banana') {
            return { border: '1px solid yellow' }
        } else {
            return { border: '1px solid' }
        }
    }
    render() {
        const bananaBorder = {
            border: '1px solid yellow'
        }

        const notBananaBorder = {
            border: '1px solid black'
        }
            {/*< div style = { this.isBanana(this.props.fruitName) } > */}
        return (

            <div style={this.props.fruitName === 'banana'? bananaBorder : notBananaBorder}>
                <p className = "fruit-name">{this.props.fruitName}</p>
                <p>{this.props.fruitWeight}</p>
            </div>
        )
    }
}
class Content extends React.Component {
    handleClick(e) {
        // this.props.counterIncrease();
        // console.log(this);
        console.log(e.target.innerHTML);
        // this.props.counterIncrease();
        // alert('content button was clicked')
    }
    renderAllFruits() {
        return this.props.fruits.map((fruit, index) => {
            console.log(fruit)
            return (
                <Fruit
                    key={fruit.name + index}
                    fruitName={fruit.name}
                    fruitWeight={fruit.weight}
                ></Fruit>
            )
        })
    }
    render() {
        console.log('Content props', this.props);
        const { counter, counterIncrease } = this.props
        return (
            <div>
                <p>Content</p>
                <button
                    onClick={e => { this.props.counterIncrease(e) }}
                >
                    Click me!
                </button>
                <p>Counter: {counter}</p>
                {this.renderAllFruits()}
            </div>
        )
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
        this.counterIncrease = this.counterIncrease.bind(this);
    }
    counterIncrease() {
        let newCounter = this.state.counter;
        newCounter++;
        this.setState({ counter: newCounter });
    }
    render() {
        console.log('App props', this.props);
        const { something, object, integer, somethingElse, notSomething } = this.props;
        return (
            <div>
                <Title
                    something={something}
                    object={object}
                    integer={integer}
                />
                <Content
                    counter={this.state.counter}
                    counterIncrease={this.counterIncrease}
                    fruits={this.props.fruits}
                />
            </div>
        )
    }
}
ReactDOM.render(
    <App
        something={'something'}
        somethingElse={'somethingElse'}
        notSomething={'notSomething'}
        object={{
            key: 'value',
            anotherKey: 'anotherValue',
        }}
        integer={0}
        fruits={[
            { name: 'banana', weight: 500 },
            { name: 'pear', weight: 120 },
            { name: 'orange', weight: 150 },
            { name: 'apple', weight: 45 }
        ]}
    />,
    document.getElementById('root')
);