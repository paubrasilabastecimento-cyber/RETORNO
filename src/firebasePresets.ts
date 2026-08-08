export interface FirebasePreset {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  description: string;
  config: {
    projectId: string;
    appId: string;
    apiKey: string;
    authDomain: string;
    firestoreDatabaseId: string;
    storageBucket: string;
    messagingSenderId: string;
    measurementId?: string;
    oAuthClientId?: string;
  };
}

export const FIREBASE_PRESETS: FirebasePreset[] = [
  {
    id: "banco-01",
    name: "Banco 01 (Turno Diurno 05h-17h)",
    badge: "Diurno (05:00)",
    badgeColor: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    description: "banco-01-teste (Banco Principal / Turno Diurno 05:00 às 17:00)",
    config: {
      projectId: "banco-01-teste",
      appId: "1:1044611051424:web:cafc4107c23490b2503ec5",
      apiKey: "AIzaSyBZRnmzwOasWM84NMX5Wqyr_E8DuxF0z1c",
      authDomain: "banco-01-teste.firebaseapp.com",
      firestoreDatabaseId: "(default)",
      storageBucket: "banco-01-teste.firebasestorage.app",
      messagingSenderId: "1044611051424",
      measurementId: "",
      oAuthClientId: ""
    }
  },
  {
    id: "banco-02",
    name: "Banco 02 (Turno Vespertino 17h-20h)",
    badge: "Vespertino (17:00)",
    badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    description: "banco-02-teste (Banco Segundo / Turno Vespertino 17:00 às 20:00)",
    config: {
      projectId: "banco-02-teste",
      appId: "1:762560959615:web:9be08a9684773ea6a09b4a",
      apiKey: "AIzaSyAXGg-5tNajMUr_M7JDUv2KA2H-VqSU-NA",
      authDomain: "banco-02-teste.firebaseapp.com",
      firestoreDatabaseId: "(default)",
      storageBucket: "banco-02-teste.firebasestorage.app",
      messagingSenderId: "762560959615",
      measurementId: "",
      oAuthClientId: ""
    }
  },
  {
    id: "banco-03",
    name: "Banco 03 (Turno Noturno 20h-05h)",
    badge: "Noturno (20:00)",
    badgeColor: "bg-indigo-500/15 text-indigo-600 border-indigo-500/30",
    description: "banco-03-teste (Banco Terceiro / Turno Noturno 20:00 às 05:00)",
    config: {
      projectId: "banco-03-teste",
      appId: "1:960111862390:web:14e480b12d53eb9fb0b557",
      apiKey: "AIzaSyCRqq7FK0L9m_aEqte7BXCu5q0C68JbJ64",
      authDomain: "banco-03-teste.firebaseapp.com",
      firestoreDatabaseId: "(default)",
      storageBucket: "banco-03-teste.firebasestorage.app",
      messagingSenderId: "960111862390",
      measurementId: "",
      oAuthClientId: ""
    }
  }
];

export function getActivePresetId(projectId?: string): string {
  if (!projectId) return "custom";
  const matched = FIREBASE_PRESETS.find(p => p.config.projectId === projectId || p.id === projectId);
  return matched ? matched.id : "custom";
}
