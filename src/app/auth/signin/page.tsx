import SigninForm from "@/components/auth/signin/SiginForm";

const Signin = () => {
  return <SigninForm />;
};

export default Signin;

export async function generateMetadata() {
  return {
    title: "PayKart - Signin your account",
    description: "Share & Earn money | Shop on PayKart",
  };
}