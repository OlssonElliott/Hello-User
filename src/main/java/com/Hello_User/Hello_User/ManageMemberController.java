package com.Hello_User.Hello_User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class ManageMemberController {

    @GetMapping("/membercontrol")
public String getListpage(Model model) {
    Member newMember = new Member("", "");
    model.addAttribute("newMember", newMember);
    return "manage-members";
}

@PostMapping("/new-member")
public String postMethodName(@RequestParam("name") String name, @RequestParam("age") String age) {
    ListMemberController.members.add(new Member(name, age));
    return "redirect:/membercontrol";
}

}
