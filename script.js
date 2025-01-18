// Kullanıcı bilgilerini saklamak için tarayıcı localStorage kullanıyoruz
const usersKey = "users";

// Kayıt işlemi
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  // Mevcut kullanıcıları getir
  let users = JSON.parse(localStorage.getItem(usersKey)) || [];

  // Aynı kullanıcı adı var mı kontrol et
  if (users.find((user) => user.username === username)) {
    document.getElementById("registerMessage").textContent = "Bu kullanıcı adı zaten alınmış.";
    return;
  }

  // Yeni kullanıcıyı ekle
  users.push({ username, password });
  localStorage.setItem(usersKey, JSON.stringify(users));

  document.getElementById("registerMessage").textContent = "Kayıt başarılı!";
});

// Giriş işlemi
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Mevcut kullanıcıları getir
  let users = JSON.parse(localStorage.getItem(usersKey)) || [];

  // Kullanıcıyı doğrula
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    // Başarılı giriş
    window.location.href = "index.html";
  } else {
    // Hatalı giriş
    document.getElementById("loginMessage").textContent = "Hatalı kullanıcı adı veya şifre.";
  }
});

