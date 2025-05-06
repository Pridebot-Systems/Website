async function fetchserverStats() {
  try {
    const response = await fetch("https://api.pridebot.xyz/serverstats");
    const data = await response.json();
    console.log(data);
    document.getElementById("prismacount").textContent =
      data.prismatotal.toLocaleString();
    document.getElementById("compprismacount").textContent = formatUserCount(
      data.prismatotal
    );
    document.getElementById("pridecordcount").textContent =
      data.pridecordtotal.toLocaleString();
    document.getElementById("comppridecordcount").textContent = formatUserCount(
      data.pridecordtotal
    );
console.log(document.getElementById("prismacount"));
console.log(document.getElementById("compprismacount"));
console.log(document.getElementById("pridecordcount"));
console.log(document.getElementById("comppridecordcount"));

  } catch (error) {
    console.error("Failed to fetch bot stats:", error);
  }
}

function formatUserCount(count) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "k+";
  }
  return count.toLocaleString();
}

window.onload = fetchserverStats;
