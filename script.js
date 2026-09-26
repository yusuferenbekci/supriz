const hayirButonu = document.getElementById("kacan-buton");
        const soruEkrani = document.getElementById("soru-ekrani");
        const sonucEkrani = document.getElementById("sonuc-ekrani");

        // Farenin butonun üzerine gelmesini dinliyoruz
        hayirButonu.addEventListener("mouseover", function() {
            // Butonu bulunduğu kutunun içinden çıkarıp tüm ekranda özgür bırakıyoruz
            hayirButonu.style.position = "fixed";
            
            // Ekranın genişliği ve yüksekliği içinde rastgele yeni koordinatlar hesaplıyoruz
            const rastgeleX = Math.random() * (window.innerWidth - 100);
            const rastgeleY = Math.random() * (window.innerHeight - 50);
            
            // Butonu yeni yerine ışınlıyoruz
            hayirButonu.style.left = rastgeleX + "px";
            hayirButonu.style.top = rastgeleY + "px";
        });

        // Evet butonuna tıklandığında çalışacak fonksiyon
        function evetTiklandi() {
            soruEkrani.style.display = "none"; // Soruyu gizle
            hayirButonu.style.display = "none"; // Kaçan butonu tamamen yok et
            sonucEkrani.style.display = "block"; // Çiçeği göster
        }