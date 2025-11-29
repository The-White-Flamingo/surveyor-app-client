"use client";

import { useState } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";

export default function LocationAutocomplete({ value, onChange }) {
  const [autocomplete, setAutocomplete] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const handleLoad = (auto) => {
    setAutocomplete(auto);
  };

  const handlePlaceChanged = () => {
    if (!autocomplete) return;
    const place = autocomplete.getPlace();
    onChange(place.formatted_address || "");
  };

  if (!isLoaded) {
    return (
      <div className="w-1/2 py-2 px-3 border rounded-lg bg-gray-100 animate-pulse">
        Loading location…
      </div>
    );
  }

  return (
    <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter location"
        className="w-1/2 border py-2 px-3 rounded-lg border-gray-300 mt-1"
      />
    </Autocomplete>
  );
}
