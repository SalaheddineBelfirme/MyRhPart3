package com.app.myrhh.agent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgentService {

    private final AgentRepository agentRepository;

    @Autowired
    public AgentService(AgentRepository agentRepository) {
        this.agentRepository = agentRepository;
    }

    public Agent save(Agent agent){
        return agentRepository.save(agent);
    }

    public Agent findByEmail(String email){
        return agentRepository.findByEmail(email);
    }
}
