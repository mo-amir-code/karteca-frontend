import ForgotPasswordForm from "@/components/auth/forgot-password/ForgotPasswordForm"


const ForgotPassword = () => {
    return <ForgotPasswordForm />
}

export default ForgotPassword

export async function generateMetadata() {
    return {
      title: "Karteca - Reset Your Password",
      description: "Share & Earn money | Shop on Karteca",
    };
  }
