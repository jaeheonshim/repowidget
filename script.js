const http = new XMLHttpRequest();
const repoCard = document.getElementById("github-repo-card");
const url = `https://api.github.com/repos/${repoCard.getAttribute("repository")}`;

http.open("GET", url);
http.send();
http.onreadystatechange = function() {
    if(this.readyState = 4 && this.status == 200) {
        const repo = JSON.parse(http.responseText);
        let projectName = repo["full_name"];
        let starCount = repo["stargazers_count"];
        let forkCount = repo["forks_count"];
        let projectDescription = repo["description"];
        let avatarUrl = repo["owner"]["avatar_url"];
        let repoUrl = repo["html_url"];

        let html = `
        <div class="header">
        <a href="${repoUrl}">
        ${projectName}
        </a>
        <div class="button">
        <a href="${repoUrl}">
        <div class="text">
        <svg aria-label="star" height="16" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg> Star
        </div>
        </a>
        <div class="count">
        ${starCount}
        </div>
        </div>
        <div class="button">
        <a href="${repoUrl}">
        <div class="text">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg> Fork
        </div>
        </a>
        <div class="count">
        ${forkCount}
        </div>
        </div>
        </div>
        <div class="project-body">
        <div class="user-avatar">
        <img id="user-avatar" src="${avatarUrl}">
        </div>
        <div class="project-description">
        ${projectDescription}
        </div>
        </div>`;

        document.getElementById("github-repo-card").innerHTML = html;
    }
};