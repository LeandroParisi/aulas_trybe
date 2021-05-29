import smtplib
import ssl


# class User:
#     def __init__(self, name, email, password, from_email, from_password):
#         self.name = name
#         self.email = email
#         self.password = password
#         self.from_email = from_email
#         self.from_password = from_password

#     def reset_password(self):
#         """Só com isso a função não irá funcionar! O email em
#         questão não existe e pode ser necessário configurar
#         algo no servidor de emails para o envio ocorrer. Se
#         quiser, explore isso como exercício bônus! Por hora,
#         basta entender a lógica aqui!"""

#         subject = "Reset your password"
#         message = "Instruções para resetar a senha, com o link de resetar"
#         body = f"Subject:{subject}\n\n{message}"
#         context = ssl.create_default_context()
#         with smtplib.SMTP_SSL(
#             "smtp.gmail.com", 465, context=context
#         ) as server:
#             server.login(self.from_email, self.from_password)
#             try:
#                 server.sendmail(self.from_email, self.to_email, body)
#             except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
#                 raise ValueError


# meu_user = User(
#     "Valentino Trocatapa",
#     "valentino@tinytoons.com",
#     "Grana",
#     "password_reset@teste.com",
#     "myverysafepassword",
# )
# meu_user.reset_password()


# Lembre-se do primeiro pilar de POO, a Abstração ! Se uma lógica parece não pertencer a uma entidade, extraia-a para uma outra entidade, ou para uma entidade nova! Sempre comece por aí para organizar o seu código. No nosso caso, que tal criamos um enviador de emails? O nome faz sentido, não faz? O nome mais literal possível que podemos dar para uma entidade que envia emails é Enviador de Emails . Em inglês, Mailer . Então é esse o nome que daremos. Bom!


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        meu_mailer = Mailer(
            "password_reset@teste.com", "myverysafepassword", self.email
        )
        meu_mailer.send_email(
            "Reset your password",
            "Instruções para resetar a senha, com o link de resetar",
        )


class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def send_email(self, subject, message):
        body = f"Subject:{subject}\n\n{message}"
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
meu_user.reset_password()
