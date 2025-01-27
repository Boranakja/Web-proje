// Örnek şikayet verileri
const complaints = [
    { date: '2025-01-01', owner: 'Ahmet Y.', description: 'Kargo teslim edilmedi.', status: 'Açık' },
    { date: '2025-01-15', owner: 'Fatma T.', description: 'Ürün yanlış geldi.', status: 'Açık' },
  ];
  
  // Firma şikayetlerini listeleme
  function loadComplaints() {
    const tableBody = $('#complaintList');
    tableBody.empty();
    complaints.forEach((c, index) => {
      tableBody.append(`
        <tr>
          <td>${c.date}</td>
          <td>${c.owner}</td>
          <td>${c.description}</td>
          <td>${c.status}</td>
          <td>
            <button class="btn btn-success btn-sm" onclick="replyComplaint(${index})">Cevap Ver</button>
            <button class="btn btn-danger btn-sm" onclick="closeComplaint(${index})">Kapat</button>
          </td>
        </tr>
      `);
    });
  }
  
  // Şikayete cevap verme
  function replyComplaint(index) {
    const reply = prompt('Şikayete cevabınızı girin:');
    if (reply) {
      alert(`Cevabınız kaydedildi: ${reply}`);
    }
  }
  
  // Şikayeti kapatma
  function closeComplaint(index) {
    complaints[index].status = 'Kapalı';
    loadComplaints();
  }
  
  // Müşteri yeni şikayet ekleme
  $('#complaintForm').on('submit', function (e) {
    e.preventDefault();
    const firm = $('#firmSelect').val();
    const text = $('#complaintText').val();
    complaints.push({ date: new Date().toISOString().split('T')[0], owner: 'Me', description: text, status: 'Açık' });
    alert('Şikayet eklendi.');
    $(this).trigger('reset');
  });
  
  // Arama özelliği
  $('#searchInput').on('keyup', function () {
    const value = $(this).val().toLowerCase();
    $('#complaintList tr').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  
  // Şikayetleri yükle
  $(document).ready(function () {
    loadComplaints();
  });
  