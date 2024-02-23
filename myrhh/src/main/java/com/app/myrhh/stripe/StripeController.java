package com.app.myrhh.stripe;



import java.util.HashMap;
import java.util.Map;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import com.google.gson.Gson;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;

@RestController
@RequestMapping(value = "/api/payment")
@Slf4j
public class StripeController {
    // create a Gson object
    private static Gson gson = new Gson();

    @PostMapping()
    /**
     * Payment with Stripe checkout page
     *
     * @throws StripeException
     */
//
    public String paymentWithCheckoutPage(@RequestBody CheckoutPayment payment) throws StripeException {
        System.out.println("\n\n\n\n     from strip ");
        // We initilize stripe object with the api key
        init();
        // We create a  stripe session parameters
        SessionCreateParams params = SessionCreateParams.builder()
                // We will use the credit card payment method
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT).setSuccessUrl(payment.getSuccessUrl())
                .setCancelUrl(payment.getCancelUrl())
                .addLineItem(
                        SessionCreateParams.LineItem.builder().setQuantity(1L)
                                .setPriceData(
                                        SessionCreateParams.LineItem.PriceData.builder()
                                                .setCurrency(payment.getCurrency()).setUnitAmount(100L)
                                                .setProductData(SessionCreateParams.LineItem.PriceData.ProductData
                                                        .builder().setName(payment.getName()).build())
                                                .build())
                                .build())
                .build();

        System.out.println("\n\n\n\n     from strip ");
        Session session = Session.create(params);
        Map<String, String> responseData = new HashMap<>();
        responseData.put("id", session.getId());
        return gson.toJson(responseData);
    }

    @PostMapping("/subscription")
    /**

     Used to create a subscription with strpe checkout page
     @param checkout
     @return the subscription id
     @throws StripeException
     */
    public String subscriptionWithCheckoutPage(@RequestBody Checkout checkout) throws StripeException {
        init();
        log.info(checkout.getPriceId());
        //String recurringPriceId = checkout.getRecurringPriceId();


        SessionCreateParams params = new SessionCreateParams.Builder().setSuccessUrl(checkout.getSuccessUrl())
                .setCancelUrl(checkout.getCancelUrl()).addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.SUBSCRIPTION).addLineItem(new SessionCreateParams.LineItem.Builder()
                        .setQuantity(1L).setPrice(checkout.getPriceId()).build())
                .build();
        try {
            Session session = Session.create(params);
            Map<String, Object> responseData = new HashMap<>();
            responseData.put("sessionId", session.getId());
            return gson.toJson(responseData);
        } catch (Exception e) {
            Map<String, Object> messageData = new HashMap<>();
            messageData.put("message", e.getMessage());
            Map<String, Object> responseData = new HashMap<>();
            responseData.put("error", messageData);
            return gson.toJson(responseData);
        }
    }


    private static void init() {
        Stripe.apiKey = "sk_test_51OfJo4KONGfFwiNubAibguP3Ql5QaeuQBFfPHTpJnhusD15PkK5DCF7vn0Yn1ZJ8fXEyXocaKVCc3bT5MKuG394A0055NwyckL";
    }
}