import { resendClient,sender } from "../liv/resend.js"; 

import { createWelcomeEmailTemplate } from "./emailtamplets.js";
// const sender = {
//     name: "Chatify ",
//     email: "onboarding@resend.dev"
// };
export const sendwelcomeEmail = async (email, name,clienturl) => {
    const {data,error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: "swatantraj34@gmail.com",
        subject: "Welcome to Chatify",
        html: createWelcomeEmailTemplate(name,clienturl)    
        
    })
      if (error) {
        console.error("Error sending welcome email:", error);
      } else {
        console.log("Welcome email sent successfully:", data);
      }




};