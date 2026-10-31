// "use client";

// import { useEffect, useState } from "react";

// export function useVisitorId() {
//   const [visitorId, setVisitorId] = useState(null);

//   useEffect(() => {
//     let id = localStorage.getItem("visitor_id");

//     if (!id) {
//       id = crypto.randomUUID();
//       localStorage.setItem("visitor_id", id);
//     }

//     setVisitorId(id);
//   }, []);

//   return visitorId;
// }




"use client";

import { useEffect, useState } from "react";

export function useVisitorId() {
  const [visitorId, setVisitorId] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisitorId() {
      try {
        const response = await fetch("/api/visitor", {
          method: "POST",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to retrieve visitor ID");
        }

        const data = await response.json();

        if (isMounted) {
          setVisitorId(data.visitorId);
        }
      } catch (error) {
        console.error("Visitor ID error:", error);
      }
    }

    fetchVisitorId();

    return () => {
      isMounted = false;
    };
  }, []);

  return visitorId;
}
