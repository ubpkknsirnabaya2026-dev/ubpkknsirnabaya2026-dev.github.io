(() => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "PRK-001";
  const program = window.MOCK_DATA.programs.find(item => item.id === id) || window.MOCK_DATA.programs[0];
  const set = (target, value) => { const node = document.getElementById(target); if (node) node.textContent = value; };
  set("programTitle", program.title); set("programSummary", program.summary); set("programCategory", program.category);
  set("programDate", program.date); set("programLocation", program.location); set("programId", program.id);
  const image = document.getElementById("programImage");
  if (image) { image.src = `../${program.image}`; image.alt = `Ilustrasi ${program.title}`; }
  document.title = `${program.title} | KKN Sirnabaya 2026`;
})();
