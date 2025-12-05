export interface MenuItem {
  name: string;
  href: string;
  active?: boolean;
  submenu?: { name: string; href: string }[];
}

export const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { 
    name: "Il Vallauri", 
    href: "#vallauri",
    submenu: [
      { name: "Chi siamo", href: "/chi-siamo" },
      { name: "La nostra storia", href: "#storia" },
      { name: "Dove siamo", href: "#dove-siamo" },
    ]
  },
  { 
    name: "Settori di studio", 
    href: "#settori",
    submenu: [
      { name: "Liceo Scienze Applicate", href: "#liceo" },
      { name: "Settore Tecnologico", href: "#tecnologico" },
      { name: "Settore Economico", href: "#economico" },
      { name: "Corso Serale", href: "#serale" },
    ]
  },
  { 
    name: "Certificazioni", 
    href: "#certificazioni",
    submenu: [
      { name: "ICDL", href: "#icdl" },
      { name: "Certificazioni Linguistiche", href: "#linguistiche" },
      { name: "Certificazioni Tecniche", href: "#tecniche" },
    ]
  },
  { 
    name: "Offerta Formativa", 
    href: "#offerta",
    submenu: [
      { name: "PTOF", href: "#ptof" },
      { name: "PCTO", href: "#pcto" },
      { name: "Erasmus Plus", href: "#erasmus" },
      { name: "PON", href: "#pon" },
    ]
  },
  { 
    name: "Organizzazione", 
    href: "#organizzazione",
    submenu: [
      { name: "Dirigenza", href: "#dirigenza" },
      { name: "Segreteria", href: "#segreteria" },
      { name: "Organi Collegiali", href: "#organi" },
    ]
  },
  { 
    name: "Documenti", 
    href: "#documenti",
    submenu: [
      { name: "Regolamenti", href: "#regolamenti" },
      { name: "Modulistica", href: "#modulistica" },
      { name: "Albo Pretorio", href: "#albo" },
      { name: "Amministrazione Trasparente", href: "#trasparente" },
    ]
  },
  { 
    name: "Comunicazioni", 
    href: "#comunicazioni",
    submenu: [
      { name: "Circolari", href: "#circolari" },
      { name: "News", href: "#news" },
      { name: "Calendario", href: "#calendario" },
    ]
  },
  { name: "Contatti", href: "#contatti" },
];

