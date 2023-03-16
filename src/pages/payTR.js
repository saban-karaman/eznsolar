import { useEffect, useState } from "react";
import PayTR from "paytr";

const PayTRPayment = () => {
  const [paymentForm, setPaymentForm] = useState("");

  useEffect(() => {
    const paytr = new PayTR({
      merchantId: "your_merchant_id",
      merchantKey: "your_merchant_key",
      apiUrl: "https://www.paytr.com/odeme/api/get-token",
    });
    const paymentForm = paytr.createPaymentForm({
      merchant_id:342098,
      merchant_key:eCKt71YGSWR6gKSk,
      merchant_salt:Y9ByEeMMP1eUy12r,
      email:email,
      payment_amount:payment_amount,
      merchant_oid:merchant_oid,
      user_name:user_name,
      user_address:user_address,
      user_phone:user_phone,
      merchant_ok_url:merchant_ok_url,
      merchant_fail_url:merchant_fail_url,
      user_basket:user_basket,
      user_ip:user_ip,
      timeout_limit:timeout_limit,
      debug_on:debug_on,
      test_mode:test_mode,
      lang:lang,
      no_installment:0,
      max_installment:1,
      currency:currency,
      paytr_token:paytr_token,      
    });
    setPaymentForm(paymentForm);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: paymentForm }} />;
};

export default PayTRPayment;