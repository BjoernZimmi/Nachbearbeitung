type Fruit = 'Apple' | 'Banana' | 'Cherry' | 'Dragonfruit'

export const fruitScientificNames: Record<Fruit, string | boolean> = {
  Apple: 'Malus',
  Banana: 'Musa',
  Cherry: true,
  Dragonfruit: 'irgendwas'
}


export interface testInt {
  name: string;
  id: number;
  mail?: string;
}