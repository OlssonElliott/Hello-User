package com.Hello_User.Hello_User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ManageMemberController {

    @GetMapping("/membercontrol")
public String getListpage() {
    return "manage-members";
}
}
