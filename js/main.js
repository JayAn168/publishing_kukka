console.clear();

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

$(function () {
  $.scrollify({
    section: ".page",
    scrollbars: false,
    interstitialSection: ".head, footer", // 푸터적용

    before: function (i, pages) {
      let ref = pages[i].attr("data-section-name");
      $(".pagination .active").removeClass("active");
      $(".pagination")
        .find('a[href="#' + ref + '"]')
        .addClass("active");
    },
    afterRender: function () {
      let pagination = '<ul class="pagination">';
      let activeClass = "";
      $(".page").each(function (i) {
        activeClass = "";
        if (i === 0) {
          activeClass = "active";
        }
        pagination +=
          '<li><a class="' +
          activeClass +
          '" href="#' +
          $(this).attr("data-section-name") +
          '"><span class="hover-text">' +
          $(this).attr("data-section-name").charAt(0).toUpperCase() +
          $(this).attr("data-section-name").slice(1) +
          "</span></a></li>";
      });

      pagination += "</ul>";

      $(".page").append(pagination);

      $(".pagination a").on("click", $.scrollify.move);
    },
  });
});
