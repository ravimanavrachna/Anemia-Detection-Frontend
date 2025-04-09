export const showAlert = (message, type = "error") => {
  if (!message) return;

  const prefix = type === "error" ? "❌ Error:" : "✅ Success:";
  alert(`${prefix} ${message}`);
};
