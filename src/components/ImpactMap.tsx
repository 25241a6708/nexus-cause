import { divIcon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Hope Community Center",
    detail: "30 meals still needed",
    type: "Need center",
    position: [17.5169, 78.3844] as [number, number],
    urgent: true,
  },
  {
    name: "FreshBite",
    detail: "60 meals available · 1.4 km",
    type: "Restaurant A",
    position: [17.5253, 78.3918] as [number, number],
  },
  {
    name: "Green Plate",
    detail: "40 meals available · 3.2 km",
    type: "Restaurant B",
    position: [17.5038, 78.3682] as [number, number],
  },
  {
    name: "Local Grocery",
    detail: "30 meals available · 2.1 km",
    type: "Restaurant C",
    position: [17.5122, 78.4058] as [number, number],
  },
];

function makeMarker(urgent = false) {
  return divIcon({
    className: "impact-marker",
    html: `<span class="marker-pin ${urgent ? "bg-urgent" : "bg-map"}"><span class="marker-dot"></span></span>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30],
  });
}

export default function ImpactMap() {
  return (
    <MapContainer
      center={[17.5169, 78.3844]}
      zoom={13}
      scrollWheelZoom
      className="h-full min-h-[430px] w-full"
      aria-label="Map of community needs and available meal partners"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker key={location.name} position={location.position} icon={makeMarker(location.urgent)}>
          <Popup>
            <p className="mb-1 text-[11px] font-bold uppercase text-muted-foreground">
              {location.type}
            </p>
            <h3 className="mb-1 text-sm font-extrabold text-foreground">{location.name}</h3>
            <p className="mb-3 text-xs text-muted-foreground">{location.detail}</p>
            <Button size="sm" variant={location.urgent ? "destructive" : "default"} className="w-full">
              View details <ArrowUpRight />
            </Button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}