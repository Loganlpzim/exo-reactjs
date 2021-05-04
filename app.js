class App extends React.Component {

    state = {
        history: [this.name + this.message],
        name: "",
        message: ""
    }

    keepHistory = (event) => {
        event.preventDefault();

        let newHistory = [...this.state.history, this.state.search]

        this.setState({
            history: newHistory
        })
    }

    render() {

        return (
            <section>
                <form>
                    <div className="form">
                        <p>Say something</p>
                        <input type="text" placeholder="Your name"/>
                        <textarea name="" id="" placeholder="Your comment"></textarea>
                        <input onClick={this.keepHistory} className="submitBtn" type="submit" value="Comment >"/>
                    </div>
                </form>
            </section>

        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));