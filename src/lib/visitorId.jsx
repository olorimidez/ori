import { useEffect, useState } from "react";

export function getVisitorId() {
  const [visitorId, setVisitorId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("visitorId");
    setVisitorId(id);
  }, []);

  if (typeof window === "undefined") {
    return null;
  }


  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem("visitor_id", visitorId);
  }

  return visitorId;
}

