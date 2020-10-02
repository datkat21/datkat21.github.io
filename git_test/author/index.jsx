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
            "https://api.github.com/users/datkat21"
        )
            .then(response => {
                response.json().then(json => {
                    console.log(json);
                    this.setState({
            // example: author: json.commit.author.login,
                      avatar: json.avatar_url,
                      author: json.login,
                      name: json.name,
                      company: json.company,
                      bio: json.bio,
                      repos: json.public_repos,
                      twitter: json.twitter_username,
                      followers: json.followers,
                      following: json.following,
                      location: json.location,
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
            <div>Name: {this.state.name}<br></br> Company: {this.state.company}<br></br> Bio: {this.state.bio}</div>

            </div>
        );
    }
}

ReactDOM.render(<LatestCommitComponent />, document.getElementById("root"));