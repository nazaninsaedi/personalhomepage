/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
}); var dice, rolls, item, total;

// Describe this function...
function showtotal() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a, b) => a + b, 0);
}

// Describe this function...
function showinfo() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  showRolls();
  showtotal();
  showResult();
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random() * n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function showResult() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  if (rolls.reduce((a, b) => a + b, 0) == total) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'you win';
  } else if (rolls.reduce((a, b) => a + b, 0) < total) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'keep going';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'you lost';
  }
}

// Describe this function...
function showRolls() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();
  rolls.forEach((item) => {
    let element_list3 = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list3.appendChild(new_li);
  });
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];
total = 11;
showinfo();


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  showinfo();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  showinfo();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = '0';
  let element_total3 = document.getElementById('total');
  element_total3.innerText = 'keep going!';

});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);