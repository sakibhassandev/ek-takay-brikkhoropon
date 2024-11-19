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
