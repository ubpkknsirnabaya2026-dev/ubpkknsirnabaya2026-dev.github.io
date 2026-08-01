(() => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "AGT-001";
  const member = window.MOCK_DATA.members.find(item => item.id === id) || window.MOCK_DATA.members[0];
  const related = window.MOCK_DATA.programs.slice(0, Math.min(member.programs, window.MOCK_DATA.programs.length));
  const set = (target, value) => { const node = document.getElementById(target); if (node) node.textContent = value; };
  set("memberName", member.name); set("memberStudy", member.study); set("memberId", member.id); set("memberCount", `${member.programs} program terkait`);
  const image = document.getElementById("memberImage");
  if (image) { image.src = `../${member.image}`; image.alt = `Portrait ${member.name}`; }
  const programs = document.getElementById("memberPrograms");
  if (programs) programs.innerHTML = related.map(item => `<a class="profile-program" href="../berita/detail.html?id=${encodeURIComponent(item.id)}"><strong>${item.title}</strong><span>${item.category} · ${item.date}</span></a>`).join("");
  document.title = `${member.name} | KKN Sirnabaya 2026`;
})();
