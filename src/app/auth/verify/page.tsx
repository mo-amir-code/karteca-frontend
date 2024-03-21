import VerifyForm from "@/components/auth/verify/VerifyForm";


const Verify = () => {
  return <VerifyForm />
};

export default Verify;

export async function generateMetadata() {
  return {
    title: "PayKart - Verify Your Account",
    description: "Share & Earn money | Shop on PayKart",
  };
}
