<script>
  function toggleOldNews() {
    const oldNews = document.getElementById("oldNews");
    oldNews.classList.toggle("hidden");
  }
</script>

<script>
  // Ocultar novedad del 14 de enero 2026 y mostrar la del 14 de octubre 2025
  document.addEventListener("DOMContentLoaded", () => {
    const jan2026 = document.getElementById("newsJan2026");
    const oct2025 = document.getElementById("newsOct2025");
    if (jan2026) jan2026.style.display = "none";
    if (oct2025) oct2025.style.display = "block";
  });

  // Toggle para ver novedades anteriores
  function toggleOldNews() {
    const oldNews = document.getElementById("oldNews");
    oldNews.classList.toggle("hidden");
  }
</script>

