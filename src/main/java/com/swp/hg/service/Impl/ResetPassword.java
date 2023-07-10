package com.swp.hg.service.Impl;



import com.swp.hg.dto.ChangePassword;
import com.swp.hg.entity.PasswordResetToken;
import com.swp.hg.dto.RegistrationRequest;
import com.swp.hg.dto.ResponseStatus;
import com.swp.hg.email.EmailSender;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.service.UserService;
import com.swp.hg.validate.EmailValidator;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ResetPassword {

    private final UserService appUserService;
    private final EmailValidator emailValidator;
    private final EmailSender emailSender;
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final ConfirmationTokenResetPasswordService confirmationTokenResetPasswordService;
    private static BCryptPasswordEncoder passwordEcorder = new BCryptPasswordEncoder();

    public String reset(RegistrationRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());
        int user_id = userRepo.findByEmail(request.getEmail()).getId();
        String full_name = userRepo.findByEmail(request.getEmail()).getFullname();
        if (isValidEmail) {
            String tokenForUser = appUserService.createPasswordResetTokenForUser(user_id);
            String link = "http://localhost:8080/api/auth/confirm_reset_password?token=" + tokenForUser + "&user_id=" + user_id;
            emailSender.sendEmail(request.getEmail(), buildEmail(full_name + " This is reset password", link));
            return tokenForUser;
        } else {
            throw new IllegalStateException(String.format("Email %s, not valid", request.getEmail()));
        }
    }

    public String saveNewPassword(String password, int user_id) {
        try {
            User user = userRepo.findById(user_id).get();
            String encodedPassword = passwordEncoder.encode(password);
            user.setPassword(encodedPassword);
            userRepo.save(user);
            return "Your password is reset successfully. Thank you for using our service!";
        } catch (Exception ex) {
            return "Your password is reset failure. Thank you for using our service!";
        }
    }

    public Boolean doPasswordsMatch(String rawPassword, String encodedPassword) {
        return passwordEcorder.matches(rawPassword, encodedPassword);
    }

    public ResponseStatus changePassword(ChangePassword changePassword) {
        ResponseStatus responseStatus = new ResponseStatus();
        if (doPasswordsMatch(changePassword.getOld_password(), userRepo.findByUsername(changePassword.getUser_name()).get().getPassword())) {
            try {
                String encodedPassword = passwordEncoder.encode(changePassword.getNew_password());
                User user = userRepo.findUserByUsername(changePassword.getUser_name());
                user.setPassword(encodedPassword);
                userRepo.save(user);
                responseStatus.setState(true);
                responseStatus.setMessage("Change password successful");
                return responseStatus;
            } catch (Exception ex) {

            }
        }
        responseStatus.setState(false);
        responseStatus.setMessage("Change password failed");
        return responseStatus;
    }

    @Transactional
    public String confirmToken(String token, int user_id) {
        Optional<PasswordResetToken> confirmToken = confirmationTokenResetPasswordService.getToken(token);

        if (confirmToken.isEmpty()) {
            throw new IllegalStateException("Token not found!");
        }

        if (confirmToken.get().getConfirmedAt() != null) {
            throw new IllegalStateException("Email is already confirmed");
        }

        LocalDateTime expiresAt = confirmToken.get().getExpiresAt();

        if (expiresAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("Token is already expired!");
        }

        confirmationTokenResetPasswordService.setConfirmedAt(token);
        return "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"\n" +
                "        integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n" +
                "    \n" +
                "    <style>\n" +
                "       body {\n" +
                "\t    background-color: #eee!important;\n" +
                "\t   }\n" +
                "\n" +
                ".login {\n" +
                "    background-color: #fff;\n" +
                "    width: 40%;\n" +
                "    margin: 80px auto;\n" +
                "    border-radius: 10px;\n" +
                "    padding: 20px;\n" +
                "    border-left: 5px solid #009688;\n" +
                "    box-shadow: 0px 0px 0px 0px #3f51b5;\n" +
                "}\n" +
                "\n" +
                ".login>.row>h2 {\n" +
                "    margin: auto;\n" +
                "}\n" +
                "\n" +
                ".btn-form {\n" +
                "    width: 100%;\n" +
                "    margin-top: 20px;\n" +
                "}\n" +
                "    </style>\n" +
                "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js\"></script>\n" +
                "    <form action=\"http://localhost:8080/api/auth/save_new_password\" method=\"post\">\n" +
                "    <div class=\"container\">\n" +
                "        <div class=\"login\">\n" +
                "            <div class=\"row\">\n" +
                "                <h2>Reset password</h2>\n" +
                "                <div class=\"col-md-12\">\n" +
                "                    <label for=\"password\">New password</label>\n" +
                "                    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" >\n" +
                "                    <br>\n" +
                "                    <label for=\"password\">Retype password</label>\n" +
                "                    <input type=\"password\" class=\"form-control\" id=\"confirm_password\" name=\"confirm_password\">\n" +
                "                    <input type=\"hidden\" value=" + user_id + " name=\"user_id\" id=\"user_id\">\n" +
                "                    <span id='message'></span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"row\">\n" +
                "                <div class=\"col-md-6\">\n" +
                "                    <input type=\"submit\" id='savebtn'  disabled value=\"Reset\" class=\"btn btn-outline-success btn-form\">\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    </form>\n" +
                "    \n" +
                "<script>\n" +
                "$('#password, #confirm_password').on('keyup', function () {\n" +
                "  if ($('#password').val() == $('#confirm_password').val()) {\n" +
                "    if ($('#password').val().length != 0 && $('#confirm_password').val().length != 0) {\n" +
                "    $('#message').html('Matching').css('color', 'green');\n" +
                "    $(':input[type=\"submit\"]').prop('disabled', false);\n" +
                "    } " +
                "  } " +
                "else {\n" +
                "    $('#message').html('Not Matching').css('color', 'red');\n" +
                "    $(':input[type=\"submit\"]').prop('disabled', true);\n" +
                "  }\n" +
                "});\n" +
                "</script>";
    }

    private String buildEmail(String name, String link) {
        return "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"53\" bgcolor=\"#0b0c0c\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"#0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Confirm your email</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Hi " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> Thank you for using. Please click on the below link to reset your password: </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> <a href=\"" + link + "\">Reset Now</a> </p></blockquote>\n Link will expire in 15 minutes. <p>See you soon</p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>";
    }
}
