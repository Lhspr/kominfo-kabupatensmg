// mengimport library yang dibutuhkan
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null); // Referensi untuk elemen peta

  // useEffect untuk memuat data peta saat komponen pertama kali dirender
  useEffect(() => {
    if (typeof window !== 'undefined') { // Memastikan kode hanya berjalan di browser
      if (mapRef.current === null) { // Memeriksa apakah peta sudah diinisialisasi
        // Inisialisasi peta dengan koordinat dan level zoom
        mapRef.current = L.map('map').setView([-7.104543, 110.411766], 15); // Koordinat Diskominfo

        // Menambahkan layer peta dari OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors', // Attribusi untuk OpenStreetMap
        }).addTo(mapRef.current);

        // Menambahkan marker pada peta
        L.marker([-7.104543, 110.411766])
          .addTo(mapRef.current) // Menambahkan marker ke peta
          .bindPopup('Dinas Komunikasi Dan Informatika Kabupaten Semarang') // Popup untuk marker
          .openPopup(); // Membuka popup secara otomatis
      }
    }
  }, []); // Dependency array kosong, hanya dijalankan sekali saat komponen dirender

  return (
    <div id="map" style={{ height: '300px', width: '100%', zIndex: '0' }}></div> // Elemen div untuk peta
  );
};

export default MapComponent;
