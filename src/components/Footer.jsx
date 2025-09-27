import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className=" text-sm text-muted-foreground ">
        {" "}
        &copy; {new Date().getFullYear()} MatinMuhammadi.co. All Rights Reserve.
      </p>

      <a href="#hero"
        id="#hero"
        className=" p-2 rounded-full bg-primary/20 hover:bg-primary/30 text text-primary transition-colors "
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
