


"use client";

import { useState } from "react";
import { create } from "@/actions/create";
import SingleImageUploader from "@/helpers/SingleImageUploader";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function BlogForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (file) {
      formData.append("file", file);
    }

    await create(formData);
  };

  return (
    <Card className="w-7/11 mx-auto mt-10 shadow-lg border rounded-2xl">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
           Publish a New Blog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              type="text"
              required
              placeholder="Enter blog title"
            />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              required
              placeholder="Write your content..."
              className="min-h-[120px]"
            />
          </div>

          {/* Tags */}
          <div className="space-y-1">
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              name="tags"
              type="text"
              placeholder="e.g. Next.js, React, Web Dev"
            />
          </div>

          {/* Featured */}
          <div className="flex items-center space-x-2">
            <Checkbox id="isFeatured" name="isFeatured" />
            <Label htmlFor="isFeatured">Mark as Featured</Label>
          </div>

          {/* Thumbnail */}
          <div className="space-y-1">
            <Label>Thumbnail</Label>
            <SingleImageUploader onChange={setFile} />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Publish Blog
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
