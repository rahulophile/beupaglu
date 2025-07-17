document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("theme-toggle-checkbox"),
    t = document.body,
    o = (e) => {
      (t.className = ""),
        t.classList.add(`${e}-theme`),
        localStorage.setItem("theme", e);
    };
  e &&
    e.addEventListener("change", () => {
      e.checked ? o("dark") : o("light");
    });
  const c = localStorage.getItem("theme");
  "dark" === c
    ? (o("dark"), e && (e.checked = !0))
    : (o("light"), e && (e.checked = !1));
});
