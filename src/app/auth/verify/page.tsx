import VerifyForm from "@/components/auth/verify/VerifyForm";


const Verify = () => {
  return <VerifyForm />
};

export default Verify;

export async function generateMetadata() {
  return {
    title: "Karteca - Verify Your Account",
    description: "Share & Earn money | Shop on Karteca",
  };
}
