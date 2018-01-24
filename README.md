# Password Strength Indicator

Assignment from The Iron Yard-Austin

Week 9 - day 36

Create a program that determines the complexity of a given password based on these rules:
* A very weak password contains only numbers ​*and*​ is fewer than eight characters.
* A weak password contains only letters ​*and*​ is fewer than eight characters.
* A strong password contains letters ​*and*​ at least one number ​*and*​ is at least eight characters.
* A very strong password contains letters, numbers, and special characters ​*and*​ is at least eight characters.

![password-app-screenshot](https://www.dropbox.com/s/4kp3t2qwzplsvyo/Screenshot%202018-01-23%2022.31.15.png?dl=0)

### ​Example Output​

```
The password '12345' is a very weak password.
The password 'abcef' is a weak password.
The password 'abc123xyz' is a strong password.
The password '1337h@xor!' is a very strong password.
```

### Constraints

* Create a ​_passwordValidator_​ function that takes in the password as its argument and returns a value you can evaluate to determine the password strength. Do not have the function return a string-you may need to support multiple languages in the future.
* Use a single output statement.

### Challenge

* Create a GUI application or web application that displays graphical feedback as well as text feedback in real time. As someone enters a password, determine its strength and display the result.
