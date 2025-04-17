const username = "cncyberworld";
fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("repo-list");
    list.innerHTML = ""; // Clear static links
    data.forEach(repo => {
      const a = document.createElement("a");
      a.href = repo.html_url;
      a.textContent = repo.name;
      a.className = "block p-2 rounded hover:bg-gray-700";
      list.appendChild(a);
    });
  });
// new
  const repoList = document.getElementById("repo-list");
  const searchInput = document.getElementById("search");
  
  let repos = [];
  
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(data => {
      repos = data;
      renderRepos(data);
    });
  
  function renderRepos(data) {
    repoList.innerHTML = "";
    data.forEach(repo => {
      const a = document.createElement("a");
      a.href = "#";
      a.className = "block p-2 rounded hover:bg-gray-700";
      a.textContent = repo.name;
      a.onclick = () => loadReadme(repo.name);
      repoList.appendChild(a);
    });
  }
  
  searchInput.addEventListener("input", e => {
    const keyword = e.target.value.toLowerCase();
    const filtered = repos.filter(r => r.name.toLowerCase().includes(keyword));
    renderRepos(filtered);
  });

// darkmode

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
  
  