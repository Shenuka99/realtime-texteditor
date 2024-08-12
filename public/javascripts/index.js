function adjustDynamicHeight() {
  const header = document.querySelector(".header");
  const toolbar = document.querySelector(".toolbar");
  const editArea = document.getElementsByTagName("main")[0];

  const headerHeight = header.offsetHeight;
  const toolbarHeight = toolbar.offsetHeight;
  const topPadding = 8;
  const marginBlock = 48;
  const paddingBlock = 15;

  const editAreaHeight =
    window.innerHeight -
    (headerHeight + toolbarHeight + topPadding + marginBlock + paddingBlock);

  editArea.style.height = `${editAreaHeight}px`;

  const hiddenToolbar = document.querySelector(".hidden-options-list");
  hiddenToolbar.style.top = `${
    headerHeight + toolbarHeight + topPadding + 8
  }px`;
}

window.addEventListener("load", adjustDynamicHeight);
window.addEventListener("resize", adjustDynamicHeight);

document.querySelector("#ellipsis-btn").addEventListener("click", function () {
  const hiddenSectionsContainer = document.querySelector(
    ".hidden-options-list"
  );
  const ellipsisBtn = document.querySelector("#ellipsis-btn");
  const ellipsisBtnRect = ellipsisBtn.getBoundingClientRect();

  console.log(ellipsisBtnRect)

  if (
    hiddenSectionsContainer.style.display === "none" ||
    hiddenSectionsContainer.style.display === ""
  ) {

    hiddenSectionsContainer.style.display = "flex";
  


    const hiddenSectionIds = detectHiddenSections();
    console.log("Hidden Section IDs:", hiddenSectionIds);

    hiddenSectionsContainer
      .querySelectorAll(".options-section")
      .forEach((section) => {
        section.style.display = "none"; // Hide all sections initially
      });

    hiddenSectionIds.forEach((sectionId) => {
      const hiddenSection = hiddenSectionsContainer.querySelector(
        `#${sectionId}`
      );
      console.log("Trying to show section with ID:", sectionId, hiddenSection);

      if (hiddenSection) {
        hiddenSection.style.display = "flex"; // or 'block', depending on your layout
      }
    });

    hiddenSectionsContainer.style.top = `${ellipsisBtnRect.bottom + 10}px`;
    hiddenSectionsContainer.style.left = `${ellipsisBtnRect.right - hiddenSectionsContainer.offsetWidth}px`;


  } else {


    hiddenSectionsContainer.style.display = "none";
    hiddenSectionsContainer
      .querySelectorAll(".options-section")
      .forEach((section) => {
        section.style.display = "none"; // Hide all sections initially
      });
  }
});

function detectHiddenSections() {
  const hiddenSections = [];

  document.querySelectorAll(".toolbar .options-section").forEach((section) => {
    if (getComputedStyle(section).display === "none") {
      hiddenSections.push(section.id);
    }
  });

  return hiddenSections;
}
