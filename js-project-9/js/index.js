let products = JSON.parse(localStorage.getItem("ravi_products")) || [
  { id: "fruits-1", name: "Apple", price: 100, section: "fruits", img: "https://images.pexels.com/photos/347926/pexels-photo-347926.jpeg" },
  { id: "fruits-2", name: "Orange", price: 120, section: "fruits", img: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg" },
  { id: "fruits-3", name: "Pineapple", price: 90, section: "fruits", img: "https://images.pexels.com/photos/29555/pexels-photo-29555.jpg" },
  { id: "fruits-4", name: "Kiwi", price: 130, section: "fruits", img: "https://images.pexels.com/photos/54370/pexels-photo-54370.jpeg" },
  { id: "fruits-5", name: "Strawberry", price: 200, section: "fruits", img: "https://images.pexels.com/photos/1258264/pexels-photo-1258264.jpeg" },
  { id: "fruits-6", name: "Banana", price: 60, section: "fruits", img: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg" },

  { id: "vegetables-1", name: "Cabbage (Patta Gobhi)", price: 26, section: "vegetables", img: "https://media.istockphoto.com/id/183893293/photo/cabbage.jpg?s=1024x1024&w=is&k=20&c=xAFiZDOw2E9XgKiGiCfGXUZ1LEGeQCGazf6Y8Pmkfv8=" },
  { id: "vegetables-2", name: "Green Capsicum (Shimla Mirch)", price: 39, section: "vegetables", img: "https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg" },
  { id: "vegetables-3", name: "Carrot (Gajar)", price: 21, section: "vegetables", img: "https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg" },
  { id: "vegetables-4", name: "Cauliflower (Phool Gobhi)", price: 62, section: "vegetables", img: "https://images.pexels.com/photos/4963827/pexels-photo-4963827.jpeg" },
  { id: "vegetables-5", name: "Green Chilli 100 g (Hari Mirch)", price: 12, section: "vegetables", img: "https://images.pexels.com/photos/5956200/pexels-photo-5956200.jpeg" },
  { id: "vegetables-6", name: "Potato", price: 40, section: "vegetables", img: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg" },

  { id: "masala-1", name: "Turmeric Powder/Haldi", price: 41, section: "masala", img: "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg" },
  { id: "masala-2", name: "Cumin", price: 40, section: "masala", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32w-RL42wAT7jHcP7tIfNyMB6OQ3yeRfJ0YAiC416_vocIBUc4cbGPaEBdGWCRFHcC5I1ANdLQ9CuN78YLub-mg" },
  { id: "masala-3", name: "cardamom", price: 66, section: "masala", img: "https://www.onegreenplanet.org/wp-content/uploads/2022/04/shutterstock_1939065904-scaled-e1650702102398.jpg" },
  { id: "masala-4", name: "Cinnamon", price: 45, section: "masala", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Cinnamomum_verum_spices.jpg/1920px-Cinnamomum_verum_spices.jpg" },
  { id: "masala-5", name: "mustard seeds", price: 70, section: "masala", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwi52rqhd-af_hFpPy6MTln7fkBxebPd6qAOWf1GHSV3YwboGD2dHjMXBYhjNdi4I77zRZGiIuBuHZj-Nho-nd2C0ZJ3f7D4-eZMpPj4" },
  { id: "masala-6", name: "cloves", price: 25, section: "masala", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTL7TClvRMOxuNEEpiWSXdHoBWrxSfooRpkdImIbbGV0BUh0F1ggUskr3PzNXCm-jlC12IqerrbKsD9LecK_1BXpQ" },
];

const cart = JSON.parse(localStorage.getItem("ravi_cart")) || [];

const sections = ['fruits', 'vegetables', 'masala'];

function loadProducts() {
  sections.forEach(section => {
    const container = document.getElementById(section + 'Section');
    container.innerHTML = '';
    const filtered = products.filter(p => p.section === section);
    filtered.forEach(p => {
      container.innerHTML += `
            <div class="col-md-4 mb-4">
              <div class="card product-card">
                <img src="${p.img}" class="card-img-top product-image" alt="${p.name}">
                <div class="card-body">
                  <h5>${p.name}</h5>
                  <p>₹${p.price}</p>
                  <button class="btn btn-sm btn-outline-success" onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
                  <button class="btn btn-sm btn-outline-danger ms-2" onclick='removeProduct("${p.id}")'>Remove Product</button>
                </div>
              </div>
            </div>`;
    });
  });
}

function addNewProduct() {
  const section = document.getElementById("newSection").value;
  const name = document.getElementById("newName").value;
  const price = parseInt(document.getElementById("newPrice").value);
  const img = document.getElementById("newImg").value;

  const id = `${section}-${Date.now()}`;
  products.push({ id, name, price, section, img });
  localStorage.setItem("ravi_products", JSON.stringify(products));
  document.getElementById("newSection").value = "fruits";
  document.getElementById("newName").value = "";
  document.getElementById("newPrice").value = "";
  document.getElementById("newImg").value = "";
  toggleAddProductForm();
  loadProducts();
}

function removeProduct(id) {
  products = products.filter(p => p.id !== id);
  localStorage.setItem("ravi_products", JSON.stringify(products));
  loadProducts();
}

function toggleAddProductForm() {
  const form = document.getElementById("addProductForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function showSection(id) {
  document.querySelectorAll('.product-section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("open");
  updateCart();
}

function addToCart(product) {
  const exist = cart.find(p => p.id === product.id);
  if (exist) {
    exist.qty += 1;
  } else {
    product.qty = 1;
    cart.push(product);
  }
  localStorage.setItem("ravi_cart", JSON.stringify(cart));
  showToast("Product added to cart!");
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = '';
  let subtotal = 0;
  cart.forEach((item, index) => {
    subtotal += item.price * item.qty;
    cartItems.innerHTML += `
          <div class="d-flex align-items-center justify-content-between mb-1">
            <img src="${item.img}" class="cart-img me-2">
            <div class="flex-grow-1 ms-2">
              ${item.name} × ${item.qty} - ₹${item.price * item.qty}
            </div>
            <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">X</button>
          </div>`;
  });
  const gst = (subtotal * 0.18).toFixed(2);
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("gst").innerText = gst;
  document.getElementById("total").innerText = (subtotal + parseFloat(gst)).toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("ravi_cart", JSON.stringify(cart));
  updateCart();
}

function showToast(msg) {
  const toast = document.getElementById("toastMsg");
  toast.innerText = msg;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 2000);
}

loadProducts();