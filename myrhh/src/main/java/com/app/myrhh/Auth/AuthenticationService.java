package com.app.myrhh.Auth;

import com.app.myrhh.agent.Agent;
import com.app.myrhh.agent.AgentService;
import com.app.myrhh.company.Company;
import com.app.myrhh.company.CompanyService;
import com.app.myrhh.config.JwtService;
import com.app.myrhh.recruiter.Recruiter;
import com.app.myrhh.recruiter.RecruiterService;
import com.app.myrhh.utils.Role;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final CompanyService companyService;
    private final AgentService agentService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(Company registerRequest) {
        Company company = new Company();
        company.setName(registerRequest.getName());
        company.setEmail(registerRequest.getEmail());
        company.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        company.setAddress(registerRequest.getAddress());
        company.setPhone(registerRequest.getPhone());
        company.setLogo(registerRequest.getLogo());
        company.setCity(registerRequest.getCity());
        company.setRole(Role.COMPANY);
        companyService.save(company);
        var token = jwtService.generateToken(company);
        return AuthenticationResponse.builder().token(token).build();
    }

    public AuthenticationResponse registerAgent(Agent registerRequest) {
        Agent agent = new Agent();
        agent.setFullName(registerRequest.getFullName());
        agent.setEmail(registerRequest.getEmail());
        agent.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        agent.setRole(Role.AGENT);
        agentService.save(agent);
        var token = jwtService.generateToken(agent);

        return AuthenticationResponse.builder().token(token).agent(agent).build();
    }
    public AuthenticationResponse authenticate(AuthenticationRequest authRequest) {


        if (!authRequest.getEmail().startsWith("agent")) {
            try{
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                authRequest.getEmail(),
                                authRequest.getPassword()
                        )
                );
            }catch (Exception e){
                throw new RuntimeException(e.getMessage());
            }
            Company company = companyService.findByEmail(authRequest.getEmail());
            company.setAuthorities(company.getRole().toString());
            var token = jwtService.generateToken(company);
            // build token and get company by email
            return AuthenticationResponse.builder().token(token).company(company).build();
        }else {
            Agent agent = agentService.findByEmail(authRequest.getEmail());
            agent.setAuthorities(agent.getRole().toString());
            var token = jwtService.generateToken(agent);
            return AuthenticationResponse.builder().token(token).agent(agent).build();
        }
    }




//    }
}
