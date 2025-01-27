// login.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const userType = document.getElementById('userType').value;
  
    if (userType === 'firma') {
      window.location.href = 'firma_sikayet.html';
    } else if (userType === 'musteri') {
      window.location.href = 'musteri_sikayet.html';
    } else {
      alert('Lütfen kullanıcı tipini seçiniz.');
    }
  });
  