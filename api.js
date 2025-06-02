export async function sendMessage(text, persona) {
  const res = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text, persona })
  });
  return await res.json();
}
