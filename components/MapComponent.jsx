import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (mapRef.current === null) {
                mapRef.current = L.map('map').setView([-7.104543, 110.411766], 15); // Koordinat Diskominfo

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(mapRef.current);

                L.marker([-7.104543, 110.411766]).addTo(mapRef.current)
                    .bindPopup('Dinas Komunikasi Dan Informatika Kabupaten Semarang')
                    .openPopup();
            }
        }
    }, []);

    return <div id="map" style={{ height: '300px', width: '100%' }}></div>;
};

export default MapComponent;
