export default interface BuildControlProps {
  label: string;
  added: () => void;
  removed: () => void;
  disabled: any;
}
