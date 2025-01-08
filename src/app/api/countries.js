export default async function handler(req, res) {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error(`Error fetching countries: ${response.statusText}`);
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("API Error:", error.message);
      res.status(500).json({ error: "Failed to fetch countries" });
    }
  }
  