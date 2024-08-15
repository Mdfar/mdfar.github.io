function aboutus() {
  let oldBody = document.querySelector("body");
  let newHtml = staticHead("aboutus");
  oldBody.innerHTML = `
  ${newHtml}
  <main />
  <footer />
  `;
}

function services() {
  let oldBody = document.querySelector("body");
  let newHtml = staticHead("services");
  oldBody.innerHTML = `
  ${newHtml}
  <main />
  <footer />
  `;
}

function portfolio() {
  let oldBody = document.querySelector("body");
  let newHtml = staticHead("portfolio");
  oldBody.innerHTML = `
  ${newHtml}
  <main />
  <footer />
  `;
}

function pricing() {
  let oldBody = document.querySelector("body");
  let newHtml = staticHead("pricing");
  oldBody.innerHTML = `
  ${newHtml}
  <main />
  <footer />
  `;
}

function conactus() {
  let oldBody = document.querySelector("body");
  let newHtml = staticHead("conactus");
  oldBody.innerHTML = `
  ${newHtml}
    <main>
      <form action="none" id="usrform"></form>
      <div id="contactForm1">
        <div class="form">
          <h3>Get in touch</h3>
          <div class="inputs">
            <img src="images/person.svg" alt="name" height="15px" />
            <input
              type="text"
              class="inputfield"
              name="enterName"
              id="enterName"
              form="usrform"
              placeholder="Name"
            />
          </div>
          <div class="inputs">
            <img src="images/email.svg" alt="name" height="15px" />
            <input
              type="email"
              class="inputfield"
              name="enterEmail"
              id="enterEmail"
              form="usrform"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <div id="contactForm2">
        <textarea
          class="inputfield"
          name="enterMsg"
          rows="8"
          id="enterMsg"
          form="usrform"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          name="submit"
          id="submit"
          value="Submit"
          form="usrform"
        />
      </div>
    </main>
    <footer></footer>
    `;
}

function staticHead(tabName) {
  let tabs = ["aboutus", "services", "portfolio", "pricing", "conactus"];
  let tabText = ["About Us", "Services", "Portfolio", "Pricing", "Contact Us"];
  let navHtml = "";
  let className;
  for (let i = 0; i < tabs.length; i++) {
    className = tabs.indexOf(tabName) == i ? "navlink1" : "navlink";
    navHtml += `<a class=${className} href="#" onclick="${tabs[i]}()">${tabText[i]}</a>`;
  }

  let newHtml = `<header>
      <img
        id="rafism"
        src="images/rafism.png"
        alt="Rafism Logo"
        height="20px"
      />
      <div id="header-logs">
        <div id="head-search-bar">
          <img
            src="images/search.svg"
            alt="search icon"
            id="search-icon"
          />
          <input
            type="search"
            name="searchbar"
            id="search-bar"
            placeholder="Search"
          />
        </div>
        <nav>
        <a class="navlink" href="index.html">Home</a>
          ${navHtml}
        </nav>
      </div>
    </header>
    `;
  return newHtml;
}

function mainBody() {
  let mainBodyHtml = `<main>
      <form action="none" id="usrform"></form>
      <div id="contactForm1">
        <div class="form">
          <h3>Get in touch</h3>
          <div class="inputs">
            <img src="images/person.svg" alt="name" height="15px" />
            <input
              type="text"
              class="inputfield"
              name="enterName"
              id="enterName"
              form="usrform"
              placeholder="Name"
            />
          </div>
          <div class="inputs">
            <img src="images/email.svg" alt="name" height="15px" />
            <input
              type="email"
              class="inputfield"
              name="enterEmail"
              id="enterEmail"
              form="usrform"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <div id="contactForm2">
        <textarea
          class="inputfield"
          name="enterMsg"
          rows="8"
          id="enterMsg"
          form="usrform"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          name="submit"
          id="submit"
          value="Submit"
          form="usrform"
        />
      </div>
    </main>
    <footer></footer>`;
}
