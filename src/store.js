export const store = {
  nawDrawer: false,

  navItems: [
    { title: 'Start', type: 'tab', icon: 'mdi-phone' },
    {
      title: 'Apps',
      type: 'menu',
      icon: 'mdi-phone',
      menu: [
        { title: 'Popup-Creator', icon: 'mdi-filter-variant-plus' },
        { title: 'Popup-Timer', icon: 'mdi-timer-sync-outline' },
        { title: 'Event-Editor', icon: 'mdi-format-list-group-plus' },
        { title: 'Event-Timer', icon: 'mdi-timer-marker-outline' },
      ],
    },
    {
      title: 'Events',
      type: 'menu',
      icon: 'mdi-phone',
      menu: [{ title: 'Anstehend' }, { title: 'Laufend' }, { title: 'Beendet' }],
    },
    { title: 'Blog', type: 'tab', icon: 'mdi-phone' },
    { title: 'Kontakt', type: 'tab', icon: 'mdi-phone' },
    { title: 'Forum', type: 'tab', icon: 'mdi-phone' },
  ],

  toggleNavDrawer() {
    this.nawDrawer = !this.nawDrawer
  },
}
