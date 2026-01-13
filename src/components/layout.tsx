import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3">
        <div className="container mx-auto px-2 text-center text-gray-200">
          <p>Made by dilip</p>
        </div>
      </footer>
    </div>
  );
}