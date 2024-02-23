package com.app.myrhh.Auth;

import com.app.myrhh.agent.Agent;
import com.app.myrhh.company.Company;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;
    private Company company;

    private Agent agent;
}
