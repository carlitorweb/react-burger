export interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  modalClosed: () => void;
}
