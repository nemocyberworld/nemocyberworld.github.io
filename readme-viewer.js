function loadReadme(repoName) {
    const url = `https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`;
  
    fetch(url)
      .then(res => res.ok ? res.text() : "README not found.")
      .then(md => {
        const html = marked.parse(md);
        document.getElementById("readme").innerHTML = html;
      });
  }
  