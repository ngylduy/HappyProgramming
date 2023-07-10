package com.swp.hg;

import com.swp.hg.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class HappyProgrmmingApplication {
    public static void main(String[] args) {
        SpringApplication.run(HappyProgrmmingApplication.class, args);
    }
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

//    @Bean
//    CommandLineRunner run(UserService service){
//        return args -> {
//            service.saveUser(new User(
//                    0, "duynl", "123",
//                    "Nguyen Luong Duy", true, "0323456789", "nlduy.it@gmail.com",
//                    new Date(2002, 03, 18), "HCM", new HashSet<>()));
//            service.addRoleToUser("admin","USER_ADMIN");
//
//        };
//    }

}
