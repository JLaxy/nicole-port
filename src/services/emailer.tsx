import { Email } from "@/types/email";

export const emailerService = {
  sendEmail: async (email: Email) => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    });

    // Prevent crash if no JSON body
    let data = null;
    try {
      data = await res.json();
    } catch {
      /* ignore */
    }

    return { status: res.status, data };
  },
};
