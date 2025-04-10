function GithubUser({user}) {
    const {avatar_url, followers, following, public_repos, html_url, name, login} = user;

    return (
        <div className="github-user">
            <div>
                <img src={avatar_url} className="avatar" alt="User" />
            </div>
            <div>
                <a href={html_url}>{name || login}</a>
            </div>
        </div>
    )
}

export default GithubUser;