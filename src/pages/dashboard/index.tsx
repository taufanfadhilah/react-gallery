import Navbar from "@/components/navbar";
import PostForm from "./PostForm";
import PostTimeline from "./PostTimeline";

export default function index() {
  return (
    <>
      <Navbar />
      <div className="mt-8 mx-auto max-w-lg">
        <PostForm />
        <PostTimeline />
      </div>
    </>
  );
}
