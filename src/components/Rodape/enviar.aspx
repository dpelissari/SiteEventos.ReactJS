<%@ Page Language="C#" AutoEventWireup="true" %>


<%@ Import Namespace="System.Net.Mail" %>

<%

// obtendo os valores preenchidos no formulário
string nome = Request.Form["nome"];
string email = Request.Form["email"];
string telefone = Request.Form["telefone"];
string mensagem = Request.Form["mensagem"];
string validador = Request.Form["validador"];

// de e para
string de = "contato@agripoint.com.br";
string para = "atendimento@agripoint.com.br";

string corpo = "<h4>Contato site institucional AgriPoint</h4>";
corpo += "<p>Nome: " + nome + "</p>";
corpo += "<p>E-mail: " + email + "</p>";
corpo += "<p>Telefone: " + telefone + "</p>";
corpo += "<p>Mensagem: " + mensagem + "</p>";

if (validador == "@pessoa")
{
    SmtpClient smtp = new SmtpClient();
    MailMessage msg = new MailMessage();

    msg.From = new MailAddress(de, nome);
    msg.To.Add(para);
    msg.Subject = "Contato site institucional AgriPoint";
    msg.Body = corpo;
    msg.IsBodyHtml = true;
    msg.Priority = MailPriority.Normal;
    msg.Headers.Add("Message-Id", String.Concat("<", DateTime.Now.ToString("yyMMdd"), ".", DateTime.Now.ToString("HHmmss"), "@gmail.com>"));

    smtp.UseDefaultCredentials = true;
    smtp.Host = "localhost";
    smtp.Timeout = 20000;
    smtp.Send(msg);

    Response.Write("<script type=\"text/javascript\">alert('Sua mensagem foi enviada com sucesso! Em breve retornaremos o seu contato. Obrigado!');</script>");
    Response.Write("<script type=\"text/javascript\">window.location='http://www.agripoint.com.br/institucional';</script>");

}

%>