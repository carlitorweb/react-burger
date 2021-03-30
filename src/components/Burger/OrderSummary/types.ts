type OrderSummaryProps = {
  ingredients: { [k in string]: number };
  cancel: () => void;
  confirm: () => void;
  totalCost: number;
};

export default OrderSummaryProps;
