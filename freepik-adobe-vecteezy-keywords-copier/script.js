// freepik
const freepikWrapper =
  document.querySelector('[style="grid-area:keywords"]') ||
  document.querySelector('[style="grid-area: keywords;"]') ||
  document.querySelector('[style="grid-area:keywords;margin-bottom:10px"]');
// ul > li > a

// adobestock
const adobeWrapper = document.querySelector('[data-t="keywords-section"]');
// .details-keywords-list-original > span > a

// vecteezy
const vecteezyWrapper = document.querySelector(
  ".ez-resource-related__keywords"
);
// .splide__list > li > a

const pikbestWrapper = document.querySelector(".about");
// .tag-list > a

const copyKeywords = async () => {
  try {
    let items;

    // Check if the site is Freepik
    if (freepikWrapper) {
      items = freepikWrapper.querySelectorAll("ul > li > a");
    }

    // Check if the site is Adobe Stock
    if (adobeWrapper) {
      items = adobeWrapper.querySelectorAll(
        '[aria-labelledby="similar-keywords"] div > span'
      );
    }

    // Check if the site is Vecteezy
    if (vecteezyWrapper) {
      items = vecteezyWrapper.querySelectorAll(".splide__list > li > a");
    }

    // Check if the site is pikbest
    if (pikbestWrapper) {
      items = pikbestWrapper.querySelectorAll(".tag-list > a");
    }

    // If keywords were found, process them
    if (items && items.length > 0) {
      let keywords = [];
      items.forEach((item) => {
        keywords.push(item.innerText.trim());
      });

      // Write the keywords to the clipboard, joined by commas
      await navigator.clipboard.writeText(keywords.join(", "));

      // Notify that the copy action was successful
      alert("Keywords copied to clipboard!");
      console.log("Keywords copied successfully:", keywords.join(", "));
    } else {
      // Handle the case where no keywords were found
      console.warn("No keywords found on this page.");
      alert("No keywords found.");
    }
  } catch (err) {
    // Handle any errors that occur during the copy process
    console.error("Failed to copy keywords:", err);
    alert("Something went wrong. Unable to copy keywords.");
  }
};

const copyBtn = `<button id="copyKeywordsBtn" style="background: #F4980A;color:#ffffff;font-size: 14px;padding: 6px 15px;border-radius: 4px;">Copy</button>`;

if (freepikWrapper) {
  freepikWrapper.insertAdjacentHTML("afterbegin", copyBtn);
}
if (adobeWrapper) {
  adobeWrapper.insertAdjacentHTML("afterbegin", copyBtn);
}
if (vecteezyWrapper) {
  vecteezyWrapper.insertAdjacentHTML("afterbegin", copyBtn);
}
if (pikbestWrapper) {
  pikbestWrapper.insertAdjacentHTML("afterbegin", copyBtn);
}

document
  .getElementById("copyKeywordsBtn")
  .addEventListener("click", copyKeywords);
