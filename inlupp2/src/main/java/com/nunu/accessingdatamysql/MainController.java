package com.nunu.accessingdatamysql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // This means that this class is a Controller
@RequestMapping(path="/products") // This means URL's start with /demo (after Application path)

public class MainController {
    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private UserRepository userRepository;

    @GetMapping(path="/products/id")
    User one(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping(path="")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

    @PostMapping(path="") // Map ONLY POST Requests
    public @ResponseBody String addNewUser (
            @RequestParam String product_id,
            @RequestParam String name,
            @RequestParam Integer cost,
            @RequestParam String category  ) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        User n = new User();
        n.setProduct_id(product_id);
        n.setName(name);
        n.setCost(cost);
        n.setCat(category);

        userRepository.save(n);
        return "CREATED";
    }

    @PutMapping(path="/product_id")
    public User replaceEmployee(@RequestBody User n, @PathVariable Long id) {

        return userRepository.findById(id)
                .map(user -> {
                    user.setName(n.getName());
                    user.setCost(n.getCost());
                    return userRepository.save(user);
                })
                .orElseGet(() -> {
                    n.setId(id);
                    return userRepository.save(n);
                });
    }




}