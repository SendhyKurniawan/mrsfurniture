const overlaycatalog1 = document.getElementById("overlaycatalog1");
const overlaycatalog3 = document.getElementById("overlaycatalog2");
const overlaycatalog2 = document.getElementById("overlaycatalog3");

overlaycatalog1.addEventListener("mouseover", function () {
  overlaycatalog1.classList.add("card-overlay-after");
  overlaycatalog1.classList.remove("card-overlay-before");
});
overlaycatalog1.addEventListener("mouseleave", function () {
  overlaycatalog1.classList.remove("card-overlay-after");
  overlaycatalog1.classList.add("card-overlay-before");
});

overlaycatalog2.addEventListener("mouseover", function () {
  overlaycatalog2.classList.add("card-overlay-after");
  overlaycatalog2.classList.remove("card-overlay-before");
});
overlaycatalog2.addEventListener("mouseleave", function () {
  overlaycatalog2.classList.remove("card-overlay-after");
  overlaycatalog2.classList.add("card-overlay-before");
});

overlaycatalog3.addEventListener("mouseover", function () {
  overlaycatalog3.classList.add("card-overlay-after");
  overlaycatalog3.classList.remove("card-overlay-before");
});
overlaycatalog3.addEventListener("mouseleave", function () {
  overlaycatalog3.classList.remove("card-overlay-after");
  overlaycatalog3.classList.add("card-overlay-before");
});
