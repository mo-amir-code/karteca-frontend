import SignupForm from "@/components/auth/signup/SignupForm";

const Signup = () => {
  return <SignupForm />;
};

export default Signup;

export async function generateMetadata() {
  return {
    title: "Karteca - Signup you account",
    description: "Share & Earn money | Shop on Karteca",
  };
}
