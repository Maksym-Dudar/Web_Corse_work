// "use client";

// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";


// export function SimpleMap() {
//     const position: [number, number] = [50.45420, 30.45295];
//     const markerIcon = L.icon({
// 			iconUrl: "/ui/icon/map_marker.svg",
// 			iconSize: [64, 64],
// 		});
// 	return (
// 		<MapContainer
// 			center={position}
// 			zoom={11}
// 			style={{ height: "100%", width: "100%" }}
// 			scrollWheelZoom={false}
// 		>
// 			<TileLayer
// 				attribution='© OpenStreetMap contributors'
// 				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// 			/>
// 			<Marker position={position} icon={markerIcon} />
// 		</MapContainer>
// 	);
// }
