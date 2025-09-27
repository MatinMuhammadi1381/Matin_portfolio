import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className=" py-24 px-4 relative">
      <div className=" container mx-auto max-w-5xl">
        <h2 className=" text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className=" text-primary"> درباره ی</span> من
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className=" space-y-6">
            <h3 className=" text-2xl font-semibold">
              برنامه نویس و وب دیزاینر , فرانت
            </h3>

            <p className=" text-muted-foreground">
              برنامه‌نویس رابط کاربری با بیش از چهار سال تجربه در طراحی و
              توسعه‌ی وب‌سایت‌های مدرن. در این مدت روی پروژه‌های متنوعی کار
              کرده‌ام و همیشه سعی کرده‌ام کارهایی زیبا، سریع و کاربرپسند ارائه
              دهم. علاقه‌ی زیادی به یادگیری مداوم و استفاده از فناوری‌های روز
              دارم و خودم را فردی سخت‌کوش و متعهد به نتیجه می‌دانم.
            </p>
            <p className=" text-muted-foreground">
              مهارت‌ها و زبان‌ها طراحی صفحات وب با اچ‌تی‌ام‌ال و سی‌اس‌اس
              برنامه‌نویسی با جاوااسکریپت و تایپ‌اسکریپت ساخت رابط کاربری با
              ری‌اکت طراحی مدرن با تِیلویند سی‌اس‌اس و متریال یوآی مدیریت حالت
              برنامه با رداکس کنترل نسخه با گیت و همکاری تیمی با گیت‌لب
            </p>

            <div className=" flex flex-col sm:flex-row gap-4 p-4 justify-center">
              <a href="#contacts" id="#contacts" className=" cosmic-button">
                تماس با من
              </a>
              <a
                href="./MatinMuhammadi.pdf"
                download="MatinMuhammadi.pdf"
                className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                دانلود رزومه
              </a>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-6">
            <div className=" gradient-border p-6 card-hover">
              <div className=" flex items-start gap-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <Code className=" h-6 w-6 text-primary" />
                </div>
                <div className=" text-right">
                  <h4 className=" font-semibold text-lg"> برنامه نویس وب</h4>
                  <p className=" text-muted-foreground">
                    برای من مهم است وب‌سایتی که می‌سازم هم ظاهر جذاب داشته باشد
                    و هم سریع و روان کار کند. همیشه سعی می‌کنم خودم را با
                    تازه‌ترین فناوری‌های وب به‌روز نگه دارم.
                  </p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover">
              <div className=" flex items-start gap-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <User className=" h-6 w-6 text-primary" />
                </div>
                <div className=" text-right">
                  <h4 className=" font-semibold text-lg">طراحی و دیزاین</h4>
                  <p className=" text-muted-foreground">
                    بهترین طراحی های به روز دنیا استفاده از المنت های زیبا و
                    جذاب طراحی مدرن
                  </p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover">
              <div className=" flex items-start gap-4">
                <div className=" p-3 rounded-full bg-primary/10">
                  <Briefcase className=" h-6 w-6 text-primary" />
                </div>
                <div className=" text-right">
                  <h4 className=" font-semibold text-lg"> سابقه کاری </h4>
                  <p className=" text-muted-foreground">
                    سابقه کاری به مدت چهار سال برنامه نویس وب با زبان های ریکت و
                    تیلویند سی اس اس طراحی بهترین سایت های تمرینی و دیزاین کامل
                    سایت ها
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
