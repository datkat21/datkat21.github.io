function fetchGithub() {
    render;
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
