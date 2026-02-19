export type DownloadEntry = {
  os: "Windows" | "macOS" | "Linux";
  format: string;
  available: boolean;
  url?: string;        // direct link to your hosted binary/installer
  version?: string;    // e.g. v0.9.3
  sha256?: string;     // optional
  notes?: string;      // short one-liner
};

export const downloads: DownloadEntry[] = [
  {
    os: "Windows",
    format: ".exe installer (or portable .zip)",
    available: false,
    // url: "https://your-hosting.example/ReleaseRadarSetup.exe",
    // version: "v0.0.0",
    // sha256: "…",
    notes: "Recommended for most people.",
  },
  {
    os: "macOS",
    format: ".dmg (Apple Silicon / Intel as needed)",
    available: false,
    // url: "https://your-hosting.example/ReleaseRadar.dmg",
    notes: "Gatekeeper may prompt the first run.",
  },
  {
    os: "Linux",
    format: ".AppImage (recommended) + optional .deb",
    available: false,
    // url: "https://your-hosting.example/ReleaseRadar.AppImage",
    notes: "AppImage is the easiest path.",
  },
];
