const codeArea = document.getElementsByClassName("code")[0];
codeArea.addEventListener('click', () => {
    codeArea.select();
});

document.getElementById("generate-button").addEventListener('click', () => {
    let repositoryName = document.getElementById('repository-name').value.trim();
    const http = new XMLHttpRequest();  
    const url = `https://api.github.com/repos/${repositoryName}`;
    
    http.open("GET", url);
    http.send();
    http.onreadystatechange = function() {
        codeArea.style.display = "block";
        if(this.readyState = 4 && this.status == 404) {
            codeArea.textContent = "Uh oh! The repository was not found. Are you sure the repository you entered is public?"
        } else if(this.readyState = 4 && this.status == 200) {
            codeArea.textContent = `<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">\n<link href="widget/styles.css" rel="stylesheet">\n<div id="github-repo-card" repository="${repositoryName.trim()}">\n<script src="widget/script.js"></script>\n</div>`.trim();
            codeArea.select();
        }
    }
});