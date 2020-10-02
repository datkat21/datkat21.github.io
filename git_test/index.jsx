/**
 * See https://developer.github.com/v3/repos/branches/#get-branch
 *
 * Example Github api request:
 * https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master
 */
class LatestCommitComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            branch: "",
            date: "",
            sha: "",
            link: ""
        };
    }

    componentDidMount() {
        // Replace this with your own repo
        // https://api.github.com/repos/:owner/:repo/branches/master
        fetch(
            "https://api.github.com/repos/datkat21/datkat21.github.io/branches/master"
        )
            .then(response => {
                response.json().then(json => {
                    console.log(json);
                    this.setState({
                        author: json.commit.author.login,
                        authorurl: json.commit.author.url,
                        avatar: json.commit.author.avatar_url,
                        branch: json.name,
                        date: json.commit.commit.author.date,
                        link: json._links.html,
                        authorpage: json.commit.author.html_url,
                        commit_url: json.commit.html_url,
                        commit_title: json.commit.commit.message,
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>

                <div>{this.state.author}<br></br><a href={this.state.authorpage}><img src={this.state.avatar} alt="Loading..." class="img" /></a></div>

                <div><a href={this.state.link}>Branch: {this.state.branch}</a></div><br></br>

                <div>Message: {this.state.commit_title}</div>

                <div>Date: {this.state.date}</div>

                

                <div></div>

            </div>
        );
    }
}

ReactDOM.render(<LatestCommitComponent />, document.getElementById("root"));