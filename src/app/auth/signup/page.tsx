import SignupForm from "@/components/signup/SignupForm";

const Signup = () => {
  return <SignupForm />;
};

export default Signup;

export async function generateMetadata() {
  return {
    title: "PayKart - Signup you account",
    description: "Share & Earn money | Shop on PayKart",
  };
}
