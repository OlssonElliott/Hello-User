package com.Hello_User.Hello_User;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Controller
public class ListMemberController {
public static List<Member> members = new ArrayList<>();
static{
    members.add(new Member("Elliott", "32", 1));
}
@GetMapping("/list")
public String getListpage(Model model) {
    model.addAttribute("members", members);
    return "list-members";
}

@GetMapping("/remove-member/{itemId}")
public String removeMember(@PathVariable int itemId) {
    members.removeIf(item -> item.getId() == itemId);
    return "redirect:/list";
}


}
