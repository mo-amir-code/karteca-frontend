import ResetPasswordForm from "@/components/auth/reset-password/ResetPasswordForm"

const ResetPassword = () => {
  return <ResetPasswordForm />;
};

export default ResetPassword;

export async function generateMetadata() {
  return {
    title: "PayKart - Change Your Password",
    description: "Share & Earn money | Shop on PayKart",
  };
}
