import React from "react";
import InvoiceSent from "../components/transaction/InvoiceSent";
import CardOne from "../components/transaction/CardOne";
import FinancialCards from "../components/cards/FinancialCards";
import LastTransaction from "../components/transaction/LastTransaction";
import DebitCreditOverview from "../components/transaction/DebitCreditOverview";

function Accounts() {
  return (
    <div className="grid">
      <FinancialCards />
      <CardOne />
      <InvoiceSent />

      <LastTransaction />

      <DebitCreditOverview className="sm:col-span-2 h-[285px] md:h-[299px] xl:h-[367px]" />
    </div>
  );
}

export default Accounts;
