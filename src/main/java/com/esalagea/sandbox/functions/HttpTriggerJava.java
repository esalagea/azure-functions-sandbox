package com.esalagea.sandbox.functions;

import java.util.*;
import com.microsoft.azure.functions.annotation.*;
import com.microsoft.azure.functions.*;

/**
 * Azure Functions with HTTP Trigger.
 */
public class HttpTriggerJava {
    /**
     * This function listens at endpoint "/api/HttpTriggerJava". Two ways to invoke it using "curl" command in bash:
     * 1. curl -d "HTTP Body" {your host}/api/HttpTriggerJava
     * 2. curl {your host}/api/HttpTriggerJava?name=HTTP%20Query
     */
    @FunctionName("HttpTriggerJava")
    public HttpResponseMessage run(
            @HttpTrigger(name = "req", methods = {HttpMethod.GET, HttpMethod.POST}, authLevel = AuthorizationLevel.FUNCTION) HttpRequestMessage<Optional<String>> request,
            final ExecutionContext context) {
        context.getLogger().info("Java HTTP trigger processed a request.");

        // Parse query parameter
//        String query = request.getQueryParameters().get("name");
//        String name = request.getBody().orElse(query);

        String character = request.getQueryParameters().get("character");
        String location = request.getQueryParameters().get("location");


        if (character == null) {
            return request.createResponseBuilder(HttpStatus.BAD_REQUEST).body("Please choose a character").build();
        } else {
            return request.createResponseBuilder(HttpStatus.OK).body("Here is a story about a " + character + " in a " + location).build();
        }
    }
}
