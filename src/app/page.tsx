import { Button } from "@/components/ui/button";
import { GoogleLoginButton } from "@/components/google-login-button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto p-8  rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold">IronTrack</h1>
            <p className="mt-6">Welcome to your fully customizable lifting journal.</p>
          </div>

          <div className="text-center mt-20">
            <Button className="font-bold py-5 px-4 rounded">
              <Link href="/create-workout">
                Create Workout
              </Link>
            </Button>
            <GoogleLoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
