import ForgotPasswordForm from "@/components/auth/forgot-password/ForgotPasswordForm"


const ForgotPassword = () => {
    return <ForgotPasswordForm />
}

export default ForgotPassword

export async function generateMetadata() {
    return {
      title: "PayKart - Reset Your Password",
      description: "Share & Earn money | Shop on PayKart",
    };
  }
