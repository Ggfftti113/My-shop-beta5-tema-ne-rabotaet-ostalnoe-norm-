class Header {
  render(){
    const count = localStorageUtil.getProducts().length;
    const html = `
      <div class="header">
        <div class="header-left">
          <div class="header-logo" onclick="renderPage('home')">SHOP</div>
        </div>
        <div class="header-right">
          <div class="nav-link" onclick="renderPage('home')">Главная</div>
          <div class="nav-link" onclick="renderPage('catalog')">Каталог</div>
          <div class="nav-link" onclick="renderPage('favorites')">Желания</div>
          <div class="nav-link" onclick="renderPage('profile')">Профиль</div>
          <div class="nav-link cart-btn" onclick="renderPage('cart')">🛒 <span id="cart-count">${count}</span></div>
          <div class="nav-link" onclick="toggleTheme()">🌓</div>
        </div>
      </div>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();
headerPage.render();
