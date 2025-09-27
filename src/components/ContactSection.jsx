import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Truck,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "ارسال شد",
        description: "پیام شما با موفقیت ارسال شد",
        type: "success",
      });
    }, 1500);

    setIsSubmitting(false);
  };
  return (
    <section id="contacts" className=" py-24 px-4 relative bg-secondary/30">
      <div className=" container mx-auto max-w-5xl">
        <h2 className=" text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className=" text-primary">ارتباط</span> با من
        </h2>

        <p className=" text-center text-mued-foreground mb-12 max-w-2xl mx-auto">
          برای ارتباط با من ایمیل یا از شبکه های اجتماعی پیام بدین منتظر پروژه
          های شما هستم برای اطلاعات بیشتر پیام بدین
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className=" space-y-8">
            <h3 className=" text-2xl font-semibold mb-6">اطلاعات تماس</h3>
            <div className=" space-y-6 justify-center">
              <div className=" flex items-start space-x-4">
                <div className=" p-3 rounded-full bg-primary/20">
                  <Mail className=" h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className=" font-medium text-left">Email</h4>
                  <a
                    href="mailto:matin.muhammadi.2001@gmail.com"
                    className=" text-muted-foreground hover:text-primary transition-colors"
                  >
                    Matin.Muhammadi.2001@gmail.com
                  </a>
                </div>
              </div>
              <div className=" flex items-start space-x-4">
                <div className=" p-3 rounded-full bg-primary/20">
                  <Phone className=" h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className=" font-medium text-left">Phone</h4>
                  <a
                    href="tel:+989038049915"
                    className=" text-muted-foreground hover:text-primary transition-colors"
                  >
                    +98 09038049915
                  </a>
                </div>
              </div>
              <div className=" flex items-start space-x-4">
                <div className=" p-3 rounded-full bg-primary/20">
                  <MapPin className=" h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className=" font-medium text-left">Location</h4>
                  <a className=" text-muted-foreground hover:text-primary transition-colors">
                    sanandaj, Iran
                  </a>
                </div>
              </div>
            </div>

            <div className=" pt-8">
              <h4 className=" font-medium mb-4">شبکه های اجتماعی</h4>
              <div className=" flex space-x-4 justify-center">
                <a target="_blank" href="#">
                  <Linkedin />
                </a>
                <a target="_blank" href="https://instagram.com/matin_m.2001">
                  <Instagram />
                </a>
                <a target="_blank" href="#">
                  <Twitter />
                </a>
                <a target="_blank" href="https://github.com/MatinMuhammadi1381">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div
            className=" bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className=" text-2xl font-semibold mb-6">تماس از طریق ایمیل</h3>

            <form action="" className=" space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className=" text-right text-xl block font-medium mb-2"
                >
                  {" "}
                  اسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className=" text-right w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="....نام خود را وارد کنید"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className=" text-right text-xl block font-medium mb-2"
                >
                  {" "}
                  ایمیل شما
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className=" text-right w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="....ایمیل خود را وارد کنید"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className=" text-right text-xl block font-medium mb-2"
                >
                  {" "}
                  پیام شما
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className=" resize-none text-right w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="....پیام شما"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "...در حال ارسال" : "ارسال"}
                <Send size={25} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
