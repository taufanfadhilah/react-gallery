import Navbar from "@/components/navbar";
import PostForm from './PostForm'

export default function index() {
  return (
    <>
      <Navbar />
      <div className="mt-20 mx-auto max-w-lg">
        <PostForm />        
      </div>
    </>
  );
}
