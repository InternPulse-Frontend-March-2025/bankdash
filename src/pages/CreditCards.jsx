import AddCardForm from "../components/credit/AddCardForm";
import CardSettings from "../components/credit/CardSetting";
import FinalCob from "../components/credit/FinCob/FinCob";
import CreditCardCards from "../components/transaction/CreditCardCards";

const CreditCards = () => {
  return (
    <div>
      <CreditCardCards/>
      <FinalCob />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-slate-50 justify-center">
        <AddCardForm />
        <CardSettings />
      </div>
    </div>
  );
};

export default CreditCards;
