// عاشق العود — product data verified against the buyer's original catalogue PDF
const PRODUCTS = [
  { id:1, name:"عود ملكي", en:"Royal Oud", size:"100 مل", price:"1,500",
    desc:"عود كمبودي فاخر مع لمسة عنبر ومسك ناعم. ريحة ثقيلة وثابتة، تليق بالمناسبات وتفضل معاك ساعات طويلة.",
    notes:["عود كمبودي","عنبر","مسك"], wa:"https://wa.me/201033384081?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C+%D8%B9%D8%A7%D9%8A%D8%B2+%D8%A3%D8%B7%D9%84%D8%A8+%D8%B9%D8%B7%D8%B1+%D8%B9%D9%88%D8%AF+%D9%85%D9%84%D9%83%D9%8A+%D9%85%D9%86+%D8%B9%D8%A7%D8%B4%D9%82+%D8%A7%D9%84%D8%B9%D9%88%D8%AF" },
  { id:2, name:"عود الليل", en:"Layl Oud", size:"100 مل", price:"1,200",
    desc:"مزيج دافي من العود والورد الطائفي والباتشولي. مناسب للسهرات والأجواء الهادية، بحضور أنيق ومميز.",
    notes:["عود","ورد طائفي","باتشولي"], wa:"https://wa.me/201033384081?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C+%D8%B9%D8%A7%D9%8A%D8%B2+%D8%A3%D8%B7%D9%84%D8%A8+%D8%B9%D8%B7%D8%B1+%D8%B9%D9%88%D8%AF+%D8%A7%D9%84%D9%84%D9%8A%D9%84+%D9%85%D9%86+%D8%B9%D8%A7%D8%B4%D9%82+%D8%A7%D9%84%D8%B9%D9%88%D8%AF" },
  { id:3, name:"عنبر ذهبي", en:"Golden Amber", size:"100 مل", price:"950",
    desc:"عنبر دافي مع فانيليا وصندل كريمي. ريحة ناعمة وجذابة للاستخدام اليومي، وبتعدي الصيف والشتا.",
    notes:["عنبر","فانيليا","صندل"], wa:"https://wa.me/201033384081?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C+%D8%B9%D8%A7%D9%8A%D8%B2+%D8%A3%D8%B7%D9%84%D8%A8+%D8%B9%D8%B7%D8%B1+%D8%B9%D9%86%D8%A8%D8%B1+%D8%B0%D9%87%D8%A8%D9%8A+%D9%85%D9%86+%D8%B9%D8%A7%D8%B4%D9%82+%D8%A7%D9%84%D8%B9%D9%88%D8%AF" },
  { id:4, name:"مسك الصحراء", en:"Desert Musk", size:"50 مل", price:"650",
    desc:"مسك أبيض نقي مع ياسمين وخشب الأرز. خفيف ونضيف ومنعش، مناسب للشغل واليوم العادي.",
    notes:["مسك أبيض","ياسمين","خشب الأرز"], wa:"https://wa.me/201033384081?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C+%D8%B9%D8%A7%D9%8A%D8%B2+%D8%A3%D8%B7%D9%84%D8%A8+%D8%B9%D8%B7%D8%B1+%D9%85%D8%B3%D9%83+%D8%A7%D9%84%D8%B5%D8%AD%D8%B1%D8%A7%D8%A1+%D9%85%D9%86+%D8%B9%D8%A7%D8%B4%D9%82+%D8%A7%D9%84%D8%B9%D9%88%D8%AF" },
  { id:5, name:"ورد وعود", en:"Rose & Oud", size:"100 مل", price:"1,100",
    desc:"ورد دمشقي مع عود هندي وخيوط زعفران. تركيبة شرقية كلاسيكية بلمسة رومانسية، ومثالية كهدية.",
    notes:["ورد دمشقي","عود هندي","زعفران"], wa:"https://wa.me/201033384081?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C+%D8%B9%D8%A7%D9%8A%D8%B2+%D8%A3%D8%B7%D9%84%D8%A8+%D8%B9%D8%B7%D8%B1+%D9%88%D8%B1%D8%AF+%D9%88%D8%B9%D9%88%D8%AF+%D9%85%D9%86+%D8%B9%D8%A7%D8%B4%D9%82+%D8%A7%D9%84%D8%B9%D9%88%D8%AF" },
  { id:6, name:"سلطان", en:"Sultan", size:"100 مل", price:"1,350",
    desc:"بخور وجلد وتوابل دافية بشخصية قوية. عطر رجالي بطابع فخم يلفت الانتباه من أول لحظة.",
    notes:["بخور","جلد","توابل"], wa:"https://wa.me/201033384081?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C+%D8%B9%D8%A7%D9%8A%D8%B2+%D8%A3%D8%B7%D9%84%D8%A8+%D8%B9%D8%B7%D8%B1+%D8%B3%D9%84%D8%B7%D8%A7%D9%86+%D9%85%D9%86+%D8%B9%D8%A7%D8%B4%D9%82+%D8%A7%D9%84%D8%B9%D9%88%D8%AF" },
];

const grid = document.getElementById("grid");
PRODUCTS.forEach(p => {
  const card = document.createElement("article");
  card.className = "card reveal";
  card.innerHTML = `
    <img class="bottle" src="assets/product-${p.id}.svg" alt="صورة توضيحية لعطر ${p.name}" loading="lazy">
    <span class="tag">صورة توضيحية</span>
    <h3>${p.name}</h3>
    <div class="en">${p.en}</div>
    <div class="size">الحجم: ${p.size}</div>
    <p class="desc">${p.desc}</p>
    <div class="notes">${p.notes.map(n => `<span>${n}</span>`).join("")}</div>
    <div class="price">${p.price} <small>جنيه مصري</small></div>
    <a class="btn" href="${p.wa}" target="_blank" rel="noopener">اطلب الآن عبر واتساب</a>`;
  grid.appendChild(card);
});

document.getElementById("generalWa").href = "https://wa.me/201033384081?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C+%D8%B9%D9%86%D8%AF%D9%8A+%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1+%D8%B9%D9%86+%D8%B9%D8%B7%D9%88%D8%B1+%D8%B9%D8%A7%D8%B4%D9%82+%D8%A7%D9%84%D8%B9%D9%88%D8%AF";
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// scroll reveal (skipped in snapshot mode so full-page captures show everything)
if (!location.search.includes("snap") && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

// back to top
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 500));
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
