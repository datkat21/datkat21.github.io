
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
                        commiturl: json.commit.html_url
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <div>

                <div>{this.state.author}<br></br></div>

                <div class="branch"><a href={this.state.authorpage}><img src={this.state.avatar} alt="Loading..." class="img" /></a><a href={this.state.link}><svg text="gray" height="16" class="octicon octicon-git-branch text-gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg><p class="black"> {this.state.branch}</p></a></div><div class="box">Message: {this.state.commit_title}</div>

                
                
                <div>Date: {this.state.date}</div>
                <div> <a href={this.state.commiturl}>See this commit in detail</a> </div>
                

                <div></div>

            </div>
        );
    }
;}

ReactDOM.render(<LatestCommitComponent />, document.getElementById("root"));