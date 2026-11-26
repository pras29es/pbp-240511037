const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
// Data in-memory
let items = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "Mouse", harga: 150000 }
];
let nextId = 3;
// GET semua
app.get("/api/items", (req, res) => {
    res.json({ sukses: true, data: items });
});
// GET by id
app.get("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
 }
 res.json({ sukses: true, data: item });
    });
// POST
app.post("/api/items", (req, res) => {
    const { nama, harga } = req.body;
    if (!nama || harga === undefined) {
        return res.status(400).json({ sukses: false, pesan: "nama dan harga wajib diisi" });
 }
 const baru = { id: nextId++, nama, harga: Number(harga) };
        items.push(baru);
        res.status(201).json({ sukses: true, data: baru });
    });
// PUT
app.put("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
 }
 const { nama, harga } = req.body;
        if (nama !== undefined) item.nama = nama;
        if (harga !== undefined) item.harga = Number(harga);
        res.json({ sukses: true, data: item });
    });
// DELETE
app.delete("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const exists = items.some(i => i.id === id);
    if (!exists) {
        return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
 }
 items = items.filter(i => i.id !== id);
        res.json({ sukses: true, pesan: "Item berhasil dihapus" });
    });
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});