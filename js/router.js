const routes = {
    "/": "pages/home.html",
    "/about": "pages/about.html",
    "/services": "pages/services.html",
    "/blog": "pages/blog.html",
    "/benefits": "pages/benefits.html",
  };
  
  function loadPage(path) {
    const file = routes[path] || "pages/404.html";
    fetch(file)
      .then((res) => res.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      });
  }
  
  function router() {
    const path = location.hash.slice(1) || "/";
    loadPage(path);
  }
  
  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);
  