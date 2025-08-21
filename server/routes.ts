import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid contact data" 
      });
    }
  });

  // Get contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to get contacts" 
      });
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    // 👇 yahan apni CV ka path daalo
    const cvPath = path.join(process.cwd(), "server", "public", "Muhammad-Talha-CV.pdf");
    if (fs.existsSync(cvPath)) {
      // 👇 yahan apna naam daalo
      res.download(cvPath, "Muhammad-Talha-CV.pdf", (err) => {
        if (err) {
          res.status(500).json({ error: "Failed to download CV" });
        }
      });
    } else {
      res.status(404).json({ error: "CV file not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
