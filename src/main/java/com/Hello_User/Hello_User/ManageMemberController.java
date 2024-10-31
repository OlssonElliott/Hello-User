package com.Hello_User.Hello_User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class ManageMemberController {

    //skickar ut html och konstruktor för att skapa ny medlem.
    @GetMapping("/membercontrol")
    public String getListpage(Model model) {
        Member newMember = new Member("", "", 0);
        model.addAttribute("newMember", newMember);
        return "manage-members";
    }

    //tar in parametrar för att skapa ny medlem och lägger till ny medlem i lista.
    @PostMapping("/new-member")
    public String postMethodName(@RequestParam("name") String name, @RequestParam("age") String age) {
        ListMemberController.members.add(new Member(name, age, ListMemberController.members.size() + 1));
        return "redirect:/membercontrol";
    }

}
