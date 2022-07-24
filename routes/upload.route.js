import upload from "../controllers/upload.controller.js"

export default function uploadRoute(app){
  app.post("/api/upload", upload);
}