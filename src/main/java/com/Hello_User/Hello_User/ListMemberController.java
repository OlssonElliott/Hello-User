package com.Hello_User.Hello_User;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ListMemberController {
public static List<Member> members = new ArrayList<>();
static{
    members.add(new Member("Elliott", "32"));
}
@GetMapping("/list")
public String getListpage(Model model) {
    model.addAttribute("members", members);
    return "list-members";
}


}
