import React from "react";
import InvoiceSent from "../components/transaction/InvoiceSent";
import CardOne from "../components/transaction/CardOne";
import FinancialCards from "../components/cards/FinancialCards";
import LastTransaction from "../components/transaction/LastTransaction";
import DebitCreditOverview from "../components/transaction/DebitCreditOverview";
import {Grid} from '@mui/material'

function Accounts() {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <FinancialCards/>
      </Grid>
      <Grid size={{xs:12, md:8}}>
        <LastTransaction/>
      </Grid>
      <Grid size={{xs:12,md:4}}>
        <CardOne/>
      </Grid>
      <Grid size={{xs:12,md:8}}>
        <DebitCreditOverview/>
      </Grid>
      <Grid size={{xs:12,md:4}}>
        <InvoiceSent/>
      </Grid>
    </Grid>

  );
}

export default Accounts;
