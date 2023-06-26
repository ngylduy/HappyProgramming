package com.swp.hg.controller;

import com.swp.hg.dto.ChangePassDTO;
import com.swp.hg.dto.LoginDTO;
import com.swp.hg.dto.UserDTO;
import com.swp.hg.response.ChangePassMessage;
import com.swp.hg.response.LoginMessage;
import com.swp.hg.response.RegisterMessage;
import com.swp.hg.response.UpdateMenteeMessage;
import com.swp.hg.service.ChangPassService;
import com.swp.hg.service.LoginService;
import com.swp.hg.service.RegisterService;
import com.swp.hg.service.UpdateMenteeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private RegisterService registerService;

    @Autowired
    private LoginService loginService;

    @Autowired
    private ChangPassService changPassService;

    @Autowired
    private UpdateMenteeService updateMenteeService;



    @PostMapping(path = "/save")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO){
        RegisterMessage registerMessage = registerService.addUser(userDTO);
        if (registerMessage.isSuccess()){
            return ResponseEntity.ok(registerMessage);
        }else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(registerMessage);
        }
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
        LoginMessage loginMessage = loginService.loginUser(loginDTO);
        if (loginMessage.isSuccess()){
            return ResponseEntity.ok(loginMessage);
        }else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(loginMessage);
        }
    }

    @PostMapping(path = "/change_pass")
    public ResponseEntity<ChangePassMessage> changePass(@RequestBody ChangePassDTO changePassDTO) {
        ChangePassMessage changePassMessage = changPassService.changePass(changePassDTO);
        if (changePassMessage.isSuccess()) {
            return ResponseEntity.ok(changePassMessage);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(changePassMessage);
        }
    }

    @PostMapping(path = "/update_proflie/{id}")
    public ResponseEntity<UpdateMenteeMessage> updatepMentee(@PathVariable int id,@RequestBody UserDTO userDTO) {
        UpdateMenteeMessage updateMenteeMessage = updateMenteeService.updatepMentee(userDTO, id);
        if (updateMenteeMessage.isSuccess()) {
            return ResponseEntity.ok(updateMenteeMessage);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(updateMenteeMessage);
        }
    }

}
