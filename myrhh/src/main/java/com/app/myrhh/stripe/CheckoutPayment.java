package com.app.myrhh.stripe;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CheckoutPayment {
    // the product name
    private String name;
    private String currency;
    private String successUrl;
    private String cancelUrl;
    private long amount ;
    private long quantity;
}