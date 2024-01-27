import React from "react";
import { Routes, Route } from "react-router-dom";

import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Explore } from "./_root/pages";
import { Saved } from "./_root/pages";
import { AllUsers } from "./_root/pages";
import { CreatePost } from "./_root/pages";
import { EditPost } from "./_root/pages";
import { PostDetails } from "./_root/pages";
import { Profile } from "./_root/pages";
import { UpdateProfile } from "./_root/pages";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*📢📢 Public routes 📢📢*/}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/*🔏🔏 Private routes  🔏🔏*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
