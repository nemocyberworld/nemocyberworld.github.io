const username = "nemocyberworld";
const repoList = document.getElementById("repo-list");
const searchInput = document.getElementById("search");
const mainContent = document.getElementById("main-content");

let repos = [];

// Fetch and display repos
fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    repos = data;
    renderRepos(data);
  })
  .catch(error => {
    console.error("Error fetching repos:", error);
    repoList.innerHTML += `<p class="text-red-400">Failed to load repositories.</p>`;
  });

// Render repositories into the sidebar
function renderRepos(data) {
  // Keep the static links at the top
  const staticLinks = [
    { name: "Mr Linux", href: "#" },
    { name: "Mr Windows", href: "#" },
    { name: "Mr C", href: "#" },
    { name: "Mr Java", href: "#" },
  ];

  repoList.innerHTML = "";
  staticLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.name;
    a.className = "block p-2 rounded hover:bg-gray-700";
    repoList.appendChild(a);
  });

  // Then dynamic GitHub repos
  data.forEach(repo => {
    const a = document.createElement("a");
    a.href = "#";
    a.className = "block p-2 rounded hover:bg-gray-700";
    a.textContent = repo.name;
    a.onclick = () => loadReadme(repo.name);
    repoList.appendChild(a);
  });
}

// Search filter
searchInput.addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = repos.filter(r => r.name.toLowerCase().includes(keyword));
  renderRepos(filtered);
});

// Load README.md content from repo
function loadReadme(repoName) {
  mainContent.innerHTML = `<h2 class="text-2xl font-bold mb-4">📘 ${repoName}</h2><p class="text-gray-400">Loading README...</p>`;

  fetch(`https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`)
    .then(res => {
      if (!res.ok) throw new Error("README not found");
      return res.text();
    })
    .then(markdown => {
      mainContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">📘 ${repoName}</h2>
        <pre><code class="language-markdown">${markdown}</code></pre>
      `;
      hljs.highlightAll();
    })
    .catch(err => {
      mainContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">📘 ${repoName}</h2>
        <p class="text-red-400">README not found or cannot be loaded.</p>
      `;
    });
}

// Dark mode toggle
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}
