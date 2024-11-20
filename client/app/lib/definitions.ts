export type SliderItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type ImageModalProps = {
  imageUrl: string;
  onClose: () => void;
  currentIndex: number;
  totalImages: number;
  onPrevious: () => void;
  onNext: () => void;
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type Collections = {
  id: string;
  timestamp: string;
  type: string;
  amount: number;
  phone: string;
  fullId: string;
  fullPhone: string;
};

export type Expenses = {
  id: string;
  date: string;
  amount: number;
  description: string;
};
