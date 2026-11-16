(function () {
  // Theme toggle
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Search (home page only)
  var input = document.getElementById("search");
  if (!input) return;

  var list = document.getElementById("post-list");
  var results = document.getElementById("search-results");
  var empty = document.getElementById("no-results");
  var posts = null;
  var loading = null;

  function load() {
    if (!loading) {
      loading = fetch(input.getAttribute("data-index"))
        .then(function (r) { return r.json(); })
        .then(function (data) { posts = data; });
    }
    return loading;
  }

  function render() {
    var q = input.value.trim().toLowerCase();
    if (!q) {
      list.hidden = false;
      results.hidden = true;
      empty.hidden = true;
      return;
    }
    var terms = q.split(/\s+/);
    var matches = posts.filter(function (p) {
      var hay = (p.title + " " + p.content).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    });
    // Title matches first, otherwise keep newest-first order
    matches.sort(function (a, b) {
      var at = a.title.toLowerCase().indexOf(q) !== -1 ? 0 : 1;
      var bt = b.title.toLowerCase().indexOf(q) !== -1 ? 0 : 1;
      return at - bt || (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);
    });

    results.textContent = "";
    matches.forEach(function (p) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = p.url;
      a.textContent = p.title;
      li.appendChild(a);
      results.appendChild(li);
    });
    list.hidden = true;
    results.hidden = matches.length === 0;
    empty.hidden = matches.length !== 0;
  }

  input.addEventListener("focus", load, { once: true });
  input.addEventListener("input", function () {
    load().then(render);
  });

  // Support ?q=... links
  var initial = new URLSearchParams(location.search).get("q");
  if (initial) {
    input.value = initial;
    load().then(render);
  }
})();
