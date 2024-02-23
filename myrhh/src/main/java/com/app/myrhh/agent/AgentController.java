package com.app.myrhh.agent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/agent")
public class AgentController {

    private final AgentService agentService;

    @Autowired
    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }

    public Agent save(Agent agent){
        return agentService.save(agent);
    }

    public Agent findByEmail(String email){
        return agentService.findByEmail(email);
    }
}

