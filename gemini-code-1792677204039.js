// 1. Ambil Nama Tamu dari Parameter URL (?to=Nama%20Tamu atau ?guest=Nama%20Tamu)
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || urlParams.get('guest');

  if (guestName) {
    document.getElementById('guest-name').innerText = decodeURIComponent(guestName);
    document.getElementById('rsvp-name').value = decodeURIComponent(guestName);
  } else {
    document.getElementById('guest-name').innerText = "Tamu Undangan";
  }
});

// 2. Fungsi Buka Undangan & Putar Musik
function openInvitation() {
  document.getElementById('cover-screen').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('music-btn').classList.remove('hidden');
  
  const music = document.getElementById('bg-music');
  if (music) {
    music.play().catch(function(error) {
      console.log("Autoplay ditahan peramban:", error);
    });
  }
}

// 3. Control Musik Background (Play/Pause)
let isPlaying = true;
function toggleMusic() {
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  
  if (isPlaying) {
    music.pause();
    btn.innerHTML = '<i class="fa-solid fa-compact-disc"></i>';
  } else {
    music.play();
    btn.innerHTML = '<i class="fa-solid fa-compact-disc fa-spin"></i>';
  }
  isPlaying = !isPlaying;
}

// 4. Countdown Timer Acara Pernikahan (14 November 2026)
const eventDate = new Date("Nov 14, 2026 08:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days > 0 ? days : 0;
  document.getElementById("hours").innerText = hours > 0 ? hours : 0;
  document.getElementById("minutes").innerText = minutes > 0 ? minutes : 0;
  document.getElementById("seconds").innerText = seconds > 0 ? seconds : 0;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "<p>Acara Telah Berlangsung</p>";
  }
}, 1000);

// 5. Kirim RSVP via WhatsApp
document.getElementById('rsvp-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('rsvp-name').value;
  const status = document.getElementById('rsvp-status').value;
  const count = document.getElementById('rsvp-count').value;

  // Ganti dengan nomor WhatsApp penerima (format 62...)
  const phoneNumber = "6281234567890"; 

  const text = `Halo Rafi & Denisa,%0A%0Aperkenalkan saya *${encodeURIComponent(name)}* ingin mengonfirmasi kehadiran untuk pernikahan kalian:%0A%0A- Status: *${status}*%0A- Jumlah Tamu: *${count} orang*%0A%0ATerima kasih!`;

  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
});