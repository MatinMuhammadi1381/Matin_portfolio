import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export const PWAInstallButton = ({ label }) => {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleInstallAvailable = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    const handleInstalled = () => setInstallPrompt(null);

    window.addEventListener("beforeinstallprompt", handleInstallAvailable);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleInstallAvailable
      );
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  if (!installPrompt) return null;

  return (
    <button
      className="pwa-install"
      type="button"
      onClick={handleInstall}
      aria-label={label}
      title={label}
    >
      <Download size={16} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
};
