import { ReactNode } from 'react';

export interface FoodData {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
};