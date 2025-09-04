import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
    label: string;
    amount: number;
}


export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-white text-lg font-semibold ">
      {label}: <span className="text-amber-400 font-black">{formatCurrency(amount)}</span>
    </p>
  );
}
