import React from 'react'
import Input from "@/components/input";
import Button from "@/components/button";

export default function PostForm() {
  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    alert('submited')
  }

  return (
    <form className="bg-white rounded-md shadow-xl p-5" onSubmit={onSubmit}>
      <h1 className="text-gray-800 font-bold text-2xl mb-4">
        Share your shot!
      </h1>
      <Input name="image" type="url" placeholder="Image URL" />
      <Input
        name="description"
        type="text"
        placeholder="What's on your mind?"
      />
      <Button type="submit">Publish!</Button>
    </form>
  );
}
