export interface IPlant {
  id: number;
  name: string;
  imageUrl?: string;
  waterInterval: number;
  lastWatered: Date;
  wateredBy?: number;
  habitatId: number;
}
