# Nemo Cyber World — Personal Portfolio

This is my  **personal portfolio website** , built with nothing but  **HTML + Tailwind CSS + Vanilla JavaScript** .

It’s fast, mobile-friendly, and easy to update — everything I wanted for a hacker’s portfolio.

👉  **Live Site** : [https://nemocyberworld.github.io/nemocyberworld.github.io](https://nemocyberworld.github.io/nemocyberworld.github.io)

---

## 👋 About Me

I’m **Saide Hossain (Captain Nemo)** — an  **Offensive Security Specialist** ,  **Exploit Developer** , and **Red Teaming Enthusiast** from Bangladesh.

This portfolio is my hub for:

* Open-source security projects
* Offensive security research
* CTF writeups and resources
* Notes and learning tools

---

## ✨ Features

* 🖤 **Dark modern UI** with Tailwind
* 📱 **Responsive** — works on desktop & mobile
* 🔎 **Search & filter** for projects and content
* 🗂️  **Organized sections** : About, Projects, Content, Contact
* ⚡ **No frameworks, no build** — runs on pure HTML

---

## 🚀 Quick Start

Clone and open locally:

```bash
git clone https://github.com/nemocyberworld/nemocyberworld.github.io.git
cd nemocyberworld.github.io

# Option A: open index.html directly
# Option B: serve with Python
python3 -m http.server 8080
```

Visit [http://localhost:8080](http://localhost:8080/).

---

## 📂 How to Update

All projects and content live in two arrays inside `index.html`.

### Projects

```js
const PROJECTS = [
  {
    name: "OSINT-Tracker",
    desc: "Track your OSINT operations.",
    url: "https://github.com/nemocyberworld/OSINT-Tracker",
    tags: ["osint","tracker"],
    category: "mini"
  },
  // add more...
];
```

### Content

```js
const CONTENT_ITEMS = [
  {
    title: "Linux Privilege Escalation Notes",
    type: "notes",
    tags: ["linux","privesc","rt"],
    url: "https://nemocyberworld.github.io/posts/linux-privesc.html",
    desc: "Checklists, SUID, capabilities, kernel, creds."
  },
  // add more...
];
```

---

## 🌍 Deployment

This repo is already set up for  **GitHub Pages** .

1. Push to `main` branch.
2. Go to  **Settings → Pages** .
3. Source: `Deploy from branch` → `main` → `/root`.
4. Your portfolio will be live at:
   ```
   https://nemocyberworld.github.io/nemocyberworld.github.io
   ```

---

## 📬 Contact Me

* **Website** : [nemocyberworld.github.io](https://nemocyberworld.github.io/)
* **GitHub** : [@nemocyberworld](https://github.com/nemocyberworld)
* **X (Twitter)** : [@nemocyberworld](https://x.com/nemocyberworld)
* **LinkedIn** : [in/saide-hossain-856b20363](https://www.linkedin.com/in/saide-hossain-856b20363)
* **Email** : [nemo14398@gmail.com](mailto:nemo14398@gmail.com)

---

## 📜 License

MIT — free to use, fork, and adapt.

---

⚡ **If you like this, drop a star on my repos!**

