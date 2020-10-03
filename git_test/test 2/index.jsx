
/**
* See https://developer.github.com/v3/repos/branches/#get-branch
*
* Example Github api request:
* https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master
*/
function myFunction(){


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
            "https://api.github.com/orgs/limeyteam"
            )
            .then(response => {
                response.json().then(json => {
                    console.log(json);
                    this.setState({
                        author: json.name,
                        authorurl: json.html_url,
                        avatar: json.avatar_url,
                        date: json.created_at,
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

    render() {
        return (
            <div>

                <div>{this.state.author}<br></br></div>

                <div class="branch">
                    <a href={this.state.authorpage}>
                        <img src={this.state.avatar} alt="Loading..." class="img" />
                        </a>Branch<a href={this.state.link}><p class="black"> hello {this.state.branch}</p></a></div>
                                    <div class="box"><p class="black">{this.state.commit_title}</p></div>



                <div>Date: {this.state.date}</div>
                <div> <a href={this.state.commiturl}>See this commit in detail</a> </div>


                <div></div>

            </div>
        );
    }
    ;
}
ReactDOM.render(<LatestCommitComponent />, document.getElementById("root"));


}