// 1. Ambil Nama Tamu dari Parameter URL (?to=Nama%20Tamu)
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || urlParams.get('guest');

  if (guestName) {
    document.getElementById('guest-name').innerText = decodeURIComponent(guestName);
    document.getElementById('rsvp-name').value = decodeURIComponent(guestName);
  } else {
    document.getElementById('guest-name').innerText = "Guest";
  }
});

// 2. Buka Undangan & Putar Musik
function openInvitation() {
  document.getElementById('cover-screen').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('music-btn').classList.remove('hidden');
  
  const music = document.getElementById('bg-music');
  if (music) {
    music.play().catch(function(error) {
      console.log("Autoplay ditahan browser:", error);
    });
  }
}

// 3. Toggle Play/Pause Musik
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

// 4. Salin Nomor Rekening
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Nomor rekening berhasil disalin!");
  });
}

// 5. Submit RSVP ke List & WhatsApp
document.getElementById('rsvp-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('rsvp-name').value;
  const pax = document.getElementById('rsvp-pax').value;
  const status = document.querySelector('input[name="status"]:checked').value;
  const msg = document.getElementById('rsvp-msg').value;

  if (msg) {
    const list = document.getElementById('comments-list');
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerText = `"${msg}" - ${name}`;
    list.prepend(newComment);
  }

  const phoneNumber = "6281234567890"; // Ganti nomor WA kamu
  const textWA = `Halo Denisa & Rafi,%0A%0Aperkenalkan saya *${encodeURIComponent(name)}*:%0A- Status: *${status}*%0A- Jumlah: *${pax}*%0A- Pesan: _"${encodeURIComponent(msg)}"_`;

  window.open(`https://wa.me/${phoneNumber}?text=${textWA}`, '_blank');
});

// 6. Countdown Timer (14 November 2026)
const eventDate = new Date("Nov 14, 2026 05:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days > 0 ? days : 0;
  document.getElementById("hours").innerText = hours > 0 ? hours : 0;
  document.getElementById("minutes").innerText = minutes > 0 ? minutes : 0;
  document.getElementById("seconds").innerText = seconds > 0 ? seconds : 0;
}, 1000);
