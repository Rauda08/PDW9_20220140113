document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil nilai-nilai formulir
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var departure = document.getElementById("departure").value;
    var destination = document.getElementById("destination").value;
    var ticketType = document.getElementById("ticketType").value;
    var date = document.getElementById("date").value;

    // Membuat template HTML custom untuk alert
    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" value="${firstName}" readonly />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" value="${lastName}" readonly />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" value="${email}" readonly />
            </div>
            <div class="form-group">
                <label for="departure">Departure:</label>
                <input type="text" value="${departure}" readonly />
            </div>
            <div class="form-group">
                <label for="destination">Destination:</label>
                <input type="text" value="${destination}" readonly />
            </div>
            <div class="form-group">
                <label for="ticketType">Ticket Class:</label>
                <input type="text" value="${ticketType}" readonly />
            </div>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="text" value="${date}" readonly />
            </div>
        </div>
    `;

    // Menampilkan data dalam alert
    showCustomAlert(alertHTML, document.getElementById("ticketForm"));
});

function showCustomAlert(htmlContent, formElement) {
    var alertBox = document.createElement("div");
    alertBox.innerHTML = htmlContent;
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.backgroundColor = "white";
    alertBox.style.padding = "180px"; // Mengubah padding agar lebih kecil
    alertBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    alertBox.style.zIndex = "1000";
    alertBox.style.maxWidth = "100%"; // Mengurangi lebar agar muat dalam satu layar

    // Menambahkan teks "Pembelian berhasil dilakukan"
    var successText = document.createElement("p");
    successText.textContent = "Pembelian berhasil dilakukan";
    successText.style.fontWeight = "bold";
    alertBox.appendChild(successText);

    var closeButton = document.createElement("button");
    closeButton.textContent = "selesai";
    closeButton.style.marginTop = "10px";
    closeButton.style.backgroundColor = "#ff5076"; // Warna tombol
    closeButton.style.color = "white"; // Warna teks tombol
    closeButton.style.border = "none"; // Tanpa border
    closeButton.style.borderRadius = "5px"; // Sudut membulat
    closeButton.style.padding = "8px 16px"; // Padding tombol lebih kecil
    closeButton.style.cursor = "pointer"; // Kursor tangan saat hover
    closeButton.addEventListener("click", function() {
        document.body.removeChild(alertBox);
        formElement.style.display = "none"; // Menyembunyikan elemen formulir
    });

    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);
}
