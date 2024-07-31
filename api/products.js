export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json([
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" },
    ]);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
