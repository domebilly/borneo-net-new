import React, { useState } from "react";
import logo from "./barf-logo.png"; // letak logo di src/barf-logo.png
import "./App.css";

function App() {
  // Jadual NCS versi baharu
  const [schedule] = useState([
    { date: "ISNIN", ncs: "BDARA Brunei (V84CBD)" },
    { date: "SELASA", ncs: "BARC Sabah (9M6SDX)" },
    { date: "RABU", ncs: "YH7BAR Kalbar" },
    { date: "KHAMIS", ncs: "YH7BAR Kaltim" },
    { date: "JUMAAT", ncs: "ARCS (9M8BAR)" },
    { date: "SABTU", ncs: "YH7BAR Kalsel" },
    { date: "AHAD", ncs: "Cuti / Tiada Net" },
  ]);


  // Google Form URL
  const googleFormURL = "https://forms.gle/AwLXunQttC2CrEbJ7";
  const openForm = () => window.open(googleFormURL, "_blank");

  return (
    <div className="app-root">
      {/* Header */}
      <header className="hero">
        <div className="hero-content">
          <img src={logo} alt="Logo" className="logo" />
          <div className="hero-text">
            <h1>BORNEO NET PORTAL</h1>
            <p>Selamat datang ke laman rasmi NCS Borneo Net!</p>
          </div>
        </div>
      </header>

      <main className="container">
        {/* Jadual NCS */}
        <section className="card">
          <h2>📅 Jadual NCS Mingguan</h2>
          <ul className="schedule">
            {schedule.map((s, i) => (
              <li key={i}>
                <strong>{s.date}</strong> — {s.ncs}
              </li>
            ))}
          </ul>
          <div className="reminder">
            <p>
              📌 Jika berlaku cuaca yang tidak mengizinkan sila maklum di dalam
              group WhatsApp.
            </p>
            <p>
              📌 Jika tidak dapat menjalankan, mohon cari station pengganti.
            </p>
            <p>
              📌 Jika berhalangan yang tidak dapat dielakkan, mohon maklum dalam
              group WhatsApp supaya station monitoring maklum.
            </p>
          </div>
        </section>

        {/* Upload ADI → Google Form */}
        <section className="card">
          <h2>📂 Upload Log ADI</h2>
          <button className="btn" onClick={openForm}>
            Choose File / Upload di Google Form
          </button>
          <p>
            Fail yang diupload akan terus disimpan ke Google Drive melalui
            Google Form.
          </p>
        </section>

        {/* Manual Section → Nama Pemenang */}
        <section className="card">
          <h2>🏆 Nama Pemenang</h2>
          <div className="manual-boxes">
            {/* Station Check-in Terbanyak */}
            <div className="manual-box">
              <h3>1️⃣ Station Check-in Terbanyak</h3>
              <table className="manual-leaderboard">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>CS</th>
                    <th>NAMA</th>
                    <th>PROVINSI</th>
                    <th>NEGARA</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* NCS Terbanyak */}
            <div className="manual-box">
              <h3>2️⃣ NCS Terbanyak</h3>
              <table className="manual-leaderboard">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>CS</th>
                    <th>NAMA</th>
                    <th>PROVINSI</th>
                    <th>NEGARA</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="reminder">
            <p>
              📌 Keputusan juri adalah <strong>muktamat</strong> dan{" "}
              <strong>tidak boleh dibantah</strong>.
            </p>
            <p>
              🏅 Pemenang akan diberi <strong>plaque</strong> dan{" "}
              <strong>e-certificate penghargaan</strong>.
            </p>
          </div>
        </section>

        {/* Gallery BARF */}
        <section className="card">
          <h2>📸 Akses Gambar BARF ke-12</h2>
          <p>
            Sesiapa yang ingin melihat gambar semasa BARF ke-12, sila klik link
            berikut:
          </p>
          <a
            href="https://kv50s.synology.me:61587/mo/sharing/Z7jbOjHwB#/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Lihat Gallery
          </a>
        </section>

        {/* Visitor Counter */}
        <section className="card">
          <h2>🌍 Statistik Lawatan Laman Web</h2>
          <p>Berapa kali laman web ini dilawati dan dari negara mana:</p>
          <div id="histats_counter" className="visitor-counter"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
