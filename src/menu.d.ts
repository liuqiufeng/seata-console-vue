export interface Menu {
  icon: string;
  title: string;
}

export interface MenuItem extends Menu{
  path: string;
}
